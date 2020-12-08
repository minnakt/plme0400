import './InfoDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import wristHurt from './images/generic_hurt_wrist.png';
import keyboardGood from './images/keyboard_good_posture_wrist.png';
import keyboardBad from './images/keyboard_bad_posture_wrist.png';
import mouseGood from './images/mouse_good_posture_wrist.png';
import mouseBad from './images/mouse_bad_posture_wrist.png';
import wristStretches from './images/wrist_stretches.png';

function WristInfo() {
  return (
    <div className="wrist">
        <p>
            Wrist injuries are common among people who work with computers. According to a 2008
            report by the United States Bureau of Labor Statistics, 6 out of 10 workers who use a computer
            have experienced wrist pain. As we spend more time inside due to the coronavirus epidemic and we
            are more dependent on computers, anyone from young children to professional office workers are at 
            risk for wrist injuries. 
        </p>
        <img src={wristHurt} width="300px"></img>

        <p>
            The easiest way to avoid wrist injury is to make sure that you are using you have the correct wrist
            position when using your keyboard and mouse. blahblah
        </p>

        <div className="keyboard">
            <img src={keyboardBad} width="300px"></img>   
            <img src={keyboardGood} width="300px"></img>
        </div>

        <div className="labels">
            <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
            <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
        </div>


        <div className="mouse">
            <img src={mouseBad} width="300px"></img>
            <img src={mouseGood} width="300px"></img>
        </div>

        <div className="labels">
            <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
            <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
        </div>


        <p>
            If you've been feeling pain in your wrists, wrist stretches can help! Follow the images below
            to relieve strain in your wrists. blah blah blah
        </p>

        <img src={wristStretches} width="550px"></img>
    </div>
  );
}

export default WristInfo;
