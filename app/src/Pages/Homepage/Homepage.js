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
                <button>Cadastrar</button>
                <button>Entrar</button>
            </div>
        </div>
    );
}

export default Homepage;
