import './Login.css'

import { Link } from 'react-router-dom';

import { RiArrowGoBackFill } from 'react-icons/ri'

import Input from '../Register/Input';

const Login = () => {
    return (
        <div className="login-container">
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
                <span>Bem-vindo de volta!</span>
            </div>
            <div className="inputs-container">
                <Input />
                <Input fieldName="Senha" hideable={true} />
                <Link to="/journey">
                    <button className="register-button">
                        Entrar
                    </button>
                </Link>
            </div>
            <div className="login-footer">
                <span style={{marginBottom: "6rem"}}>
                    Não possui uma conta ainda?
                    <Link to="/register" className="register-link"> Cadastre-se agora! </Link>
                </span>
            </div>
        </div>
    );
}

export default Login;