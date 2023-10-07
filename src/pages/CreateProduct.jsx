import { useState } from 'react'
import Input from '../components/Input';
import { Form } from '../components/Form/Form';
import { createProducts } from '../services/product-service';
import styled from "@emotion/styled";
import { Link } from 'react-router-dom';
import "../error.css";

    const Button = styled.button`
    width: 280px;
    height: 50px;
    border-radius: 30px;
    background-color: #FA4A0C;
    color: white;
    `;

export const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        picture_url:""
    });
    const [errors, setErrors] = useState({});
    function validate(values) {
        console.log(values);
        const errors= {};
        if(values.name === "") {
          errors.name = "Name is required";
        }
        if(values.price === "") {
            errors.price = "Price is required";
          }
        return errors;
    }
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        //setFormData({ ...formData, [name]: value });
        const newValues = {...formData, [name]: value };    
        setFormData(newValues);
        const errors = validate(newValues);
        setErrors(errors);

      };
    const handleSubmit = (event) => {
        event.preventDefault();
        createProducts(formData)
        .then(product => console.log(product))
        .catch(error => console.log(error));

        //console.log(formData);
        //signup(formData);
      };
    
      
    return (
    <div>
        <div className="centerdiv">
            <h1>Create Product</h1>
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
                {errors.name && <p className="error-msg">{errors.name}</p>}
                </Form>
                <Form>
                    <Input
                    id="price"
                    name="price"
                    type="price"
                    value={formData.price}
                    onChange={handleChange}
                    label="price"
                    />
                </Form>
                <Form>
                    <Input
                    id="description"
                    name="description"
                    type="description"
                    value={formData.description}
                    onChange={handleChange}
                    label="description"
                    />
                </Form>
                <Form>
                    <Input
                    id="category"
                    name="category"
                    type="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="category"
                    />
                </Form>
                <Form>
                    <Input
                    id="picture_url"
                    name="picture_url"
                    type="picture_url"
                    value={formData.picture_url}
                    onChange={handleChange}
                    label="picture_url"
                    />
                </Form>
                
                    <Button type="submit">
                        Create
                    </Button>
                
                
            </form>
        </div>
    </div>
    )
}