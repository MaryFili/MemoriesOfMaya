
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import styles from './App.module.css';

//pages
import Navbar from './components/Navbar';
import Home from './components/Home';
import Create from "./components/Create";
import About from './components/About';
import HomeIT from './components/ITcomponents/HomeIT'

//context
import LanguageContext from "./context/LanguageContext";

//layout
import RootLayout from './Layout/RootLayout'


const routerEN = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
    </Route>
  )
);


const routerIT = createBrowserRouter(
  createRoutesFromElements(
    <Route path="it/" element={<RootLayout />}>
      <Route index element={<HomeIT />} />
    </Route>
  )
)


function App() {
  const selectedLanguage = useContext(LanguageContext)

  return (


    <RouterProvider router={(selectedLanguage === 'english' && { routerEN }) || (selectedLanguage === 'italian' && { routerIT })} />



  );
}

export default App;
