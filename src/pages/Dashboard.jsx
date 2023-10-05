import React, { useEffect, useState } from 'react'
import styled from "@emotion/styled";
import { getProducts } from '../services/product-service';

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

    useEffect(() => {
        getProducts().then((product) => setData(product));
    }, []); 
    /* useEffect(() => {
        getEatable()
          .then((response) => {
            setData(response);
            const uniqueCategories = [
              ...new Set(response.map((dish) => dish.category)),
            ];
            setCategories(uniqueCategories);
          })
          .catch((err) => console.error(err));  
    }, []); */  

  return (
    <div>
        <h1>Products Dashboard</h1>
        <DishContainer>
            {data.map((dish) => (
                <div key={dish.id}>
                    <img src={dish.picture_url} alt={dish.name} />
                    <p>{dish.name}</p>
                    <p>${dish.price}</p>
                </div>
            ))}
        </DishContainer>
    </div>   
  )
}

export default Dashboard