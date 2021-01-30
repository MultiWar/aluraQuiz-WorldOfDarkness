import {useEffect, useState} from 'react'
import { GetServerSideProps } from "next"
import Head from "next/head"
import GithubCorner from "src/components/GithubCorner"
import MainDiv from "src/components/MainDiv"
import QuizContainer from "src/components/QuizContainer"
import QuizLogo from "src/components/QuizLogo"
import LoadingWidget from 'src/components/LoadingWidget'
import QuestionWidget from 'src/components/QuestionWidget'
import ResultsWidget from 'src/components/ResultsWidget'
import { ThemeProvider } from 'styled-components'

type ScreenStates = 'LOADING' | 'QUESTION' | 'RESULTS'

const ExternalQuiz = ({dbExterno, id}: any) => {
    const [screenState, setScreenState] = useState<ScreenStates>('LOADING')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const question = dbExterno.questions[currentQuestionIndex]

    console.log(dbExterno)

    let widgetToBeRendered

    useEffect(() => {
        setTimeout(() => {
            setScreenState('QUESTION')
        }, 2000);
    }, [])
    
    function handleSubmit(isCorrect: Boolean) {
        if(isCorrect) {
            setCorrectAnswers(prev => prev + 1)
        }
        if(currentQuestionIndex === dbExterno.questions.length - 1) {
            setScreenState('RESULTS')
        }
        else {
            setCurrentQuestionIndex(prev => prev + 1)
        }
    }

    function handleRestartQuiz() {
        setCurrentQuestionIndex(0)
        setCorrectAnswers(0)
        setScreenState('QUESTION')
    }


    switch(screenState) {
        case 'LOADING':
            widgetToBeRendered = <LoadingWidget />
            break;
        case 'QUESTION':
            widgetToBeRendered = <QuestionWidget handleSubmit={handleSubmit} question={question} numberOfQuestions={dbExterno.questions.length} questionIndex={currentQuestionIndex} />
            break;
        case 'RESULTS':
            widgetToBeRendered = <ResultsWidget correctAnswers={correctAnswers} restart={handleRestartQuiz} />
            break;
    }

    return (
        <ThemeProvider theme={dbExterno.theme}>
            <MainDiv bgImage={dbExterno.bg}>
                <Head>
                    <title>Perguntas</title>
                </Head>
                <QuizContainer>
                    <QuizLogo className='' />
                    {widgetToBeRendered}
                </QuizContainer>
                {id.includes('___') && <GithubCorner projectUrl={`https://github.com/${id.split('___')[1]}/${id.split('___')[0]}`}/>}
            </MainDiv>
        </ThemeProvider>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id: string = context.query.id as string
    const url = id?.includes('___') ? `https://${id.split('___')[0]}.${id.split('___')[1]}.vercel.app/api/db` : `https://${id}.vercel.app/api/db`

    const dbExterno = await fetch(url).then(response => {
        if(response.ok) {
            return response.json()
        }
        throw new Error('Failed to fetch')
    })
    .then(respostaMesmo => respostaMesmo).catch(err => console.log(err))

    return {
        props: {
            dbExterno, id
        }
    }
}

export default ExternalQuiz