import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import styled from "styled-components";
import Loading from "./Loading";

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500";
function PokeGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [deck, setDeck] = useState([]);

  //fetch data that includes 500 url of pokemon
  useEffect(() => {
    async function pokemons() {
      try {
        const res = await axios.get(API_BASE_URL);
        setDeck(res.data.results);
        console.log(res.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    pokemons();
  }, []);
  //pick 5 random urls in the 500
  let endpoints = [];
  let poke_url = deck.map((m) => m.url); //return 500 urls in an array
  while (endpoints.length <= 4) {
    let randIdx = Math.floor(Math.random() * poke_url.length);
    //slice the url of that random idx and push it in the array endpoints
    let randPokemon = poke_url.slice(randIdx, randIdx + 1);
    endpoints.push(randPokemon);
  }
  console.log(endpoints);
  //fetch data for 5 randoms pokemon
  const grabPokemon = async () => {
    setIsLoading(true);
    try {
      await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
        (response) => {
          const data = response.map((p) => p.data);
          setPokemon(data);
          setIsLoading(false);
          console.log(data);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Deck>
      <Button onClick={grabPokemon}>Deal Card</Button>

      {isLoading ? (
        <Loading />
      ) : (
        <Display>
          {pokemon.map((pm) => (
            <div className="items">
              <PokeCard
                key={pm.name}
                name={pm.name}
                experience={pm.base_experience}
                image={pm.sprites.other["official-artwork"]["front_default"]}
                height={pm.height}
                weight={pm.weight}
              />
            </div>
          ))}
        </Display>
      )}
    </Deck>
  );
}

const Deck = styled.div`
  width: 1712px;
  height: 1549px;
  position: relative;
  margin: auto;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1px solid green;
`;
const Display = styled.div`
  width: 1480px;
  height: 388px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  position: absolute;
  left: 116px;
  top: 855px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
  .items {
    margin: 1.5rem;
  }
`;
const Button = styled.button`
  width: 169px;
  height: 42px;
  background: #d62828;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3), 0px 4px 34px #000000;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 1.5rem;
  font-family: Rosario;
  font-style: normal;
  position: absolute;
  bottom: 2rem;
  left: 45%;
`;

export default PokeGame;
