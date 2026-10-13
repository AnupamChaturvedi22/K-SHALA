import React from "react";
import CourseCatalog from "../components/CourseCatalog";
import { medicalCourses } from "../data/courseCatalog";

const MedicalCourses = () => (
  <CourseCatalog
    tag="MEDICAL & HEALTHCARE TRAINING"
    intro="Career-oriented healthcare programs that prepare you for roles in pharmacy, medical coding, billing and healthcare analytics."
    sectionTitle="Explore Our Medical Training Programs"
    sectionDesc="Choose from industry-relevant courses and start your healthcare career"
    courses={medicalCourses}
  />
);

export default MedicalCourses;