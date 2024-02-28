import React, { useState } from 'react'
import { credits, ProfesionDesc } from '@/model/game_data';



const CreditSelector = ({ setInfoMessage, currentProfesion }:
    { setInfoMessage: (message: string) => void, currentProfesion: ProfesionDesc | null | undefined }) => {
    const defaultCredits = [0, 1, 2, 3, 4, 5, 6, 7];

    let selectorCredits = defaultCredits
    if (currentProfesion) {
        selectorCredits = Array.from({ length: currentProfesion.maxCredit - currentProfesion.minCredit + 1 }, (_, i) => currentProfesion.minCredit + i);
    }

    const onCreditChange = (e: any) => {
        const creditIndex: number = e.target.value;
        const credit = credits[creditIndex];

        setInfoMessage(credit.desc);
    }

    return (
        <select onChange={onCreditChange} className="bg-[#8d8565] rounded border px-1" name="credit" id="credit">
            {
                selectorCredits.map((credit) => {
                    return (<option key={credit} value={credit}>{credit}</option>)
                })
            }
        </select>
    )
}

export default CreditSelector