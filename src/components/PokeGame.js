import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";
import styled from "styled-components";

function PokeGame() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  let randomId = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 500) + 1
  );
  let endpoints = [
    `https://pokeapi.co/api/v2/pokemon/${randomId[0]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomId[1]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomId[2]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomId[3]}`,
    `https://pokeapi.co/api/v2/pokemon/${randomId[4]}`,
  ];
  useEffect(() => {
    const grabPokemon = async () => {
      setIsLoading(true);
      try {
        Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
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
    grabPokemon();
  }, []);

  const renderLoading = (
    <div>
      <p>Loading...</p>
    </div>
  );

  return (
    <Deck>
      <Button>Deal Card</Button>
      {isLoading ? (
        renderLoading
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
  margin: 5% 0 0 5%;
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
