import React from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "./BackButton";
import { syllabi } from "../data/syllabi";
import "./SyllabusPage.css";

/**
 * One page for every syllabus. Route: /syllabus/:slug
 * Data comes from src/data/syllabi.js
 */
const SyllabusPage = () => {
  const { slug } = useParams();
  const course = syllabi[slug];

  if (!course) {
    return (
      <div className="syllabus-container syllabus-page">
        <BackButton />
        <div className="top-section">
          <div className="center-title">
            <h1>
              Syllabus <span>Not Found</span>
            </h1>
            <p>
              We couldn't find that course. <Link to="/servicespage">Browse all courses</Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  const baseTitle = course.title.replace(/\s*Syllabus$/i, "");

  return (
    <div className="syllabus-container syllabus-page">
      <BackButton />

      <div className="top-section">
        <div className="left-java">
          <div className="syllabus-emoji" aria-hidden="true">
            {course.emoji}
          </div>
          <h2>{course.short}</h2>
        </div>

        <div className="center-title">
          <h1>
            {baseTitle} <span>Syllabus</span>
          </h1>
          <p>{course.intro}</p>
        </div>
      </div>

      {course.modules.map((module) => (
        <div className="module-wrapper" key={module.title}>
          <div className="module-title">{module.title}</div>

          <div className="cards-row">
            {module.cards.map((card) => (
              <div className="card" key={card.title}>
                <div className="card-heading">
                  <span className="card-emoji" aria-hidden="true">
                    {module.icon}
                  </span>
                  <h3>{card.title}</h3>
                </div>

                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}

      {course.internship && (
        <div className="internship-wrapper">
          <div className="module-badge">{course.internship.badge}</div>

          <div className="internship-section">
            <div className="icon-circle">{course.internship.icon}</div>
            <div className="internship-content">
              <h1>{course.internship.title}</h1>
              <p>{course.internship.text}</p>
            </div>
          </div>
        </div>
      )}

      {course.highlights && (
        <div className="course-highlights">
          <h3>Course Highlights</h3>
          <p>{course.highlights}</p>
        </div>
      )}
    </div>
  );
};

export default SyllabusPage;