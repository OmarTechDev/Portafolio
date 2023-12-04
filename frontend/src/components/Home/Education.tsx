import './Education.css';

import LogoUpbImage from '../../assets/Logo_Upb.png'

function Education(){
  return(
    <>
      <div>
        <li className="listE1">
          <p><b>UNIVERSIDAD PRIVADA BOLIVIANA
            <img src={LogoUpbImage} alt="Imagen" id="i"></img>
              &#160;&#160; FEBRUARY 2014 – MARCH 2019
          </b></p>
        </li>
        <li className="listE2">
          <p>Electromechanical Engineering </p>
        </li>
      </div>
      <div>
        <li className="listE2_1">
          <p><b>SAN AGUSTÍN HIGH SCHOOL &#160;&#160;-&#160;&#160;&#160;
            FEBRUARY 2008 – DECEMBER 2013
          </b></p>
        </li>
      </div>
    </>
  )
}

export default Education
