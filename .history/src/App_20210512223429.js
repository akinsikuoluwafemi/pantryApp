import './App.css';
import { Route, Switch } from 'react-router-dom';
import PantryItems from './pages/PantryItems';
import NewPantryItem from './pages/NewPantryItem';
import PantryItemDetail from './pages/PantryItemDetail';
import Layout from './components/Layout';


function App() {
  
  

  return (
		<div>
			<Switch>
				<Layout>
					<Route exact path="/pantryitems/:slug" component={PantryItemDetail} />
					<Route exact path="/pantryitems" component={PantryItems} />
					<Route exact path="/new" component={NewPantryItem} />
					{/* <Route exact path="/pantryitems/:slug/edit" component={Home} /> */}
				</Layout>
			</Switch>
		</div>
  );

}

export default App;
