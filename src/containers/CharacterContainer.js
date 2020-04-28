import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      selectedCharacterName: ''

    };

    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
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

  render() {
    const selectedCharacter = this.state.characters.find(character => {
      return character.name === this.state.selectedCharacterName;
    });

    return (
      <div>
        <h2>Harry Potter Characters</h2>

        <CharacterSelector
          characters={this.state.characters}
          onCharacterSelected={this.handleCharacterSelected}/>

        <CharacterDetail
          character={selectedCharacter}/>
      </div>
    );
  }
}

export default CharacterContainer;
