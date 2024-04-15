import React, { useState, useEffect } from "react";
import { RequestForm, Header, Footer } from '../components/index.js';
import { grids_3 } from '../pages/index.js';
import { requestFormBuy } from '../pageData/writing-pro.js';

const RegisterPage = () => {
  return (
    <>
      <Header/>
      <RequestForm id="form" grids={grids_3} pageData={requestFormBuy} type='register' margin='80px' buttonText='Оплатить'/>
    </>
  )
}

export default RegisterPage;
