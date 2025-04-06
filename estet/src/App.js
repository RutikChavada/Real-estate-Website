import './App.css';
// import Navbar from './components/navbar/Navbar';
import Homepage from './routes/homepage/homepage';
import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";
import Listpage from './routes/list/listpage';
import Layout, { RequireAuth } from './routes/layout/layout';
import Singlepage from './routes/singlepage/singlepage';
import ProfilePage from './routes/profilepage/profile';
import Login from './routes/login/login';
import Register from './routes/register/register';

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout/>,
        children: [
          {
            path:"/",
            element:<Homepage/>
          },
          {
            path:"/list",
            element:<Listpage/>
          },
          {
            path:"/:id",
            element:<Singlepage/>
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/register",
            element: <Register />,
          }
        ]
      },
    {
      path: '/',
      element:<RequireAuth/>,
      children:[
        {
          path:"/profile",
          element:<ProfilePage/>
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
