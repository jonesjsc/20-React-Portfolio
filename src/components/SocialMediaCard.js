import React from "react";
function SocialMediaCard(props) {
  return (
    <div>
      {props.tag}
      {props.url}
    </div>
  );
}

export default SocialMediaCard;
