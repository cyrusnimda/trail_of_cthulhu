'use client'

import Link from "next/link";
import { createNewCharacter, Gender } from "@/model/repository.tsx";
import Image from "next/image";
import { useEffect } from "react";

const onSaveClick = () => {
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const gender = (document.getElementById("gender") as HTMLSelectElement).value as Gender;

  console.log(name, gender)
  createNewCharacter(name, gender)
}

export default function Home() {

  return (
    <main>
      <div className="flex flex-col items-center">

        <form className="flex flex-col gap-5">
          <div className="flex gap-2">
            <label className="w-[75px]" htmlFor="name">Name</label>
            <input className="bg-[#8d8565]" type="text" name="name" id="name" />
          </div>

          <div className="flex gap-2">
            <label className="w-[75px]" htmlFor="gender">Gender</label>
            <select className="bg-[#8d8565]" name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>


          <button type="button" onClick={onSaveClick} className="bg-[#8d8565] border rounded px-2 text-white " >Save and continue</button>

        </form>
      </div>
    </main>
  );
}

