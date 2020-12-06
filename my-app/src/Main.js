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
      // I only want to refresh it if it's different from the previous. 
      if (part !== this.state.info) {
        this.setState({info: part})
      }
  }

  render() {
    let displayInfo = <InfoDisplay info={this.state.info}/>

    return (
        <div className="main-wrapper">
            <div className="main-figure">
                <img src={main} width="100%" alt="Main figure"></img>
                <div className="dot eye-dot" onClick={() => this.changeInfo("eye")}></div>
                <div className="dot neck-dot" onClick={() => this.changeInfo("neck")}></div>
                <div className="dot wrist-dot" onClick={() => this.changeInfo("wrist")}></div>
                <div className="dot back-dot" onClick={() => this.changeInfo("back")}></div> 
            </div>

            <div className="info-display">
                {displayInfo}
            </div>
        </div>
    );
  }
}

export default Main;