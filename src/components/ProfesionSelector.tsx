import React from 'react'
import { profesions, ProfesionDesc } from "@/model/game_data";



const ProfesionSelector = ({
    setInfoMessage,
    setcurrentProfesion
}:
    {
        setInfoMessage: (message: string) => void,
        setcurrentProfesion: (currentProfesion: ProfesionDesc) => void
    }) => {
    const onProfesionChange = (e: any) => {
        const profesionName: string = e.target.value;

        const profesion = profesions[profesionName];
        setInfoMessage(profesion.desc);
        setcurrentProfesion(profesion);
    }

    return (
        <select onChange={onProfesionChange} className="bg-[#8d8565] rounded border px-1" name="profesions" id="profesions">
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