import "./Home.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import {
  FaArrowRight,
  FaCheckCircle,
  FaUserGraduate,
  FaPlay,
  FaStar,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useRef, useState } from "react";
import herobg from "./images/Herobg.webp";
import logo from "./images/Main_logo.jpeg";
import applink from "./images/applink.webp";

import b1 from "./images/b1.webp";
import b2 from "./images/b2.webp";
import b3 from "./images/b3.webp";
import b52 from "./images/b52.webp";
import b6 from "./images/b6.webp";
import b7 from "./images/b7.webp";

import img1 from "./images/class1.webp";
import img2 from "./images/class2.webp";
import img3 from "./images/class3.webp";
import img4 from "./images/class4.webp";
import img5 from "./images/class5.webp";

import aboutVideo from "./video/K_Shala_Introduction_test_2_with_captions (2).mp4";

const itServices = [
  {
    title: "Java",
    subtitle: "Full Stack Development",
    img: "/javaImg.jpeg",
    link: "/javafullstacksyllabus",
  },
  {
    title: ".NET",
    subtitle: "Full Stack Development",
    img: "/dotnetImg.jpg",
    link: "/dotnetsyllabus",
  },
  {
    title: "Python",
    subtitle: "Full Stack Development",
    img: "/pythonImg.jpg",
    link: "/pythonsyllabus",
  },
  {
    title: "Oracle DBA",
    subtitle: "Course Modules",
    img: "/oracleDbaImg.jpg",
    link: "/oracledbasyllabus",
  },
  {
    title: "Oracle SQL Developer",
    subtitle: "Course Modules",
    img: "/oracleSqlImg.jpg",
    link: "/oraclesqlsyllabus",
  },
  {
    title: "Application Support",
    subtitle: "IT Operations",
    img: "/download.jpg",
    link: "/appsupportsyllabus",
  },
  {
    title: "Linux Administration",
    subtitle: "Course Modules",
    img: "/linuxImg.jpg",
    link: "/linuxadminsyllabus",
  },
  {
    title: "Software Testing",
    subtitle: "QA & Automation",
    img: "/testingImg.jpg",
    link: "/softwaretestingsyllabus",
  },
];

const featureCards = [
  {
    img: b1,
    title: <>NCERT Based <br /> Syllabus</>,
    desc: <>Complete coverage <br /> for 1st to 12th</>,
  },
  {
    img: b2,
    title: <>Live & Recorded <br /> Classes</>,
    desc: <>Learn from expert <br /> teachers</>,
  },
  {
    img: b3,
    title: <>Smart Quizzes & <br /> Tests</>,
    desc: <>AI-powered tests <br /> to evaluate skills</>,
  },
  {
    img: b52,
    title: <>Notes & PDFs</>,
    desc: <>Download important <br /> notes anytime</>,
  },
  {
    img: b6,
    title: <>Progress <br /> Tracking</>,
    desc: <>Track performance <br /> and improve</>,
  },
  {
    img: b7,
    title: <>Doubt Solving <br /> 24x7</>,
    desc: <>Get your doubts <br /> solved instantly</>,
  },
];

const classCards = [
  {
    img: img1,
    cardClass: "class-card class1-img",
    title: "1 - 2",
    subtitle: "Foundation",
    arrowClass: "arrow-btn green-arrow",
  },
  {
    img: img2,
    cardClass: "class-card class2-img",
    title: "3 - 5",
    subtitle: "Build Basics",
    arrowClass: "arrow-btn blue-arrow",
  },
  {
    img: img3,
    cardClass: "class-card class3-img",
    title: "6 - 8",
    subtitle: "Strengthen Concepts",
    arrowClass: "arrow-btn purple-arrow",
  },
  {
    img: img4,
    cardClass: "class-card class4-img",
    title: "9 - 10",
    subtitle: "Score Higher",
    arrowClass: "arrow-btn violet-arrow",
  },
  {
    img: img5,
    cardClass: "class-card class5-img",
    title: "11 - 12",
    subtitle: "Prepare for Future",
    arrowClass: "arrow-btn red-arrow",
  },
];

const Home = () => {
  const videoSectionRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="homepage">

      {/* NAVBAR */}
<nav className="navbar">




  <div className="logo">

    <div className="logo-box">
      <img
        src={logo}
        alt="K-Shala logo"
        className="logo-img"
      />
    </div>



    <div>
      <h2>K-Shala</h2>
      <p>Learn Today, Lead Tomorrow</p>
    </div>

  </div>

  {/* Burger Icon */}
  <div
    className="menu-icon"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </div>

  {/* Nav Links */}
  <ul className={menuOpen ? "nav-links active-menu" : "nav-links"}>

    <li className="active">Home</li>

    <li onClick={() => setMenuOpen(false)}>
      <Link to="/servicespage">Services</Link>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <Link to="/about">About</Link>
    </li>

    <li onClick={() => setMenuOpen(false)}>
      <Link to="/contact">Contact</Link>
    </li>

  </ul>

</nav>

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-left">

          <div className="tag">
            ⭐ India's Most Trusted Learning Platform
          </div>

          <h1>
            Learn Smarter. <br />
            Score Higher. <br />
            <span>Shape Your Future.</span>
          </h1>

          <p>
            Complete NCERT and Maharashtra Board based syllabus,
            interactive video lessons, smart quizzes, live doubt
            solving &amp; real-time progress tracking to help you
            excel in school and beyond.
          </p>

          <div className="hero-buttons">

         <Link to="/contact" className="primary-btn">
  Get Started <FaArrowRight />
</Link>

          <button
            className="secondary-btn"
            onClick={() =>
              videoSectionRef.current?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            <FaPlay /> Watch Demo
</button> 

          </div>

        </div>

        <div className="hero-right">

          <img
            className="student-img"
            src={herobg}
            alt="Hero background"
          />

        </div>

      </section>

      {/* STATS SECTION */}
<div className="stats-container">

  <div className="stat-card">
    <div className="icon purple">
      <FaStar />
    </div>
    <div className="text">
      <h2>1M+</h2>
      <p>Students Learning</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="icon pink">
      <FaPlay />
    </div>
    <div className="text">
      <h2>50K+</h2>
      <p>Video Lessons</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="icon cyan">
      <FaQuestionCircle />
    </div>
    <div className="text">
      <h2>100K+</h2>
      <p>Practice Tests</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="icon orange">
      <FaUserGraduate />
    </div>
    <div className="text">
      <h2>500+</h2>
      <p>Expert Teachers</p>
    </div>
  </div>

  <div className="stat-card">
    <div className="icon gold">
      <FaStar />
    </div>
    <div className="text">
      <h2>4.8/5</h2>
      <p>Parent Rating</p>
    </div>
  </div>

</div>




      {/* VIDEO SECTION */}
     <section
  className="about-right-section"
  ref={videoSectionRef}
>

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

</section>

      {/* FEATURES SECTION */}
     <section className="features-section">

  <h2>Everything You Need to Learn & Succeed</h2>

  <div className="marquee">
    <div className="marquee-track">
      {[...featureCards, ...featureCards].map((card, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">
            <img src={card.img} alt="" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  </div>

  
</section>
     <section className="classes-section">

      <h2>
        Explore <span>Classes</span>
      </h2>

      <div className="marquee">
        <div className="marquee-track">
          {[...classCards, ...classCards].map((card, index) => (
            <div className={card.cardClass} key={index}>
              <img src={card.img} alt="" className="img-card" />

              <div className="class-content">
                <h3>{card.title}</h3>
                <p>{card.subtitle}</p>
              </div>

              {/* <div className={card.arrowClass}>
                <FaArrowRight />
              </div> */}
            </div>
          ))}
        </div>
      </div>

    </section>

    <section className="classes-section">

  <h2>
    Explore <span>IT Services</span>
  </h2>

  <div className="marquee">
    <div className="marquee-track it-services-track">

      {[...itServices, ...itServices].map((service, index) => (

        <Link
          to={service.link}
          key={index}
          className="class-card"
          style={{ textDecoration: "none" }}
        >

          <img
            src={service.img}
            alt={service.title}
            className="img-card"
          />

          <div className="class-content">
            <h3>{service.title}</h3>
            <p>{service.subtitle}</p>
          </div>

          <div className="arrow-icon">
            <FaArrowRight />
          </div>

        </Link>

      ))}

    </div>
  </div>

</section>
<section className="download-section">

      <div className="download-left">

        <h1>
          Take Learning Anywhere <br />
          Download <span>Our App</span>
        </h1>

        <div className="features-list">

          <div className="feature-item">
            <FaCheckCircle />
            <p>Learn Offline</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Personalized Learning</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Daily Goals & Reminders</p>
          </div>

          <div className="feature-item">
            <FaCheckCircle />
            <p>Safe & Ad-Free Experience</p>
          </div>

        </div>

      </div>

      <div className="phones-section">

        <img
          src={applink}
          alt="phone"
          className="phone-img"
        />

      </div>

      <div className="download-right">

        <h3>Scan to Download</h3>

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://yourapp.com"
          alt="QR Code"
          className="qr-code"
        />





<div className="download-right">
  <a
    href="https://play.google.com/store/apps/details?id=com.kshetrapatikshala"
    target="_blank"
    rel="noopener noreferrer"
    className="store-btn"
  >
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
      alt="Google Play"
    />
  </a>

  <a
    href="https://apps.apple.com/in/app/k-shala/id6738890750"
    target="_blank"
    rel="noopener noreferrer"
    className="store-btn"
  >
    <img
      src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
      alt="App Store"
    />
  </a>
</div>






      </div>
    </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default Home;