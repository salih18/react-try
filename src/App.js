import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Portfolio from "./Components/Portfolio";
import baseUrl from "./utils/baseUrl";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      loading: true,
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  async getResumeData() {
    this.setState({ loading: true });
    const url = baseUrl + "/mains";
    const response = await fetch(url);
    const result = await response.json();
    this.setState({ resumeData: result[0] });
    this.setState({ loading: false });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return this.state.loading ? (
      <h2>Loading ...</h2>
    ) : (
      <div className="App">
        <Header data={this.state.resumeData} />
        <About data={this.state.resumeData} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio
          data={this.state.resumeData.portfolio}
          gallery={this.state.resumeData.galleries}
        />
        <Testimonials data={this.state.resumeData.comment} />
        <Contact data={this.state.resumeData} />
        <Footer data={this.state.resumeData} />
      </div>
    );
  }
}

export default App;
