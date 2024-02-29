'use client'

import { ProfesionDesc } from "@/model/game_data";
import ProfesionSelector from "@/components/ProfesionSelector";
import CreditSelector from "@/components/CreditSelector";
import { useState } from "react";

const onSaveClick = () => {

}

const updateCredit = (profesion: ProfesionDesc) => {
  const creditElement = document.getElementById("credit");
  if (!creditElement) return;

  let html = "";
  for (let i = profesion.minCredit; i <= profesion.maxCredit; i++) {
    html += `<option value=${i}>${i}</option>`;
  }
  creditElement.innerHTML = html;
}

export default function EditStep1Page() {
  const [infoMessage, setInfoMessage] = useState<string>("Choose a profession and number of players");
  const [currentProfesion, setcurrentProfesion] = useState<ProfesionDesc | null>();

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
            <select className="bg-[#8d8565] rounded border px-1" name="players" id="players">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4+</option>
            </select>
          </div>

          <div className="flex flex-row justify-between gap-2">
            <label className="w-[75px]" htmlFor="name">Profesion</label>
            <ProfesionSelector setInfoMessage={setInfoMessage} setcurrentProfesion={setcurrentProfesion} />
          </div>

          <div className="flex flex-row justify-between gap-2">
            <label className="w-[150px]" htmlFor="credit">Credit</label>
            <CreditSelector setInfoMessage={setInfoMessage} currentProfesion={currentProfesion} />
          </div>

          <button type="button" onClick={onSaveClick} className="bg-[#8d8565] border rounded px-2 text-white m-auto hover:bg-amber-50 hover:text-[#180f00] hover:border-black" >Save and continue</button>

        </form>
      </div>
    </div>
  );
}

