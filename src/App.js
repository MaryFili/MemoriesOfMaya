
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { useState } from "react";



//pages
import Home from './pages/Home';
import Create from "./pages/Create";
import About from './pages/About';
// import Posts from '.pages/Posts';
import NotFound from "./components/NotFound";


//context
import LanguageContext from "./context/LanguageContext";


//layout
import RootLayout from './Layout/RootLayout'
import Posts from "./pages/Posts";



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="create" element={<Create />} />
      {/* <Route path="posts/:id" element={<Posts />} /> */}
      <Route path="posts/:blogId" element={<Posts />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);



function App() {
  const [language, setLanguage] = useState('en')



  return (
    <LanguageContext.Provider value={[language, setLanguage]} >
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </LanguageContext.Provider>

  );
}

export default App;
