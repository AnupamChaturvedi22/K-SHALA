import React from "react";
import CourseCatalog from "../components/CourseCatalog";
import { mechanicalCourses } from "../data/courseCatalog";

const MechanicalCourses = () => (
  <CourseCatalog
    tag="MECHANICAL ENGINEERING TRAINING"
    intro="Industry-focused mechanical training programs covering CAD, 3D modeling, assembly design and GD&T for a successful engineering career."
    sectionTitle="Explore Our Mechanical Training Programs"
    sectionDesc="Choose from industry-relevant courses and build practical engineering skills"
    courses={mechanicalCourses}
  />
);

export default MechanicalCourses;