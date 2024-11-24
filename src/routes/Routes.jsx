import {
    createBrowserRouter,
  
  } from "react-router-dom";
  
  import MainLayout from "../layout/MainLayout";
  import Home from "../pages/Home";
  import Dashboard from "../pages/Dashboard";
  import Statistics from "../pages/Statistics";
  import Laptop from "../components/Laptop";
  import AllProduct from "../components/AllProduct";
  import AllElement from "../pages/AllElement";
  import CardDeatils from "../components/CardDeatils";
  import CardShow from "../components/CardShow";
  import Wishlist from "../components/Wishlist";
  import Review from "../pages/Review";
  import ErrorPage from "../components/ErrorPage";
  
  
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
  
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('./category.json'),
  
          children: [
            {
              path: '/',
              element: <Laptop></Laptop>,
              loader: () => fetch('../data.json')
            },
  
            {
              path: '/product/:category',
              element: <Laptop></Laptop>,
              loader: () => fetch('../data.json')
            },
  
  
  
  
          ]
        },
        {
          path: '/Allproduct/:product_id',
          element: <AllElement></AllElement>,
          loader: () => fetch('../data.json'),
        },
        
  
  
  
  
  
  
        {
          path: '/Dashboard',
          element: <Dashboard></Dashboard>,
          children: [
            {
              path: '/Dashboard/Wishlist',
              element: <Wishlist></Wishlist>
            },
            {
              path: '/Dashboard/Card',
              element: <CardShow></CardShow>
            },
            
  
          ]
  
  
  
        },
  
  
  
        {
          path: '/Statistics',
          element: <Statistics></Statistics>,
          
          
        },
        {
          path: '/Review',
          element: <Review></Review>,
          
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
  
  
      ]
    },
  ]);
  
  export default routes