import './TradePractice.css'

import { Link } from 'react-router-dom';

import Slider from '@mui/material/Slider'

import { RiArrowGoBackFill } from 'react-icons/ri';

import tradePracticeSrc from '../../assets/images/trade-practice.png'
import { useState } from 'react';

const TradePractice = () => {

    const [answer, setAnswer] = useState(20)

    const handleChange = (event) => {
        const val = event.target.value
        setAnswer(val)
    }

    return (
        <div className="trade-practice-container">

            <Link to="/trade-example">
                <RiArrowGoBackFill
                    size="2rem"
                    style={{
                        position: "absolute",
                        left: "2.25rem",
                        top : ".75rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        color: "FFC745"
                    }}
                /> 
            </Link>

            <div className="progress-bar-outer" style={{marginTop: "1rem"}}>
                <div className="progress-bar-inner-3"></div>
            </div>

            <div className="practice-texts">
                <div className="practice-title-div">
                    <h1>Praticar</h1>
                </div>
                <div className="practice-second-text">
                    <span>
                        Lorem ipsum dolor sit amet, <br />
                        consectur adispicing elit. Morbi leo <br />
                        lorem, portittor in volutpat in.
                    </span>
                </div>
            </div>

            <img src={tradePracticeSrc} />

            <Slider
                size="medium"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                style={{
                    width: "15rem",
                    color: "#FFC745"
                }}
                colorPrimary= "pink"
                marks
                min={0}
                max={40}
                step={5}
                onChange={handleChange}
            />

            <div className="answer-div">
                <span>
                    Resposta:
                    <span className="ans-span">
                        {answer}
                    </span>
                </span>
            </div>

            <button className="practice-btn">
                <Link to="/congratulations">
                    Checar
                </Link>
            </button>

        </div>
    );
}

export default TradePractice