import React from 'react';
import './CharacterDetail.css'

const CharacterDetail = ({ character }) => {
  if (!character) {
    return null;
  }
  return (
    <div className="flex-container">
    <h3>
    House: {character.house}
    </h3>
    <h3>
    Species: {character.species}
    </h3>
    <h3>
    Gender: {character.gender}
    </h3>
    </div>
  )
}

export default CharacterDetail;
