import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const BrowseCharacters = ({ characters }) => {
  return (
    <div>
      <h2>Browse Characters</h2>
      <div className="character-grid">
        {characters.map(character => (
          <div key={character.id} className="character-card">
            <img 
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
              alt={character.name} 
            />
            <h3>{character.name}</h3>
            <Link to={`/character/${character.id}`}>See Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

BrowseCharacters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  )
};

export default BrowseCharacters;