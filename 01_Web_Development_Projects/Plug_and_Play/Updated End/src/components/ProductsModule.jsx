// src/components/ProductsModule.jsx

import React, { useState, useEffect } from "react";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  fetchCategories,
  fetchSuppliers,
} from "../services/dataService"; // Ensure these functions are imported

// Assuming the API base URL is available in your Vite environment
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL.replace("/api", "");

// --- Initial Product State ---
const initialProductState = {
  product_name: "",
  description: "",
  category_id: "",
  supplier_id: "",
  unit_price: "",
  cost_price: "",
  is_active: true,
  brand: "",
  model: "",
  specs: {}, // Object for specs
  tags: [], // Array for tags
  // image_url is managed by the backend, no need here
};

// --- Main Component ---
// 💡 MODIFIED: Accept onBack prop
function ProductsModule({ onBack }) {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState(initialProductState);
  const [imageFile, setImageFile] = useState(null); // 👈 NEW STATE for file
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [suppliers, setSuppliers] = useState([]);

  // Fetch data on load
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const [productData, categoryData, supplierData] = await Promise.all([
        fetchProducts(),
        fetchCategories(),
        fetchSuppliers(),
      ]);

      setProducts(productData);
      setCategories(categoryData);
      setSuppliers(supplierData);
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
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSpecsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      specs: {
        ...prev.specs,
        [name]: value,
      },
    }));
  };

  const handleTagsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      tags: e.target.value.split(",").map((tag) => tag.trim()),
    }));
  };

  // 💡 NEW: Handler for file input
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0] || null);
  };

  const handleRemoveImage = () => {
    setImageFile(null); // Clear the file input state
    // If editing, we mark the current product's image URL for removal
    if (editingId) {
      setFormData((prev) => ({
        ...prev,
        image_url: null, // Clear the preview
        remove_image: true, // Send a flag to the backend
      }));
    }
  };

  const handleEdit = (product) => {
    setEditingId(product._id);

    // Deep copy and normalize the data for the form
    const normalizedData = {
      ...product,
      // Convert ObjectId fields back to string for input value
      category_id: product.category_id?._id || product.category_id || "",
      supplier_id: product.supplier_id?._id || product.supplier_id || "",
      // Convert arrays back to string for input value
      tags: Array.isArray(product.tags) ? product.tags.join(", ") : "",
      // Ensure prices are numbers/strings
      unit_price: String(product.unit_price || ""),
      cost_price: String(product.cost_price || ""),
      // Image URL exists on the product for preview
      image_url: product.image_url || null,
    };

    setFormData(normalizedData);
    setImageFile(null); // Clear any potentially pending file upload
    setMessage(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData(initialProductState);
    setImageFile(null);
    setMessage(null);
    setError(null);
  };

  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to delete (soft delete) this product?"
      )
    )
      return;
    try {
      await deleteProduct(id);
      setMessage("Product deleted successfully (soft delete).");
      fetchData();
    } catch (err) {
      setError(`Deletion failed: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // Clean up formData before sending: remove empty or unwanted keys
    const dataToSend = {};
    for (const key in formData) {
      const value = formData[key];
      // Do not send the image_url field itself
      if (key !== "image_url") {
        dataToSend[key] = value;
      }
    }

    // For update, send the 'remove_image' flag if it was set
    if (editingId && dataToSend.remove_image) {
      dataToSend.remove_image = String(dataToSend.remove_image); // FormData expects strings
    } else {
      delete dataToSend.remove_image; // Otherwise, remove the flag
    }

    try {
      if (editingId) {
        // Pass the file as the second argument
        await updateProduct(editingId, dataToSend, imageFile);
        setMessage(`Product ID ${editingId} updated successfully.`);
      } else {
        // Pass the file as the second argument
        await createProduct(dataToSend, imageFile);
        setMessage("Product created successfully.");
      }

      handleCancel();
      fetchData();
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
      <h3>{editingId ? "Edit Product" : "Create New Product"}</h3>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
        {/* Row 1: Name, Price, Cost */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "10px",
          }}
        >
          <input
            name="product_name"
            placeholder="Product Name (Required)"
            value={formData.product_name}
            onChange={handleChange}
            required
            style={{ padding: "8px" }}
          />
          <input
            name="unit_price"
            type="number"
            placeholder="Unit Price (Required)"
            value={formData.unit_price}
            onChange={handleChange}
            required
            style={{ padding: "8px" }}
          />
          <input
            name="cost_price"
            type="number"
            placeholder="Cost Price"
            value={formData.cost_price}
            onChange={handleChange}
            style={{ padding: "8px" }}
          />
        </div>

        {/* Row 2: Category, Supplier */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <select
            name="category_id"
            value={formData.category_id}
            onChange={handleChange}
            style={{ padding: "8px" }}
          >
            <option value="">Select Category</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.category_name}
              </option>
            ))}
          </select>

          <select
            name="supplier_id"
            value={formData.supplier_id}
            onChange={handleChange}
            style={{ padding: "8px" }}
          >
            <option value="">Select Supplier</option>
            {suppliers.map((s) => (
              <option key={s._id} value={s._id}>
                {s.supplier_name}
              </option>
            ))}
          </select>
        </div>

        {/* Row 3: Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          style={{ padding: "8px", resize: "vertical" }}
        />

        {/* Row 4: Brand, Model */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <input
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            style={{ padding: "8px" }}
          />
          <input
            name="model"
            placeholder="Model"
            value={formData.model}
            onChange={handleChange}
            style={{ padding: "8px" }}
          />
        </div>

        {/* Row 5: Tags, Is Active */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "3fr 1fr",
            gap: "10px",
          }}
        >
          <input
            name="tags"
            placeholder="Tags (comma separated: tag1, tag2, ...)"
            value={formData.tags}
            onChange={handleTagsChange}
            style={{ padding: "8px" }}
          />
          <label
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: "5px",
            }}
          >
            <input
              name="is_active"
              type="checkbox"
              checked={formData.is_active}
              onChange={handleChange}
              style={{ marginRight: "5px" }}
            />
            Is Active
          </label>
        </div>

        {/* Row 6: Image Upload/Preview */}
        <div style={{ border: "1px dashed #ddd", padding: "10px" }}>
          <label
            style={{
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Product Image:
          </label>
          <input
            type="file"
            name="product_image" // 💡 CHANGED NAME to match Multer (product_image)
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "block", marginBottom: "10px" }}
          />

          {(imageFile || formData.image_url) && (
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <p style={{ margin: 0 }}>
                {imageFile
                  ? `File selected: ${imageFile.name}`
                  : `Current Image: ${formData.image_url.split("/").pop()}`}
              </p>

              {/* Image Preview (Only shows if a URL or a file is selected) */}
              {(imageFile || formData.image_url) && (
                <img
                  // Use the temporary blob URL for new file preview, or the saved URL for existing
                  src={
                    imageFile
                      ? URL.createObjectURL(imageFile)
                      : `${API_BASE_URL}${formData.image_url}`
                  }
                  alt="Product Preview"
                  style={{
                    maxWidth: "100px",
                    maxHeight: "100px",
                    objectFit: "cover",
                    border: "1px solid #ddd",
                  }}
                />
              )}

              {/* Button to remove image or clear selection */}
              <button
                type="button"
                onClick={handleRemoveImage}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {imageFile ? "Clear Selection" : "Remove Image"}
              </button>
            </div>
          )}
        </div>

        {/* Row 7: Specs (Basic Example) */}
        <div
          style={{
            border: "1px solid #eee",
            padding: "10px",
            borderRadius: "4px",
          }}
        >
          <label
            style={{
              fontWeight: "bold",
              display: "block",
              marginBottom: "5px",
            }}
          >
            Specifications (Example)
          </label>
          <input
            name="weight"
            placeholder="Weight (in kg)"
            value={formData.specs.weight || ""}
            onChange={handleSpecsChange}
            style={{ padding: "8px", marginRight: "10px" }}
          />
          <input
            name="color"
            placeholder="Color"
            value={formData.specs.color || ""}
            onChange={handleSpecsChange}
            style={{ padding: "8px" }}
          />
        </div>

        {/* Row 8: Actions */}
        <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
          <button
            type="submit"
            disabled={loading}
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
              ? "Update Product"
              : "Create Product"}
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
        <tr style={{ backgroundColor: "#007bff", color: "white" }}>
          <th style={{ padding: "10px", textAlign: "left" }}>Image</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Name/ID</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Price/Cost</th>
          <th style={{ padding: "10px", textAlign: "left" }}>
            Category/Supplier
          </th>
          <th style={{ padding: "10px", textAlign: "left" }}>Status</th>
          <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p._id} style={{ borderBottom: "1px solid #eee" }}>
            <td style={{ padding: "10px" }}>
              {p.image_url ? (
                <img
                  src={`${API_BASE_URL}${p.image_url}`}
                  alt={p.product_name}
                  style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
              ) : (
                <span style={{ color: "#aaa" }}>No Image</span>
              )}
            </td>
            <td style={{ padding: "10px" }}>
              <strong>{p.product_name}</strong>
              <br />
              <small>ID: {p._id}</small>
            </td>
            <td style={{ padding: "10px" }}>
              Unit: ${p.unit_price}
              <br />
              Cost: ${p.cost_price || "N/A"}
            </td>
            <td style={{ padding: "10px" }}>
              Cat: {p.category_id?.category_name || "N/A"}
              <br />
              Sup: {p.supplier_id?.supplier_name || "N/A"}
            </td>
            <td style={{ padding: "10px" }}>
              <span
                style={{
                  color: p.is_active ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {p.is_active ? "Active" : "Inactive"}
              </span>
            </td>
            <td style={{ padding: "10px" }}>
              <button
                onClick={() => handleEdit(p)}
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
                onClick={() => handleDelete(p._id)}
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
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 Product Management</h2>
      {/* 💡 NEW: Back to Dashboard and Refresh buttons wrapped in a div */}
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
      {loading && <p>Loading products...</p>}

      <h3>Product List ({products.length})</h3>
      {products.length > 0 && renderTable()}
    </div>
  );
}

export default ProductsModule;
