// src/components/CategoriesModule.jsx
import React, { useState, useEffect } from "react";
import {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../services/dataService";

// Helper styles for clean UI (optional, but makes it readable)
const styles = {
  container: { padding: "20px", maxWidth: "800px", margin: "0 auto" },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "20px",
  },
  input: { padding: "8px", border: "1px solid #ccc", borderRadius: "4px" },
  button: {
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
  },
  list: { listStyleType: "none", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
};

function CategoriesModule({ onBack }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Form state for C/U operations
  const [formData, setFormData] = useState({
    category_name: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // --- R: READ (Fetch Data) ---
  const loadCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- C/U: CREATE/UPDATE (Handle Form Submission) ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isEditing) {
        // U: Update operation
        await updateCategory(currentId, formData);
        alert("Category updated successfully!");
      } else {
        // C: Create operation
        await createCategory(formData);
        alert("Category created successfully!");
      }

      // Reset form and reload data
      setFormData({ category_name: "", description: "" });
      setIsEditing(false);
      setCurrentId(null);
      await loadCategories();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Setup form for editing
  const handleEdit = (category) => {
    setFormData({
      category_name: category.category_name,
      description: category.description,
    });
    setIsEditing(true);
    setCurrentId(category._id);
    window.scrollTo(0, 0); // Scroll to the form
  };

  // --- D: DELETE ---
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to soft-delete this category?"))
      return;

    setLoading(true);
    setError(null);
    try {
      await deleteCategory(id);
      alert("Category deleted (soft-deleted) successfully!");
      await loadCategories();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setFormData({ category_name: "", description: "" });
    setIsEditing(false);
    setCurrentId(null);
  };

  return (
    <div style={styles.container}>
      <button
        onClick={onBack}
        style={{
          ...styles.button,
          backgroundColor: "#6c757d",
          marginBottom: "20px",
        }}
        disabled={loading}
      >
        ← Back to Dashboard
      </button>

      <h2>{isEditing ? "Edit Category" : "Create New Category"}</h2>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* CREATE/UPDATE Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="category_name"
          placeholder="Category Name (e.g., Electronics)"
          value={formData.category_name}
          onChange={handleChange}
          required
          style={styles.input}
          disabled={loading}
        />
        <textarea
          name="description"
          placeholder="Description (Optional)"
          value={formData.description}
          onChange={handleChange}
          style={styles.input}
          disabled={loading}
        />
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: isEditing ? "#ffc107" : "#007bff",
              flexGrow: 1,
            }}
            disabled={loading}
          >
            {loading
              ? "Processing..."
              : isEditing
              ? "Save Changes"
              : "Create Category"}
          </button>
          {isEditing && (
            <button
              type="button"
              onClick={handleCancelEdit}
              style={{
                ...styles.button,
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

      {/* READ List */}
      <h3>Category List ({categories.length} Total)</h3>
      {loading && <p>Loading categories...</p>}

      <ul style={styles.list}>
        {categories.map((category) => (
          <li key={category._id} style={styles.listItem}>
            <span>
              <strong>{category.category_name}</strong>
              <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
                ID: {category._id} | Active:{" "}
                {category.is_active ? "Yes" : "No (Soft-deleted)"}
              </p>
            </span>
            <div style={{ display: "flex", gap: "5px" }}>
              <button
                onClick={() => handleEdit(category)}
                style={{
                  ...styles.button,
                  backgroundColor: "#28a745",
                  padding: "8px",
                }}
                disabled={loading}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category._id)}
                style={{
                  ...styles.button,
                  backgroundColor: "#dc3545",
                  padding: "8px",
                }}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      {!loading && categories.length === 0 && <p>No categories found.</p>}
    </div>
  );
}

export default CategoriesModule;
