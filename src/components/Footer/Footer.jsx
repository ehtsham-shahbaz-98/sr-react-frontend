import React from "react";

import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer
      className={
        location.pathname === "/dashboard" ||
        location.pathname === "/post-rishtas" ||
        location.pathname === "/rishtas" ||
        location.pathname === "/new-profile" ||
        location.pathname === "/final-profile" ||
        location.pathname === "/feedback" ||
        location.pathname === "/feedback/" ||
        location.pathname === "/sign-up" ||
        location.pathname === "/login-page"
          ? `hide`
          : `page-footer`
      }
      style={{
        background: "purple",
        marginTop: "-20px",
      }}
    >
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Shadi Registerar</h5>
            <p class="grey-text text-lighten-4">
              You can use rows and columns here to organize your footer content.
            </p>
          </div>
          <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Links</h5>
            <ul>
              <li>
                <Link class="grey-text text-lighten-3" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="grey-text text-lighten-3" to="/rishtas">
                  Rishtas
                </Link>
              </li>
              <li>
                <Link class="grey-text text-lighten-3" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link class="grey-text text-lighten-3" to="/how-it-works">
                  How it works?
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          © 2021 shadiregistrar. All rights reserved
          <div class="row">
            <Link class="grey-text text-lighten-4 right" to="/how-it-works">
              {" "}
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
