import MainDiv from "../components/MainDiv"
import QuizContainer from "../components/QuizContainer"
import db from '../db.json'
import Footer from "../components/Footer"
import GithubCorner from "../components/GithubCorner"
import QuizLogo from "../components/QuizLogo"
import Head from 'next/head'
import { QuestionAlternative, Widget, WidgetContent, WidgetHeader } from "src/components/Card"
import { useState, createRef } from "react"
import {useRouter} from 'next/router'
import Input from "src/components/Input"
import Button from "src/components/Button"

export default function Home() {
  const [isNameEmpty, setIsNameEmpty] = useState(true)
  const router = useRouter()
  const inputRef = createRef<HTMLInputElement>()

  function formatExternalLink(url: string): string {
    const newUrl = url.replace('https://', '').replace('.vercel.app/', '')
    if(!newUrl.includes('.')) {
      return `${newUrl}`
    }
    return `${newUrl.split('.')[1]}/${newUrl.split('.')[0]}`
  }

  return (
    <MainDiv bgImage={db.bg}>
      <Head>
        <title>World of Darkness quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo className='teste'/>
        <h1>Alura Quiz</h1>
        <Widget>
          <WidgetHeader><h1>{db.title}</h1></WidgetHeader>
          <WidgetContent>
            <form onSubmit={(e) => {
              e.preventDefault()
              console.log(inputRef)
              router.push(`/quiz?name=${inputRef.current?.value}`)
            }}>
              <Input ref={inputRef} name='name' placeholder='Por favor, digite seu nome aqui' onChange={e => e.currentTarget.value === '' ? setIsNameEmpty(true) : setIsNameEmpty(false)} />
              <Button type='submit' disabled={isNameEmpty} text='jogar' />
            </form>
          </WidgetContent>
        </Widget>
        <Widget>
          <WidgetHeader>
            <h2>Quizes da Galera</h2>
          </WidgetHeader>
          <WidgetContent>
            <ul>{db.external.map((quizExterno, index) => {
              return (
                <li key={index}>
                  <QuestionAlternative href={`/quiz/${formatExternalLink(quizExterno)}`}>{formatExternalLink(quizExterno)}</QuestionAlternative>
                </li>
              )
            })}</ul>
          </WidgetContent>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl={'https://github.com/MultiWar/aluraQuiz-WorldOfDarkness'}/>
    </MainDiv>
  )
}
