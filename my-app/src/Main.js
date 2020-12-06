import React from 'react';
import main from './images/main_figure.png';

import InfoDisplay from './InfoDisplay.js';

class Main extends React.Component {

  constructor(props){
      super(props);
        this.state = {
            info: "default"
        }  
  }

  changeInfo = (part) => {
      this.setState({info: part})
  }

  render() {
    let displayInfo = <InfoDisplay info={this.state.info}/>

    return (
        <div className="main-wrapper">
            <div className="main-figure">
                <img src={main} width="100%" alt="Main figure"></img>
                <div className="dot eye-dot"></div>
                <div className="dot neck-dot"></div>
                <div className="dot wrist-dot" onClick={() => this.changeInfo("wrist")}></div>
                <div className="dot back-dot"></div> 
            </div>

            <div className="info-display">
                {displayInfo}
            </div>
        </div>
    );
  }
}

export default Main;