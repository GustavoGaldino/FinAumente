import './Journey.css'

import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'

import { AiFillStar } from 'react-icons/ai'

import bankSrc from '../../assets/images/bank.png'
import tradeSrc from '../../assets/images/trade.png'
import tradingSrc from '../../assets/images/trading.png'
import moneySrc from '../../assets/images/money.png'

import padlock from '../../assets/images/padlock.png'

import Nivel from './Nivel'
import Subject from './Subject'

import navbarPiggy from '../../assets/images/favicon.png'

const Journey = () => {
    return(
        <>
            <div className="journey-container">
                <div className="journey-navbar">
                    <div style={{marginLeft: "1rem"}}>
                        <Link to="/hamburguer">
                            <GiHamburgerMenu
                                color="#FFC745"
                                size="2rem"
                            />
                        </Link>
                    </div>
                    <div style={{marginRight: "1rem"}}>
                        <img src={navbarPiggy} style={{width: "2rem"}}/>
                    </div>
                </div>
                <div className="journey-texts">
                    <span>BÁSICO</span>
                    <h1>Fundamentos</h1>
                </div>
                <div className="nivel1-card">
                    <div className="nivel1-card-top">
                        <h1>NÍVEL 1</h1>
                    </div>
                    <div className="card1-inner">
                        <div className="subject-card1">
                            <div className="subject-card1-title">
                                <span>Trocas</span>
                            </div>
                            <Link to="/trade">
                                <div className="subject-card1-img">
                                    <img src={tradeSrc} />
                                </div>
                            </Link>
                            <div className="subject-card1-stars">
                                <AiFillStar color="#FFC745" fontSize="2rem" />
                                <AiFillStar color="#FFC745" fontSize="2rem"/>
                                <AiFillStar color="#7c642b" fontSize="2rem" />
                            </div>
                        </div>
                        <div className="subject-card1">
                            <div className="subject-card1-title">
                                <span>Dinheiro</span>
                            </div>
                            <Link to="/journey">
                                <div className="subject-card1-img">
                                    <img src={moneySrc} />
                                </div>
                            </Link>
                            <div className="subject-card1-stars">
                                <AiFillStar color="#7c642b" fontSize="2rem" />
                                <AiFillStar color="#7c642b" fontSize="2rem" />
                                <AiFillStar color="#7c642b" fontSize="2rem" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="nivel2-card">
                    <div className="nivel2-card-top">
                        <h1>NÍVEL 2</h1>
                    </div>
                    <div className="card2-inner">
                        <img src={padlock} style={{height: "8rem"}} />
                    </div>
                </div>
            </div>
            {/*<div className="journey-container">
                <div className="hamburguer-div">
                    <Link to="/hamburguer">
                        <GiHamburgerMenu
                            color="#FFC745"
                            size="2rem"
                        />
                    </Link>
                </div>
                <Nivel imgSrc={tradeSrc} nivel={1} />
                <div className="subject-cards">
                    <Subject imgSrc={tradingSrc} subjectTitle="Trocas" subjectPath="/trade" completed={true} />
                    <Subject imgSrc={moneySrc} subjectTitle="Dinheiro" subjectPath="/journey" completed={false} />
                </div>
                <Nivel imgSrc={bankSrc} nivel={2} />
            </div>*/}
        </>
    );
}

export default Journey;