// src/components/InventoryModule.jsx

import React, { useState, useEffect } from "react";
// Import the new functions from dataService.js
import {
  fetchInventory,
  createInventory,
  updateInventory,
  deleteInventory,
  fetchProducts,
} from "../services/dataService";

// --- Initial Inventory State ---
const initialInventoryState = {
  product_id: "",
  stock_quantity: 0,
  reorder_level: 0,
  max_stock_level: "", // Use empty string for optional number input
};

function InventoryModule({ onBack }) {
  const [inventoryRecords, setInventoryRecords] = useState([]);
  const [products, setProducts] = useState([]); // All products fetched
  const [availableProducts, setAvailableProducts] = useState([]); // Products that do NOT yet have an inventory record
  const [formData, setFormData] = useState(initialInventoryState);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  // Helper function to find a product name by ID
  const getProductName = (productId) => {
    // The product_id field on inventory records is now populated by the backend
    return productId.product_name || "Unknown Product";
  };

  // Helper function to manage which products are available for NEW inventory records
  const updateAvailableProducts = (allProducts, currentInventory) => {
    // Get IDs of products that already have an inventory record (use the populated _id)
    const productIdsWithInventory = new Set(
      currentInventory.map((inv) => inv.product_id._id)
    );

    // Filter products that do NOT have an inventory record
    const productsWithoutInventory = allProducts.filter(
      (p) => !productIdsWithInventory.has(p._id)
    );
    setAvailableProducts(productsWithoutInventory);
  };

  // Fetch data on load
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      // fetchInventory now returns records with populated product_id thanks to the backend update
      const [inventoryData, productData] = await Promise.all([
        fetchInventory(),
        fetchProducts(), // Fetches ALL products to check availability
      ]);

      setInventoryRecords(inventoryData);
      setProducts(productData);
      updateAvailableProducts(productData, inventoryData);
    } catch (err) {
      setError(
        `Failed to fetch data: ${err.message}. Check your API connection.`
      );
    } finally {
      setLoading(false);
    }
  };

  // --- Form Handlers ---

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    let newValue = value;

    // Convert number types for storage/submission, use null if empty for max_stock_level
    if (type === "number") {
      newValue = value === "" ? "" : Number(value); // Keep empty string for optional inputs
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleEdit = (record) => {
    setEditingId(record._id);

    // Deep copy and normalize the data for the form
    const normalizedData = {
      ...record,
      // Use the raw _id for the product_id field, as the API expects the raw ID
      product_id: record.product_id._id,
      stock_quantity: record.stock_quantity,
      reorder_level: record.reorder_level,
      // Use empty string if max_stock_level is null for the input field value
      max_stock_level:
        record.max_stock_level === null ? "" : record.max_stock_level,
    };

    setFormData(normalizedData);
    setMessage(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialInventoryState);
    setMessage(null);
    setError(null);
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to permanently delete this inventory record?"
      )
    )
      return;
    try {
      await deleteInventory(id);
      setMessage("Inventory record deleted successfully.");
      fetchData(); // Refresh data
    } catch (err) {
      setError(`Deletion failed: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Prepare data: convert max_stock_level back to null if empty string
    const dataToSend = { ...formData };
    if (dataToSend.max_stock_level === "") {
      dataToSend.max_stock_level = null;
    }
    // Ensure numbers are sent as numbers
    dataToSend.stock_quantity = Number(dataToSend.stock_quantity);
    dataToSend.reorder_level = Number(dataToSend.reorder_level);

    try {
      if (editingId) {
        // We only send stock/level updates for PUT, not product_id
        await updateInventory(editingId, dataToSend);
        setMessage(`Inventory record ID ${editingId} updated successfully.`);
      } else {
        await createInventory(dataToSend);
        setMessage("Inventory record created successfully.");
      }

      handleCancel();
      fetchData(); // Refresh data
    } catch (err) {
      setError(`Operation failed: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  // --- Render Functions ---

  const renderForm = () => (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        marginBottom: "30px",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h3>
        {editingId ? "Edit Inventory Record" : "Create New Inventory Record"}
      </h3>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
        {/* Product ID Selection (Disabled when editing) */}
        <select
          name="product_id"
          value={formData.product_id}
          onChange={handleChange}
          required
          disabled={!!editingId} // Cannot change product_id on edit (1:1 relationship)
          style={{
            padding: "8px",
            backgroundColor: editingId ? "#eee" : "white",
          }}
        >
          <option value="">Select Product (Required)</option>
          {/* If editing, show the current product as a disabled option */}
          {editingId && (
            <option key={formData.product_id} value={formData.product_id}>
              (Current){" "}
              {getProductName(
                inventoryRecords.find((r) => r._id === editingId)
              )}
            </option>
          )}

          {/* Show only products that don't have an inventory record yet */}
          {availableProducts.map((p) => (
            <option key={p._id} value={p._id}>
              {p.product_name}
            </option>
          ))}
        </select>

        {/* Quantity and Levels */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <input
            name="stock_quantity"
            type="number"
            placeholder="Stock Quantity (Required)"
            value={formData.stock_quantity}
            onChange={handleChange}
            required
            min="0"
            style={{ padding: "8px" }}
          />
          <input
            name="reorder_level"
            type="number"
            placeholder="Reorder Level (Required)"
            value={formData.reorder_level}
            onChange={handleChange}
            required
            min="0"
            style={{ padding: "8px" }}
          />
          <input
            name="max_stock_level"
            type="number"
            placeholder="Max Stock Level (Optional)"
            value={formData.max_stock_level}
            onChange={handleChange}
            min="0"
            style={{ padding: "8px" }}
          />
        </div>

        {/* Actions */}
        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <button
            type="submit"
            // Disable if loading OR if creating a new record without selecting a product
            disabled={loading || (!editingId && !formData.product_id)}
            style={{
              padding: "10px 15px",
              backgroundColor: editingId ? "#ffc107" : "#007bff",
              color: editingId ? "#333" : "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              flexGrow: 1,
            }}
          >
            {loading
              ? "Processing..."
              : editingId
              ? "Update Record"
              : "Create Record"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={handleCancel}
              disabled={loading}
              style={{
                padding: "10px 15px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );

  const renderTable = () => (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#28a745", color: "white" }}>
          <th style={{ padding: "10px", textAlign: "left" }}>Product Name</th>
          <th style={{ padding: "10px", textAlign: "right" }}>Stock</th>
          <th style={{ padding: "10px", textAlign: "right" }}>Reorder Level</th>
          <th style={{ padding: "10px", textAlign: "right" }}>Max Stock</th>
          <th style={{ padding: "10px", textAlign: "left" }}>ID</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventoryRecords.map((record) => {
          const isLowStock = record.stock_quantity <= record.reorder_level;
          const isOverStock =
            record.max_stock_level !== null &&
            record.stock_quantity > record.max_stock_level;
          // Use the helper to get the name from the populated product_id object
          const product_name = getProductName(record.product_id);

          return (
            <tr
              key={record._id}
              style={{
                borderBottom: "1px solid #eee",
                backgroundColor: isLowStock
                  ? "#ffe0e0"
                  : isOverStock
                  ? "#ffffe0"
                  : "white", // Highlight low stock in red/yellow
              }}
            >
              <td style={{ padding: "10px" }}>
                <strong>{product_name}</strong>
                {isLowStock && (
                  <span
                    style={{
                      color: "red",
                      marginLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    (LOW STOCK!)
                  </span>
                )}
                {isOverStock && !isLowStock && (
                  <span
                    style={{
                      color: "#c49a00",
                      marginLeft: "10px",
                      fontWeight: "bold",
                    }}
                  >
                    {" "}
                    (OVER STOCK)
                  </span>
                )}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {record.stock_quantity}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {record.reorder_level}
              </td>
              <td style={{ padding: "10px", textAlign: "right" }}>
                {record.max_stock_level === null
                  ? "N/A"
                  : record.max_stock_level}
              </td>
              <td style={{ padding: "10px", fontSize: "0.8em", color: "#666" }}>
                {record._id}
              </td>
              <td style={{ padding: "10px" }}>
                <button
                  onClick={() => handleEdit(record)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#ffc107",
                    color: "#333",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "5px",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(record._id)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Inventory Management</h2>
      {/* Back to Dashboard and Refresh buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={onBack}
          style={{
            padding: "8px 15px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          disabled={loading}
        >
          ← Back to Dashboard
        </button>
        <button
          onClick={fetchData}
          style={{ padding: "8px 15px" }}
          disabled={loading}
        >
          Refresh Data
        </button>
      </div>

      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>✅ {message}</p>
      )}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>🛑 {error}</p>}

      {renderForm()}
      {loading && <p>Loading inventory data...</p>}

      <h3>Current Inventory Records ({inventoryRecords.length})</h3>
      {inventoryRecords.length > 0 && renderTable()}
      {inventoryRecords.length === 0 && !loading && (
        <p>No inventory records found. Start by creating one above.</p>
      )}
    </div>
  );
}

export default InventoryModule;
