import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Produtos from './Components/Produtos';
import Produto from './Components/Produto';
import Contato from './Components/Contato';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="produto/:id" element={<Produto />} />
            <Route path="contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
