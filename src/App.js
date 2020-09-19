import React from 'react';
import './assets/styles/styles.scss';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer'
import { FullPage, Slide } from 'react-full-page';

function App() {
  return (
    <div className="App">
      <FullPage controls={false}>
        <Slide>
          <Header title="Karolina Guzik" subtitle="Front-End Developer" text="I have 2 years of experience working as a Front-End Developer / Web Developer. I worked mainly with HTML5, Sass, Bootstrap, WordPress and JavaScript technologies. I am currently learning ReactJS,  on which I would like to focus the next step in my career."/>
        </Slide>
        <Slide>
          <Slider title="My projects"/>
        </Slide>
        <Footer/>
      </FullPage>
    </div>
  );
}

export default App;
