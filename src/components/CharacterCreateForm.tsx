import React, { Children } from 'react'

import { getCharacter, saveCharacter, Character } from "@/model/repository";
import { UUID } from 'crypto';
import { useState, useEffect } from "react";

import ProfessionSelector from "@/components/ProfessionSelector";
import CreditSelector from "@/components/CreditSelector";
import PlayersSelector from "@/components/PlayersSelector";

const CharacterCreateForm = ({
    uuid,
    setInfoMessage,
    character,
}: {
    uuid: UUID,
    setInfoMessage: (message: string) => void,
    character: Character | undefined
}) => {
    const [profession, setProfession] = useState<string>("");
    const [players, setPlayers] = useState<number>(2);
    const [credit, setCredit] = useState<number>(0);

    useEffect(() => {
        setProfession(character?.profession ?? "");
        setPlayers(character?.numberOfPlayers ?? 2);
        setCredit(character?.credit ?? 0);
    }, [character]);

    const onSaveClick = () => {
        //save data to local storage

        if (!character) return;

        character.currentStep = 2;
        character.numberOfPlayers = players;
        character.profession = profesion;
        character.credit = credit
        saveCharacter(character);

        //redirect to next page
        window.location.href = `/edit/${uuid}/step/2`;
    }

    return (
        <div className="flex flex-col">
            <form className="flex flex-col gap-5">
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

                <button type="button" onClick={() => onSaveClick()}
                    className="bg-[#8d8565] border rounded px-2 text-white m-auto hover:bg-amber-50 hover:text-[#180f00] hover:border-black" >
                    Save and continue
                </button>
            </form>
        </div>
    )
}

export default CharacterCreateForm