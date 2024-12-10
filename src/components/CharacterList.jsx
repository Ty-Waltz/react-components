import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const publicKey = '<>';
        const hash = '<>';
        const url = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${publicKey}&hash=${hash}`;

        axios.get(url)
            .then(response => {
                setCharacters(response.data.data.results);
                setLoading(false);
            })
            .catch(error => {
                console.error("There was an error fetching the characters:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="character-grid">
            {characters.map(character => (
                <div key={character.id} className="character-card">
                    <img 
                        src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                        alt={character.name} 
                    />
                    <h3>{character.name}</h3>
                </div>
            ))}
        </div>
    );
};

export default CharacterList;