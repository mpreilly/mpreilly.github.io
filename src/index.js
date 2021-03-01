import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import ReactFullpage from '@fullpage/react-fullpage';
import { Container , Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    // licenseKey = {'YOUR_KEY_HERE'}
    // scrollingSpeed = {1000} /* Options here */

    render={({ state, fullpageApi }) => {
      var colors = ['#003057', '#B3A369']

      return (
        <ReactFullpage.Wrapper>
          
          <div className="section" id="section1">
            <div id="name-container">
              <h1 id="main-name">Michael Reilly</h1>
            </div>
            <div id="quote-container">
              <h5 id="quote">"Simplicity is the ultimate sophistication"</h5>
            </div>
          </div>

          <Container className="section" id="section2">
            <h1 id="sec2title">Mike at Georgia Tech</h1>
            <Row id="statrow">
              <Col id="statcol1">
                <h2 class="colTitle" id="col1Title">Student</h2>
                <p>3.93 Cumulative GPA</p>
                <p>Internships at The Home Depot & BlackRock</p>
                <p>Graduated in 3.5 years</p>
              </Col>
              <Col id="statcol2">
                <h2 class="colTitle" id="col2Title">Athlete</h2>
                <p>Cross Country and Track & Field</p>
                <p>4:08 Mile</p>
                <p>~2600 Miles per Year</p>
              </Col>
            </Row>
            <p id="bonus-stat">3-time ACC Academic Honor Roll</p>
          </Container>

          <div className="section" id="project">
            <h2 id="project-title">Personal Project: Jeopardy!</h2>
            <h4>Play Jeopardy with the questions from full past games!</h4>
            <p>I threw this together one finals week when I didn't have any exams.</p>
            <hr />
            <h5>Allows for separate devices to join the same game, using game code:</h5>
            <ul>
              <li>Game board to be displayed on a TV or Zoom chat, for example</li>
              <li>3 players, with functioning real-time buzzers</li>
              <li>A "Trebek" screen for a host to see the answers and determine if players are correct</li>
            </ul>
            <form target="_blank" className="jeopardy-buttons" action="https://mpreilly.github.io/jeopardy/">
              <input type="submit" value="Go to Jeopardy" />
            </form>
            <form target="_blank" className="jeopardy-buttons" action="https://github.com/mpreilly/jeopardy">
              <input type="submit" value="See on Github" />
            </form>
          </div>

          <div className="section" id="photo-section">
            <div class="square img_3-3" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_3-1" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-3" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_1-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-2" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-1" style={{backgroundColor:'#B3A369'}} />

            <div class="square img_2-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-2" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-1" style={{backgroundColor:'#003057'}} />
            <div class="square img_1-3" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_3-1" style={{backgroundColor:'#003057'}} />
            <div class="square img_1-2" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_3-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_1-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-3" style={{backgroundColor:'#003057'}} />


            <div class="square img_1-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-1" style={{backgroundColor:'#003057'}} />
            <div class="nameBox" >
              <h1 id="name">Michael Reilly </h1>
              <p id="gtcs">Georgia Tech Computer Science Graduate</p>
            </div>
            <div class="square img_2-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-2" style={{backgroundColor:'#003057'}} />

            <div class="square img_1-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_1-3" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-1" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-2" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_3-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-3" style={{backgroundColor:'#B3A369'}} />

            <div class="square img_3-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_2-2" style={{backgroundColor:'#003057'}} />
            <div class="square img_2-3" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-1" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-2" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-3" style={{backgroundColor:'#003057'}} />
            <div class="square img_3-1" style={{backgroundColor:'#B3A369'}} />
            <div class="square img_1-2" style={{backgroundColor:'#003057'}} />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.render(<Fullpage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
