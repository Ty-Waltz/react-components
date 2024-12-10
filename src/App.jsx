import { useState } from 'react';
import CharacterList from './components/CharacterList';
import CharacterDetail from './components/CharacterDetails';

const App = () => {
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterClick = (id) => {
        setSelectedCharacterId(id);
    };

    return (
        <div>
            <h1>Marvel Comics Characters</h1>
            <CharacterList onCharacterClick={handleCharacterClick} />
            {selectedCharacterId && <CharacterDetail characterId={selectedCharacterId} />}
        </div>
    );
};

export default App;