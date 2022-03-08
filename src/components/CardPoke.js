import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 280px;
  height: 388px;
`;
const Card = styled.div`
  width: 252px;
  height: 362px;
`;
const CardImage = styled.div`
  width: 224px;
  height: 199px;
  left: 33px;
  top: 53px;
`;
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

const Information = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 219px;
  height: 76px;
  left: 29px;
  top: 272px;
`;

function CardPoke(props) {
  const { name, image, experience, height, weight } = props;
  return (
    <Container>
      <Card>
        <Name>{name}</Name>
        <CardImage style={{ backgroundImage: `url(${image})` }}></CardImage>
        <Information>
          <p className="item">
            Experience<span>{experience}</span>
          </p>
          <p className="item">
            Height<span>{height}</span>
          </p>
          <p className="item">
            Weight<span>{weight}</span>
          </p>
        </Information>
      </Card>
    </Container>
  );
}

export default CardPoke;
