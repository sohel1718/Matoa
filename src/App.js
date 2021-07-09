import Layout from './Components/Layout';
import { Switch } from 'react-router-dom';
import Home from './Pages/Home';

function App() {
  return (
    <Switch>
      <Layout exact path="/" component={Home} isAuthenticated={true}  /> 
    </Switch>
  );
}

export default App;
