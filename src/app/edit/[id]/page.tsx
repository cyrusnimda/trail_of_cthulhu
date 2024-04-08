'use client'

import InfoDisplay from "@/components/InfoDisplay";
import { useEffect, useState } from "react";
import { UUID } from "crypto";
import { getCharacter, saveCharacter, Character } from "@/model/repository";
import CharacterCreateForm from "@/components/CharacterCreateForm";
import StepSelector from "@/components/StepSelector";

export default function EditStep1Page(params: any) {
  const uuid = params.params.id as UUID;

  const [infoMessage, setInfoMessage] = useState<string>("Choose a profession and number of players");
  const [character, setCharacter] = useState<Character | undefined>();

  useEffect(() => {
    setCharacter(getCharacter(uuid));
  }, [uuid]);

  return (

    <div>
      <StepSelector characterCurrentStep={character?.currentStep} currentStep={1} uuid={character?.id} />
      <InfoDisplay step={1} infoMessage={infoMessage} />

      <CharacterCreateForm uuid={uuid} setInfoMessage={setInfoMessage} character={character} setCharacter={setCharacter} />
    </div >
  );
}

