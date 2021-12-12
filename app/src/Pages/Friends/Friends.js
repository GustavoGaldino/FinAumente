import './Friends.css'

import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';

import Friend from './Friend';

const Friends = () => {
    return (
        <div className="friends-container">
            <div className="hamburguer-div">
                <Link to="/hamburguer">
                    <GiHamburgerMenu
                        color="#FFC745"
                        size="2rem"
                    />
                </Link>
            </div>
            <div className="friends-text-div">
                <h1>Seus amigos</h1>
            </div>
            <div className="friends-nivel-div">
                <span>Nível 1</span>
            </div>
            <Friend name="João da Silva" />
            <Friend name="Maria de Almeida"/>
            <div className="friends-nivel-div">
                <span>Nível 2</span>
            </div>
            <Friend name="José Tavares"/>
            <Friend name="André Caldas"/>
            <div className="add-friend-btn">
                <Link to="/add-friend">
                    <button>Adicionar amigo</button>
                </Link>
            </div>
        </div>
    );
}

export default Friends