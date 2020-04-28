import React from 'react';
import './CharacterSelector.css';

const CharacterSelector = ({ characters, onCharacterSelected }) => {
  const optionNodes = characters.map(({name, house}) => {
    return <option value={name} key={name}>{name}</option>
  });

  function handleChange(event) {
    onCharacterSelected(event.target.value);
  }

  return(
    <select className="character-selector" id="character-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a character</option>
      { optionNodes }
    </select>
  );
}

export default CharacterSelector;
