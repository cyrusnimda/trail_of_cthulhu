import { render, screen } from '@testing-library/react';

import CreditSelector from '@/components/CreditSelector';
import { Character } from '@/model/repository';
import { randomUUID } from 'crypto';

const character: Character = {
    id: randomUUID(),
    name: "test",
    profession: "test",
    numberOfPlayers: 1,
    credit: 1,
    currentStep: 1,
    gender: "female"
}

const mockFunction = () => { };

describe('CreditSelector', () => {
    it('renders select box', () => {
        render(<CreditSelector profesionName='' credit={0} character={character} setCredit={mockFunction} setInfoMessage={mockFunction} />);

        screen.debug();

        // check if App components renders headline
    });
});