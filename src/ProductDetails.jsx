import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ProductEnquiry from "./ProductEnquiry";
import "./ProductDetails.css";

const ProductDetails = ({ products = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const product = products.find((p) => String(p.id) === String(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="details-container">
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(
      (p) =>
        p.category === product.category &&
        String(p.id) !== String(product.id)
    )
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);

  return (
    <>
      {/* MAIN PRODUCT DETAILS */}
      <div className="details-container">
        <motion.div
          className="details-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* IMAGE */}
          <div className="image-section">
            <img
              src={`/images/${product.Image}`}
              alt={product.name}
              onClick={() => setIsOpen(true)}
            />
          </div>

          {/* CONTENT */}
          <div className="content-section">
            <h2>{product.name}</h2>

            <p>
              <strong>Category:</strong> {product.category}
            </p>

            <p>
              <strong>Price:</strong> {product.price}
            </p>

            <p>
              <strong>MOQ:</strong> {product.moq}
            </p>

            <h3>Specifications</h3>

            <ul>
              {Object.entries(product.specifications || {}).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>

            <h3>Trade Information</h3>

            <ul>
              {Object.entries(product.tradeInfo || {}).map(([k, v]) => (
                <li key={k}>
                  <strong>{k}:</strong> {v}
                </li>
              ))}
            </ul>

            <div className="about">
              <h3>About Product</h3>
              <p>{product.about}</p>
            </div>

            <button
              className="back-btn"
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </motion.div>

        {/* IMAGE POPUP */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="image-modal"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.img
                src={`/images/${product.Image}`}
                alt={product.name}
                className="modal-image"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ENQUIRY FORM */}
      <ProductEnquiry product={product} />

      {/* RELATED PRODUCTS */}
      {relatedProducts.length > 0 && (
        <div className="related-wrapper">
          <h3>Related Products</h3>

          <div className="related-grid">
            {relatedProducts.map((item) => (
              <div
                key={item.id}
                className="related-card"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <img
                  src={`/images/${item.Image}`}
                  alt={item.name}
                />

                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;