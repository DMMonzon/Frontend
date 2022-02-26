import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import './App.css';

import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';

function App() {
  return (
    <Router>
      <Header/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/nosotros" exact component={Nosotros} />
      <Route path="/novedades" exact component={Novedades} />
      <Route path="/contacto" exact component={Contacto} />
    </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
