import React from 'react';
import './App.css';

var myName = "Makayla";
var myYear = 2023;
var buttonFunction = () => {console.log("Thank you for your interest in my research.");}

var phys15 = {
  dept : "PHYS",
  name : "PHYS 15: Honors Introductory Physics I",
  prof : "Robyn Millan",
  grade : "A",
  term : "19F",
  size : 25,
  distrib : "SLA, SCI"
}

var span9 = {
  dept : "SPAN",
  name : "SPAN 9: Culture and Conversation",
  prof : "Beatriz Pastor",
  grade : "A-",
  term : "19F",
  size : 18,
  distrib : "n/a"
}

var cosc10 = {
  dept : "COSC",
  name : "COSC 10: Problem-Solving via Object Oriented Programming",
  prof : "Timothy Pierson",
  grade : "A",
  term : "19F",
  size : 55,
  distrib : "TLA, TAS"
}

var writ5 = {
  dept : "WRIT",
  name : "WRIT 5: Gender and the Holocaust",
  prof : "Phyllis Deutsch",
  grade : "A",
  term : "20W",
  size : 16,
  distrib : "n/a"
}

var phys16 = {
  dept : "PHYS",
  name : "PHYS 16: Honors Introductory Physics II",
  prof : "Yi-Hsin Liu",
  grade : "A-",
  term : "20W",
  size : 10,
  distrib : "SLA, SCI"
}

var phys82 = {
  dept : "PHYS",
  name : "PHYS 82.02: Introductory Mathematical Methods for Physicists",
  prof : "Alexander Smith",
  grade : "A",
  term : "20W",
  size : 12,
  distrb : "QDS"
}

var phys40 = {
  dept : "PHYS",
  name : "PHYS 40: Quantum Physics of Matter",
  prof : "Roberto Onofrio",
  grade : "tbd",
  term : "20S",
  size : 20,
  distrib : "SCI"
}

var mus6 = {
  dept : "MUS",
  name : "MUS 6: Masterpieces of Western Music",
  prof : "Diane Belcher",
  grade : "tbd",
  term : "20S",
  size : 18, 
  distrib : "ART, W"
}

var astr15 = {
  dept : "ASTR",
  name : "ASTR 15: Stars and the Milky Way",
  prof : "Elizabeth Newton",
  grade : "tbd",
  term : "20S",
  size : 40,
  distrib : "SCI"
}

var ling7 = {
  dept : "LING",
  name : "LING 7: Conversational Style",
  prof : "David Peterson",
  grade : "tbd",
  term : "20S",
  size : 16,
  distrib : "SOC, CI"
}

var myClasses = [phys15, span9, cosc10, writ5, phys16, phys82, phys40, mus6, astr15, ling7]; //myClasses is a list
var classMap = myClasses.map(
  (name) => {
    return <p className="classNames">{name.name}</p>;
  }
)

var mySubjects = ["PHYSICS and ASTRONOMY", "COMPUTER SCIENCE", "HUMANITIES", "MUSIC"]
var subjectMap = mySubjects.map(
  (name) => {
    return <p className="subjectNames">{name}</p>
  }
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <head>
          <title>Makayla's webpage</title>
        </head>
        <body>
        

        <div className="subjectContainer">
            MY DARTMOUTH PORTFOLIO
          </div>

          <h1>About Me</h1>
          <p>Hi I'm Makayla, and I am a Dartmouth '23!</p>
          <img src="https://lh3.googleusercontent.com/8yvWScIN3nbKIA2zfWUsTO6-zqN0QCYHaLAUUO2p_QIOtV-jmKF1E3TzHLUDyndhHXQTml8mOZ1FWK39qjMZj93jcDRVomO551b4HPpVPObziFo5YC_r7pKNS5HFV6PkcGefbYBIOiehZbFAOerxlL--cpnDRDvUMyYjn2r4oGCHpFWSu_bxdEFtI1jbbpgB26T8ll_ouDuWYc5IzGNVP96mM6aT-a7aLMUcbz4ovqCorh2MFaNVF01nvDalklo1wuXKRozyMsLjFKsMJGUK6hSTlnpkxfkHLghPkM7yLTehDib9fH6_fACfBHcCgi-W1RsEE3yxPbt5rAsIqEoitNYHGx4sfIrnkorcHf3ZGdPLuuvPP6L0r-SnLgN27SdjQIH-LyyXN9EgsYXVFK4E3iSX-or7MeL0iZEKn3Rml_tKTh6YL89UTZ1XbZJMVjY77nkgThxtidmr2qQw1LcNZn0TUw8OquoOJ5fQZ9sp6KKa_YBaUoQtTFiEOqozdDR1Enjzh1iElOVR4H_2yzmycui1NitEMkDSLWg4oNkW50a_7UGPjtdJmVJAQ1jZNFipLTLSCGiraFRV7mQBWMeMYoFCtvcUHM4mVpmWkgeCpFcXI8SZQjNc8CUYiKFCd2QAo3NPSWFIDz_XB73R6us82GAHo6cyPmhFpx1Nz4jc9ioC-AF5Rlklig=w1574-h1180-no"></img>
          <p>Check out my research </p>
          <button onClick = {buttonFunction}>here</button>
          
          <p>My Classes: </p>
          <table>
            <tr>
              <th>Term</th>
              <th>Classes</th>
              <th>Professors</th>
            </tr>
            <tr>
              <td>19F</td>
              <td>{phys15.name}, {span9.name}, {cosc10.name}</td>
              <td>{phys15.prof}, {span9.prof}, {cosc10.prof}</td>
            </tr>
            <tr>
              <td>20W</td>
              <td>{writ5.name}, {phys16.name}, {phys82.name}</td>
              <td>{writ5.prof}, {phys16.prof}, {phys82.prof}</td>
            </tr>
            <tr>
              <td>20S</td>
              <td>{phys40.name}, {mus6.name}, {astr15.name}, {ling7.name}</td>
              <td>{phys40.prof}, {mus6.prof}, {astr15.prof}, {ling7.prof}</td>
            </tr>
          </table>
          
        </body>
      </header>
    </div>
  );
}

export default App;
