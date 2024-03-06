import React from 'react'

const PlayersSelector = ({
    players,
    setPlayers,
}: {
    players: number,
    setPlayers: (message: number) => void,
}) => {

    return (
        <select value={players} onChange={(e) => setPlayers(parseInt(e.target.value))} className="bg-[#8d8565] rounded border px-1" name="players" id="players">
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4+</option>
        </select>
    )
}

export default PlayersSelector