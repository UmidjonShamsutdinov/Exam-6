import './App.css';
import { connect, useSelector } from 'react-redux';
import { proDucts } from './redux/action/product-action';
import { useEffect } from 'react';
import RouteController from './routes/RouteController';

function App(props) {
  const products = useSelector(state => state.products_data.products)
  
  
  useEffect(()=>{
    props.proDucts()
  },[])

  return (
    <div className="App">
      <RouteController/>
    </div>
  );
}

export default connect(null, {proDucts})(App);
