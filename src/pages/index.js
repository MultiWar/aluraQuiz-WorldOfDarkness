import Card from "../components/Card"
import MainDiv from "../components/MainDiv"
import QuizContainer from "../components/QuizContainer"
import db from '../../db.json'
import Footer from "../components/Footer"
import GithubCorner from "../components/GithubCorner"

function Title({children}) {
  return <h1>{children}</h1>
}

export default function Home() {
  return (
    <MainDiv bgImage={db.bg}>
      <QuizContainer>
        <h1>teste</h1>
        <Card title={db.title} desc={db.description} />
        <Card title='Quizes da Galera' desc='lorem ipsum dolor sit amet...' />
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl={'https://github.com'}/>
    </MainDiv>
  )
}
