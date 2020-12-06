import React from 'react';

import wristHurt from './images/generic_hurt_wrist.png';
import keyboardMouse from './images/keyboard_mouse_wrist.png';
import wristStretches from './images/wrist_stretches.png';

class InfoDisplay extends React.Component {

  render() {
    let headerText;
    let contentText;


    switch(this.props.info) {
        case 'wrist':
            headerText = <p>Wrist Injuries</p>
            contentText = 
            <div>
                <p>
                    Wrist injuries are common among people who work with computers. According to a 2008
                    report by the United States Bureau of Labor Statistics, 6 out of 10 workers who use a computer
                    have experienced wrist pain.
                </p>
                <img src={wristHurt} width="300px"></img>

            


                <img src={keyboardMouse} width="500px"></img>

                <img src={wristStretches} width="500px"></img>
            </div>
            break;
        default:
            headerText = <p>Welcome to our final project for PLME0400.</p>
            contentText = <p>In this project, we wanted to raise awareness for remote 
                                injuries that have become more common in the era of COVID-19.
                                Pls help me fill out more content for this section</p>
    }

    return (
        <div className="info-panel-wrapper">
            <div className="info-panel">
                <div className="info-header"> {headerText} </div>

                < div className="info-content"> {contentText} </div>

            </div>



        </div>
    );
  }
}

export default InfoDisplay;