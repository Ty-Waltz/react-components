import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'

const CharacterDetail = ({ characterId }) => {
    const [characterData, setCharacterData] = useState(null);
    
    useEffect(() => {

            const publicKey = '<>';
            const hash = '<>';

    
        if (characterId) {
            const fetchCharacterDetail = async () => {
                try {
                    const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${publicKey}&hash=${hash}`);
                    setCharacterData(response.data.data.results[0]);
                } catch (error) {
                    console.error('Error fetching character details:', error);
                }
            };
            fetchCharacterDetail();
        }
    }, [characterId]);

    return (
        <div>
            {characterData ? (
                <div>
                    <h2>{characterData.name}</h2>
                    <p>{characterData.description}</p>
                    <ul>
                        {characterData.comics.items.map((comic, index) => (
                            <li key={index}>{comic.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading character details...</p>
            )}
        </div>
    );
};


CharacterDetail.propTypes = {
    characterId: PropTypes.number, 
};

export default CharacterDetail;
