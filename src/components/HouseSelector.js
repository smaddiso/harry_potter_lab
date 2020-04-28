import React from 'react';



const HouseSelector = ({ houses, onHouseSelected }) => {
  const optionNodes = houses.map(house => {
      return <option value={house} key={house}>{house}</option>
  })

  function handleChange(event) {
    onHouseSelected(event.target.value);
  }

  return(
    <select className="house-selector" id="house-selector" defaultValue="default" onChange={handleChange}>
      <option disabled value="default">Choose a house</option>
      <option value="">All Characters</option>
      { optionNodes }
    </select>
  );
}

export default HouseSelector;
