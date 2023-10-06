import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { getProducts } from '../services/product-service';
import { LinkOptions } from '../components/LinkOptions';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button/Button';

const DishContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  > div {
    width: 156px;
    height: 250px;
    background-color: white;
    border-radius: 30px;
    margin: 9px;

    text-align: center;
  }

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }
  p {
    font-size: 22px;
    font-weight: 550;
  }
  p:nth-of-type(2) {
    color: #fa4a0c;
  }
`;


const Dashboard = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getProducts().then((product) => setData(product));
    }, []); 
    /* function showEditPage(id){
      navigate()
    } */ 
  return (
    <div>
        <h1>Products Dashboard</h1>
        <div>
          <DishContainer>
              {data.map((dish) => (
                  <div key={dish.id}>
                      <img src={dish.picture_url} alt={dish.name} />
                      <p>{dish.name}</p>
                      <p>${dish.price}</p>
                      <LinkOptions />
                  </div>
              ))}
          </DishContainer>
        </div>
        
    </div>   
  )
}

export default Dashboard