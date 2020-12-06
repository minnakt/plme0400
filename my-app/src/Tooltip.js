import Popup from 'reactjs-popup';
import './App.css';

function Tooltip() {
    return (
        <Popup trigger={<div className="dot wrist-dot"></div> }
            position="right center"
            closeOnDocumentClick>
            <span> Popup content </span>
        </Popup>
    );
}

export default Tooltip;