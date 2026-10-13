import React from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import BackButton from "../components/BackButton";
import "./LegalPage.css";

const LegalPageLayout = ({ title, intro, children }) => (
  <div className="legal-page">
    <Header />

    <main className="legal-main">
      <BackButton />
      <h1>{title}</h1>
      {intro && <p className="legal-intro">{intro}</p>}
      {children}
    </main>

    <Footer />
  </div>
);

export default LegalPageLayout;