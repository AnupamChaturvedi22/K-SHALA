import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Clock3, BadgeCheck, FolderKanban } from "lucide-react";

/**
 * One course card (same markup/classes as the cards on the IT Services page).
 * course = { title, subtitle, description, duration, letter, syllabusPath? }
 */
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleEnroll = () =>
    navigate("/enroll", {
      state: {
        course: {
          title: course.title,
          description: course.description,
          duration: course.duration,
          skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
          technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
          iconLetter: course.letter || course.title.charAt(0),
        },
      },
    });

  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <h4>{course.subtitle}</h4>
      <p>{course.description}</p>

      <div className="course-info">
        <span>
          <Clock3 size={18} color="#38bdf8" /> {course.duration}
        </span>
        <span>
          <FolderKanban size={18} color="#38bdf8" /> Live Projects
        </span>
        <span>
          <BadgeCheck size={18} color="#38bdf8" /> Certification
        </span>
      </div>

      <div className="card-buttons">
        <Link to={course.syllabusPath || "/contact"}>
          <button className="outline-btn" type="button">
            {course.syllabusPath ? "View Details" : "Enquire"}
          </button>
        </Link>

        <button className="filled-btn" type="button" onClick={handleEnroll}>
          Enroll Now →
        </button>
      </div>
    </div>
  );
};

export default CourseCard;