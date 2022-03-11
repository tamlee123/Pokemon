import React, { useState, useEffect } from "react";
import axios from "axios";
import PokeCard from "./PokeCard";

const PokeGame = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const grabPokemon = async () => {
      setIsLoading(true);
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/1`);
      setPokemon(data);
      setIsLoading(false);
    };

    grabPokemon().catch(console.error);
  }, []);

  //   let randomId = Array.from(
  //     { length: 5 },
  //     () => Math.floor(Math.random() * 500) + 1
  //   );
  //   let endpoints = [
  //     `https://pokeapi.co/api/v2/pokemon/${randomId[0]}`,
  //     `https://pokeapi.co/api/v2/pokemon/${randomId[1]}`,
  //     `https://pokeapi.co/api/v2/pokemon/${randomId[2]}`,
  //     `https://pokeapi.co/api/v2/pokemon/${randomId[3]}`,
  //     `https://pokeapi.co/api/v2/pokemon/${randomId[4]}`,
  //   ];
  //   useEffect(() => {
  //     const grabPokemon = async () => {
  //       setIsLoading(true);
  //       try {
  //         Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
  //           ({ data }) => {
  //             setPokemon(DataTransferItemList);
  //             setIsLoading(false);
  //             console.log(data);
  //           }
  //         );
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     grabPokemon();
  //   }, []);

  const renderLoading = (
    <div>
      <p>Loading...</p>
    </div>
  );

  const renderPokemon = (data) => {
    return (
      <div>
        <PokeCard
          pokename={data.name}
          experience={data.base_experience}
          image={data.sprites}
          height={data.height}
          weight={data.weight}
        />
      </div>
    );
  };
  return <div>{isLoading ? renderLoading : renderPokemon(pokemon)}</div>;
};

export default PokeGame;
