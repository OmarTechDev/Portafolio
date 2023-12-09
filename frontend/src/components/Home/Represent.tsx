import Logo from '../../assets/logo.svg?react';
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

interface CarouselIndicatorsProps {
  numberOfSlides: number;
}

interface CarouselRepresentProps  {
  carouselItems: number;
  images: string[];
  titles: string[];
  components: React.ReactNode[];
};

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({numberOfSlides}) => {
  const buttons = Array.from({ length: numberOfSlides }, (_, index) => (
    <button
      key={index}
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to={index}
      className={index === 0 ? "active" : ""}
      aria-current={index === 0}
      aria-label={`Slide ${index + 1}`}
    ></button>
  ));

  return <div className="carousel-indicators">{buttons}</div>;
};


const CarouselItems: React.FC<CarouselRepresentProps> = ({carouselItems, images, titles, components}) =>{
  const CarouselItemsRepresents = Array.from({ length: carouselItems }, (_, index) => (
    <div className={index === 0 ? "carousel-item active" : "carousel-item"}>
      <img src={images[index]} className="d-block w-100" alt={images[index]}/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className='LB'><b>{titles[index]}</b></h5>{titles[index] !== ''}
        {components[index]}
      </div>
    </div>
  ))

  return <div className="carousel-inner">{CarouselItemsRepresents}</div>;
}

const CarouselRepresent: React.FC<CarouselRepresentProps> = ({carouselItems, images, titles, components}) => {

  return(
    <div id="carouselExampleCaptions" className="carousel slide">
      <CarouselIndicators numberOfSlides={carouselItems} />
      <CarouselItems carouselItems={carouselItems} images={images} titles={titles} components={components}/>
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
}

const Represent: React.FC<RepresentProps> = ({ val }) =>
{
  switch(val){
  case 1:
    const images = [UpbImage, IopImage, ReactImage]
    const titles = [
      'Investigation Assistant CIOE - 1 year',
      'Design and construction of a low-cost 3D-printed portable LIBS system',
      'Fullstack Developer'
    ]
    const components = [
      <p className='LB'><b>ESTUDIES 2014 – 2019</b></p>,
      <a href="https://iopscience.iop.org/article/10.1088/1742-6596/2238/1/012012"
        className="link_iop" target="_blank" rel="noreferrer">
        "IOP - PAGE"
      </a>,
      <p className='LB'><b>from 2022 onwards</b></p>
    ]
    return(
      <CarouselRepresent carouselItems={3} images={images} titles={titles} components={components}/>
    )
  case 2:
    const images2 = [FullSOImage, UsipImage, UnmImage]
    const titles2 = ['', '', 'Software Testing']
    const components2 = [
      <a href="https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/c0dd75422f59e4fb558fec745ba35ad0"
        className="link_fullstack" target="_blank" rel="noreferrer">
        <b>"Certificate of Completion"</b>
        <br/> Fullstack Open Helsinki University
      </a>,
      <a href="https://neurolabpro.lpages.co/diplomadofullstackdeveloperbackendyfrontend/?fbclid=IwAR17pReRIhAswoeu8vzPyCZT4rn3WApOSL-ZNkVXU4MZl0WcfhdJbSYF_J4"
        className="link_usip" target="_blank" rel="noreferrer">
        <b>"Content"</b>
      </a>,
      <p className='LB'>2021</p>
    ]
    return(
      <CarouselRepresent carouselItems={3} images={images2} titles={titles2} components={components2}/>
    )
  case 3:
    const images3 = [EfsetImage, BcImage]
    const titles3 = ['', 'British Council EnglishScore']
    const components3 = [
      <a
        href="https://www.efset.org/cert/dnkCPM"
        className="link_usip"
        target="_blank"
        rel="noreferrer">
          <b>"Certificate"</b>
      </a>,
      null
    ]
    return(
      <CarouselRepresent carouselItems={2} images={images3} titles={titles3} components={components3}/>
    )
  case 4:
    const images4 = [ReactImage2, NodeImage, MongoImage]
    const titles4 = ['', 'Jest || ESlint || Express', 'Preferred Database || MySQL']
    const components4 = [ <p className="react"> <b>This page was made on REACT.tsx</b></p>, null, null]
    return(
      <CarouselRepresent carouselItems={3} images={images4} titles={titles4} components={components4}/>
    )
  default:
    return(
      <>
        <Logo className="i0"/>
      </>
    )
  }
}

export default Represent
