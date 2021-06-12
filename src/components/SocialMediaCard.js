import React from "react";
function SocialMediaCard(props) {
  return (
    <div>
      <a href={props.url}>{props.tag}</a>
    </div>
  );
}

export default SocialMediaCard;
