import React from "react";
import styled from "styled-components";
import { Spinner6 } from "@styled-icons/icomoon/Spinner6";

const Spin = styled(Spinner6)`
  width: 40px;
  height: 40px;
`;
const LoadingMessage = styled.p`
  color: green;
`;
function Loading(props) {
  return (
    <LoadingMessage>
      <Spin></Spin>
      Loading...
    </LoadingMessage>
  );
}

export default Loading;
