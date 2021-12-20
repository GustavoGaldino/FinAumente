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
                    Uma pessoa tem um chapéu <br />
                    cinza e outra tem um <br />
                    chapéu amarelo.
                </span>
            </div>
            <div className="trade-example-img">
                <img src={tradeExampleSrc} />
            </div>
            <div className="trade-example-second-text">
                <span>
                    Como os 2 chapéus são idênticos, <br />
                    mudando sua cor, é provável que os 2 chapeús
                    valem a mesma coisa e <br />
                    podem ser trocados.
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