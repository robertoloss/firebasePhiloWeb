import { Outlet, useLocation } from 'react-router-dom';
import MainPage from '../components/MainPage';
import NormalPage from '../components/NormalPage';

function RootLayout(props) {
  const location = useLocation()
  
  return (
    <>
      {location.pathname === '/' ? 
        <MainPage>
          <Outlet/>
        </MainPage>
      : 
        <NormalPage>
          <Outlet/>
        </NormalPage>
      }
    </>
  )
}

export default RootLayout;


