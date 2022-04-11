import React from "react";
import "./SectionHeading.scss"
function SectionHeading({ title, desc }) {
  return (
    <div className="section-heading">
      <h3>{title}</h3>
      <p className="text-center">{desc}</p>
    </div>
  );
}

export default SectionHeading;
