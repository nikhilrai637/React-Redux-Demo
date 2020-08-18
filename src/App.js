import React from 'react';
 
import './App.css';
import CakeCount from './components/CakeCount';
import {Provider} from 'react-redux'
import store from './components/Redux/store.js'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <IceCreamContainer/>
     <CakeCount/> 
     <HooksCakeContainer/> 
     <NewCakeContainer/>
     <ItemContainer/>
     <ItemContainer cake />
    </div>
    </Provider>
  );
}

export default App;
