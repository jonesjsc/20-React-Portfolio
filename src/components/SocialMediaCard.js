import React, { Fragment } from "react";
function SocialMediaCard(props) {
  return (
    <Fragment>
      <a href={props.url}>{props.tag}</a>
      <span> </span>
    </Fragment>
  );
}

export default SocialMediaCard;
