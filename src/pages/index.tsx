import MainDiv from "../components/MainDiv"
import QuizContainer from "../components/QuizContainer"
import db from '../db.json'
import Footer from "../components/Footer"
import GithubCorner from "../components/GithubCorner"
import QuizLogo from "../components/QuizLogo"
import Head from 'next/head'
import { Widget, WidgetContent, WidgetHeader } from "src/components/Card"
import { useState } from "react"
import {useRouter} from 'next/router'

export default function Home() {
  const [isNameEmpty, setIsNameEmpty] = useState(true)
  const router = useRouter()

  return (
    <MainDiv bgImage={db.bg}>
      <Head>
        <title>World of Darkness quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo className='teste'/>
        <h1>Alura Quiz</h1>
        <Widget>
          <WidgetHeader>{db.title}</WidgetHeader>
          <WidgetContent>
            <form onSubmit={(e) => {
              e.preventDefault()
              alert('funciona')
              router.push('/quiz')
            }}>
              <input name='name' placeholder='Por favor, digite seu nome aqui' onChange={e => e.currentTarget.value === '' ? setIsNameEmpty(true) : setIsNameEmpty(false)} />
              <button type='submit' disabled={isNameEmpty}>TESTE</button>
            </form>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetHeader>

          </WidgetHeader>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl={'https://github.com/MultiWar/aluraQuiz-WorldOfDarkness'}/>
    </MainDiv>
  )
}
