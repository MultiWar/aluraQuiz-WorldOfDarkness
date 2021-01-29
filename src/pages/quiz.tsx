import Head from 'next/head'
import MainDiv from 'src/components/MainDiv'
import QuizContainer from 'src/components/QuizContainer'
import QuizLogo from 'src/components/QuizLogo'
import db from '../db.json'
import QuestionWidget from 'src/components/QuestionWidget'
import LoadingWidget from 'src/components/LoadingWidget'
import { useState, useEffect } from 'react'
import ResultsWidget from 'src/components/ResultsWidget'
import GithubCorner from 'src/components/GithubCorner'

const Quiz = () => {
    const [screenState, setScreenState] = useState<'LOADING' | 'QUESTION' | 'RESULTS'>('LOADING')
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const question = db.questions[currentQuestionIndex]

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
        if(currentQuestionIndex === db.questions.length - 1) {
            setScreenState('RESULTS')
        }
        else {
            setCurrentQuestionIndex(prev => prev + 1)
        }
    }

    function handleRestartQuiz() {
        setCurrentQuestionIndex(0)
        setScreenState('QUESTION')
    }


    switch(screenState) {
        case 'LOADING':
            widgetToBeRendered = <LoadingWidget />
            break;
        case 'QUESTION':
            widgetToBeRendered = <QuestionWidget handleSubmit={handleSubmit} question={question} numberOfQuestions={db.questions.length} questionIndex={currentQuestionIndex} />
            break;
        case 'RESULTS':
            widgetToBeRendered = <ResultsWidget correctAnswers={correctAnswers} restart={handleRestartQuiz} />
            break;
    }

    return (
        <MainDiv bgImage={db.bg}>
            <Head>
                <title>Perguntas</title>
            </Head>
            <QuizContainer>
                <QuizLogo className='' />
                {widgetToBeRendered}
            </QuizContainer>
            <GithubCorner projectUrl={'https://github.com/MultiWar/aluraQuiz-WorldOfDarkness'}/>
        </MainDiv>
    )
}

export default Quiz