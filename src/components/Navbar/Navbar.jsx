import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>Shadi Registrar</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rishtas">Rishtas</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li className="social-media-button">
              <Link to="/login">Login</Link>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React from "react";

// import { Link } from "react-router-dom";

// import M from "materialize-css";

// function Navbar() {
//   document.addEventListener("DOMContentLoaded", function () {
//     var elems = document.querySelectorAll(".sidenav");
//     var instances = M.Sidenav.init(elems, {});
//   });
//   return (
//     <div>
//       <nav>
//         <div className="nav-wrapper" style={{ backgroundColor: "#001115" }}>
//           <Link to="/" className="brand-logo" style={{ fontSize: "15px" }}>
//             Shadi Registerar
//           </Link>
//           <a href="#" data-target="mobile-demo" className="sidenav-trigger">
//             <i className="material-icons">menu</i>
//           </a>
//           <ul className="right hide-on-med-and-down">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/rishtas">Rishtas</Link>
//             </li>
//             <li>
//               <Link to="/pricing">Pricing</Link>
//             </li>
//             <li>
//               <Link to="/how-it-works">How It Works?</Link>
//             </li>

//             <li>
//               <Link to="/login-page">Login</Link>
//             </li>
//             <li>
//               <Link to="/post-rishtas" className="purple darken-2 btn">
//                 Post Rishta
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       <ul className="sidenav  sidenav-close" id="mobile-demo">
//         <li>
//           <Link to="/" className="brand-logo">
//             Shadi Registerar
//           </Link>
//         </li>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/rishtas">Rishtas</Link>
//         </li>
//         <li>
//           <Link to="/pricing">Pricing</Link>
//         </li>
//         <li>
//           <Link to="/how-it-works">How It Works?</Link>
//         </li>
//         <li>
//           <Link to="/login-page">Login</Link>
//         </li>
//         <li>
//           <Link to="/post-rishtas" className="purple darken-2 btn">
//             Post Rishta
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Navbar;
