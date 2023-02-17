
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import styles from './App.module.css';

//pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from "./components/Create";
import About from './components/About'

//layout
import RootLayout from './Layout/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />

    </Route>
  )
);



function App() {
  // const title = 'A blog tribute to an amazing friend';

  return (

    <RouterProvider router={router} />


  );
}

export default App;
