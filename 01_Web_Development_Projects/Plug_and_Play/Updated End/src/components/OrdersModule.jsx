// src/components/OrdersModule.jsx

import React, { useState, useEffect, useCallback } from "react";
import { fetchAdminOrders, updateOrderStatus } from "../services/dataService";

const ORDER_STATUSES = ["pending", "processing", "completed", "cancelled"];
const PAYMENT_STATUSES = ["pending", "paid", "failed"];

// Helper to format Date
const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

function OrdersModule({ onBack }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [editingOrder, setEditingOrder] = useState(null); // The order being edited
  const [updateFormData, setUpdateFormData] = useState({}); // Form state for status update
  const [filters, setFilters] = useState({ status: "", paymentStatus: "" });

  // --- Data Fetching ---
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const data = await fetchAdminOrders(filters);
      setOrders(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // --- Status Update Handlers ---
  const handleEdit = (order) => {
    setEditingOrder(order);
    setUpdateFormData({
      order_status: order.order_status,
      payment_status: order.payment_status,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!editingOrder) return;

    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      await updateOrderStatus(editingOrder._id, updateFormData);
      setMessage(`Order ${editingOrder._id} status updated successfully.`);
      setEditingOrder(null); // Close the form
      await fetchData(); // Refresh the list
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // --- Rendering Functions ---

  const renderUpdateForm = () => (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#fff",
      }}
    >
      <h3>
        Update Status for Order:{" "}
        <code style={{ color: "darkblue" }}>{editingOrder._id}</code>
      </h3>
      <form onSubmit={handleUpdate} style={{ display: "flex", gap: "20px" }}>
        <div>
          <label>Order Status:</label>
          <select
            value={updateFormData.order_status || ""}
            onChange={(e) =>
              setUpdateFormData({
                ...updateFormData,
                order_status: e.target.value,
              })
            }
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {ORDER_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Payment Status:</label>
          <select
            value={updateFormData.payment_status || ""}
            onChange={(e) =>
              setUpdateFormData({
                ...updateFormData,
                payment_status: e.target.value,
              })
            }
            required
            style={{ marginLeft: "10px", padding: "5px" }}
          >
            {PAYMENT_STATUSES.map((status) => (
              <option key={status} value={status}>
                {status.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "8px 15px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {loading ? "Updating..." : "Save Status"}
        </button>
        <button
          type="button"
          onClick={() => setEditingOrder(null)}
          style={{
            padding: "8px 15px",
            backgroundColor: "#6c757d",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </form>
    </div>
  );

  const renderFilterControls = () => (
    <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
      <div>
        <label>Filter by Order Status:</label>
        <select
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="">ALL</option>
          {ORDER_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Filter by Payment Status:</label>
        <select
          value={filters.paymentStatus}
          onChange={(e) =>
            setFilters({ ...filters, paymentStatus: e.target.value })
          }
          style={{ marginLeft: "10px", padding: "5px" }}
        >
          <option value="">ALL</option>
          {PAYMENT_STATUSES.map((status) => (
            <option key={status} value={status}>
              {status.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={fetchData}
        disabled={loading}
        style={{ padding: "5px 10px" }}
      >
        Apply Filters
      </button>
    </div>
  );

  const renderTable = () => (
    <table
      style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}
    >
      <thead>
        <tr style={{ backgroundColor: "#f2f2f2" }}>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            ID (Date)
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Customer ID
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total</th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Order Status
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>
            Payment Status
          </th>
          <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((o) => (
          <tr
            key={o._id}
            style={{
              backgroundColor:
                o.order_status === "pending"
                  ? "#fff3cd"
                  : o.order_status === "completed"
                  ? "#d4edda"
                  : "white",
            }}
          >
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {o._id}
              <br />
              <small style={{ color: "#6c757d" }}>
                {formatDate(o.order_date)}
              </small>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              {o.customer_id}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              ${o.total_amount ? o.total_amount.toFixed(2) : "0.00"}
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <strong>{o.order_status.toUpperCase()}</strong>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <strong>{o.payment_status.toUpperCase()}</strong>
            </td>
            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
              <button
                onClick={() => handleEdit(o)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#007bff",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Update Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={onBack} style={{ marginBottom: "20px" }}>
        &larr; Back to Dashboard
      </button>
      <h2>📄 Order Management</h2>

      {message && (
        <p style={{ color: "green", fontWeight: "bold" }}>✅ {message}</p>
      )}
      {error && <p style={{ color: "red", fontWeight: "bold" }}>🛑 {error}</p>}

      {editingOrder && renderUpdateForm()}

      {renderFilterControls()}

      {loading && <p>Loading orders...</p>}

      <h3>Order List ({orders.length} total)</h3>
      {!loading && orders.length > 0 && renderTable()}
      {!loading && orders.length === 0 && (
        <p>No orders found matching the current filters.</p>
      )}
    </div>
  );
}

export default OrdersModule;
