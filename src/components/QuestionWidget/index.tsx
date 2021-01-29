import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "../Button"
import { QuestionAlternative, Widget, WidgetContent, WidgetHeader } from "../Card"

interface QuestionWidgetProps {
    question: {
        image: string,
        title: string,
        description: string,
        answer: number,
        alternatives: string[],
    },
    questionIndex: number,
    numberOfQuestions: number,
    handleSubmit: (isCorrect: Boolean) => void,
}

type PossibleClasses = '' | 'CORRECT' | 'NOTSELECTED' | 'WRONG'

const QuestionWidget = ({questionIndex, numberOfQuestions, question, handleSubmit}: QuestionWidgetProps) => {
    const questionId = `question__${questionIndex}`
    const [selectedAlternative, setSelectedAlternative] = useState<number>()
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [classes, setClasses] = useState<Record<number, string>>()
    
    const indexes = [...question.alternatives.keys()]

    useEffect(() => {
        let isCleanup = false
        if(!isCleanup) {
            const newClasses: Record<number, string> = {}
            indexes.forEach(index => {
                newClasses[index] = resolveClassName(index)
            })
            setClasses(newClasses)
        }

        return function cleanup() {
            isCleanup = true
        }
    }, [isFormSubmitted])            

    function resolveClassName(index: number): PossibleClasses {
        if(!isFormSubmitted) {
            return ''
        }
        if(index !== selectedAlternative && index !== question.answer) {
            return 'NOTSELECTED'
        }
        if(index === question.answer) {
            return 'CORRECT'
        }
        else {
            return 'WRONG'
        }
    }

    return (
        <Widget>
            <WidgetHeader>
                <h3>Pergunta {questionIndex + 1} de {numberOfQuestions}</h3>
            </WidgetHeader>
            <Image 
                src={question.image}
                alt='Imagem ilustrativa da questão'
                layout='responsive'
                width={250}
                height={100}
                objectFit='cover'
            />
            <WidgetContent>
                <h2>{question.title}</h2>
                <p>{question.description}</p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        setIsFormSubmitted(true)
                        setTimeout(() => {
                            handleSubmit(selectedAlternative === question.answer)
                        }, 2000)
                    }}
                >
                    {question.alternatives.map((alternative, index) => {
                        const alternativeId = `alternative__${index}`
                        return (
                            <QuestionAlternative key={alternativeId} as='label' htmlFor={alternativeId}>
                                <input id={alternativeId} name={questionId} type='radio' value={index} onChange={() => setSelectedAlternative(index)} className={classes !== undefined ? classes[index] : ''} />
                                {alternative}
                            </QuestionAlternative>
                        )
                    })}
                    <Button text='confirmar' type='submit' disabled={selectedAlternative === undefined} />
                </form>
            </WidgetContent>
        </Widget>
    )
}

export default QuestionWidget