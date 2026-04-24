import Home from "./pages/Home.jsx"
import './index.css'
import Button from "./components/Button.jsx"
import ShoppingCart from './pages/ShoppingCart';
//import Button from "./components/Button.jsx"
//* import Button from './components/Button.jsx'

function App() {
  
  return (
    <div>
    <Home />
    <Button label="click Me!" />
    <ShoppingCart />
    </div>
  )
}


export default App
  