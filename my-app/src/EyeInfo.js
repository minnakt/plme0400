import './InfoDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import eyeGood from './images/eye_good_posture.png';
import eyeBad from './images/eye_bad_posture.png';

import eyeStretch1 from './images/eye_stretch_1.png';
import eyeStretch2 from './images/eye_stretch_2.png';
import eyeStretch3 from './images/eye_stretch_3.png';
import eyeStretch4 from './images/eye_stretch_4.png';


function EyeInfo() {
  return (
    <div className="eye">
        <p>
        Digital eye strain (also called computer vision syndrome) is caused by staring at digital screens for 
        prolonged periods or with incorrect posture. Similar to other repetitive motion injuries, eye strain occurs 
        when eyes have to make many repeated adjustments and movements for very long periods of time. 
        This can cause headaches, blurred vision, eye dryness, and fatigue. 

        <br/> <br/>
        It is important to rest your eyes, maintain a healthy posture, and reduce screen glare to prevent eye strain. 
        </p>

        <div className="eye-posture">
            <div className="eye-posture-bad">
                <img src={eyeBad} width="300px"></img>  
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> 
                  Bad posture: Do not sit very close to the screen or  
                  angle your eyes up or down. Sitting at an incorrect angle or distance from your screen can cause eye strain, 
                  fatigue, or headaches. Staring at screens for long periods of time can also cause dry eyes, headaches, or eye redness.  </p>
                    </div>
            </div>

            <div className="eye-posture-good">
                <img src={eyeGood} width="300px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: Your screen should be between 18 and 24 inches away 
                  from your face. The screen should also be angled at about 10-20 degrees and the top of the screen should be at eye level. 
                </p>
                    </div>
            </div>
        </div>

        <p> Every 20 minutes of working on a computer make sure to: </p>

        <div className="eye-posture">
            <div className="eye-posture-bad">
                <img src={eyeStretch1} width="270px"></img>  
                <div className="instructions-box"> <p> 1) Look up and down x3  </p> </div>
            </div>

            <div className="eye-posture-good">
                <img src={eyeStretch2} width="270px"></img>
                <div className="instructions-box">  <p> 2) Look left and right x3</p></div>
            </div>
        </div>

        
        <div className="eye-posture">
            <div className="eye-posture-bad">
                <img src={eyeStretch3} width="270px"></img>  
                <div className="instructions-box"> <p> 3) Move eyes in a diagonal x3  </p> </div>
            </div>

            <div className="eye-posture-good">
                <img src={eyeStretch4} width="270px"></img>
                <div className="instructions-box">  <p> 4) Look 20 feet away for 20 seconds then at your thumb for 20 seconds x2 </p></div>
            </div>
        </div>



    </div>
  );
}

export default EyeInfo;
