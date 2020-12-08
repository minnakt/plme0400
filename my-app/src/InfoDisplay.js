import React from 'react';

import WristInfo from './WristInfo.js';
import NeckInfo from './NeckInfo.js';
import BackInfo from './BackInfo.js';
import EyeInfo from './EyeInfo.js';


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
        let author = "";

        switch(this.props.info) {
            case 'wrist':
                headerText = <p>Let's Learn about the Wrists!</p>
                contentText = <WristInfo/>
                author= <p> Illustrated by Minna Kimura-Thollander </p>
                break;
            case 'neck':
                headerText = <p>Let's Learn about the Neck!</p>
                contentText = <NeckInfo/>
                author= <p> Illustrated by Tori Cook </p>
                break;
            case 'eye':
                headerText = <p>Let's Learn about the Eyes!</p>
                contentText = <EyeInfo/>
                author= <p> Illustrated by Alexandra Burgess</p>
                break;
            case 'back':
                headerText = <p>Let's Learn about the Back!</p>
                contentText = <BackInfo />
                author= <p> Illustrated by Joseph Namkung </p>
                break;
            default:
                headerText = <p>Welcome to our final project for PLME0400.</p>
                contentText = <p>   In this project, we wanted to raise awareness for remote 
                                    injuries that have become more common in the era of COVID-19.

                                    <br/><br/>
                                    Click any of the highlighted body parts of the figure to learn more about
                                    how to properly treat it!

                                </p>
        }

        return (
            <div key={this.props.info} className={`info-panel-wrapper ${this.state.toggler ? 'refresh':'refreshAlt'}`}>
                <div className="info-panel">
                    <div className="info-header"> {headerText} </div>
                    <div className="info-author"> {author} </div>
                    < div className="info-content"> {contentText} </div>
                </div>
            </div>
        );
    }
}

export default InfoDisplay;