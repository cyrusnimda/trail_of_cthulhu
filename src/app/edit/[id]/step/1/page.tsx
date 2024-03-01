'use client'

import ProfesionSelector from "@/components/ProfesionSelector";
import CreditSelector from "@/components/CreditSelector";
import PlayersSelector from "@/components/PlayersSelector";
import { useState } from "react";
import { UUID } from "crypto";
import { getCharacter, saveCharacter } from "@/model/repository";

export default function EditStep1Page(params: any) {
  const uuid = params.params.id as UUID;
  const character = getCharacter(uuid);
  if (!character) return <div>Character not found</div>;

  const [infoMessage, setInfoMessage] = useState<string>("Choose a profession and number of players");
  const [profesion, setProfesion] = useState<string>(character?.profession ?? "");
  const [players, setPlayers] = useState<number>(character?.numberOfPlayers ?? 2);
  const [credit, setCredit] = useState<number>(character?.credit ?? 0);

  const onSaveClick = () => {
    //save data to local storage
    const character = getCharacter(uuid);
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
    <div>
      <section className="border rounded p-2 mb-4 opacity-85 bg-amber-50 text-[#180f00] text-sm ">
        <h1 className="mb-2">Character creation - Step 1</h1>
        <p id="description" className="italic font-thin font-serif">{infoMessage}</p>
      </section>

      <div className="flex flex-col">
        <form className="flex flex-col gap-5">
          <div className="flex flex-row justify-between gap-2">
            <label className="w-[150px]" htmlFor="players">Number of players</label>
            <PlayersSelector setPlayers={setPlayers} players={players} />
          </div>

          <div className="flex flex-row justify-between gap-2">
            <label className="w-[75px]" htmlFor="name">Profesion</label>
            <ProfesionSelector setInfoMessage={setInfoMessage} profesion={profesion} setProfesion={setProfesion} />
          </div>

          <div className="flex flex-row justify-between gap-2">
            <label className="w-[150px]" htmlFor="credit">Credit</label>
            <CreditSelector setInfoMessage={setInfoMessage} setCredit={setCredit} profesionName={profesion} character={character} credit={credit} />
          </div>

          <button type="button" onClick={() => onSaveClick()}
            className="bg-[#8d8565] border rounded px-2 text-white m-auto hover:bg-amber-50 hover:text-[#180f00] hover:border-black" >
            Save and continue
          </button>

        </form>
      </div>
    </div>
  );
}

