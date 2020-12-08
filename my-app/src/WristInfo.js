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

import wristStretch1 from './images/wrist_stretch_1.png';
import wristStretch2 from './images/wrist_stretch_2.png';
import wristStretch3 from './images/wrist_stretch_3.png';

function WristInfo() {
  return (
    <div className="wrist">
        <p>
            The wrists connect your arms and hands. If you've ever sprained your wrist, you may have realized
            how difficult it is to do regular things when your wrists aren't fully functional, and how your wrists are essential 
            to do everyday tasks.

            <br/><br/>
            If we don't treat our wrists properly, we can develop repetitive stress injuries
            that can make it harder to type, write, or even play video games. Over 8 million Americans suffer from carpal tunnel syndrome,
            which causes pain and weakness in the wrist and negatively impacts hand function. 

        </p>

        <div className="standalone-img-box">
            <img src={wristHurt} width="250px"></img>
        </div>
        
        <p>
            The easiest way to avoid wrist injury is to make sure that you are using you have the correct wrist
            position when using your keyboard and mouse.
        </p>

        <div className="wrist-posture">
            <div className="wrist-keyboard-posture-bad">
                <img src={keyboardBad} width="300px"></img>  
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> Bad posture: Avoid bending your wrist or resting your wrist on a desk,
                    and don't prop up the keyboard using the back legs because they naturally force your wrists to tilt upward. </p>
                    </div>
            </div>

            <div className="wrist-keyboard-posture-good">
                <img src={keyboardGood} width="300px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: Keep your wrists straight and hovering slightly above the keyboard. Keep 
                    the keyboard flat or tilted backwards.
                </p>
                    </div>
            </div>
        </div>

        <div className="wrist-posture">
            <div className="wrist-mouse-posture-bad">
                <img src={mouseBad} width="300px"></img>  
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> Bad posture: Avoid resting your wrist on a desk, because it puts pressure on your tendons and 
                    restricts blood circulation. </p>
                    </div>
            </div>

            <div className="wrist-mouse-posture-good">
                <img src={mouseGood} width="300px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: Have a loose grip on the mouse, and keep your wrist lifted and parallel to your desk. </p>
                    </div>
            </div>
        </div>


        <p>
            If you've been feeling pain in your wrists, wrist stretches can help! Do the stretches shown below on each hand and hold the position
            for 15-30 seconds. 
        </p>

        <div className="wrist-posture">
            <div className="wrist-mouse-posture-bad">
                <img src={wristStretch1} width="200px"></img>  
                <div className="captions-box"> <p> Hold your hand out upwards, wrap your other hand around it, and pull towards you. </p>
                    </div>
            </div>

            <div className="wrist-mouse-posture-good">
                <img src={wristStretch2} width="200px"></img>
                <div className="captions-box">  <p> Hold your hand out downwards, wrap your other hand around it, and pull towards you. </p>
                    </div>
            </div>

            <div className="wrist-mouse-posture-good">
                <img src={wristStretch3} width="200px"></img>
                <div className="captions-box">  <p> Hold your hand out upside down with your palm facing outwards, wrap your other hand around it, and pull towards you. </p>
                    </div>
            </div>
        </div>

        <p>
            If you're doing something wrist-intensive, try to stop and do these stretches every hour. Your wrists will thank you!
        </p>

    </div>
  );
}

export default WristInfo;
