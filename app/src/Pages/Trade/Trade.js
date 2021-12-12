import './Trade.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';

import tradeSrc from '../../assets/images/trade2.png'

const Trade = () => {
    return (
        <div className="trade-container">
            <Link to="/journey">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: "1.5rem",
                        top : "1.25rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                /> 
            </Link>
            <div className="progress-bar-outer">
                <div className="progress-bar-inner"></div>
            </div>
            <div className="trade-img-div">
                <img src={tradeSrc} />
            </div>
            <div className="trade-texts">
                <div className="trade-texts-title">
                    <h1>O que é uma troca?</h1>
                </div>
                <span>
                    O comércio baseia-se na troca voluntária de produtos. As trocas podem ter lugar entre dois parceiros (comércio bilateral) ou entre mais do que dois parceiros (comércio multilateral).
                </span>
            </div>
            <div className="trade-btn-div">
                <Link to="/trade-example">
                    <button className="trade-btn">
                        Continuar
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Trade;