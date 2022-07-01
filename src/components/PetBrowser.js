import React from "react";

import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {
  const petArr = pets.map(pet=><Pet key = {pet.id} id = {pet.id} isAdopted = {pet.isAdopted} type={pet.type} name={pet.name} age={pet.age} weight = {pet.weight} gender = {pet.gender} onAdoptPet = {onAdoptPet}/>)
  return <div className="ui cards">{petArr}</div>;
}

export default PetBrowser;
