import React, { Children } from 'react'

import { getCharacter, saveCharacter, Character } from "@/model/repository";
import { UUID } from 'crypto';
import CharacterStep1 from '@/components/CharacterStep1';
import CharacterStep2 from '@/components/CharacterStep2';

const CharacterCreateForm = ({
    uuid,
    setInfoMessage,
    character,
    setCharacter
}: {
    uuid: UUID,
    setInfoMessage: (message: string) => void,
    character: Character | undefined,
    setCharacter: (character: Character) => void
}) => {


    const onSaveClick = () => {
        //save data to local storage

        if (!character) return;

        character.currentStep = 2;
        // character.numberOfPlayers = players;
        // character.profession = profesion;
        // character.credit = credit
        saveCharacter(character);

        //redirect to next page
        window.location.href = `/edit/${uuid}/step/2`;
    }

    return (
        <div className="flex flex-col">
            <form className="flex flex-col gap-5">
                <CharacterStep1 setInfoMessage={setInfoMessage} character={character} setCharacter={setCharacter} />
                <CharacterStep2 setInfoMessage={setInfoMessage} character={character} setCharacter={setCharacter} />

                <button type="button" onClick={() => onSaveClick()}
                    className="bg-[#8d8565] border rounded px-2 text-white m-auto hover:bg-amber-50 hover:text-[#180f00] hover:border-black" >
                    Save and continue
                </button>
            </form>
        </div>
    )
}

export default CharacterCreateForm