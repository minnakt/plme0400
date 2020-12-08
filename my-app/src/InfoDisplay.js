import React from 'react';

import WristInfo from './WristInfo.js';
import NeckInfo from './NeckInfo.js';
import BackInfo from './BackInfo.js';


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
                headerText = <p>Let's Learn about the Wrist!</p>
                contentText = <WristInfo/>
                break;
            case 'neck':
                headerText = <p>Let's Learn about the Neck!</p>
                contentText = <NeckInfo/>
                break;
            case 'eye':
                headerText = <p>Let's Learn about the Eyes!</p>
                contentText = 
                <div>
                </div>
                break;
            case 'back':
                headerText = <p>Let's Learn about the Back!</p>
                contentText = <BackInfo />
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