import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import "./EnrollmentPage.css";
// const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
const API_URL = import.meta.env.VITE_API_URL || "https://k-shala.onrender.com";

const defaultCourseFallback = {
  title: "Enrollment",
  description:
    "Complete the form below to start your enrollment process with K-SHALA.",
  duration: "6 Months",
  features: ["Live Projects", "Certification"],
  skills: ["Industry-focused learning", "Hands-on practice", "Guided mentorship"],
  technologies: ["Neon-grade curriculum", "Project-based modules", "Real-world tooling"],
  iconLetter: "E",
};

const Field = ({
label,
placeholder,
value,
onChange,
type = "text",
name,
required = false,
}) => (
<label className="field">
  <span className="label">
    {label}
    {required ? <em aria-hidden="true">*</em> : null}
  </span>

  <input
    className="input"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
    name={name}
    required={required}
    autoComplete="off"
  />
</label>
);

const TextArea = ({ label, placeholder, value, onChange, name, required = false }) => (
  <label className="field">
    <span className="label">{label}{required ? <em aria-hidden="true">*</em> : null}</span>
    <textarea
className="textarea"
placeholder={placeholder}
value={value}
onChange={onChange}
name={name}
required={required}
autoComplete="off"
/>
  </label>
);

const Select = ({ label, value, onChange, options, required = false }) => (
  <label className="field">
    <span className="label">{label}{required ? <em aria-hidden="true">*</em> : null}</span>
    <select className="select" value={value} onChange={onChange}>
      <option value="" disabled>
        Select...
      </option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </label>
);
const EnrollmentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [course] = useState(
  location?.state?.course || defaultCourseFallback
);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    address: "",
    highestQualification: "",
    university: "",
    passingYear: "",
    batchTiming: "",
    heardAbout: "",
    terms: false,
    courseTitle: course?.title || "",
    });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const courseTitle = course?.title || defaultCourseFallback.title;
  // useEffect(()=>{
  //     if(courseTitle){
  //       setForm((prev) =>({
  //         ...prev,
  //         courseTitle: courseTitle,
  //       }))
  //     }
  // }, [courseTitle])
  const courseDescription = course?.description || defaultCourseFallback.description;
  const duration = course?.duration || defaultCourseFallback.duration;

  const skills = Array.isArray(course?.skills) && course.skills.length ? course.skills : defaultCourseFallback.skills;
  const technologies =
    Array.isArray(course?.technologies) && course.technologies.length
      ? course.technologies
      : defaultCourseFallback.technologies;

  const iconLetter = (course?.iconLetter || courseTitle?.charAt(0) || "E").toString().toUpperCase();

  const update = (key) => (e) => {

  const value =
    e?.target?.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  console.log(key, value);

  setForm((prev) => ({
    ...prev,
    [key]: value,
  }));
};

  const canSubmit =
    form.fullName.trim() &&
    form.email.trim() &&
    form.mobile.trim() &&
    form.dob &&
    form.gender &&
    form.address.trim() &&
    form.highestQualification.trim() &&
    form.university.trim() &&
    form.passingYear.trim() &&
    form.batchTiming &&
    form.heardAbout.trim() &&
    courseTitle &&
    form.terms;



  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log("FORM DATA:", form);
    if(!canSubmit) return;


    try {

      console.log("API_URL =", API_URL);
      console.log("Calling:", `${API_URL}/api/enroll`);

      const response = await fetch(`${API_URL}/api/enroll`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(form),
});

      // const data = await response.json();

      const text = await response.text();

      console.log("Raw Response:", text);

      let data = {};
      try {
        data = JSON.parse(text);
      } catch (e) {
        console.error("Invalid JSON:", text);
      }
      console.log("Status:", response.status);
      console.log("Response:", data);



if (response.ok && data.success) {
  setSubmitted(true);
  // alert(data.message);
} else {
  alert(data.message || "Submission Failed");
}
  }
  catch(error){
  console.error(error);
  alert("Server Error. Please try again.");
}
  }


  const chipList = (arr) => (
    <div className="chip-row">
      {arr.map((x) => (
        <span key={x} className="chip">
          {x}
        </span>
      ))}
    </div>
  );

  return (
    <div className="enroll-page">
      <div className="enroll-bg" aria-hidden="true">
        <div className="enroll-grid" />
        <div className="enroll-particles" />
        <div className="enroll-spot enroll-spot--a" />
        <div className="enroll-spot enroll-spot--b" />
      </div>

      <div className="enroll-ui">
        <div className="enroll-topbar">
          <BackButton />
        </div>

        <header className="enroll-hero" aria-labelledby="enroll-title">
          <div className="enroll-hero-left">
            <div className="enroll-title-wrap">
              <div className="enroll-kicker">K-SHALA // FUTURISTIC ENROLLMENT</div>
              <h1 className="enroll-title" id="enroll-title">
                Enroll Now
              </h1>
              <h2 className="enroll-course-name">{courseTitle}</h2>
              <p className="enroll-course-desc">{courseDescription}</p>
            </div>

            <div className="enroll-features-row" role="list">
              <div className="enroll-feature" role="listitem">
                <span className="enroll-feature-label">Duration</span>
                <span className="enroll-feature-value">{duration}</span>
              </div>
              <div className="enroll-feature" role="listitem">
                <span className="enroll-feature-label">Live Projects</span>
                <span className="enroll-feature-value">Included</span>
              </div>
              <div className="enroll-feature" role="listitem">
                <span className="enroll-feature-label">Certification</span>
                <span className="enroll-feature-value">Recognized</span>
              </div>
            </div>

            <div className="enroll-badges">
              {chipList(skills)}
            </div>
          </div>

          <div className="enroll-hero-right" aria-hidden="true">
            <div className="futuristic-illustration">
              <div className="illu-core">
                <div className="illu-ring illu-ring--1" />
                <div className="illu-ring illu-ring--2" />
                <div className="illu-ring illu-ring--3" />
                <div className="illu-icon">{iconLetter}</div>
              </div>
              <div className="illu-caption">
                <span className="illu-caption-line" />
                <span className="illu-caption-text">Premium course intake signal</span>
              </div>
              <div className="illu-tech">
                {technologies.slice(0, 3).map((t) => (
                  <span key={t} className="illu-tech-pill">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="enroll-main">
          <div className="enroll-glass-card">
            {submitted ? (
              <div className="submit-success" role="status" aria-live="polite">
                <div className="success-orb" aria-hidden="true" />
                <div className="success-title">Enrollment Submitted</div>
                <div className="success-subtitle">
                  {courseTitle} — our team will reach out shortly.
                </div>
                <div className="success-actions">
                  <button
                    type="button"
                    className="submit-btn submit-btn--secondary"
                    onClick={() => navigate("/servicespage")}
                  >
                    Back to Services
                  </button>
                </div>
              </div>
            ) : (
              <form
  className="enroll-form"
  onSubmit={(e) => {
    e.preventDefault();
    handleSubmit(e);
  }}
>
                <section className="form-section">
                  <div className="section-header">
                    <div className="section-title">SECTION 1 — Personal Information</div>
                    <div className="section-divider" />
                  </div>

                  <div className="fields-grid">
                    <Field
                      label="Full Name"
                      placeholder="e.g. John Doe"
                      value={form.fullName}
                      onChange={update("fullName")}
                      required
                      name="fullName"
                    />
                    <Field
                      label="Email Address"
                      placeholder="e.g. john@email.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                      name="email"
                      type="email"
                    />
                    <Field
                      label="Mobile Number"
                      placeholder="e.g. +91 98765 43210"
                      value={form.mobile}
                      onChange={update("mobile")}
                      required
                      name="mobile"
                      type="tel"
                    />
                    <Field
                      label="Date of Birth"
                      value={form.dob}
                      onChange={update("dob")}
                      required
                      name="dob"
                      type="date"
                    />
                    <Select
                      label="Gender"
                      value={form.gender}
                      onChange={update("gender")}
                      required
                      options={[
                        { value: "Male", label: "Male" },
                        { value: "Female", label: "Female" },
                        { value: "Other", label: "Other" },
                      ]}
                    />
                    <TextArea
                      label="Address"
                      placeholder="Enter your full address"
                      value={form.address}
                      onChange={update("address")}
                      required
                      name="address"
                    />
                  </div>
                </section>

                <section className="form-section">
                  <div className="section-header">
                    <div className="section-title">SECTION 2 — Educational Information</div>
                    <div className="section-divider" />
                  </div>

                  <div className="fields-grid">
                    <Select
                        label="Highest Qualification"
                        value={form.highestQualification}
                        onChange={update("highestQualification")}
                        required
                        options={[
                          { value: "10th", label: "10th" },
                          { value: "12th", label: "12th" },
                          { value: "Diploma", label: "Diploma" },
                          { value: "Undergraduate", label: "Undergraduate" },
                          { value: "Graduate", label: "Graduate" },
                          { value: "Postgraduate", label: "Postgraduate" },
                          { value: "PhD", label: "PhD" },
                          { value: "Other", label: "Other" },
                        ]}
                      />
                    <Field
                      label="University / College"
                      placeholder="e.g. ABC University"
                      value={form.university}
                      onChange={update("university")}
                      required
                      name="university"
                    />
                    <Field
                      label="Passing Year"
                      placeholder="e.g. 2024"
                      value={form.passingYear}
                      onChange={update("passingYear")}
                      required
                      name="passingYear"
                      type="number"
                    />
                  </div>
                </section>

                <section className="form-section">
                  <div className="section-header">
                    <div className="section-title">SECTION 3 — Course Information</div>
                    <div className="section-divider" />
                  </div>

                  <div className="course-info-box">
                    <div className="course-info-top">
                      <div className="course-icon" aria-hidden="true">
                        {iconLetter}
                      </div>
                      <div>
                        <div className="course-info-title">{courseTitle}</div>
                        <div className="course-info-sub">
                          Selected course payload loaded into the enrollment system.
                        </div>
                      </div>
                    </div>

                    <div className="course-info-cols">
                      <div className="course-col">
                        <div className="course-col-title">Skills covered</div>
                        {chipList(skills)}
                      </div>
                      <div className="course-col">
                        <div className="course-col-title">Technologies included</div>
                        {chipList(technologies)}
                      </div>
                    </div>
                  </div>
                </section>

                <section className="form-section">
                  <div className="section-header">
                    <div className="section-title">SECTION 4 — Batch Timing</div>
                    <div className="section-divider" />
                  </div>

                  <div className="radio-grid" role="radiogroup" aria-label="Batch timing">
                    {[
                      { value: "Morning", label: "Morning" },
                      { value: "Afternoon", label: "Afternoon" },
                      { value: "Evening", label: "Evening" },
                      { value: "Weekend", label: "Weekend" },
                    ] 
                    .map((opt, idx) => (
                      <label key={opt.value} className="radio-card">
                        <input
                          type="radio"
                          name="batchTiming"
                          value={opt.value}
                          checked={form.batchTiming === opt.value}
                          onChange={update("batchTiming")}
                        />
                        <span className="radio-label">{opt.label}</span>
                        <span className="radio-glow" aria-hidden="true" />
                        <span className="radio-index" aria-hidden="true">
                          {idx + 1}
                        </span>
                      </label>
                    ))}
                  </div>
                </section>

                <section className="form-section">
                  <div className="section-header">
                    <div className="section-title">SECTION 5 — Additional</div>
                    <div className="section-divider" />
                  </div>

                  <div className="fields-grid">
                    <Field
                      label="How did you hear about us?"
                      placeholder="e.g. Instagram / Friend / Google"
                      value={form.heardAbout}
                      onChange={update("heardAbout")}
                      required
                      name="heardAbout"
                    />

                    <label className="terms-row">
                      <input
                        type="checkbox"
                        checked={form.terms}
                        onChange={update("terms")}
                      />
                      <span className="terms-text">
                        I agree to the <a href="/terms-and-conditions" target="_self" rel="noreferrer">Terms & Conditions</a>.
                        <em aria-hidden="true">*</em>
                      </span>
                    </label>
                  </div>

                  <div className="submit-row">
                    <button
                      className={`submit-btn ${canSubmit ? "submit-btn--active" : ""}`}
                      type="submit"
                      disabled={!canSubmit}
                    >
                      <span className="submit-btn-text">Submit Enrollment</span>
                      <span className="submit-btn-arrow" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5 12h12"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </button>
                    {!canSubmit ? (
                      <div className="form-hint">Complete all required fields to activate submission.</div>
                    ) : null}
                  </div>
                </section>
              </form>
            )}
          </div>
        </main>

        <div className="enroll-bottom-safe" aria-hidden="true" />
      </div>
    </div>
  );
};

export default EnrollmentPage;

