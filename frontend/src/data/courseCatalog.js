// Course cards shown on the three Services pages.
// "slug" must match a key in syllabi.js — it powers the "View Details" link (/syllabus/:slug).
// Durations are placeholders (6 Months, same as your existing IT cards) — edit as needed.

const make = (slug, title, subtitle, description, letter, duration = "6 Months") => ({
  slug,
  title,
  subtitle,
  description,
  letter,
  duration,
  syllabusPath: `/syllabus/${slug}`,
});

// ---------- IT COURSES (these are ADDED to the courses already on ServicesPage) ----------
export const itCourses = [
  make(
    "ai-ml",
    "AI & ML",
    "Artificial Intelligence & Machine Learning",
    "Learn Python, statistics, machine learning, deep learning, NLP and Generative AI with real-world projects.",
    "A"
  ),
  make(
    "business-analysis",
    "Business Analysis",
    "BRD, Agile & Power BI",
    "Master requirement gathering, BRD/FRD, UML, SQL, Agile/Scrum, JIRA and Power BI dashboards.",
    "B"
  ),
  make(
    "cloud-computing",
    "Cloud Computing",
    "AWS, Azure & Kubernetes",
    "Build cloud skills with AWS, Azure, Linux, Docker, Kubernetes, Terraform and cloud security.",
    "C"
  ),
  make(
    "cybersecurity",
    "Cybersecurity",
    "SOC, SIEM & Ethical Hacking",
    "Learn networking, ethical hacking, VAPT, SOC operations, SIEM, incident response and cloud security.",
    "S"
  ),
  make(
    "data-analytics",
    "Data Analytics",
    "Excel, SQL, Power BI & Tableau",
    "Analyse data with Excel, SQL, Python, statistics, Power BI and Tableau through live dashboards.",
    "D"
  ),
  make(
    "data-science",
    "Data Science",
    "Python, ML & Deployment",
    "Learn Python, statistics, data visualization, machine learning, deep learning and model deployment.",
    "D"
  ),
  make(
    "devops",
    "DevOps",
    "CI/CD, Docker & Kubernetes",
    "Master Linux, Git, AWS, Docker, Kubernetes, Jenkins, Terraform, Ansible and monitoring tools.",
    "O"
  ),
  make(
    "it-incident-management",
    "IT Incident Management",
    "ITIL, ServiceNow & RCA",
    "Learn ITIL, ServiceNow, monitoring with Splunk & Dynatrace, problem and change management.",
    "I"
  ),
  make(
    "mobile-development",
    "Mobile Development",
    "Android, Flutter & Firebase",
    "Build Android and Flutter apps with Kotlin, Dart, REST APIs, Firebase and Play Store deployment.",
    "M"
  ),
];

// ---------- MECHANICAL COURSES ----------
export const mechanicalCourses = [
  make(
    "mechanical-design",
    "Mechanical Design",
    "AutoCAD, SolidWorks, CATIA & Creo",
    "Learn engineering drawing, 2D/3D modeling, assembly design, GD&T and machine design with live projects.",
    "M"
  ),
];

// ---------- CIVIL COURSES ----------
export const civilCourses = [
  make(
    "civil-design",
    "Civil Design",
    "AutoCAD, Revit, STAAD.Pro & ETABS",
    "Learn building design, AutoCAD, Revit BIM, structural analysis with STAAD.Pro/ETABS and quantity estimation.",
    "C"
  ),
];

// ---------- MEDICAL COURSES ----------
export const medicalCourses = [
  make(
    "pharmacy-medical-coding",
    "Pharmacy, Medical Coding & AI",
    "ICD-10-CM, CPT & Medical Billing",
    "Learn pharmacy fundamentals, ICD-10-CM / CPT / HCPCS coding, medical billing and AI-assisted healthcare workflows.",
    "P"
  ),
];