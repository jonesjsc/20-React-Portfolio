import React from "react";
function SkillsCard(props) {
  return (
    <div>
      {props.area}
      {props.skillSet.map((skill, index) => (
        <li key={skill.name + index}>{skill.name}</li>
      ))}
    </div>
  );
}

export default SkillsCard;
