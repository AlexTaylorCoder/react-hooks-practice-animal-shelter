import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

const url = "http://localhost:3001/pets"

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function onFindPetsClick(returned) {
    if (filters.type === "all")
      fetch(url).then(resp=>resp.json()).then(handlePetFetch)
    else {
      fetch(url+'?type='+filters).then(resp=>resp.json()).then(handlePetFetch)
    }
  }
  function onChangeType(returned) {
    setFilters(()=>returned)
  }
  function handlePetFetch(petData) {
    setPets(()=>petData)
  }
  function onAdoptPet(returnedMatch) {
    console.log(pets)
    console.log(returnedMatch)
    const match = pets.map (pet => {
      if(pet.id === returnedMatch) {
          const opp = !pet.isAdopted
          console.log(pet.isAdopted)
          return {...pet, isAdopted:!pet.isAdopted}
      }
      else {
          return pet
      }
    })
    setPets(()=>match)
  }


  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onFindPetsClick = {onFindPetsClick} onChangeType= {onChangeType}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet = {onAdoptPet} pets = {pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
