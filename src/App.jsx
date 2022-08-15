import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, ProductsDetail, Purchase } from './pages/Index.jsx'
import { LoadingScreen, NavBar } from './components'
import { useSelector } from "react-redux";
import './App.css'
import { Container } from 'react-bootstrap';

function App() {
  const isLoading = useSelector((state) => state.isLoading); 

  return (
    <div className="App">
      <HashRouter>
        <NavBar />
      {isLoading && <LoadingScreen />}
       <Container className='mt-5'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductsDetail />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/login" element={<Login />} />
        </Routes>

       </Container>
      </HashRouter>


    </div>
  )
}

export default App
