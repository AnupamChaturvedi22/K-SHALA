import React from "react";
import CourseCatalog from "../components/CourseCatalog";
import { mechanicalCourses } from "../data/courseCatalog";

const MechanicalCourses = () => (
  <CourseCatalog
    tag="MECHANICAL & CIVIL DESIGN TRAINING"
    intro="Industry-focused design training programs covering CAD, 3D modeling, structural design and BIM for a successful engineering career."
    sectionTitle="Explore Our Mechanical & Civil Design Programs"
    sectionDesc="Choose from industry-relevant courses and build practical engineering skills"
    courses={mechanicalCourses}
  />
);

export default MechanicalCourses;