import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.socials.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li style={{color:"white"}}>&copy; Copyright 2019 Yunus Emre</li>
              <li style={{color:"#f06000"}}>
                Designed by{" "}
                <a style={{color:"white"}} title="yes" href="mailto:ysert2005@gmail.com">
                  YES
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <Link
              className="smoothscroll"
              title="Back to Top"              
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i className="icon-up-open"></i>
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
