import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const viewablePokemon = pokemon.map((p) => (
    <PokemonCard
    key={p.id}
    pokemon={p}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {viewablePokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
