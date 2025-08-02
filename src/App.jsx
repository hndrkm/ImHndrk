
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import BlogPage from "./pages/Blog";
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <ProjectsPage /> },
        { path: '/about', element: <AboutPage /> },
        { path: '/blog', element: <BlogPage /> }
      ],
    },
  ],
  {
    basename: '/ImHndrk' // Importante: sin barra final aquí
  }
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
