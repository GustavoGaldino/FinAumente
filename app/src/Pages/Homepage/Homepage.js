import { Link } from 'react-router-dom';

import './Homepage.css'

import manHoldingCard from '../../assets/images/man-holding-card.png'

import logo from '../../assets/images/logo.png'

import piggy from '../../assets/images/piggy.png'

const Homepage = () => {
    return (
        <div className="homepage-container">
            <div className="homepage-title">                    
                <img src={logo} alt="FinE-logo" style={{width: "50%"}} />
            </div>
            <div className="homepage-texts">
                <div>
                    <span>
                        Aprenda a controlar melhor suas finanças pessoais
                        para sair das armadilhas e se preparar para realizar seus sonhos
                    </span>
                </div>
            </div>
            <div className="piggy-img-container" >
                <img src={piggy} alt="pig-logo" style={{width: "40%"}} />
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
