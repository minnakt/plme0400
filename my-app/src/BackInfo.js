import './InfoDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import backGood from './images/back_good_posture.png';
import backBad from './images/back_good_posture.png';
import backStretch from './images/back_stretch.png';


function BackInfo() {
  return (
    <div className="neck">
        <p>
        Blurb

        </p>

        <div className="back-posture">
            <div className="back-posture-good">
                <img src={backBad} width="300px"></img>   
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> Bad posture: Slouching forward too much or leaning too far back can create problems. </p>
                    </div>
            </div>

            <div className="back-posture-bad">
                <img src={backGood} width="300px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: Sit up with your back straight and your shoulders back. Keep your feet flat on the 
                                                    floor and distribute your body weight evenly on both hips </p> 
                    </div>
            </div>
        </div>
        <p>
            Stretch often. Try turning your body to both sides or stretching your arm behind your back. Yoga can also help.
        </p>

        <div className="standalone-img-box">
            <img src={backStretch} width="250px"></img>
        </div>

    </div>
  );
}

export default BackInfo;
