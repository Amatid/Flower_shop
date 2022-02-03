import './App.css';
import Header from './component/header';
import Register from './component/register';
import './styles/App.css'
import Navbar from './component/navbar';
import Advantages from './component/advantages';
import Special from './component/special';
import Products from './component/products';

function App() {
  return (
    <div className="App">
      <Register></Register>
      <Header></Header>
      <hr></hr>
      <Navbar></Navbar>
      <hr></hr>
      <Advantages></Advantages>
      <hr></hr>
      <Special></Special>
      <Products></Products>
    </div>
  );
}

export default App;
