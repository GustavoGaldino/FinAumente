import React from 'react'

import './Nivel.css'

import { AiOutlineStock } from 'react-icons/ai'

import { FaUserAlt } from 'react-icons/fa'

import { BsPiggyBank } from 'react-icons/bs'

import NivelCard from './NivelCard';

const Nivel = () => {
    return (
        <div className="nivel-container">
            <div className="question-div">
                <span>Quanto você se sente <br /> confortável com finanças? </span>    
            </div>
            <NivelCard
                title = "Pouco confiante"
                description = "Sei apenas o básico sobre dinheiro e trocas"
            >
                <FaUserAlt style={{fontSize: "3rem"}} />
            </NivelCard>
            <NivelCard
                title = "Confiança média"
                description = "Tenho controle mediano do meu dinheiro e crédito"
            >
                <BsPiggyBank style={{fontSize: "4rem"}} />
            </NivelCard>
            <NivelCard
                title = "Muito confiante"
                description = "Sei como gerir minhas finanças e conhecimentos"
            >
                <AiOutlineStock style={{fontSize: "4rem"}} />
            </NivelCard>
            <button className="nivel-btn">
                Continuar
            </button>
        </div>  
    );
}

export default Nivel;