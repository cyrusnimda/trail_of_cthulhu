'use client'

import { getCharacter } from "@/model/repository";
import { useEffect } from "react";

export default function EditPage(params) {

  useEffect(() => {
    const uuid = params.params.id;
    const character = getCharacter(uuid);
    if(!character) return;
    
    const {currentStep} = character
    window.location.href = `/edit/${uuid}/step/${currentStep}`;
  }, []);

  return (
    <main>
        Not found
    </main>
  );
}

