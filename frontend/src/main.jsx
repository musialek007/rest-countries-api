import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/nunito-sans';
import "./styles/global.css";
import "./styles/theme.css";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './components/Layout/Layout.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
