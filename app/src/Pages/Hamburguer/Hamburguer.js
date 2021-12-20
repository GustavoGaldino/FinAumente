import './Hamburguer.css'

import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';

const Hamburguer = () => {
    return (
        <div className="hamburguer-container">
            <div className="hamburguer-div">
                <Link to="/journey">
                    <GiHamburgerMenu
                        color="#00A778"
                        size="2rem"
                    />
                </Link>
            </div>
            <div>
                <Link to="/journey">
                    <h1>Sua jornada</h1>
                </Link>
                <div className="hr" />
            </div>
            <div>
                <Link to="/friends">
                    <h1>Amigos</h1>
                </Link>
                <div className="hr" />
            </div>
            <Link to="/">
                <div className="leave-btn">
                    <button>Sair</button>
                </div>
            </Link>
        </div>
    );
}

export default Hamburguer