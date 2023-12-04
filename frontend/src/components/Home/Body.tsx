import { useState } from 'react';
import arrow from '../../assets/down-arrow.svg';
import './Body.css';
import Education from './Education';
import Diploma from './Diploma';
import Represent from './Represent';
import Languages from './Languages';
import Software from './Software';
import Contact from './Contact'

import EstudiesImage from '../../assets/Estudies3.png';
import DiplomaImage from '../../assets/Diploma.png';
import LanguageImage from '../../assets/Languages.png';
import SoftwareImage from '../../assets/software.png';


function Body() {
  const [val, setV] = useState(0);

  const handleChangeV = (e: number) => setV(e);

  const showhide = (a: number) => {
    let y = document.getElementById('represent');
    let x = document.getElementById('arrow');
    if (a !== 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
        handleChangeV(0);
      }
      else {
        x?.classList.remove('rotate2');
        x?.classList.add('rotate');
        if (y) {
          y.style.display = 'block';
        }
        y?.classList.add('open');
        handleChangeV(1);
        showhide2(1);
        showhide3(1);
        showhide4(1);
      }
    }

    else {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
      }
    }
  };

  function showhide2(a: number) {
    var y = document.getElementById('represent2');
    var x = document.getElementById('arrow2');
    if (a !== 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
        handleChangeV(0);
      }
      else {
        x?.classList.remove('rotate2');
        x?.classList.add('rotate');
        if (y) {
          y.style.display = 'block';
        }
        handleChangeV(2);
        showhide(1);
        showhide3(1);
        showhide4(1);
      }
    }
    if (a === 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
      }
    }
  }

  function showhide3(a: number) {
    var y = document.getElementById('represent3');
    var x = document.getElementById('arrow3');
    if (a !== 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
        handleChangeV(0);
      }
      else {
        x?.classList.remove('rotate2');
        x?.classList.add('rotate');
        if (y) {
          y.style.display = 'block';
        }
        handleChangeV(3);
        showhide(1);
        showhide2(1);
        showhide4(1);
      }
    }
    if (a === 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
      }
    }
  }

  function showhide4(a: number) {
    var y = document.getElementById('represent4');
    var x = document.getElementById('arrow4');
    if (a !== 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
        handleChangeV(0);
      }
      else {
        x?.classList.remove('rotate2');
        x?.classList.add('rotate');
        if (y) {
          y.style.display = 'block';
        }
        handleChangeV(4);
        showhide(1);
        showhide2(1);
        showhide3(1);
      }
    }
    if (a === 1) {
      if (y?.style.display === 'block') {
        x?.classList.remove('rotate');
        x?.classList.add('rotate2');
        y.style.display = 'none';
      }
    }
  }

  return (
    <main className="bodyprincipal">
      <div className="bodytopleft">
        <div className="bodytopleftelements">
          <li className="l1left">
            <p>
              <img src={EstudiesImage} id="i_Estudies" alt="Image" />
              <b>&#160;&#160; <u>Education</u> &#160;&#160;</b>
              <img src={arrow} id="arrow" alt="flecha" onClick={() => showhide(0)} />
            </p>
          </li>
          <div id="represent">
            <Education />
          </div>
          <li className="l1left" onClick={() => showhide2(0)}>
            <p>
              <img src={DiplomaImage} className="i_Diploma" alt="Image" />
              <b>&#160;&#160; <u>Diplomas - Courses</u> &#160;&#160;</b>
              <img src={arrow} id="arrow2" alt="flecha2" />
            </p>
          </li>
          <div id="represent2">
            <Diploma />
          </div>
          <li className="l1left">
            <p>
              <img src={LanguageImage} id="i_Estudies" alt="Image" />
              <b>&#160;&#160; <u>Languages</u> &#160;&#160;</b>
              <img src={arrow} id="arrow3" alt="flecha3" onClick={() => showhide3(0)} />
            </p>
          </li>
          <div id="represent3">
            <Languages />
          </div>
          <li className="l1left">
            <p>
              <img src={SoftwareImage} id="i_Estudies" alt="Image" />
              <b>&#160;&#160; <u>Software</u> &#160;&#160;</b>
              <img src={arrow} id="arrow4" alt="flecha4" onClick={() => showhide4(0)} />
            </p>
          </li>
          <div id="represent4">
            <Software />
          </div>
          <h1 className="H1">"Technology is a tool that allows us to unleash our creativity and bring our ideas to life" </h1>
        </div>
      </div>
      <div className="bodyright">
        <Represent val={val} />
      </div>
      <div className="bodybottomleft">
        <Contact/>
      </div>
    </main>
  )
}

export default Body
