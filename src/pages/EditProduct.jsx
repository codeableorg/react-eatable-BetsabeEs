import React, { useEffect, useState } from 'react'
import Input from '../components/Input';
import { Form } from '../components/Form/Form';
import { Button } from '../components/Button/Button';
import { useParams } from 'react-router-dom';
import { showProducts } from '../services/product-service';


export const EditProduct = () => {
  const {id} = useParams();
  const [formData, setFormData] = useState({
    name: "",
    price: "",
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

  const {name , price , description , category , picture_url} = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newValues = { ...formData, [name]: value };
    setFormData(newValues);
    console.log(newValues);
  };
  const handleSubmit = (event) => {
      event.preventDefault();

      const data = { name , price , description , category , picture_url};
      updateProducts(id,data)
      .then(data => console.log("Producto actualizado", data))
      .catch(error => console.log(error));
      //console.log(formData);
      //signup(formData);
  };


  return (
    <div>
        <div className="centerdiv">
            <h1>Edit Product</h1>
            <form onSubmit={handleSubmit}>
                <Form>
                    <Input
                    id="name"
                    name="name"
                    type="name"
                    value={name}
                    onChange={handleChange}
                    label="Name"
                    />
                </Form>
                <Form>
                    <Input
                    id="price"
                    name="price"
                    type="price"
                    value={price}
                    onChange={handleChange}
                    label="price"
                    />
                </Form>
                <Form>
                    <Input
                    id="description"
                    name="description"
                    type="description"
                    value={description}
                    onChange={handleChange}
                    label="description"
                    />
                </Form>
                <Form>
                    <Input
                    id="category"
                    name="category"
                    type="category"
                    value={category}
                    onChange={handleChange}
                    label="category"
                    />
                </Form>
                <Form>
                    <Input
                    id="picture_url"
                    name="picture_url"
                    type="picture_url"
                    value={picture_url}
                    onChange={handleChange}
                    label="picture_url"
                    />
                </Form>
                <Button type="submit">
                    Save
                </Button>
            </form>
        </div>
    </div>
  )
}
