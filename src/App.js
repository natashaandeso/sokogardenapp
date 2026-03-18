import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Makepayment from './components/Makepayment';
import Notfound from './components/Notfound';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Sokogarden</h1>
        </header>
        <nav>
          <Link to="/" className='btn btn-primary btn-sm m-1'>Home</Link>
          <Link to="/addproducts" className='btn btn-success btn-sm m-1'>Addproducts</Link>
          <Link to="/signin" className='btn btn-danger btn-sm m-1'>Signin</Link>
          <Link to="/signup" className='btn btn-danger btn-sm m-1'>Signup</Link>
        </nav>
        {/* Below are our different routes together with the rendere components  */}
        <Routes>
          <Route path="/" element={<Getproducts />} />
          <Route path='/addproducts' element={<Addproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/makepayment' element={<Makepayment /> } />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
