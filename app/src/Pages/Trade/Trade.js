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
                        left: "2.25rem",
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
                    Troca é um acordo em que duas pessoas <br />
                    concordam em trocar um produto por <br />
                    outro, de forma espontânea. <br />
                    As duas partes precisam acreditar <br />
                    no valor dos objetos para que tudo <br />
                    seja considerado justo.
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