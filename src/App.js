
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";



//pages

import Home from './pages/Home';
import Create from "./pages/Create";
import About from './pages/About'


//layout
import RootLayout from './Layout/RootLayout'
import NotFound from "./components/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);



function App() {


  return (

    <RouterProvider router={router} />


  );
}

export default App;
