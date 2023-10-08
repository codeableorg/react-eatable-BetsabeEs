import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { showProducts } from '../services/product-service';
import styled from "@emotion/styled";
import { Button } from '../components/Button/Button';

const Container = styled.div`
  background-color: #F6F6F9;
  }
`;

const DishContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 94px;

  img {
    width: 241px;
    height: 241px;
    border-radius: 50%;;
    box-shadow: 0 25px 25px 0 rgba(0, 0, 0, 0.20);
    background-color: ##000000;
  }
  }
`;

const DishFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 55px;
  flex-direction:column;
  p {
    font-size: 28px;
    font-weight: 550;
    text-align: center;
    color: #fa4a0c;
    margin-top: 10px;
  }
  }
`;

const DishDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 55px 53px;
  flex-direction:column;
  
  p {
    font-size: 16px;
    color: #333333;
    margin-top: 5px;
    width: 297px;
    height: 80px;
  }

  label{
    font-weight: bold;
    font-size: 18px;
  }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 185px;
  }
`;


export const ShowProduct = () => {
  const {id} = useParams();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const {name,price,description,category,picture_url} = formData;

  useEffect(() => {
    showProducts(id)       
    .then((response) => {setFormData(response);       
    })       
    .catch((err) => console.error(err));   
  }, [id]);
  return (
    <>
      <Container>
        <DishContainer>
          <div>
            <img src={picture_url} alt={name} />
            <DishFrame>
              <p>{name}</p>
              <p>${price}</p>
            </DishFrame>     
          </div>
        </DishContainer> 
        <DishDescription>
          <label htmlFor="">Description</label>
          <p>{description}</p>
        </DishDescription> 
        <ButtonContainer>
          <Link to="/products">
            <Button>Go Back</Button>
          </Link>
        </ButtonContainer>
      </Container>
    </>
  )
}
