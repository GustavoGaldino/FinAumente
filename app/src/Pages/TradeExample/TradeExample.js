import './TradeExample.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';

import tradeExampleSrc from '../../assets/images/trade-example.png'

const TradeExample = () => {
    return (
        <div className="trade-example-container">
            <Link to="/trade">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: "2.25rem",
                        top : "1.25rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                /> 
            </Link>
            <div className="progress-bar-outer">
                <div className="progress-bar-inner-2"></div>
            </div>
            <div className="trade-example-texts">
                <div className="trade-example-title">
                    <h1>Exemplo</h1>
                </div>
                <span>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adispicing elit.
                    <br /> Morbi leo lorem, portittor in
                </span>
            </div>
            <img src={tradeExampleSrc} />
            <div className="trade-example-second-text">
                <span>
                    Lorem ipsum dolor sit amet,
                    <br /> consectetur adispicing elit.
                    <br /> Morbi leo lorem, portittor in
                </span>
            </div>
            <div className="trade-btn-div">
                <Link to="/trade-practice">
                    <button className="trade-btn">
                        Continuar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default TradeExample;