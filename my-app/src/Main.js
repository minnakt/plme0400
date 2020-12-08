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
    // className={`info-panel-wrapper ${this.state.toggler ? 'refresh':'refreshAlt'}`}

    return (
        <div className="main-wrapper">
            <div className="main-figure">
                <img src={main} width="100%" alt="Main figure"></img>
                <div className={`dot eye-dot ${this.state.info==="eye" ? 'focused':''}`} onClick={() => this.changeInfo("eye")}> </div>
                <div className={`dot neck-dot ${this.state.info==="neck" ? 'focused':''}`} onClick={() => this.changeInfo("neck")}></div>
                <div className={`dot wrist-dot ${this.state.info==="wrist" ? 'focused':''}`} onClick={() => this.changeInfo("wrist")}></div>
                <div className={`dot back-dot ${this.state.info==="back" ? 'focused':''}`} onClick={() => this.changeInfo("back")}></div> 
            </div>

            <div className="info-display">
                <InfoDisplay info={this.state.info}/>
            </div>
        </div>
    );
  }
}

export default Main;