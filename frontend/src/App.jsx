import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalDotGrid from "./components/GlobalDotGrid";

// =====================
// Lazy Loaded Pages
// =====================

const Home = lazy(() => import("./Pages/Home"));

const SyllabusPage = lazy(() => import("./components/SyllabusPage"));

const ServicesPage = lazy(() =>
  import("./Pages/ServicesPage")
);

const JavaFullStackSyllabus = lazy(() =>
  import("./Pages/JavaFullStackSyllabus")
);

const OracleDBASyllabus = lazy(() =>
  import("./Pages/OracleDBASyllabus")
);

const AppSupportSyllabus = lazy(() =>
  import("./Pages/AppSupportSyllabus")
);

const LinuxAdminSyllabus = lazy(() =>
  import("./Pages/LinuxAdminSyllabus")
);

const OracleSQLSyllabus = lazy(() =>
  import("./Pages/OracleSQLSyllabus")
);

const SoftwareTestingSyllabus = lazy(() =>
  import("./Pages/SoftwareTestingSyllabus")
);

const DotNetSyllabus = lazy(() =>
  import("./Pages/DotNetSyllabus")
);

const PythonSyllabus = lazy(() =>
  import("./Pages/PythonSyllabus")
);

const MechanicalCourses = lazy(() => import("./Pages/MechanicalCourses"));
const MedicalCourses = lazy(() => import("./Pages/MedicalCourses"));
const CivilCourses = lazy(() => import("./Pages/CivilCourses"));

const PrivacyPolicy = lazy(() =>
  import("./Pages/PrivacyPolicy")
);

const TermsConditions = lazy(() =>
  import("./Pages/TermsConditions")
);

const Support = lazy(() =>
  import("./Pages/Support")
);

const Contact = lazy(() =>
  import("./Pages/Contact")
);

const About = lazy(() =>
  import("./Pages/About")
);

const EnrollmentPage = lazy(() =>
  import("./Pages/EnrollmentPage")
);

// =====================
// App Component
// =====================

function App() {
  return (
    <div className="App">

      {/* Background Animation */}
      <div
        className="bg-anim-layer"
        aria-hidden="true"
      >
        <GlobalDotGrid />
      </div>

      {/* Main Content */}
      <div className="app-content">

        <Suspense
          fallback={
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                color: "white",
                fontSize: "20px",
              }}
            >
              Loading...
            </div>
          }
        >

          <Routes>

            {/* ================= HOME ================= */}

            <Route
              path="/"
              element={<Home />}
            />

            {/* ================= SERVICES ================= */}

            <Route
              path="/servicespage"
              element={<ServicesPage />}
            />

            <Route path="/mechanical-courses" element={<MechanicalCourses />} />
            <Route path="/medical-courses" element={<MedicalCourses />} />
            <Route path="/civil-courses" element={<CivilCourses />} />

            {/* ================= IT COURSES ================= */}

            <Route
              path="/javafullstacksyllabus"
              element={<JavaFullStackSyllabus />}
            />

            <Route
              path="/oracledbasyllabus"
              element={<OracleDBASyllabus />}
            />

            <Route
              path="/appsupportsyllabus"
              element={<AppSupportSyllabus />}
            />

            <Route
              path="/linuxadminsyllabus"
              element={<LinuxAdminSyllabus />}
            />

            <Route
              path="/oraclesqlsyllabus"
              element={<OracleSQLSyllabus />}
            />

            <Route
              path="/softwaretestingsyllabus"
              element={<SoftwareTestingSyllabus />}
            />

            <Route
              path="/dotnetsyllabus"
              element={<DotNetSyllabus />}
            />

            <Route
              path="/pythonsyllabus"
              element={<PythonSyllabus />}
            />

            <Route path="/syllabus/:slug" element={<SyllabusPage />} />

            {/* ================= LEGAL PAGES ================= */}

            <Route
              path="/privacy-policy"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/terms-and-conditions"
              element={<TermsConditions />}
            />

            {/* ================= OTHER PAGES ================= */}

            <Route
              path="/support"
              element={<Support />}
            />

            <Route
              path="/contact"
              element={<Contact />}
            />

            <Route
              path="/about"
              element={<About />}
            />

            {/* ================= ENROLLMENT ================= */}

            <Route
              path="/enroll"
              element={<EnrollmentPage />}
            />

          </Routes>

        </Suspense>

      </div>
    </div>
  );
}

export default App;