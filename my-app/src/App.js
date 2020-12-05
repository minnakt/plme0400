import './App.css';
import main from './images/main_figure.png';

function App() {
  return (
    <div className="App">
        <div className="main-figure">
            <img src={main} width="70%" alt="Main figure"></img>

            <div className="dot eye-dot"></div> 
            <div className="dot neck-dot"></div> 
            <div className="dot wrist-dot"></div> 
            <div className="dot back-dot"></div> 

        </div>
    </div>
  );
}

export default App;
