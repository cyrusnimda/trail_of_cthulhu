import React from 'react'
import { useState, useEffect } from "react";

import { getCharacter, saveCharacter, Character } from "@/model/repository";

const CharacterStep2 = ({
    setInfoMessage,
    character,
    setCharacter
}: {
    setInfoMessage: (message: string) => void,
    character: Character | undefined,
    setCharacter: (character: Character) => void
}) => {

    const [step, setStep] = useState<number>(1);

    useEffect(() => {
        setStep(character?.currentStep ?? 1);
    }, [character]);

    return (
        <section className={"flex flex-col gap-5 " + (step !== 2 ? "hidden" : "")}>
            <div className="flex flex-row justify-between gap-2">
                1111
            </div>

            <div className="flex flex-row justify-between gap-2">
                2222
            </div>

            <div className="flex flex-row justify-between gap-2">
                3333
            </div>
        </section>
    )
}

export default CharacterStep2