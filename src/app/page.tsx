'use client'

import Link from "next/link";
import { getCharacters } from "@/model/repository";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Character } from "@/model/repository";

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    setCharacters(getCharacters())
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">

      <Link href="/new" >
        <button className="bg-[#8d8565] border rounded px-2 text-white " >Create new character</button>
      </Link>

      <section className="block py-4">
        <div>You have {characters.length} characters saved</div>
      </section>

      <section className="flex items-center gap-5">
        {
          characters.map((character) => (
            <Link key={character.id} href={"/edit/" + character.id}>
              <div className="flex flex-col items-center border rounded border-white p-2 bg-[#8d8565]">
                {
                  character.picture && <Image width={100} height={100} src={character.picture ?? ""} alt={`Picture of ` + character.name} className="rounded-full" />
                }

                <div>{character.name}</div>

              </div>
            </Link>

          ))
        }
      </section>
    </div>
  );
}

