import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PantryItems from './pages/PantryItems';
import NewPantryItem from './pages/NewPantryItem';
import PantryItemDetail from './pages/PantryItemDetail';



function App() {
  
  

  return (
		<div>
			<Switch>
				<Route exact path="/pantryitems/:slug" component={PantryItemDetail} />
				<Route exact path="/pantryitems" component={PantryItems} />
				<Route exact path="/pantryitems/new" component={NewPantryItem} />
				{/* <Route exact path="/pantryitems/:slug/edit" component={Home} /> */}
			</Switch>
		</div>
  );

}

export default App;
