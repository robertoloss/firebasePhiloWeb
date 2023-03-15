import NormalPage from "../components/NormalPage"

function ErrorPage() {

  return (
    <NormalPage hideTitle={true}>
      <h2 style={{ textAlign: 'center'}} >Oops! This page doesn't exist! 😬 </h2>
    </NormalPage>
  )
}

export default ErrorPage 