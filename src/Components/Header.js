import React, { Component, Fragment } from "react";
import ParticlesBg from "particles-bg";
import { Link, animateScroll as scroll } from "react-scroll";
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var animationType = this.props.data.animation.type;
      var city = this.props.data.address.city;
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
      <Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
              Show navigation
            </a>
            <a className="mobile-btn" href="#home" title="Hide navigation">
              Hide navigation
            </a>

            <ul id="nav" className="nav">
              <li className="current">
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Hakkimda
                </Link>
              </li>
              <li>
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Ozgecmis
                </Link>
              </li>
              <li>
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Calismalarim
                </Link>
              </li>
              <li>
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Gorusler
                </Link>
              </li>
              <li>
                <Link
                  className="smoothscroll"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Iletisim
                </Link>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Merhaba</h1>
              <h2 className="responsive-headline">{name}</h2>

              <h3>
                <span>{occupation}</span> {description}
              </h3>
              <hr />
              <ul className="social">{networks}</ul>
            </div>
          </div>

          <p className="scrolldown">
            <Link
              className="smoothscroll"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <i className="icon-down-circle"></i>
            </Link>
          </p>
        </header>
        <ParticlesBg type={animationType} bg={true} />
      </Fragment>
    );
  }
}

export default Header;
