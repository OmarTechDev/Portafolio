import logo from '../../assets/logo.svg';
import './Represent.css'

import UpbImage from '../../assets/UPB.jpg';
import IopImage from '../../assets/IOP.jpg';
import ReactImage from '../../assets/REACT_JS.jpg';
import FullSOImage from '../../assets/fullstackopen.jpg';
import UsipImage from'../../assets/USIP-FS.jpg';
import UnmImage from '../../assets/UNM.png';
import EfsetImage from '../../assets/EFSET.jpg';
import BcImage from '../../assets/BC.jpg';
import ReactImage2 from '../../assets/React.png';
import NodeImage from '../../assets/Node.png';
import MongoImage from '../../assets/Mongo.png';

interface RepresentProps {
  val: number;
}

const Represent: React.FC<RepresentProps> = ({ val }) =>
{
  switch(val){
  case 1:
    return(
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={UpbImage} className="d-block w-100" alt="UpbImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='LB'><b>Investigation Assistant CIOE - 1 year</b></h5>
              <p className='LB'><b>ESTUDIES 2014 – 2019</b></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={IopImage} className="d-block w-100" alt="IOPImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='LB'><b>Design and construction of a low-cost 3D-printed portable LIBS system</b></h5>
              <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2238/1/012012" className="link_iop" target="_blank" rel="noreferrer">
                {/* eslint-disable-next-line */}
                "IOP - PAGE"
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={ReactImage} className="d-block w-100" alt="ReactImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='LB'>Fullstack Developer</h5>
              <p className='LB'>from 2022 onwards</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  case 2:
    return(
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={FullSOImage} className="d-block w-100" alt="FullStackOpenImage"/>
            <div className="carousel-caption d-none d-md-block">
              <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c0dd75422f59e4fb558fec745ba35ad0"
                className="link_fullstack" target="_blank" rel="noreferrer">
                <b>"Certificate of Completion"</b>
                <br/> Fullstack Open Helsinki University
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={UsipImage} className="d-block w-100" alt="UsipImage"/>
            <div className="carousel-caption d-none d-md-block">
              <a href="https://neurolabpro.lpages.co/diplomadofullstackdeveloperbackendyfrontend/?fbclid=IwAR17pReRIhAswoeu8vzPyCZT4rn3WApOSL-ZNkVXU4MZl0WcfhdJbSYF_J4"
                className="link_usip" target="_blank" rel="noreferrer">
                <b>"Content"</b>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={UnmImage} className="d-block w-100" alt="UnmImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5 className='LB'>Software Testing</h5>
              <p className='LB'>2021</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  case 3:
    return(
      <div id="carouselLanguages" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselLanguages" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselLanguages" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={EfsetImage} className="d-block w-100" alt="EfsetImage"/>
            <div className="carousel-caption d-none d-md-block">
              <a
                href="https://www.efset.org/cert/dnkCPM"
                className="link_usip"
                target="_blank"
                rel="noreferrer">
                  <b>"Certificate"</b>
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img src={BcImage} className="d-block w-100" alt="BcImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>British Council EnglishScore</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselLanguages" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselLanguages" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  case 4:
    return(
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ReactImage2} className="d-block w-100" alt="ReactImage2"/>
            <div className="carousel-caption d-none d-md-block">
            <p className="react"> <b>THIS PAGE WAS MADE ON REACT.tsx</b></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={NodeImage} className="d-block w-100" alt="NodeImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5><b>Jest || ESlint || Express</b></h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={MongoImage} className="d-block w-100" alt="MongoImage"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Preferred Database || MySQL</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
  default:
    return(
      <>
        <img src={logo} className="i0" alt="logo"/>
      </>
    )
  }
}

export default Represent
