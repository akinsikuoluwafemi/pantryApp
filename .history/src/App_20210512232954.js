import './index.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import PantryItems from './pages/PantryItems';
import NewPantryItem from './pages/NewPantryItem';
import PantryItemDetail from './pages/PantryItemDetail';
import Layout from './components/Layout';
import { AnimatePresence } from 'framer-motion';


function App() {
  
  const location = useLocation()
  

  return (
		<AnimatePresence>
			<Switch location={location} key={location.pathname}>
				<Layout>
					<Route exact path="/pantryitems/:slug" component={PantryItemDetail} />
					<Route exact path="/pantryitems" component={PantryItems} />
					<Route  path="/new" component={NewPantryItem} />
					{/* <Route exact path="/pantryitems/:slug/edit" component={Home} /> */}
				</Layout>
			</Switch>
		</AnimatePresence>
  );

}

export default App;
