import './InfoDisplay.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import neckGood from './images/neck_good_posture.png';
import neckBad from './images/neck_bad_posture.png';
import neckShrug from './images/neck_shrug.png';
import neckStretch from './images/neck_stretch.png';


function NeckInfo() {
  return (
    <div className="neck">
        <p>
        Our necks are so important! They connect our head to the rest of our body, and helps you turn and move your head. 
        So how can we keep our necks happy and healthy? 
        <br/><br/>
        
        66-90% of the population has neck pain, often because of poor posture where the neck slants forward as we tilt our heads, 
        this is known as “forward head position”. This shifts your center of gravity forward and strains your neck muscles. 
        <br/><br/>

        When we look down at our phones or while reading a book, we have bad posture, which means that our heads are centered with 
        our spines. This can cause headaches, pain, and muscle tightness. 

        </p>

        <div className="neck-posture">
            <div className="neck-posture-bad">
                <img src={neckBad} width="200px"></img>   
                <FontAwesomeIcon className = "times-wrist" size={"lg"} icon={faTimesCircle} color="#FF3838"/>
                <div className="captions-box"> <p> Bad posture: The neck is tilted forward and down at the phone </p>
                    </div>
            </div>

            <div className="neck-posture-good">
                <img src={neckGood} width="200px"></img>
                <FontAwesomeIcon className = "check-wrist" size={"lg"} icon={faCheckCircle} color="#7BEC22"/>
                <div className="captions-box">  <p> Good posture: The phone is raised to eye level so that we can keep our necks align. </p>
                    </div>
            </div>
        </div>

        <p>
            If you are having neck pain, try some stretches! Gently tilt your head to the side towards your shoulder, 
            until you are able to feel a stretch in your neck. Hold this for five seconds and then repeat this on the 
            other side. 
        </p>

        <div className="standalone-img-box">
            <img src={neckStretch} width="500px"></img>
        </div>
        
         <p>
            Stand up straight with your shoulders relaxed, shrug your shoulders as high as you can towards the top of your head 
            and hold there for 5 seconds. 
        </p>

        <div className="standalone-img-box">
            <img src={neckShrug} width="500px"></img>   
        </div>

    </div>
  );
}

export default NeckInfo;
