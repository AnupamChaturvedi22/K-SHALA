import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "./Footer";
import BackButton from "../components/BackButton";
import "./Home.css";
import "./Contact.css";
import Header from "../components/Header";

const API_URL =
  import.meta.env.VITE_API_URL || "https://k-shala.onrender.com";
// const API_URL =
//   import.meta.env.VITE_API_URL || "http://localhost:5000";


const CONTACT_CARDS = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "contact@k-shala.com",
    href: "mailto:contact@k-shala.com",
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+91 8424067972",
    href: "tel:+918424067972",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Office 102 Tower B1 VBC Wagholi Pune 412207",
    href: null,
  },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);

  const [errors, setErrors] = useState({});

  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    // Name Validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email Validation
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        form.email
      )
    ) {
      newErrors.email = "Enter valid email";
    }

    // Phone Validation
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone =
        "Phone number must contain exactly 10 digits";
    }


    // Message Validation
    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message =
        "Message should contain at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      
      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);

        setForm(initialForm);

        setErrors({});
      } else {
        if (
          data.message &&
          data.message.includes("Too many requests")
        ) {
          alert(
            "Too many requests. Please wait a few minutes and try again."
          );
        } else {
          alert(data.message || "Submission Failed");
        }
      }
    } catch (error) {
      console.error("Frontend Error:", error);

      // alert("Server Error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage contact-page">


      <Header />




      <main className="contact-main">
        {!submitted ? (
          <>
            <BackButton />

            <section className="contact-hero">

  <h1 className="contact-hero-title">
    Let&apos;s Build Something Extraordinary
  </h1>

  <div
    className="contact-hero-underline"
    aria-hidden="true"
  />
</section>

<section className="contact-cards-section">
  <div className="contact-cards-grid">

    {CONTACT_CARDS.map((card) => {

      const Icon = card.icon;

      const content = (
        <>
          <div className="contact-card-icon">
            <Icon />
          </div>

          <h3 className="contact-card-label">
            {card.label}
          </h3>

          <p className="contact-card-value">
            {card.value}
          </p>
        </>
      );

      return card.href ? (

        <a
          key={card.label}
          href={card.href}
          className="contact-info-card"
        >
          {content}
        </a>

      ) : (

        <article
          key={card.label}
          className="contact-info-card"
        >
          {content}
        </article>

      );

    })}

  </div>
</section>
            <section className="contact-form-section">
              <div className="contact-form-panel">
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label>Name</label>

                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                      />

                      {errors.name && (
                        <small className="error-text">
                          {errors.name}
                        </small>
                      )}
                    </div>

                    <div className="contact-field">
                      <label>Email</label>

                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                      />

                      {errors.email && (
                        <small className="error-text">
                          {errors.email}
                        </small>
                      )}
                    </div>
                  </div>

                  <div className="contact-form-row">
                   
                    <div className="contact-field">
                      <label>Phone</label>

                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="10 digit phone number"
                      />

                      {errors.phone && (
                        <small className="error-text">
                          {errors.phone}
                        </small>
                      )}
                    </div>
                  </div>

                

                  <div className="contact-field">
                    <label>Message</label>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      rows={5}
                    />

                    {errors.message && (
                      <small className="error-text">
                        {errors.message}
                      </small>
                    )}
                  </div>

                  <div className="contact-form-actions">
                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={loading}
                    >
                      {loading
                        ? "Sending..."
                        : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </>
        ) : (
          <section className="enrollment-success-section">
            <div className="enrollment-success-card">
              <div className="success-icon-glow">
                <div className="success-icon" />
              </div>

              <h1>Message Sent Successfully</h1>

              <p>
                Thank you for contacting us. Our team
                will reach out shortly.
              </p>

              <Link
                to="/servicespage"
                className="success-theme-btn"
              >
                Back to Services
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;