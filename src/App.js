import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage';
import Publications from './pages/Publications';
import CV from './pages/CV';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

export const positionLogoAndNavBar = '56rem'
const routerArray = [
  { 
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {index: true, element: <HomePage/> },
      {path: 'publications', element: <Publications />},
      {path: 'cv', element: <CV />},
      // {path: ..., element: ...}
    ]
  }
]
const router = createBrowserRouter(routerArray)

export const pagesPaths = []

for (let i = 0; i < routerArray[0].children.length ; i++) {
  if (i === 0) pagesPaths.push('/')
  else pagesPaths.push(routerArray[0].children[i].path)
}

export default function App() {
  return <RouterProvider router={router}/>;
}

