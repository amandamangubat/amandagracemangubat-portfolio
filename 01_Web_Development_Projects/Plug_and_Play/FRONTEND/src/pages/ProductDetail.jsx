// src/pages/ProductDetail.jsx
import React, { useEffect, useState, useMemo } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch single product from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`http://localhost:2141/api/products/${id}`);
        if (!res.ok) throw new Error("Failed to load product");

        const data = await res.json();

        // Normalize backend → frontend structure
        const normalized = {
          id: data._id,
          name: data.product_name,
          brand: data.brand || "Unknown",
          category: data.category_id?.category_name || "Misc",
          unitPrice: data.unit_price,
          description: data.description || "No description available.",
          image: data.image_url || "/default-product.png",
          specs: data.specs || {},
          tags: data.tags || [],
        };

        setProduct(normalized);
      } catch (err) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const formatCurrency = (value) =>
    `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

  const specEntries = useMemo(
    () =>
      product && product.specs
        ? Object.entries(product.specs).filter(
            ([, value]) => value !== null && value !== "" && value !== undefined
          )
        : [],
    [product]
  );

  const handleAdd = () => {
    if (!product) return;

    // FRONTEND CART ONLY for now
    onAddToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      unitPrice: product.unitPrice,
      image: product.image,
    });
  };

  const handleBuyNow = () => {
    if (!product) return;

    onAddToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      unitPrice: product.unitPrice,
      image: product.image,
    });

    navigate("/cart");
  };

  // ───────────── UI STATES ─────────────
  if (loading) {
    return (
      <div className="min-h-screen cart-gradient pt-24 flex items-center justify-center text-gray-700">
        Loading product details…
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen cart-gradient pt-24 flex flex-col items-center justify-center text-gray-700 px-4">
        <p className="mb-4 text-red-600 font-medium">
          {error || "Product not found."}
        </p>
        <Link
          to="/products"
          className="bg-primary text-white px-4 py-2 rounded-button text-sm font-semibold hover:bg-opacity-90 transition-all"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  // ───────────── MAIN UI ─────────────
  return (
    <div className="min-h-screen cart-gradient pt-20 text-gray-900">
      {/* Breadcrumb */}
      <div className="px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <Link to="/products" className="hover:text-primary transition-colors">
            Products
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-900 font-medium line-clamp-1">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-white rounded-3xl shadow-sm p-4 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[420px] object-contain bg-gray-50 rounded-2xl"
            />
          </div>

          {/* Details */}
          <div className="bg-white rounded-3xl shadow-sm p-8 flex flex-col">
            <div className="mb-4">
              <p className="text-xs uppercase tracking-[0.15em] text-gray-500 mb-1">
                {product.brand} • {product.category}
              </p>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
                {product.name}
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Price
                </p>
                <p className="text-3xl font-extrabold text-gray-900 mt-1">
                  {formatCurrency(product.unitPrice)}
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wide">
                  Availability
                </p>
                <p className="text-sm font-semibold text-green-600 mt-1">
                  In stock
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-green-600 text-white py-3 rounded-button font-semibold text-sm hover:bg-green-700 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-flashlight-fill text-base" />
                Buy Now
              </button>
              <button
                onClick={handleAdd}
                className="flex-1 bg-primary text-white py-3 rounded-button font-semibold text-sm hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                <i className="ri-shopping-cart-line text-base" />
                Add to Cart
              </button>
            </div>

            {/* Specs */}
            {specEntries.length > 0 && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold mb-3">
                  Key Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  {specEntries.map(([key, value]) => (
                    <div
                      key={key}
                      className="bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
                    >
                      <p className="text-[11px] uppercase text-gray-500 tracking-wide">
                        {key.replace(/_/g, " ")}
                      </p>
                      <p className="text-gray-800 text-sm font-medium mt-1">
                        {String(value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {product.tags && product.tags.length > 0 && (
              <div className="mt-6">
                <p className="text-xs uppercase text-gray-500 tracking-[0.15em] mb-2">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Back link */}
        <div className="max-w-7xl mx-auto mt-10">
          <Link
            to="/products"
            className="inline-flex items-center text-sm text-gray-700 hover:text-primary transition-colors"
          >
            <i className="ri-arrow-left-line mr-1" />
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
