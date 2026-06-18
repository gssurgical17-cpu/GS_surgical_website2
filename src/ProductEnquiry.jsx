import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ProductEnquiry.css"

const ProductEnquiry = ({ product }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    quantity: "",
    purpose: "End Use",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobile.trim()) {
      alert("Mobile Number is required");
      return;
    }

    try {
      await emailjs.send(
        "service_d9dzd2u",
        "template_wo0egqn",
        {
          product_name: product.name,
          product_price: product.price,
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          quantity: formData.quantity,
          purpose: formData.purpose,
          details: formData.details,
        },
        "wzOA-CqZVzl_eo5Eq"
      );

      alert("Enquiry Sent Successfully");

      setFormData({
        name: "",
        mobile: "",
        email: "",
        quantity: "",
        purpose: "End Use",
        details: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send enquiry");
    }
  };

  return (
    <div className="enquiry-section">
      <h2>
        Looking for "<span>{product.name}</span>" ?
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number *"
          required
          onChange={handleChange}
        />

        <input
          type="text"
          name="quantity"
          placeholder="Quantity"
          onChange={handleChange}
        />

        <select
          name="purpose"
          onChange={handleChange}
        >
          <option value="End Use">End Use</option>
          <option value="Reselling">Reselling</option>
        </select>

        <textarea
          name="details"
          placeholder="Requirement Details"
          rows="4"
          onChange={handleChange}
        />

        <button type="submit">
          Send Enquiry
        </button>
      </form>
    </div>
  );
};

export default ProductEnquiry;