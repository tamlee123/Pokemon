import React, { useEffect, useState } from "react";
import axios from "axios";
import CardPoke from "./CardPoke";

function PokeGame(props) {
  // const id = [];
  // const limit = 5;
  // [1,2,3,4,5]
  // const id = Math.floor(Math.random() * 500) + 1;
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    async function getPokemon() {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
        setPokemon(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    getPokemon();
  }, []);

  return (
    <div>
      <CardPoke
        name={pokemon.name}
        image={pokemon["sprites"]["other"]["official-artwork"]["front_default"]}
        experience={pokemon.base_experience}
        height={pokemon.height}
        weight={pokemon.weight}
      />
    </div>
  );
}

export default PokeGame;
