import React from "react";
function SkillsCard(props) {
  return (
    <div>
      {props.area}
      {props.skillSet.map((skill, index) => (
        <li key={skill.name + index} className='pl-1 mt-1'>
          <small>{skill.name}</small>
        </li>
      ))}
    </div>
  );
}

export default SkillsCard;
