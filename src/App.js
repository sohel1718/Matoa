import Layout from './Components/Layout';
import { Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/Products';
import Payment from './Pages/Payment';

function App() {
  return (
    <Switch>
      <Layout exact path="/" component={Home} isAuthenticated={true}  />
      <Layout exact path="/product" component={ProductPage} isAuthenticated={true}  /> 
      <Layout exact path="/payment" component={Payment} isAuthenticated={true}  /> 
    </Switch>
  );
}

export default App;
