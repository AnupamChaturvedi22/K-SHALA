import React from "react";
import CourseCatalog from "../components/CourseCatalog";
import { civilCourses } from "../data/courseCatalog";

const CivilCourses = () => (
  <CourseCatalog
    tag="CIVIL ENGINEERING TRAINING"
    intro="Industry-focused civil design programs covering building design, structural analysis, BIM and estimation for a successful engineering career."
    sectionTitle="Explore Our Civil Training Programs"
    sectionDesc="Choose from industry-relevant courses and build practical civil engineering skills"
    courses={civilCourses}
  />
);

export default CivilCourses;