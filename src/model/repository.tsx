'use client';
import { UUID } from "crypto";

export type Gender = "male" | "female"

export type Character = {
    id: UUID,
    name: string,
    gender: Gender,
    currentStep: number
    picture?: string,
    profession?: string,
    credit?: number
    numberOfPlayers?: number
}

export const getCharacter = (id: UUID): Character | undefined => {
    console.log("getCharacter");
    const characters = getCharacters();
    return characters.find((c) => c.id === id);
}

export const getCharacters = (): Character[] => {
    console.log("getCharacters");
    const characterString: string | null = localStorage.getItem("characters");

    try {
        const characters: Character[] = characterString ? JSON.parse(characterString) : [];
        return characters;
    } catch (e) {
        console.error("Error parsing characters, resetting to empty array");
        localStorage.removeItem("characters");
        return []
    }

}

export const saveCharacter = (character: Character) => {
    console.log("saveCharacter");
    const characters = getCharacters();

    // Check if character already exists
    const existingCharacter = characters.find((c) => c.id === character.id);
    if (existingCharacter) {
        // Replace existing character
        characters[characters.indexOf(existingCharacter)] = character;
        localStorage.setItem("characters", JSON.stringify(characters));
        return;
    }

    // Add new character
    characters.push(character);
    localStorage.setItem("characters", JSON.stringify(characters));
}

export const createNewCharacter = (name: string, gender: Gender): Character => {
    console.log("createNewCharacter");
    const newCharacter = {
        id: crypto.randomUUID() as UUID,
        name: name,
        gender: gender,
        currentStep: 1
    }
    saveCharacter(newCharacter);
    return newCharacter;
}
