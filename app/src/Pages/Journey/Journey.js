import './Journey.css'

import { Link } from 'react-router-dom'

import { GiHamburgerMenu } from 'react-icons/gi'

import bankSrc from '../../assets/images/bank.png'
import tradeSrc from '../../assets/images/trade.png'
import tradingSrc from '../../assets/images/trading.png'
import moneySrc from '../../assets/images/money.png'

import Nivel from './Nivel'
import Subject from './Subject'

const Journey = () => {
    return(
        <div className="journey-container">
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
        </div>
    );
}

export default Journey;