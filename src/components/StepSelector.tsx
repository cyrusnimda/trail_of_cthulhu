import React from 'react'
import Link from 'next/link'
import { UUID } from 'crypto';

const steps = 5;

const StepSelector = ({ currentStep, characterCurrentStep, uuid }: { characterCurrentStep: number | undefined, currentStep: number | undefined, uuid: UUID | undefined }) => {
    const ArrayOfSteps = Array.from({ length: steps }, (_, i) => i + 1)

    return (
        <section className='py-4'>
            <ul className='flex flex-row justify-around items-center'>
                {
                    ArrayOfSteps.map((step) => {
                        const selectedStepClass = "flex flex-col items-center rounded bg-black/50 border-2 border-solid p-2" + (step === currentStep ? " border-yellow-300/75" : " border-black/75");
                        const someCondition = step > (characterCurrentStep ?? 0);
                        return (
                            <Link key={step} href={`/edit/${uuid}/step/${step}`} className={someCondition ? 'pointer-events-none opacity-50' : ''}
                                aria-disabled={someCondition}
                                tabIndex={someCondition ? -1 : undefined}>
                                <li className={selectedStepClass}>
                                    <img width="20px" height="20px" src="/images/ruby.webp" alt='ruby icon' />
                                    {step}
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>

    )
}

export default StepSelector