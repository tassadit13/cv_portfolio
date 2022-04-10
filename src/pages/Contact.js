import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contacter moi </h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Bordeaux</span>
            </li>

            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0752245095">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("telecharger copié");
                  }}
                >
                  06 42 84 42 84
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              <CopyToClipboard text="sadountassadit@yahoo.fr">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("email  copié");
                  }}
                >
                  sadountassadit@yahoo.fr
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        <div className="socialNetwork">
          <ul>
            <a
              href="https://wwww.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>github</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a
              href="https://wwww.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a
              href="https://wwww.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>github</h4>
              <i className="fab fa-twitter"></i>
            </a>

            <a
              href="https://wwww.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>github</h4>
              <i className="fab fa-codepen"></i>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
