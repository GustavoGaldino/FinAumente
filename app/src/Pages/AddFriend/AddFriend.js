import './AddFriend.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri';

const AddFriend = () => {
    return (
        <div className="add-friend-container">
            <Link to="/friends">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: "2rem",
                        top : "2rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                />
            </Link>
            <div className="add-friend-input">
                <input placeholder="E-mail do amigo"/>
            </div>
            <Link to="/friends">
                <div className="add-friend-btn">
                    <button>Adicionar Amigo</button>
                </div>
            </Link>
        </div>
    );
}


export default AddFriend;