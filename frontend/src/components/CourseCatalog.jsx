import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import CourseCard from "./CourseCard";
import Footer from "../Pages/Footer";
import defaultImage from "../Pages/images/bg2.webp";
import "../Pages/ServicesPage.css";

/**
 * Reusable course listing page (same look as the IT Courses page).
 *
 * Props:
 *  - tag, titleTop, titleHighlight, intro : hero text
 *  - sectionTag, sectionTitle, sectionDesc : heading above the cards
 *  - image : hero image (optional)
 *  - courses : [{ slug, title, subtitle, description, duration, letter, syllabusPath? }]
 */
const CourseCatalog = ({
  tag,
  titleTop = "Learn Today,",
  titleHighlight = "Lead Tomorrow",
  intro,
  sectionTag = "OUR TRAINING SERVICES",
  sectionTitle,
  sectionDesc,
  image = defaultImage,
  courses = [],
}) => {
  const navigate = useNavigate();

  const scrollToCourses = () => {
    const el = document.getElementById("our-training-services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="services-page">
      <div className="services-back-wrap">
        <BackButton />
      </div>

      <section className="hero-section">
        <div className="hero-left">
          <span className="tag">{tag}</span>

          <h1>
            {titleTop} <br />
            <span>{titleHighlight}</span>
          </h1>

          <p>{intro}</p>

          <div className="hero-buttons">
            <button className="primary-btn" type="button" onClick={scrollToCourses}>
              Explore Courses →
            </button>
            <button
              className="secondary-btn"
              type="button"
              onClick={() => navigate("/contact")}
            >
              Talk to Advisor
            </button>
          </div>

          <div className="features1">
            <div className="feature1-item">
              <h4>Expert Trainers</h4>
              <p>Industry Professionals</p>
            </div>
            <div className="feature1-item">
              <h4>Hands-on Learning</h4>
              <p>Real-time Projects</p>
            </div>
            <div className="feature1-item">
              <h4>Certification</h4>
              <p>Recognized Globally</p>
            </div>
          </div>
        </div>

        <div className="hero-right1">
          <img className="student-img" src={image} alt={tag} />
        </div>
      </section>

      <section id="our-training-services" className="courses-section">
        <span className="course-tag">{sectionTag}</span>
        <h2>{sectionTitle}</h2>
        <p className="course-desc">{sectionDesc}</p>

        <div className="course-cards">
          {courses.map((course) => (
            <CourseCard key={course.slug || course.title} course={course} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseCatalog;