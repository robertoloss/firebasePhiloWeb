import MainNavigation from '../components/MainNavigation';
import Logo from '../components/Logo';
import HeroHeader from '../components/HeroHeader';
import Page from '../components/Page';

function MainPage(props) {
  return (
    <>
      <HeroHeader>
        <Logo />
      </HeroHeader>
      <MainNavigation/>
      <Page>
        {props.children}
      </Page>
    </>
  )
}

export default MainPage