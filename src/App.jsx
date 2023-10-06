import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateProduct } from './pages/CreateProduct'
import Dashboard from './pages/Dashboard'
import { EditProduct } from './pages/EditProduct'

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
          <Route path="products/edit" element={<EditProduct/>} />
          <Route path="products/create" element={<CreateProduct/>} />
        </Route>
      </Routes>
    </div>

  )
}

export default App
