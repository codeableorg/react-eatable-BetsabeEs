import styled from '@emotion/styled';
import React from 'react'
import { BrowserRouter, Link, NavLink, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { EditProduct } from '../pages/EditProduct';
import { Delete } from '../pages/Delete';
import Dashboard from '../pages/Dashboard';
import { RiEditBoxFill, RiDeleteBin6Fill} from 'react-icons/ri';

const StyledFrame = styled.div`
  display: flex;
  width: 150px;
  height: 30px;
  gap: 50px;
  justify-content: center;
  align-items: center;
  background: white;
  padding-left:5px;
`;
const OptionButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

export const LinkOptions = () => {
    const navigate = useNavigate();
    const style = { color: "#FA4A0C", fontSize: "1.5em",background:"white" }
  return (
    <>
      <StyledFrame>
          <div>
              <OptionButton onClick={()=> navigate("edit")} > <RiEditBoxFill style={style}/> </OptionButton>
          </div>
          <div>
              <OptionButton onClick={()=> navigate("")}> <RiDeleteBin6Fill style={style}/> </OptionButton>
          </div>
      </StyledFrame> 
    </>
  )
}
