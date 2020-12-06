import React from 'react';

import wristHurt from './images/generic_hurt_wrist.png';
import keyboardMouse from './images/keyboard_mouse_wrist.png';
import wristStretches from './images/wrist_stretches.png';

class InfoDisplay extends React.Component {

    constructor(props){
        super(props);
          this.state = {
              info: "default",
              toggler: true
          }  
    }

    componentDidUpdate(prevProps) {
        // compare props
        if (this.props.info !== prevProps.info) {
            this.setState(prevState => ({
                toggler: !prevState.toggler
              }));
        }
    }

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
                        have experienced wrist pain. As we spend more time inside due to the coronavirus epidemic and we
                        are more dependent on computers, anyone from young children to professional office workers are at 
                        risk for wrist injuries. 
                    </p>
                    <img src={wristHurt} width="300px"></img>

                    <p>
                        The easiest way to avoid wrist injury is to make sure that you are using you have the correct wrist
                        position when using your keyboard and mouse. blahblah
                    </p>
                
                    <img src={keyboardMouse} width="500px"></img>

                    <p>
                        If you've been feeling pain in your wrists, wrist stretches can help! Follow the images below
                        to relieve strain in your wrists. blah blah blah
                    </p>

                    <img src={wristStretches} width="550px"></img>
                </div>
                break;
            case 'neck':
                headerText = <p>Neck Injuries</p>
                contentText = 
                <div>
                </div>
                break;
            case 'eye':
                headerText = <p>Eye Injuries</p>
                contentText = 
                <div>
                </div>
                break;
            case 'back':
                headerText = <p>Back Injuries</p>
                contentText = 
                <div>
                </div>
                break;
            default:
                headerText = <p>Welcome to our final project for PLME0400.</p>
                contentText = <p>In this project, we wanted to raise awareness for remote 
                                    injuries that have become more common in the era of COVID-19.
                                    Click any of the highlighted parts of the image to learn more about
                                    how you to properly treat blah blah 
                                    <br /> <br/>

                                Pls help me fill out more content for this section
                                </p>
        }

        return (
            <div key={this.props.info} className={`info-panel-wrapper ${this.state.toggler ? 'refresh':'refreshAlt'}`}>
                <div className="info-panel">
                    <div className="info-header"> {headerText} </div>

                    < div className="info-content"> {contentText} </div>

                </div>



            </div>
        );
    }
}

export default InfoDisplay;