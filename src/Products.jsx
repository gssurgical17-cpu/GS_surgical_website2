import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Products.css";

const Products = ({ products = [] }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {/* IMAGE (CLICKABLE) */}
            <img
              src={`/images/${product.Image}`}
              alt={product.name}
              loading="lazy"
              onClick={() => openImage(product.Image)}
              style={{ cursor: "pointer" }}
            />

            <h3>{product.name}</h3>

            <p>
              <strong>Price:</strong> {product.price}
            </p>

            <p>
              <strong>MOQ:</strong> {product.moq}
            </p>

            <Link to={`/product/${product.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="image-modal"
            onClick={closeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={`/images/${selectedImage}`}
              alt="preview"
              className="modal-image"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Products;