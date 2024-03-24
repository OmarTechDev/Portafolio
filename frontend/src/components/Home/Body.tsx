import { useState, lazy, Suspense } from 'react';
import Arrow from '../../assets/down-arrow.svg?react';
import './Body.css';
import Represent from './Represent';
import Contact from './Contact'

import EstudiesImage from '../../assets/Estudies3.png';
import DiplomaImage from '../../assets/Diploma.png';
import LanguageImage from '../../assets/Languages.png';
import SoftwareImage from '../../assets/software.png';

const ListElement: React.FC<ListElementProps> = ({showhideElement, imageSrc, title, arrow }) => (
  <li className="l1left">
    <p>
      <img src={imageSrc} id='i_Estudies' alt="Image" />
      <b>&#160;&#160; <u>{title}</u> &#160;&#160;</b>
      <Arrow id={arrow} onClick={() => showhideElement(0)} />
    </p>
  </li>
)

const EducationRepresent: React.FC<ListElementProps> = ({showhideElement, imageSrc, title, arrow, Topic, represent }) => {
  const DynamicComponent = lazy(() => import(`../Home/${Topic}.tsx`));
  return(
    <>
      <ListElement showhideElement={showhideElement} title={title} imageSrc={imageSrc} arrow={arrow}/>
      <div id={represent}>
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicComponent />
        </Suspense>
      </div>
    </>
  )
}

const Switch = (
  represent: string,
  arrow: string,
  a: number,
  handleChangeV: (value: number) => void,
  showhideA: (value: number) => void,
  showhideB: (value: number) => void,
  showhideC: (value: number) => void,
  carousel: number
) => {
  let representElement = document.getElementById(`${represent}`);
  let arrowElement = document.getElementById(`${arrow}`);
  if (a !== 1) {
    if (representElement?.style.display === 'block') {
      arrowElement?.classList.remove('rotate');
      arrowElement?.classList.add('rotate2');
      representElement.style.display = 'none';
      handleChangeV(0);
    }
    else {
      arrowElement?.classList.remove('rotate2');
      arrowElement?.classList.add('rotate');
      if (representElement) {
        representElement.style.display = 'block';
      }
      representElement?.classList.add('open');
      handleChangeV(carousel);
      showhideA(1);
      showhideB(1);
      showhideC(1);
    }
  }
  else {
    if (representElement?.style.display === 'block') {
      arrowElement?.classList.remove('rotate');
      arrowElement?.classList.add('rotate2');
      representElement.style.display = 'none';
    }
  }
}

function Body() {
  const [val, setV] = useState(0);

  const handleChangeV = (e: number) => setV(e);

  function showhide(a: number) {
    Switch('represent', 'arrow', a, handleChangeV, showhide2, showhide3, showhide4, 1)
  }

  function showhide2(a: number) {
    Switch('represent2', 'arrow2', a, handleChangeV, showhide, showhide3, showhide4, 2)
  }

  function showhide3(a: number) {
    Switch('represent3', 'arrow3', a, handleChangeV, showhide, showhide2, showhide4, 3)
  }

  function showhide4(a: number) {
    Switch('represent4', 'arrow4', a, handleChangeV, showhide, showhide2, showhide3, 4)
  }

  const educationItems: ListElementProps[] = [
    { showhideElement: showhide,imageSrc: EstudiesImage, title: 'Education', arrow: 'arrow', Topic: 'Education', represent: 'represent' },
    { showhideElement: showhide2,imageSrc: DiplomaImage, title: 'Diplomas - Courses', arrow: 'arrow2', Topic: 'Diploma', represent: 'represent2' },
    { showhideElement: showhide3,imageSrc: LanguageImage, title: 'Languages', arrow: 'arrow3', Topic: 'Languages', represent: 'represent3' },
    { showhideElement: showhide4,imageSrc: SoftwareImage, title: 'Software', arrow: 'arrow', Topic: 'Software', represent: 'represent4' },
  ];

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div className="bodytopleft">
          <div className="bodytopleftelements">
            {educationItems.map((item) => (
              <EducationRepresent
                showhideElement={item.showhideElement}
                imageSrc={item.imageSrc}
                title={item.title}
                arrow={item.arrow}
                Topic={item.Topic}
                represent={item.represent}
            />
            ))}
            <h1 className="H1">"Technology is a tool that allows us to unleash our creativity and bring our ideas to life" </h1>
          </div>
        </div>
        <div className="bodyright">
          <Represent val={val} />
        </div>
      </div>
      <Contact/>
    </div >
  )
}

export default Body
