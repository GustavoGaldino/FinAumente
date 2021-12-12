import { Link } from 'react-router-dom';

import './Homepage.css'

import manHoldingCard from '../../assets/images/man-holding-card.png'

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-title">
                <span>Fin</span>Aumente
            </div>
            <div className="homepage-image">
                <img src={manHoldingCard} alt="man-holding-card" />
            </div>
            <div className="homepage-texts">
                <div>
                    <h1>Melhore suas finanças</h1>
                </div>
                <div>
                    <span>
                        Aprenda a controlar melhor suas<br /> finanças pessoais
                        para sair das <br/ > armadilhas e se preparar para realizar <br /> seus sonhos
                    </span>
                </div>
            </div>
            <div className="homepage-buttons">
                <Link to="/register">
                    <button className="homepage-button-1">Cadastrar</button>
                </Link>
                <Link to="/login">
                    <button className="homepage-button-2">Entrar</button>
                </Link>
            </div>
        </div>
    );
}

export default Homepage;
