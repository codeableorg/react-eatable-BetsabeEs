import React from 'react'
import { useParams } from 'react-router-dom';

export const Delete = () => {
  const {id} = useParams();
  return (
    <div>Delete</div>
  )
}
