import { useState } from 'react'
import './Contact.css'

import LinkedInImage from '../../assets/LinkedIn.png';
import WhatsappImage from '../../assets/Whatsapp.png';
import GithubImage from '../../assets/Github.png';
import EmailImage from '../../assets/Email.png';

function Contact(){
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);
  let timeoutId: NodeJS.Timeout;

  function handleMouseEnter1() {
    setShowText1(true)
    setShowText2(false)
    setShowText3(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter2() {
    setShowText2(true)
    setShowText1(false)
    setShowText3(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter3() {
    setShowText3(true)
    setShowText1(false)
    setShowText2(false)
    setShowText4(false)
    clearTimeout(timeoutId)
  }

  function handleMouseEnter4() {
    setShowText4(true)
    setShowText1(false)
    setShowText2(false)
    setShowText3(false)
    clearTimeout(timeoutId)
  }

  function handleMouseLeave() {
    timeoutId = setTimeout(() => {
      setShowText1(false)
      setShowText2(false)
      setShowText3(false)
      setShowText4(false)
    }, 4000)
  }
  return(
    <div className="Show">

      <img
        src={LinkedInImage}
        id="i_Contact"
        onMouseEnter={handleMouseEnter1}
        onMouseLeave={handleMouseLeave}
        alt="LinkedInImage"
      />
      {showText1 &&
        <a href="https://www.linkedin.com/in/omar-oporto-bernal-a1b000269/" className="Linkedin" target="_blank" rel="noreferrer">
          &#160; Link to Page &#160;
        </a>
      }
      <img
        src={WhatsappImage}
        id="i_Whatsapp"
        onMouseEnter={handleMouseEnter2}
        onMouseLeave={handleMouseLeave}
        alt="WhatsappImage"
      />
      {showText2 &&
        <p className="Whats">
          &#160;&#160;&#160; 63968723 &#160;
        </p>
      }
      <img
        src={GithubImage}
        id="i_Github"
        onMouseEnter={handleMouseEnter4}
        onMouseLeave={handleMouseLeave}
        alt="GithubImage"
      />
      {showText4 &&
        <a href="https://github.com/OmarOporto" className="Git" target="_blank" rel="noreferrer">
          &#160; Github repository
        </a>
      }
      <img
        src={EmailImage}
        id="i_Mail"
        onMouseEnter={handleMouseEnter3}
        onMouseLeave={handleMouseLeave}
        alt="EmailImage"
      />
      {showText3 &&
        <a href="mailto:omar.oportober@gmail.com" className="Correo">
          &#160; omar.oportober@gmail.com
        </a>
      }
    </div>
  )
}

export default Contact
