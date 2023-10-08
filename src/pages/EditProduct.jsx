import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import { Form } from '../components/Form/Form';
import { Button } from '../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { showProducts } from '../services/product-service';
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #F6F6F9;

  h1{
    text-align: center;
    margin-top:48px;
    margin-bottom: 20px;
    font-size: 22px;
    font-family:"Source Sans Pro";
  }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  }
`;
export const EditProduct = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: "",
    picture_url:""
  });

  useEffect(() => {
    showProducts(id)       
    .then((response) => {setFormData(response);       
    })       
    .catch((err) => console.error(err));   
  }, [id]);

  //const {name , price , description , category , picture_url} = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = { ...formData, [name]: value };
    setFormData(newValues);
    console.log(newValues);
  };
  const handleSubmit = (event) => {
      event.preventDefault();
      updateProducts(id,formData)
      .then(data => console.log("Producto actualizado", data))
      .catch(error => console.log(error));
  };


  return (
    <div>
        <Container>
          <h1>Edit Product</h1>
          <form onSubmit={handleSubmit}>
            <Form>
              <Input
                id="name"
                name="name"
                type="name"
                value={formData.name}
                onChange={handleChange}
                label="Name"
              />
            </Form>
            <Form>
              <Input
                id="price"
                name="price"
                type="price"
                value={formData.price}
                onChange={handleChange}
                label="Price"
                />
            </Form>
            <Form>
              <Input
                id="description"
                name="description"
                type="description"
                value={formData.description}
                onChange={handleChange}
                label="Description"
              />
            </Form>
            <Form>
              <Input
                id="category"
                name="category"
                type="category"
                value={formData.category}
                onChange={handleChange}
                label="Category"
              />
            </Form>
            <Form>
              <Input
                id="picture_url"
                name="picture_url"
                type="picture_url"
                value={formData.picture_url}
                onChange={handleChange}
                label="Picture URL"
              />
            </Form>
            <ButtonContainer>
              <Button type="submit">
                Save
              </Button>
            </ButtonContainer>                
          </form>
        </Container>
    </div>
  )
}
