import './TradePractice.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';

import tradePracticeSrc from '../../assets/images/trade-practice.png'

const TradePractice = () => {
    return (
        <div className="trade-practice-container">

            <Link to="/trade-example">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: "1.25rem",
                        top : "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                /> 
            </Link>

            <div className="progress-bar-outer">
                <div className="progress-bar-inner-3"></div>
            </div>

            <div className="practice-texts">
                <div className="practice-title-div">
                    <h1>Praticar</h1>
                </div>
                <div className="practice-second-text">
                    <span>
                        Lorem ipsum dolor sit amet, <br />
                        consectur adispicing elit. Morbi leo <br />
                        lorem, portittor in volutpat in.
                    </span>
                </div>
            </div>

            <img src={tradePracticeSrc} />

            <button className="practice-btn">
                <Link to="/congratulations">
                    Checar
                </Link>
            </button>

        </div>
    );
}

export default TradePractice