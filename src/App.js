import React from "react";
import PokeGame from "./components/PokeGame";
import styled from "styled-components";

function App() {
  return (
    <Deck>
      <Button>Deal Card</Button>
      <PokeCard>
        <div className="items">
          <PokeGame />
        </div>
        <div className="items">
          <PokeGame />
        </div>
        <div className="items">
          <PokeGame />
        </div>
        <div className="items">
          <PokeGame />
        </div>
        <div className="items">
          <PokeGame />
        </div>
      </PokeCard>
    </Deck>
  );
}
const Deck = styled.div`
  width: 1712px;
  height: 1549px;
  position: relative;
  margin: 10%;
`;
const PokeCard = styled.div`
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
    margin: 1rem;
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
`;
export default App;
