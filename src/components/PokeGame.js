import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import PokeCard from "./PokeCard";
import Loading from "./Loading";

const Deck = styled.div`
  margin: 100px;
  padding: 20px;
  border: 1px solid green;

  .deck-button {
    padding: 30px 0;
    display: flex;
    justify-content: center;
  }
`;

const Display = styled.div`
  padding-top : 500px;
  display: flex;
  justify-content: center;
  ul {
    padding-inline-start: 0px;
    list-style-type: none;
    display: flex;
    align-items: flex-start;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.45));
    .item {
      margin: 24px;
    }
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
  font-size: 24px;
  font-family: Rosario;
  font-style: normal;
  cursor: pointer;
`;

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=500";

const PokeGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [endpoints, setEndpoints] = useState([]);

  //fetch data that includes 500 url of pokemon
  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const { data : { results } } = await axios.get(API_BASE_URL);
        for (let i = 0; i < 5; i++) {
          //pick 5 random urls in the 500
          const pokemonUrlList = results.map(m => m.url);
          const randIdx = Math.floor(Math.random() * pokemonUrlList.length);
          setEndpoints(data => [...data, pokemonUrlList[randIdx]]);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchPokemons();
  }, []);

  //fetch data for 5 randoms pokemon
  const grabPokemon = async () => {
    setIsLoading(true);
    try {
      await Promise.all(endpoints.map(endpoint => axios.get(endpoint))).then(
        response => {
          const data = response.map(p => p.data);
          setPokemons(data);
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const renderPokeCards = (
    <ul>
      {pokemons.map(pm => {
        const { 
          name,
          base_experience,
          sprites : { other : { "official-artwork" : { front_default }}},
          height,
          weight
        } = pm;

        return (
          <li className="item">
            <PokeCard
              key={name}
              name={name}
              experience={base_experience}
              image={front_default}
              height={height}
              weight={weight}
            />
          </li>
        );
      })}
    </ul>
  );

  return (
    <Deck>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Display>
            {renderPokeCards}
          </Display>
        </>
      )}
      <div className="deck-button">
        <Button onClick={grabPokemon}>Deal Card</Button>
      </div>
    </Deck>
  );
};

export default PokeGame;
