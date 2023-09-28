import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard( {pokemon}) {
  const [isFlipped, setIsFlipped] = useState(false)

  function handleToggleFlipped() {
    setIsFlipped(!isFlipped)
  }
  return (
    <Card>
      <div>
        <div className="image" onClick={handleToggleFlipped}>
          {isFlipped? 
          <img src={pokemon.sprites.back} alt="back" />
          :
          <img src={pokemon.sprites.front }alt="front" />
        }
          
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
