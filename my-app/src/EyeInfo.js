import './InfoDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import eyeGood from './images/eye_good_posture.png';
import eyeBad from './images/eye_bad_posture.png';


function EyeInfo() {
  return (
    <div className="eye">
        <div className="eye-posture">
            <div className="eye-posture-bad">
                <img src={eyeBad} width="300px"></img>  
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> Bad posture:  </p>
                    </div>
            </div>

            <div className="eye-posture-good">
                <img src={eyeGood} width="300px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: 
                </p>
                    </div>
            </div>
        </div>

    </div>
  );
}

export default EyeInfo;
