import React from "react";
import styled from "styled-components";
import Box from "../components/Box.js";
import ColoredText from "../components/ColoredText.js";
import { requestFormBuy, requestFormFree } from "../pageData/writing-pro.js";
import { Header, Footer } from "../components/index.js";

const SuccessPage = ({ pageData, selectedTariff }) => {
  const freeBoxes = requestFormFree.boxes.map((box) => box);
  const buyBoxes = requestFormBuy.boxes.map((box) => box);

  return (
    <>
      <Header />
      <Wrapper>
        <Box height='50vh'>
          <ColoredText data={selectedTariff === "promo" ? freeBoxes[1] : buyBoxes[1]} />
        </Box>
      </Wrapper>
      <Footer />
    </>
  )
}

export default SuccessPage;

const Wrapper = styled.div`
  display: flex;
  margin-top: 10vh;
  margin-bottom: 0px;
`
