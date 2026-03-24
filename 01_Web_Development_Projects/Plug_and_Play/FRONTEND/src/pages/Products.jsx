import React, { useState, useMemo, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getProducts, addToCart } from "../api";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // ------------------------
  // FETCH PRODUCTS FROM BACKEND
  // ------------------------
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getProducts(); // <-- uses API helper

        // normalize backend fields → frontend format
        const normalized = data.map((item) => ({
          id: item._id,
          name: item.product_name,
          brand: item.brand || "Unknown",
          category: item.category_id?.name || "Misc",
          unitPrice: item.unit_price,
          description: item.description || "No description available.",
          image: item.image_url || "/default-product.png",
        }));

        setProducts(normalized);
      } catch (err) {
        console.error(err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ------------------------
  // CATEGORIES
  // ------------------------
  const categories = useMemo(() => {
    const set = new Set(["All"]);
    products.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [products]);

  // ------------------------
  // SEARCH + FILTER
  // ------------------------
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchCategory =
        selectedCategory === "All" || product.category === selectedCategory;

      const matchSearch =
        searchTerm.trim() === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.brand || "").toLowerCase().includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [products, selectedCategory, searchTerm]);

  // ------------------------
  // FORMAT CURRENCY
  // ------------------------
  const formatCurrency = (value) =>
    `₱ ${value.toLocaleString("en-PH", { minimumFractionDigits: 2 })}`;

  // ------------------------
  // ADD TO CART
  // ------------------------
  const handleAddClick = async (product) => {
    try {
      await addToCart(product.id, 1); // <-- SENDS TO BACKEND
    } catch (err) {
      console.error("Backend cart error:", err);
    }

    // update frontend cart
    onAddToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      unitPrice: product.unitPrice,
      image: product.image,
    });
  };

  // ------------------------
  // BUY NOW
  // ------------------------
  const handleBuyNow = async (product) => {
    try {
      await addToCart(product.id, 1);
    } catch (err) {
      console.error("Backend cart error:", err);
    }

    onAddToCart({
      id: product.id,
      name: product.name,
      description: product.description,
      unitPrice: product.unitPrice,
      image: product.image,
    });

    navigate("/cart");
  };

  // ------------------------
  // RENDER UI
  // ------------------------
  return (
    <div className="min-h-screen cart-gradient pt-20 text-gray-900">
      {/* Breadcrumb */}
      <div className="px-8 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <i className="ri-arrow-right-s-line" />
          <span className="text-gray-900 font-medium">Products</span>
        </div>
      </div>

      {/* Header + Filters */}
      <div className="px-8 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Plug &amp; Play Store
            </h1>
            <p className="text-gray-600 mt-1">
              Browse our curated selection of gaming gear and accessories.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <select
              className="border border-gray-300 rounded-button px-4 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>

            <div className="relative sm:w-64">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-8 pb-12">
        <div className="max-w-7xl mx-auto">
          {loading && (
            <div className="py-16 text-center text-gray-600">
              Loading products…
            </div>
          )}

          {error && (
            <div className="py-16 text-center text-red-600">{error}</div>
          )}

          {!loading && !error && filteredProducts.length === 0 && (
            <div className="py-16 text-center text-gray-600">
              <p className="mb-2 font-medium">No products found.</p>
              <p className="text-sm">
                Try searching or selecting a different category.
              </p>
            </div>
          )}

          {!loading && !error && filteredProducts.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-56 object-cover bg-gray-100"
                    />
                    <span className="absolute top-3 right-3 text-xs font-medium px-2 py-1 rounded-full bg-black/70 text-white">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
                      {product.brand}
                    </p>

                    <h2 className="font-semibold text-lg mb-1 line-clamp-2">
                      {product.name}
                    </h2>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-lg font-bold text-gray-900">
                          {formatCurrency(product.unitPrice)}
                        </span>
                        <span className="text-xs text-green-600">In stock</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                          {/* Add to Cart */}
                          <button
                            onClick={() => handleAddClick(product)}
                            className="flex-1 bg-primary text-white text-sm font-semibold py-2.5 rounded-button hover:bg-opacity-90 transition-all flex items-center justify-center gap-1"
                          >
                            <i className="ri-shopping-cart-line text-base" />
                            Add to Cart
                          </button>

                          {/* Buy Now */}
                          <button
                            onClick={() => handleBuyNow(product)}
                            className="flex-1 bg-green-600 text-white text-sm font-semibold py-2.5 rounded-button hover:bg-green-700 transition-all flex items-center justify-center gap-1"
                          >
                            <i className="ri-flashlight-fill text-base" />
                            Buy Now
                          </button>
                        </div>

                        <Link
                          to={`/product/${product.id}`}
                          className="px-3 py-2.5 text-xs font-medium border border-gray-300 rounded-button hover:bg-gray-50 transition-colors flex items-center justify-center whitespace-nowrap"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
