import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import bgr from "../assets/bck.png";
import bgrCard from "../assets/bckCard.png";
import ReactCardFlip from "react-card-flip";
import backCard from "../assets/backside.png";
const GamePoke = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  let randomId = Math.floor(Math.random() * 500) + 1;
  useEffect(() => {
    const grabPokemon = async () => {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomId}`
      );
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
    const handleClick = (e) => {
      e.preventDefault();
      setIsFlipped(!isFlipped);
    };

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card onClick={handleClick}>
          <img src={backCard} alt="back side card"></img>
        </Card>

        <Card onClick={handleClick}>
          <Name> {name}</Name>
          <CardBackground></CardBackground>

          <CardImage>
            <img
              src={other["official-artwork"]["front_default"]}
              alt="poke"
            ></img>
          </CardImage>

          <Info>
            <p>
              Experience: <span className="item">{base_experience}</span>
            </p>
            <p>
              Height: <span className="item">{height}</span>
            </p>
            <p>
              Weight: <span className="item">{weight}</span>
            </p>
          </Info>
        </Card>
      </ReactCardFlip>
    );
  };

  return <>{isLoading ? renderLoading : renderPokemon(pokemon)}</>;
};

const Card = styled.div`
  width: 247px;
  height: 363px;
  border-radius: 18px;
  position: relative;
  background-image: url(${bgrCard});
`;

const Name = styled.p`
  position: absolute;
  width: 107px;
  height: 29px;
  left: 29px;
  top: 3px;
  font-family: Rosario;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #573903;
`;
const CardBackground = styled.div`
  width: 205px;
  height: 139px;
  background: url(${bgr});
  mix-blend-mode: multiply;
  border: 10px solid #ffffff;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  position: absolute;
  top: 90px;
  left: 15px;
`;
const CardImage = styled.div`
  width: 199px;
  height: 199px;
  left: 48px;
  top: 50px;
  position: absolute;
  margin: auto;
  > img {
    width: 199px;
    height: 199px;
  }
`;
const Info = styled.div`
  position: absolute;
  width: 219px;
  height: 76px;
  left: 18px;
  top: 250px;
  .item {
    position: absolute;
    right: 0;
  }
`;
export default GamePoke;
