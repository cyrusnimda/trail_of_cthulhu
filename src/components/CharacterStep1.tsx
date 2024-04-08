import React from 'react'
import { useState, useEffect } from "react";

import ProfessionSelector from "@/components/ProfessionSelector";
import CreditSelector from "@/components/CreditSelector";
import PlayersSelector from "@/components/PlayersSelector";
import { getCharacter, saveCharacter, Character } from "@/model/repository";

const CharacterStep1 = ({
    setInfoMessage,
    character,
    setCharacter
}: {
    setInfoMessage: (message: string) => void,
    character: Character | undefined,
    setCharacter: (character: Character) => void
}) => {

    const [profession, setProfession] = useState<string>("");
    const [players, setPlayers] = useState<number>(2);
    const [credit, setCredit] = useState<number>(0);
    const [step, setStep] = useState<number>(1);

    useEffect(() => {
        setProfession(character?.profession ?? "");
        setPlayers(character?.numberOfPlayers ?? 2);
        setCredit(character?.credit ?? 0);
        setStep(character?.currentStep ?? 1);
    }, [character]);

    return (
        <section className={"flex flex-col gap-5 " + (step !== 1 ? "hidden" : "")}>
            <div className="flex flex-row justify-between gap-2">
                <label className="w-[150px]" htmlFor="players">Number of players</label>
                <PlayersSelector setPlayers={setPlayers} players={players} />
            </div>

            <div className="flex flex-row justify-between gap-2">
                <label className="w-[75px]" htmlFor="name">Profession</label>
                <ProfessionSelector setInfoMessage={setInfoMessage} profession={profession} setProfession={setProfession} />
            </div>

            <div className="flex flex-row justify-between gap-2">
                <label className="w-[150px]" htmlFor="credit">Credit</label>
                <CreditSelector setInfoMessage={setInfoMessage} setCredit={setCredit} profesionName={profession} character={character} credit={credit} />
            </div>
        </section>
    )
}

export default CharacterStep1