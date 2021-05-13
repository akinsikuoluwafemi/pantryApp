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
		<AnimatePresence exitBeforeEnter initial={false}>
			<Switch location={location} key={location.pathname}>
				<Layout>
					<Route exact path="/:slug" component={PantryItemDetail} />
					<Route exact path="/" component={PantryItems} />
					<Route  path="/pantry" component={NewPantryItem} />
					{/* <Route exact path="/pantryitems/:slug/edit" component={Home} /> */}
				</Layout>
			</Switch>
		</AnimatePresence>
  );

}

export default App;
