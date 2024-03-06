import React from 'react'

const InfoDisplay = ({
    step,
    infoMessage
}: {
    step: string,
    infoMessage: string
}) => {

    return (
        <section className="border rounded p-2 mb-4 opacity-85 bg-amber-50 text-[#180f00] text-sm ">
            <h1 className="mb-2">Create character - Step {step}</h1>
            <p id="description" className="italic font-thin font-serif">{infoMessage}</p>
        </section>
    )
}

export default InfoDisplay