import React from 'react'
import { Link, useParams } from 'react-router-dom';


export const Delete = () => {
  const {id} = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    deleteProducts(id)
    console.log("Producto eliminado")
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Link to="/products">
        </Link>
      </form>
    </div>
  )
}
