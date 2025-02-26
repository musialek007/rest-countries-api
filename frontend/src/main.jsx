import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/nunito-sans';
import "./styles/global.css";
import "./styles/theme.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './components/Layout/Layout.jsx';
import { DetailCountry } from './components/DetailCountry/DetailCountry.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "detail/:countryName",
        element: <DetailCountry />,
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
