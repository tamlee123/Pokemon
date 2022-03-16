import React, { useState } from "react";
import styled from "styled-components";

import bgrImage from "../assets/bck.png";
import bgrCard from "../assets/bckCard.png";
import ReactCardFlip from "react-card-flip";
import frontCard from "../assets/frontside.png";

const PokeCardContainer = styled.div`
  width: 247px;
  height: 363px;
`;

const BackCard = styled.div`
  height: 363px;
  border-radius: 18px;
  background-image: url(${bgrCard});
  transform: translateY(-500px);

  .name {
    padding-left: 20px;
    padding-top: 20px;
    font-family: Rosario;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    color: #573903;
  }

  .image {
    width: 199px;
    height: 199px;
    padding-left: 48px;
    position: relative;
    > img {
      width: 199px;
      height: 199px;
    }
  }

  .info {
    margin-top : 0;
    div {
      display: flex;
      justify-content: space-between;
      padding: 0 30px;
      height: 23px;
    }
  }
`;

const FrontCard = styled.div`
  cursor: pointer;
`;

const CardBackground = styled.div`
  width: 205px;
  height: 150px;
  background: url(${bgrImage});
  mix-blend-mode: multiply;
  border: 10px solid #ffffff;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25))
    drop-shadow(0px 2px 11px rgba(0, 0, 0, 0.25));
  border-radius: 4px;
  position: absolute;
  top: 90px;
  left: 15px;
`;

const PokeCard = props => {
  const { name, experience, image, height, weight } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <PokeCardContainer>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard onClick={handleClick}>
          <img src={frontCard} alt="front side card" />
        </FrontCard>

        <BackCard>
          <p className="name">{name}</p>
          <CardBackground />

          <div className="image">
            <img src={image} alt={name} />
          </div>

          <div className="info">
            <div>
              <p>Experience</p>
              <p>{experience}</p>
            </div>
            <div>
              <p>Height</p>
              <p>{height}</p>
            </div>
            <div>
              <p>Weight</p>
              <p>{weight}</p>
            </div>
          </div>
        </BackCard>
      </ReactCardFlip>
    </PokeCardContainer>
  );
};

export default PokeCard;
