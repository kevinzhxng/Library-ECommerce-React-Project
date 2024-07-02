import React, { useState, useEffect } from 'react';
import Nav from './components/Nav'
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Books from './pages/Books';
import { books } from "./data";
import BookInfo from './pages/BookInfo';
import Cart from './pages/Cart';

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, book])
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])


  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} /> {/*use component, if no props (arrow =>)*/}
        <Route path='/books' exact render={() => <Books books={books} />} /> {/*use render if props(arguments)*/}
        <Route path='/books/:id' render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path='/cart' render={() => <Cart books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
