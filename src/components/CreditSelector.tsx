import React from 'react'
import { credits } from '@/model/game_data';
import { profesions } from "@/model/game_data";
import { Character } from '@/model/repository';


const CreditSelector = ({ setInfoMessage, profesionName, setCredit, character, credit }:
    { setInfoMessage: (message: string) => void, profesionName: string, setCredit: (message: number) => void, character: Character, credit: number }) => {
    const defaultCredits = [0, 1, 2, 3, 4, 5, 6, 7];

    let selectorCredits = defaultCredits
    const currentProfesion = profesions[profesionName];
    if (currentProfesion) {
        selectorCredits = Array.from({ length: currentProfesion.maxCredit - currentProfesion.minCredit + 1 }, (_, i) => currentProfesion.minCredit + i);
    }

    const onCreditChange = (e: any) => {
        const creditIndex: number = e.target.value;
        const credit = credits[creditIndex];

        setInfoMessage(credit.desc);
        setCredit(creditIndex);
    }

    return (
        <select value={credit} onChange={onCreditChange} className="bg-[#8d8565] rounded border px-1" name="credit" id="credit">
            {
                selectorCredits.map((credit) => {
                    return (<option key={credit} value={credit}>{credit}</option>)
                })
            }
        </select>
    )
}

export default CreditSelector