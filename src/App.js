import React, { Component } from 'react';
import './App.css';
import Photo from './images/photo.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <div className="NameAndPhoto">
            <img className="PhotoMobile" src={Photo} alt="photo"/>
            <div className="Name">Alexander Utrobin</div>
            <img className="PhotoDesktop" src={Photo} alt="photo"/>
          </div>
          <div className="ItemWrapper">
            <div className="Title">About</div>
            <div className="Description">
              <div className="DescriptionItem">City: Moscow</div>
              <div className="DescriptionItem">Date of Birth: 11.08.1995</div>
              <div className="DescriptionItem">Telegram: @alexanderutrobin</div>
              <div className="DescriptionItem">Tel: +7(916)223-07-97</div>
              <div className="DescriptionItem">Email: alexanderutrobin11@gmail.com</div>
              <div className="DescriptionItem">
                <a href="https://www.facebook.com/alexanderutrobin11" target="_blank">Facebook</a>
              </div>
              <div className="DescriptionItem">
                <a href="https://github.com/alexanderutrobin11" target="_blank">Github</a>
              </div>
            </div>
          </div>
          <div className="ItemWrapper">
            <div className="Title">Work Experience</div>
            <div className="Description">
              <div className="DescriptionExperienceItem">
                <div className="Date">February 2019 - Currently</div>
                <div className="CompanyName">Relap.io</div>
                <div className="Position">Frontend Developer</div>
                <div className="CompanyDescription">- Introduced Jest units and integration tests</div>
                <div className="CompanyDescription">- Implemented library for graphs</div>
                <div className="CompanyDescription">- Setting up webpack and babel</div>
              </div>
              <div className="DescriptionExperienceItem">
                <div className="Date">January 2018 - January 2019</div>
                <div className="CompanyName">Std127.io</div>
                <div className="Position">Co-founder and Frontend Developer</div>
                <div className="CompanyDescription">- Implemented code style and CI / CD</div>
                <div className="CompanyDescription">- Optimized interface design process</div>
                <div className="CompanyDescription">- Introduced a set of tools for optimizing web applications</div>
                <div className="CompanyDescription">- Designed component architecture and interface state on React and Redux for large projects</div>
              </div>
              <div className="DescriptionExperienceItem">
                <div className="Date">June 2017 - November 2017</div>
                <div className="CompanyName">Accenture</div>
                <div className="Position">Frontend Developer</div>
                <div className="CompanyDescription">- Released interfaces for the corporate solutions</div>
                <div className="CompanyDescription">- Participated in the Code Review</div>
              </div>
              <div className="DescriptionExperienceItem">
                <div className="Date">September 2016 - May 2017</div>
                <div className="CompanyName">Higher School of Economics</div>
                <div className="Position">Assistant of the Department of Business Analytics</div>
                <div className="CompanyDescription">- Conducted programming seminars for junior courses</div>
                <div className="CompanyDescription">- Implemented new tests methodics</div>
              </div>
            </div>
          </div>
          <div className="ItemWrapper">
            <div className="Title">Education</div>
            <div className="Description">
              <div className="DescriptionItem">Economics and Mathematics Lyceum 29 (Izhevsk, 2013)</div>
              <div className="DescriptionItem">Higher School of Economics, Bachelor of Business Informatics (Moscow, 2017)</div>
            </div>
          </div>
          <div className="ItemWrapper">
            <div className="Title">Skills</div>
            <div className="Description">
              <div className="DescriptionItem">JavaScript, React, Redux, ReduxThunk, DOM, HTTP, Preact, Typescript</div>
              <div className="DescriptionItem">CSS, SCSS, SASS, JSS, PostCSS</div>
              <div className="DescriptionItem">NodeJS, ExpressJS, REST</div>
              <div className="DescriptionItem">SQL, MongoDB, GraphQL</div>
              <div className="DescriptionItem">Webpack, Gulp, Babel</div>
              <div className="DescriptionItem">Jest</div>
              <div className="DescriptionItem">Figma, Sketch</div>
              <div className="DescriptionItem">Git, GitHub, GitLab, GitFlow</div>
              <div className="DescriptionItem">Eslint, Prettier, Lodash, Bash</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
