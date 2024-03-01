import React from 'react'
import { profesions } from "@/model/game_data";

const ProfesionSelector = ({
    setInfoMessage,
    setProfesion,
    profesion
}:
    {
        setInfoMessage: (message: string) => void,
        setProfesion: (profesion: string) => void,
        profesion: string
    }) => {
    const onProfesionChange = (e: any) => {
        const profesionName: string = e.target.value;

        const profesion = profesions[profesionName];
        if (!profesion) {
            setInfoMessage("Choose a profession and number of players");
            return;
        }
        setInfoMessage(profesion.desc);
        setProfesion(profesionName);
    }

    return (
        <select value={profesion} onChange={onProfesionChange} className="bg-[#8d8565] rounded border px-1" name="profesions" id="profesions">
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