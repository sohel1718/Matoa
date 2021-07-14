import Layout from './Components/Layout';
import { Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductView';
import Payment from './Pages/Payment';
import Product from './Pages/Products';

function App() {
  return (
    <Switch>
      <Layout exact path="/" component={Home} isAuthenticated={true}  />
      <Layout exact path="/product/view" component={ProductPage} isAuthenticated={true}  /> 
      <Layout exact path="/payment" component={Payment} isAuthenticated={true}  /> 
      <Layout exact path="/product" component={Product} isAuthenticated={true}  /> 
    </Switch>
  );
}

export default App;
