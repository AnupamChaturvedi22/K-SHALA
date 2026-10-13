import React from "react";
import { Link } from "react-router-dom";
import {
  FaBook,
  FaVideo,
  FaClipboardCheck,
  FaComments,
  FaChartLine,
  FaTrophy,
  FaCheckCircle,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

import logo from "./images/Main_logo.jpeg";
import Footer from "./Footer";
import BackButton from "../components/BackButton";

import "./Home.css";
import "./About.css";
import Header from "../components/Header";

// import aboutVideo from "./video/K_Shala_Introduction_test_2_with_captions (2).mp4";

const OFFERINGS = [
  {
    icon: FaBook,
    title: "Complete NCERT & MH Board Syllabus",
    description:
      "Structured learning content designed according to the latest curriculum for Maharashtra Board and NCERT students.",
  },
  {
    icon: FaVideo,
    title: "Interactive Video Lectures",
    description:
      "Concept-based animated lessons that make difficult topics easy to understand.",
  },
  {
    icon: FaClipboardCheck,
    title: "Smart Quizzes & Practice Tests",
    description:
      "Chapter-wise MCQs, mock tests, and previous year question papers to strengthen preparation.",
  },
  {
    icon: FaComments,
    title: "Live Doubt Solving",
    description:
      "Students can connect with expert teachers and clear doubts instantly.",
  },
  {
    icon: FaChartLine,
    title: "Real-Time Performance Tracking",
    description:
      "Track progress, monitor strengths and weaknesses, and improve learning outcomes.",
  },
  {
    icon: FaTrophy,
    title: "Scholarship & Reward Programs",
    description:
      "Opportunities for students to earn scholarships and recognition through performance-based exams.",
  },
];

const WHY_CHOOSE = [
  "Easy-to-understand learning",
  "Expert faculty guidance",
  "Student-friendly mobile app",
  "Learn anytime, anywhere",
  "Personalized learning experience",
  "Affordable digital education",
  "Focus on academic excellence",
];

const LEARNING_VALUES = [
  "Simple",
  "Interactive",
  "Practical",
  "Engaging",
  "Result-Oriented",
];

const AUDIENCE = [
  "School Students (Class 1st – 12th)",
  "SSC & HSC Students",
  "Maharashtra Board Students",
  "NCERT Students",
  "Competitive Exam Aspirants",
  "Parents & Schools",
];

const MISSION_POINTS = [
  "Deliver high-quality education in a simple and engaging format",
  "Make learning affordable and accessible for all students",
  "Help students improve confidence, skills, and academic performance",
  "Support schools, parents, and teachers through smart digital solutions",
  "Build a strong foundation for competitive exams and future careers",
];

const About = () => {
  return (
    <div className="homepage about-page">

      {/* NAVBAR */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="about-main">

        <BackButton />

        {/* HERO SECTION */}
        <section className="about-hero">

          <h1 className="about-hero-title">
            About K-Shala
          </h1>

          <p className="about-hero-subtitle">
            Empowering Students Through Smart Digital Learning
          </p>

          <div
            className="about-hero-glow"
            aria-hidden="true"
          />

        </section>

        {/* INTRO SECTION */}
        <section className="about-section about-intro-wrapper">

          {/* LEFT SECTION */}
          <div className="about-left-section">

            <div className="about-glass-card about-intro-card">

              <span className="about-section-tag">
                About Us
              </span>

              <h2 className="about-card-title">
                Welcome to K-Shala
              </h2>

              <p>
                K-Shala is a modern digital learning platform dedicated to
                transforming education through smart technology, interactive
                learning, and student-focused teaching methods.
              </p>

              <p>
                We provide complete learning solutions for students from
                Class 1st to 12th with NCERT and Maharashtra Board syllabus
                coverage, helping learners build strong concepts and improve
                academic performance.
              </p>

            </div>

          </div>

          {/* RIGHT VIDEO SECTION */}
          {/* <div className="about-right-section">

            <video
              autoPlay
              muted
              loop
              playsInline
              controls
              className="about-side-video"
            >
              <source
                src={aboutVideo}
                type="video/mp4"
              />
            </video>

          </div> */}

        </section>

        {/* VISION & MISSION */}
        <section className="about-section about-vision-mission">

          <div className="about-vm-grid">

            <article className="about-glass-card about-vm-card">

              <div className="about-vm-icon">
                <FaEye />
              </div>

              <h2>Our Vision</h2>

              <p>
                To create a future where every student can learn anytime,
                anywhere with the power of technology and personalized education.
              </p>

            </article>

            <article className="about-glass-card about-vm-card">

              <div className="about-vm-icon">
                <FaBullseye />
              </div>

              <h2>Our Mission</h2>

              <ul className="about-mission-list">

                {MISSION_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}

              </ul>

            </article>

          </div>

        </section>

        {/* OFFERINGS */}
        <section className="about-section about-offerings">

          <h2 className="about-section-heading">
            What We Offer
          </h2>

          <div className="about-offerings-grid">

            {OFFERINGS.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="about-glass-card about-offer-card"
                >

                  <div className="about-offer-icon">
                    <Icon />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </article>
              );
            })}

          </div>

        </section>

        {/* WHY CHOOSE */}
        <section className="about-section about-why">

          <h2 className="about-section-heading">
            Why Students Choose K-Shala
          </h2>

          <div className="about-why-grid">

            {WHY_CHOOSE.map((item) => (

              <div
                key={item}
                className="about-why-card"
              >

                <FaCheckCircle className="about-why-check" />

                <span>{item}</span>

              </div>

            ))}

          </div>

        </section>

        {/* LEARNING APPROACH */}
        <section className="about-section about-approach">

          <div className="about-glass-card about-approach-card">

            <h2 className="about-section-heading about-approach-heading">
              Our Learning Approach
            </h2>

            <p className="about-approach-lead">
              At K-Shala, we believe learning should be:
            </p>

            <div className="about-values-row">

              {LEARNING_VALUES.map((value) => (

                <span
                  key={value}
                  className="about-value-pill"
                >
                  {value}
                </span>

              ))}

            </div>

            <p className="about-approach-text">
              Our platform combines technology, analytics, and expert teaching
              to help students learn smarter and achieve better results.
            </p>

          </div>

        </section>

        {/* AUDIENCE */}
        <section className="about-section about-audience">

          <h2 className="about-section-heading">
            Who We Serve
          </h2>

          <div className="about-audience-grid">

            {AUDIENCE.map((item) => (

              <div
                key={item}
                className="about-audience-card"
              >
                {item}
              </div>

            ))}

          </div>

        </section>

        {/* CTA */}
        <section className="about-section about-cta">

          <div className="about-glass-card about-cta-card">

            <h2>
              Join the K-Shala Learning Community
            </h2>

            <p>
              Thousands of students trust K-Shala for quality education,
              smart preparation, and continuous growth.
            </p>

            <blockquote className="about-quote">
              “Learn Smart. Grow Faster. Achieve More with K-Shala.”
            </blockquote>

            <Link
              to="/contact"
              className="about-cta-btn"
            >
              Get Started
            </Link>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default About;