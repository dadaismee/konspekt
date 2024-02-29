import React from "react";
import styled from "styled-components";
import Box from "../components/Box.js";
import ColoredText from "../components/ColoredText.js";
import { requestForm } from "../pageData/writing-pro.js";
import { Header, Footer } from "../components/index.js";

const SuccessPage = ({ pageData }) => {
  const boxes = requestForm.boxes.map((box) => box);

  return (
    <>
      <Header />
      <Wrapper>
        <Box height='50vh'>
          <ColoredText data={boxes[1]} />
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
