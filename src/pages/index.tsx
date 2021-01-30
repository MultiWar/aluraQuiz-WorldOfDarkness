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
import {motion} from 'framer-motion'
import Input from "src/components/Input"
import Button from "src/components/Button"
import Link from "next/link"

export default function Home() {
  const [isNameEmpty, setIsNameEmpty] = useState(true)
  const router = useRouter()
  const inputRef = createRef<HTMLInputElement>()

  function formatExternalLink(url: string): string {
    const newUrl = url.replace('https://', '').replace('.vercel.app/', '')
    if(!newUrl.includes('.')) {
      return `${newUrl}`
    }
    return `${newUrl.split('.')[0]}___${newUrl.split('.')[1]}`
  }

  return (
    <MainDiv bgImage={db.bg}>
      <Head>
        <title>World of Darkness quiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo className='teste'/>
        <h1>Alura Quiz</h1>
        <Widget
          as={motion.section}
          transition={{duration: 0.5, delay: 0}}
          variants={{
            show: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: '50%'}
          }}
          initial='hidden'
          animate='show'
        >
          <WidgetHeader>
            <h1>{db.title}</h1>
          </WidgetHeader>
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
        <Widget
          as={motion.section}
          transition={{duration: 0.5, delay: 0.3}}
          variants={{
            show: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: '50%'}
          }}
          initial='hidden'
          animate='show'
        >
          <WidgetHeader>
            <h2>Quizes da Galera</h2>
          </WidgetHeader>
          <WidgetContent>
            <ul>{db.external.map((quizExterno, index) => {
              return (
                <li key={index}>
                  <Link href={`/quiz/${formatExternalLink(quizExterno)}`}>
                    <QuestionAlternative>
                      {formatExternalLink(quizExterno)}
                    </QuestionAlternative>
                  </Link>
                </li>
              )
            })}</ul>
          </WidgetContent>
        </Widget>
        <Footer
          transition={{duration: 0.5, delay: 0.6}}
          variants={{
            show: {opacity: 1, y: 0},
            hidden: {opacity: 0, y: '50%'}
          }}
          initial='hidden'
          animate='show'
        />
      </QuizContainer>
      <GithubCorner projectUrl={'https://github.com/MultiWar/aluraQuiz-WorldOfDarkness'}/>
    </MainDiv>
  )
}
