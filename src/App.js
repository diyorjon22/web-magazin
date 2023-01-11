import './App.css';
import { Route,Routes } from "react-router-dom"
import { Provider } from 'react-redux';
import Home from "./pages/home/components/home"
import { store } from './redux/redux';


function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
    </Provider>
  );
}

export default App;
