import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ProductForm from './components/ProductForm';
import Header from './components/Header'; // Agrega esta línea
import UpdateProduct from './components/UpdateProduct';



function App() {
  return (
<>
        <Header />
      
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/form" element={<ProductForm/>}/>
    <Route path="/update/:_id" element={<UpdateProduct />} />
   
        
    </Routes>

    
    </>
  );
}


 


export default App;
