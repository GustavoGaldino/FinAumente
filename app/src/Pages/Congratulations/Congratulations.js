import './Congratulations.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';

import { GiPadlockOpen } from 'react-icons/gi'

import congratsSrc from '../../assets/images/congratulations.png'

const Congratulations = () => {
    return (
        <div className="congrats-container">
            <Link to="/trade-practice">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: ".75rem",
                        top : ".5rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                /> 
            </Link>
            <div className="progress-bar-outer" style={{marginTop: ".5rem"}}>
                <div className="progress-bar-inner-4"></div>
            </div>
            <div className="congrats-title-div">
                <h1>Parabéns</h1>
            </div>
            <img className="congrats-img" src={congratsSrc}/>
            <span className="congratulations-text">
                Você agora domina trocas <br />
                como ninguém! Continue <br />
                assim no próximo exercício.
            </span>
            <div class="chapter-finished">
                <div className="chapter-finished-left">
                    <GiPadlockOpen
                        size="3.25rem"
                        color="#FFC745"
                        style={{marginBottom: ".2rem"}}
                    />
                    <span>Liberado</span>
                </div>
                <div className="chapter-finished-right">
                    <h1>Sobre dinheiro</h1>
                    <span>Nível 1</span>
                </div>
            </div>
            <button className="congrats-btn">
                <Link to="/journey">
                    Voltar para jornada
                </Link>
            </button>
        </div>
    );
}

export default Congratulations