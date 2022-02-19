import { BrowserRouter as Router,Switch,Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import './estilos_pantallas.css';

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';

function App() {
  return (
    <Router>
      <Header>
    <Nav>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Nosotros" exact component={Nosotros} />
      <Route path="/Novedades" exact component={Novedades} />
      <Route path="/Contacto" exact component={Contacto} />
    </Switch>
    </Nav></Header>
    <Footer/>
    </Router>
  );
}

export default App;
