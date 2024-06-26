import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements
} from 'react-router-dom';
import Welcome from './components/Welcome.jsx';
import Counter from './components/Counter.jsx';
import ShoutIt from './components/ShoutIt.jsx';
import Color from './components/Color.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Welcome/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/shoutit' element={<ShoutIt/>}/>
      <Route path='/color' element={<Color/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
