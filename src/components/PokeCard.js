import React, { useState } from "react";
import styled from "styled-components";
import bgrImage from "../assets/bck.png";
import bgrCard from "../assets/bckCard.png";
import ReactCardFlip from "react-card-flip";
import frontCard from "../assets/frontside.png";

function PokeCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const { name, experience, image, height, weight } = props;
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  };

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <FrontCard onClick={handleClick}>
          <img src={frontCard} alt="front side card"></img>
        </FrontCard>

        <BackCard>
          <Name> {name}</Name>
          <CardBackground></CardBackground>

          <CardImage>
            <img src={image} alt="poke"></img>
          </CardImage>

          <Info>
            <p>
              Experience: <span className="item">{experience}</span>
            </p>
            <p>
              Height: <span className="item">{height}</span>
            </p>
            <p>
              Weight: <span className="item">{weight}</span>
            </p>
          </Info>
        </BackCard>
      </ReactCardFlip>
    </div>
  );
}

const BackCard = styled.div`
  width: 247px;
  height: 363px;
  border-radius: 18px;
  position: relative;
  background-image: url(${bgrCard});
  transform: translateY(-700px);
`;
const FrontCard = styled.div`
  width: 247px;
  height: 363px;
  > img {
    width: 247px;
    height: 363px;
  }
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
export default PokeCard;
