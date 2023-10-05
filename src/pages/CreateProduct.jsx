import { useState } from 'react'
import Input from '../components/Input';
import { Form } from '../components/Form/Form';
import { createProducts } from '../services/product-service';

export const CreateProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: "",
        category: "",
        picture_url:""
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        createProducts(formData)
        .then(product => console.log(product))
        .catch(error => console.log(error));
        //console.log(formData);
        //signup(formData);
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
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
                <button type="submit">
                    Create
                </button>
            </form>
        </div>
    </div>
    )
}

