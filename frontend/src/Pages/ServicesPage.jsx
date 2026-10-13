import { Clock3, BadgeCheck, FolderKanban } from "lucide-react";
import React from "react";
import "./ServicesPage.css";
import bg2 from "./images/bg2.webp";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Footer from "./Footer";
import CourseCard from "../components/CourseCard";
import { itCourses } from "../data/courseCatalog";

const ServicesPage = () => {
  const navigate = useNavigate();

  const handleExploreCourses = () => {
    const el = document.getElementById("our-training-services");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleTalkToAdvisor = () => {
    navigate("/contact");
  };

  return (
    <div className="services-page">
      <div className="services-back-wrap">
        <BackButton />
      </div>

      <section className="hero-section">
        <div className="hero-left">

          <span className="tag">
            IT TRAINING & DEVELOPMENT
          </span>

          <h1>
            Learn Today, <br />
            <span>Lead Tomorrow</span>
          </h1>

          <p>
            Join our industry-focused IT training programs and build
            in-demand skills for a successful career in technology.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              type="button"
              onClick={handleExploreCourses}
            >
              Explore Courses →
            </button>

            <button
              className="secondary-btn"
              type="button"
              onClick={handleTalkToAdvisor}
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
          <img
            className="student-img"
            src={bg2}
            alt="developer" />
        </div>

      </section>

      <section id="our-training-services" className="courses-section">

        <span className="course-tag">
          OUR TRAINING SERVICES
        </span>

        <h2>
          Explore Our Top IT Training Programs
        </h2>

        <p className="course-desc">
          Choose from industry-leading courses and kickstart your tech career
        </p>

        <div className="course-cards">

          <div className="course-card">
            <h3>Java</h3>
            <h4>Full Stack Development</h4>

            <p>
              Learn core Java, OOPs, Collections, Spring Boot,
              Hibernate and build enterprise applications.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>

            <div className="card-buttons">
              <Link to="/javafullstacksyllabus">
                <button className="outline-btn">
                  View Details
                </button>
              </Link>

              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Java Full Stack Development",
                        description:
                          "Learn core Java, OOPs, Collections, Spring Boot, Hibernate and build enterprise applications.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "J",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>

          </div>

          <div className="course-card">
            <h3>.NET</h3>
            <h4>Full Stack Development</h4>
            <p>
              Master C#, ASP.NET Core, MVC, Web API,
              Entity Framework and modern web applications.
            </p>

            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>

            <div className="card-buttons">
              <Link to="/dotnetsyllabus">
                <button className="outline-btn">
                  View Details
                </button>
              </Link>

              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: ".NET Full Stack Development",
                        description:
                          "Master C#, ASP.NET Core, MVC, Web API, Entity Framework and modern web applications.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "N",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>

          </div>

          <div className="course-card">
            <h3>Python</h3>
            <h4>Full Stack Development</h4>
            <p>
              Learn Python programming, Django, Flask,
              Data Science and ML with real-world projects.
            </p>

            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>

            <div className="card-buttons">
              <Link to="/pythonsyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Python Full Stack Development",
                        description:
                          "Learn Python programming, Django, Flask, Data Science and ML with real-world projects.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "P",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>

          <div className="course-card">
            <h3>Oracle DBA</h3>
            <h4>Course Modules</h4>
            <p>
              Master database architecture, administration, backup,
              recovery, and performance tuning with Oracle Database.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>
            <div className="card-buttons">
              <Link to="/oracledbasyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Oracle DBA",
                        description:
                          "Master database architecture, administration, backup, recovery, and performance tuning with Oracle Database.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "O",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>

          <div className="course-card">
            <h3>Oracle SQL Developer</h3>
            <h4>Course Modules</h4>
            <p>
              Learn to design, create, and manage relational databases using
              advanced SQL queries and PL/SQL programming.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>
            <div className="card-buttons">
              <Link to="/oraclesqlsyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Oracle SQL Developer",
                        description:
                          "Learn to design, create, and manage relational databases using advanced SQL queries and PL/SQL programming.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "S",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>

          <div className="course-card">
            <h3>Application Support</h3>
            <h4>IT Operations</h4>
            <p>
              Gain expertise in maintaining, troubleshooting, and supporting
              enterprise applications in production environments.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>
            <div className="card-buttons">
              <Link to="/appsupportsyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Application Support Full Stack",
                        description:
                          "Gain expertise in maintaining, troubleshooting, and supporting enterprise applications in production environments.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "A",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>

          <div className="course-card">
            <h3>Linux Administration</h3>
            <h4>Course Modules</h4>
            <p>
              Master Linux system administration, shell scripting, networking,
              security, and server management.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>
            <div className="card-buttons">
              <Link to="/linuxadminsyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Linux Administration",
                        description:
                          "Master Linux system administration, shell scripting, networking, security, and server management.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "L",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>

          <div className="course-card">
            <h3>Software Testing</h3>
            <h4>QA & Automation</h4>
            <p>
              Learn manual testing methodologies and automated testing using
              Selenium, JUnit, and modern CI/CD tools.
            </p>
            <div className="course-info">
              <span>
                <Clock3 size={18} color="#38bdf8" /> 6 Months
              </span>
              <span>
                <FolderKanban size={18} color="#38bdf8" /> Live Projects
              </span>
              <span>
                <BadgeCheck size={18} color="#38bdf8" /> Certification
              </span>
            </div>
            <div className="card-buttons">
              <Link to="/softwaretestingsyllabus">
                <button className="outline-btn">View Details</button>
              </Link>
              <button
                className="filled-btn"
                type="button"
                onClick={() =>
                  navigate("/enroll", {
                    state: {
                      course: {
                        title: "Software Testing Full Stack",
                        description:
                          "Learn manual testing methodologies and automated testing using Selenium, JUnit, and modern CI/CD tools.",
                        duration: "6 Months",
                        skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
                        technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
                        iconLetter: "T",
                      },
                    },
                  })
                }
              >
                Enroll Now →
              </button>
            </div>
          </div>
          {itCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;