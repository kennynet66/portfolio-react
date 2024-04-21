import "./App.css";
import logo from "./assets/logo.png";
import me from "./assets/me.png";
import appTest from "./assets/application-testing.svg";
import sunIcon from "./assets/sun.png";
import moonIcon from "./assets/moon.png";
import { useState } from "react";

function App() {
  // States
  const [icon, setIcon] = useState();
  const [year, setYear] = useState();

  window.onload = () => {
    let mode = localStorage.getItem("mode");
    // mode = JSON.parse(mode);
    if (mode == "dark") {
      document.body.classList = "darktheme";
      setIcon(sunIcon);
    } else if (mode == "light") {
      document.body.classList.remove("darktheme");
      setIcon(moonIcon);
    } else {
      document.body.classList.remove("darktheme");
      setIcon(moonIcon);
    }

    const d = new Date();
    const yearSpan = (document.querySelector(".year").textContent =
      d.getFullYear());
  };

  // Make the back to top button to only appear then the page is scrolled
  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    var scrollToTopBtn = document.getElementById("to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollToMyWork = () => {
    const myWorkSection = document.getElementById("mywork");
    myWorkSection.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => {
    if (document.body.classList == "darktheme") {
      localStorage.setItem("mode", "light");
      document.body.classList.toggle("darktheme");
      setIcon(moonIcon);
    } else {
      localStorage.setItem("mode", "dark");
      document.body.classList.toggle("darktheme");
      setIcon(sunIcon);
    }
  };

  const openMenu = () => {
    const menuBtn = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    menuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
  }

  return (
    <>
      <nav>
        <img src={logo} alt="logo" id="logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Contact me</li>
          <li>About me</li>
          <li onClick={scrollToMyWork}>My work</li>
          <li>Blog</li>
        </ul>
        <div className="menu-button" onClick={openMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <img src={icon} onClick={toggleTheme} id="icon" alt="" />
      </nav>
      <div className="content">
        <div className="about-me">
          <h1>I'm Kenedy Maina</h1>
          <p>
            This is my official portfolio website to showcase my works related
            to Quality Assuarance Engineering/Testing and Web Development.
          </p>
          <button className="download-btn">Download Resume</button>
        </div>
        <div className="illustrations">
          <div className="parent-div"></div>
          <div className="child-div">
            {/* <!-- <img src="./Images/undraw_programming_re_kg9v.svg" alt=""> --> */}
            <img src={me} alt="" />
          </div>
        </div>
      </div>
      <section id="mywork">
        <h1>My work</h1>
        <div className="cards">
          <div className="card">
            <img src={appTest} alt="" />
            <div className="card-body">
              <h2>Jest unit tests</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                aliquam?
              </p>
              <button className="link">View code</button>
            </div>
          </div>
          <div className="card">
            <img src={appTest} alt="" />
            <div className="card-body">
              <h2>Jasmine unit tests</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                aliquam?
              </p>
              <button className="link">View code</button>
            </div>
          </div>
          <div className="card">
            <img src={appTest} alt="" />
            <div className="card-body">
              <h2>Cypress E2E tests</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
                aliquam?
              </p>
              <button className="link">View code</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about-me">
        <h1>About me</h1>
      </section>
      <section id="contact">
        <h1>Contact me</h1>
      </section>
      <a className="to-top" id="to-top" onClick={scrollToTop}>
        Back to top
      </a>
      <footer>
        <a href="https://academy.hackthebox.com/achievement/1268035/15"></a>
        <p>
          Kenedy Maina <span>&#169;</span>
          <span className="year"></span>
        </p>
      </footer>
    </>
  );
}

export default App;
