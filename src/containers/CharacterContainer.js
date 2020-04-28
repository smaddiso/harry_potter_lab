import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';
import HouseSelector from '../components/HouseSelector';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: '',
      selectedCharacterHouse: ''
    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.handleHouseSelected = this.handleHouseSelected.bind(this);
  }

  componentDidMount() {
    const url = "http://hp-api.herokuapp.com/api/characters";

    fetch(url)
      .then(res => res.json())
      .then(characters => this.setState({ characters: characters }))
      .catch(console.error);
  }

  handleCharacterSelected(name) {
    this.setState({ selectedCharacterName: name});
  }

  handleHouseSelected(house) {
    this.setState({ selectedCharacterHouse: house});
  }

  getUniqueHouses() {
    const characterHouses = this.state.characters
    .filter(({house}) => house.length)
    .map(({house}) => {
      return house;
    });
    const uniqueHouses = Array.from(new Set(characterHouses));
    return uniqueHouses;
  }

  render() {
    const selectedCharacter = this.state.characters.find(character => {
      return character.name === this.state.selectedCharacterName;
    });

    let filteredCharacters = this.state.characters;
    if (this.state.selectedCharacterHouse.length) {
      filteredCharacters = this.state.characters.filter(character => {
        return character.house === this.state.selectedCharacterHouse;
      });// TODO filter the characters
    }

    return (
      <div>
        <h2>Harry Potter Characters</h2>
        <HouseSelector
         houses={this.getUniqueHouses()}
         onHouseSelected={this.handleHouseSelected}/>

        <CharacterSelector
          characters={filteredCharacters}
          onCharacterSelected={this.handleCharacterSelected}/>

        <CharacterDetail
          character={selectedCharacter}/>
      </div>
    );
  }
}

export default CharacterContainer;
