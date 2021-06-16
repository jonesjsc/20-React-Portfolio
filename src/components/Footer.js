import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <Row className='col-sm-12 d-flex justify-content-around'>
      <h3>
        <ul className='list-group list-group-horizontal'>
          <li className='list-group-item border-0'>
            <a href='mailto: jason.e.jones@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </li>
          <li className='list-group-item border-0'>
            <a href='https://www.linkedin.com/in/backupbbq/'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li className='list-group-item border-0'>
            <a href='https://github.com/jonesjsc'>
              <FontAwesomeIcon icon={faGithub} />
              <i class='far fa-file-pdf'></i>
            </a>
          </li>
          <li className='list-group-item border-0'>
            <a href='./assets/Jason Jones May 2021.pdf'>
              <FontAwesomeIcon icon={faFilePdf} />
            </a>
          </li>
        </ul>
      </h3>
    </Row>
  );
}
export default Footer;
