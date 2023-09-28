import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

const API = "http://localhost:3001/pokemon"
function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(() => {
    fetch(API)
    .then((res) => res.json()) 
    .then((data) => setPokemon(data))
}, [])

function onSearch(input) {
  setSearchInput(input)

}

const filteredPokemon = pokemon.filter((p) => {
  return p.name.toLowerCase().includes(searchInput.toLowerCase())
})

function onNewPokemonSubmit(newPokemon) {
  setPokemon([...pokemon, newPokemon])

}
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemonSubmit={onNewPokemonSubmit}/>
      <br />
      <Search onSearch={onSearch} searchInput={searchInput}/>
      <br />
      <PokemonCollection pokemon={filteredPokemon}/>
    </Container>
  );
}

export default PokemonPage;
