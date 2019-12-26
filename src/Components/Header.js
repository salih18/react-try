import React, { Component, Fragment } from 'react';
import ParticlesBg from 'particles-bg';
class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network) {
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
                <a className="smoothscroll" href="#home">
                  Anasayfa
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#about">
                  Hakkimda
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#resume">
                  Ozgecmis
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#portfolio">
                  Calismalarim
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#testimonials">
                  Gorusler
                </a>
              </li>
              <li>
                <a className="smoothscroll" href="#contact">
                  Iletisim
                </a>
              </li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">Merhaba</h1>
              <h2 className="responsive-headline">{name}</h2>

              <h3>
                <span>{occupation}</span>. {description}.
              </h3>
              <hr />
              <ul className="social">{networks}</ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
        <ParticlesBg type="circle" bg={true} />
      </Fragment>
    );
  }
}

export default Header;
