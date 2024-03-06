import React from 'react'
import { profesions } from "@/model/game_data";

const ProfesionSelector = ({
    setInfoMessage,
    setProfession,
    profession
}:
    {
        setInfoMessage: (message: string) => void,
        setProfession: (profesion: string) => void,
        profession: string
    }) => {

    console.log("ProfesionSelector", profession);
    const onProfesionChange = (e: any) => {
        const profesionName: string = e.target.value;

        const profesion = profesions[profesionName];
        if (!profesion) {
            setInfoMessage("Choose a profession and number of players");
            return;
        }
        setInfoMessage(profesion.desc);
        setProfession(profesionName);
    }

    return (
        <select value={profession} onChange={onProfesionChange} className="bg-[#8d8565] rounded border px-1" name="profesions" id="profesions">
            <option value="">Choose your profesion</option>
            {
                Object.entries(profesions).map(([key, value]) => {
                    return (<option key={key} value={key}>{key}</option>)
                })
            }

        </select>
    )
}

export default ProfesionSelector