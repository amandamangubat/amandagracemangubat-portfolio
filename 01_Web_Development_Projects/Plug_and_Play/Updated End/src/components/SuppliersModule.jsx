// src/components/SuppliersModule.jsx
import React, { useState, useEffect } from "react";
import {
  fetchSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} from "../services/dataService";

const initialFormState = {
  supplier_name: "",
  contact_person: "",
  email: "",
  phone: "",
  address: "",
  is_active: true,
};

function SuppliersModule({ onBack }) {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Form state for C/U operations
  const [formData, setFormData] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // --- Data Loading ---
  const loadSuppliers = async () => {
    setError(null);
    setLoading(true);
    try {
      const data = await fetchSuppliers();
      setSuppliers(data);
    } catch (err) {
      console.error("Failed to load suppliers:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSuppliers();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // --- C/U: CREATE/UPDATE (Handle Form Submission) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const payload = { ...formData };

      if (isEditing) {
        // U: Update operation
        await updateSupplier(currentId, payload);
        alert("Supplier updated successfully!");
      } else {
        // C: Create operation
        await createSupplier(payload);
        alert("Supplier created successfully!");
      }

      // Reset form and reload data
      handleCancelEdit();
      await loadSuppliers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Setup form for editing
  const handleEdit = (supplier) => {
    setFormData({
      supplier_name: supplier.supplier_name,
      contact_person: supplier.contact_person || "",
      email: supplier.email || "",
      phone: supplier.phone || "",
      address: supplier.address || "",
      is_active: supplier.is_active,
    });
    setIsEditing(true);
    setCurrentId(supplier._id);
    window.scrollTo(0, 0); // Scroll to the form
  };

  // --- D: DELETE (Soft Delete) ---
  const handleDelete = async (id) => {
    if (
      !window.confirm(
        "Are you sure you want to soft-delete/deactivate this supplier?"
      )
    )
      return;

    setLoading(true);
    setError(null);
    try {
      await deleteSupplier(id);
      alert("Supplier soft-deleted/deactivated successfully!");
      await loadSuppliers();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData(initialFormState);
    setIsEditing(false);
    setCurrentId(null);
  };

  // --- RENDERING ---
  if (loading && suppliers.length === 0) {
    return <div style={{ padding: "20px" }}>Loading Supplier Modules...</div>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <button
        onClick={onBack}
        style={{
          padding: "10px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
        disabled={loading}
      >
        ← Back to Dashboard
      </button>

      <h2>
        {isEditing
          ? `Edit Supplier: ${currentId.slice(-4)}`
          : "Create New Supplier"}
      </h2>
      {error && (
        <p style={{ color: "red", fontWeight: "bold" }}>Error: {error}</p>
      )}

      {/* CREATE/UPDATE Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
          padding: "15px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          marginBottom: "30px",
        }}
      >
        <input
          name="supplier_name"
          type="text"
          placeholder="Supplier Name (e.g., Tech Imports Inc.)"
          value={formData.supplier_name}
          onChange={handleChange}
          required
          disabled={loading}
          style={{
            gridColumn: "1 / 3",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <input
          name="contact_person"
          type="text"
          placeholder="Contact Person"
          value={formData.contact_person}
          onChange={handleChange}
          disabled={loading}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
          style={{
            gridColumn: "1 / 3",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          disabled={loading}
          style={{
            gridColumn: "1 / 3",
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        {/* Active Checkbox (only shown during edit) */}
        {isEditing && (
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gridColumn: "1 / 3",
            }}
          >
            <input
              name="is_active"
              type="checkbox"
              checked={formData.is_active}
              onChange={handleChange}
              disabled={loading}
              style={{ marginRight: "10px" }}
            />
            Is Active (Controls visibility/usability in Product forms)
          </label>
        )}

        {/* Submit/Cancel Buttons */}
        <div style={{ gridColumn: "1 / 3", display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              color: "white",
              backgroundColor: isEditing ? "#ffc107" : "#007bff",
              flexGrow: 1,
            }}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : isEditing
              ? "Save Supplier Changes"
              : "Create Supplier"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancelEdit}
              style={{
                padding: "10px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                color: "white",
                backgroundColor: "#dc3545",
                flexGrow: 1,
              }}
              disabled={loading}
            >
              Cancel Edit
            </button>
          )}
        </div>
      </form>

      {/* READ Supplier List */}
      <h3>Supplier List ({suppliers.length} Total)</h3>
      {loading && <p>Loading suppliers...</p>}

      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "15px" }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Name / Status
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Contact
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Address
            </th>
            <th
              style={{
                padding: "10px",
                textAlign: "left",
                border: "1px solid #ddd",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => (
            <tr key={supplier._id}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <strong>{supplier.supplier_name}</strong>
                <p
                  style={{
                    margin: 0,
                    fontSize: "12px",
                    color: supplier.is_active ? "#28a745" : "#dc3545",
                  }}
                >
                  {supplier.is_active ? "ACTIVE" : "INACTIVE (Soft-deleted)"}
                </p>
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                }}
              >
                {supplier.contact_person && (
                  <div>Contact: {supplier.contact_person}</div>
                )}
                {supplier.email && <div>Email: {supplier.email}</div>}
                {supplier.phone && <div>Phone: {supplier.phone}</div>}
              </td>
              <td
                style={{
                  padding: "10px",
                  border: "1px solid #ddd",
                  fontSize: "14px",
                }}
              >
                {supplier.address || "N/A"}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <div style={{ display: "flex", gap: "5px" }}>
                  <button
                    onClick={() => handleEdit(supplier)}
                    style={{
                      padding: "8px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#28a745",
                    }}
                    disabled={loading}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(supplier._id)}
                    style={{
                      padding: "8px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      color: "white",
                      backgroundColor: "#dc3545",
                    }}
                    disabled={loading || !supplier.is_active} // Cannot delete if already inactive
                  >
                    {supplier.is_active ? "Deactivate" : "Deleted"}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!loading && suppliers.length === 0 && <p>No suppliers found.</p>}
    </div>
  );
}

export default SuppliersModule;
