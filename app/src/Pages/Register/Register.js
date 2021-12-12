import './Register.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri'

import Input from './Input';

const Register = () => {
    return (
        <div className="register-container">
            <div style={{
                width: "100vw"
            }}>
                <Link to="/">
                    <RiArrowGoBackFill
                        size="2rem"
                        style={{
                            position: "relative",
                            left: "calc(15vw - .75rem)",
                            cursor: "pointer"
                        }}
                    />
                </Link>
            </div>
            <div className="register-texts">
                <h1>Vamos entrar</h1>
                <span>Se cadastre conosco</span>
            </div>
            <div className="inputs-container">
                <Input fieldName="Nome ou apelido" />
                <Input />
                <Input fieldName="Senha" hideable={true} />
                <Input fieldName="Confirmar senha" hideable={true} />
            </div>
            <Link to="/journey">
                <button className="register-button">
                    Cadastrar
                </button>
            </Link>
        </div>
    );
}

export default Register;