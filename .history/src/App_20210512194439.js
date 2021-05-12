import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PantryItems from './pages/PantryItems';
import NewPantry




function App() {
  
  

  return (
		<div>
			<Switch>
				{/* <Route exact path="/pantryitems/:slug" component={Home} /> */}
				<Route exact path="/pantryitems" component={PantryItems} />
				{/* <Route exact path="/pantryitems/new" component={Home} /> */}
				{/* <Route exact path="/pantryitems/:id/edit" component={Home} /> */}
			</Switch>
		</div>
  );

}

export default App;
