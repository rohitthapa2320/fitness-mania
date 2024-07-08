import { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';

import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

import BodyPart from './BodyPart';

const LeftArrow = () => {
  const {scrollPrev } = useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollPrev()}
      className="left-arrow"
      
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </div>
  );
};

const RightArrow = () => {
  const {scrollNext } = useContext(VisibilityContext);
  return (
    <div
      onClick={() => scrollNext()}
      className="right-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </div>
  );
};

const HorizontalScrollBar = ({
  bodyParts,
  bodyPart,
  setBodyPart
}:{
  bodyParts: string[];
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
}):JSX.Element => {
  return(
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {
        bodyParts.map((item, index) => (
          <div
            key={index}
            itemID={index.toString()}
            className='mx-10'
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </div>
        ))
      }
    </ScrollMenu>
  )
}

export default HorizontalScrollBar;