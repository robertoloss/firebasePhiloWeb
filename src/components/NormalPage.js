import MainNavigation from '../components/MainNavigation';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Page from '../components/Page';

function NormalPage(props) {
  return (
    <>
      <Header>
        <Logo/>
      </Header>
      <MainNavigation/>
      <Page hideTitle={props.hideTitle}>
        {props.children}
      </Page>
    </>
  )
}

export default NormalPage