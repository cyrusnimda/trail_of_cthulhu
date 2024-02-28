'use client'

import { profesions } from "@/model/game_data";
import { ProfesionDesc } from "@/model/game_data";

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

const onCreditChange = (e: any) => {
  const credit = e.target.value;
  console.log(credit);
}

const onProfesionChange = (e: any) => {
  const profesionName: string = e.target.value;
  const description = document.getElementById("description");
  if (!description) return;

  if (!profesionName) {
    description.innerText = "Choose your profesion";
    return
  };

  const profesion = profesions[profesionName];
  description.innerText = profesion.desc;
  updateCredit(profesion);
}

export default function EditStep1Page() {
  return (
    <div>
      <section className="border rounded p-2 mb-4 opacity-85 bg-amber-50 text-[#180f00] text-sm ">
        <h1 className="mb-2">Character creation - Step 1</h1>
        <p id="description" className="italic font-thin font-serif">Choose a profession and number of players</p>
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
            <select onChange={onProfesionChange} className="bg-[#8d8565] rounded border px-1" name="profesions" id="profesions">
              <option value="">Choose your profesion</option>
              {
                Object.entries(profesions).map(([key, value]) => {
                  return (<option key={key} value={key}>{key}</option>)
                })
              }

            </select>
          </div>

          <div className="flex flex-row justify-between gap-2">
            <label className="w-[150px]" htmlFor="credit">Credit</label>
            <select onChange={onCreditChange} className="bg-[#8d8565] rounded border px-1" name="credit" id="credit">
            </select>
          </div>

          <button type="button" onClick={onSaveClick} className="bg-[#8d8565] border rounded px-2 text-white " >Save and continue</button>

        </form>
      </div>
    </div>
  );
}

