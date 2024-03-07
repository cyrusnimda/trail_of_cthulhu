'use client'

import InfoDisplay from "@/components/InfoDisplay";
import { useState } from "react";
import { UUID } from "crypto";
import { getCharacter, saveCharacter, Character } from "@/model/repository";
import CharacterCreateForm from "@/components/CharacterCreateForm";
import StepSelector from "@/components/StepSelector";

export default function EditStep1Page(params: any) {
  const uuid = params.params.id as UUID;

  const [infoMessage, setInfoMessage] = useState<string>("Choose a profession and number of players");
  const [character, setCharacter] = useState<Character | undefined>(getCharacter(uuid));

  return (

    <div>
      <StepSelector characterCurrentStep={character?.currentStep} currentStep={2} uuid={character?.id} />
      <InfoDisplay step={2} infoMessage={infoMessage} />

      <CharacterCreateForm uuid={uuid} setInfoMessage={setInfoMessage} character={character} />
    </div >
  );
}

