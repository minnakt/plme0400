import Popup from 'reactjs-popup';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function EyePopup() {
  return (
    <div className="popup">
             <Popup trigger={ <div className="dot eye-dot"></div> } modal nested>
                {close => (
                    <div className="modal">
                        <div className="modal-header">
                            <div className="popup-header"> Eye Strain </div>
                            <FontAwesomeIcon className = "x" size={"lg"} icon={faTimes} color="grey" onClick={close}/>
                        </div>

                        <div className="popup-writing">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                        <br /> <br/>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
                        commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
                        explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
                        </div>
                    </div>
                )}
            </Popup>
    </div>
  );
}

export default EyePopup;
