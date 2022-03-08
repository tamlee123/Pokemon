import React, { useState, useEffect } from "react";
import axios from "axios";
// import PokeGame from './PokeGame_orig';
import styled from "styled-components";

const Name = styled.p`
  width: 107px;
  height: 29px;
  left: 29px;
  top: 25px;
  font-family: Rosario;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #573903;
`;
const Card = styled.div`
  width: 280px;
  height: 388px;
  border: none;
  border-radius: 5px;
`;
const CardImage = styled.div`
  width: 224px;
  height: 199px;
  left: 33px;
  top: 53px;
  margin: auto;
  > img {
    width: 224px;
    height: 199px;
  }
`;
const PokeGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const grabPokemon = async () => {
      setIsLoading(true);
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/5");
      setPokemon(data);
      setIsLoading(false);
    };

    grabPokemon().catch(console.error);
  }, []);

  const renderLoading = (
    <div>
      <p>Loading...</p>
    </div>
  );

  const renderPokemon = (data) => {
    const {
      name = "",
      base_experience = "",
      sprites: { other } = "",
      height = "",
      weight = "",
    } = data;

    return (
      <Card>
        <Name> {name}</Name>
        <CardImage>
          <img
            src={other["official-artwork"]["front_default"]}
            alt="poke"
          ></img>
        </CardImage>
        <p>base_experience: {base_experience}</p>
        <p>height:{height}</p>
        <p>weight: {weight}</p>
      </Card>
    );
  };

  return <>{isLoading ? renderLoading : renderPokemon(pokemon)}</>;
};

export default PokeGame;
