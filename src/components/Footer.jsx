import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { Button } from './Button/Button';
import { CreateProduct } from '../pages/CreateProduct';

export const Footer = () => {
    const navigate = useNavigate();
    return (
        
        <div>
            <Button onClick={()=> navigate("create")} > Create </Button>
        </div>
        
    )
}
