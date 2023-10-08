import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateProduct } from './pages/CreateProduct'
import Dashboard from './pages/Dashboard'
import { EditProduct } from './pages/EditProduct'
import { ShowProduct } from './pages/ShowProduct'
import { Delete } from './pages/Delete'

function App() {

  return (
    //<Dashboard/>
    //<CreateProduct/>
    //<EditProduct/>
    <div>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/products" />} />
          <Route
            path="products"
            element={
            <Dashboard/>
            }
          />
          <Route path="/:id/edit" element={<EditProduct/>} />
          <Route path="/:id/delete" element={<Delete/>} />
          <Route path="create" element={<CreateProduct/>} /> 
          <Route path="/:id/show" element={<ShowProduct/>} /> 
        </Route>
      </Routes>
    </div>

  )
}

export default App
