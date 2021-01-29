import Image from "next/image"
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
    handleSubmit: () => void
}

const QuestionWidget = ({questionIndex, numberOfQuestions, question, handleSubmit}: QuestionWidgetProps) => {
    const questionId = `question__${questionIndex}`
    // let selectedAlternative

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
                        handleSubmit()
                    }}
                >
                    {question.alternatives.map((alternative, index) => {
                        const alternativeId = `alternative__${index}`
                        return (
                            <QuestionAlternative key={alternativeId} as='label' htmlFor={alternativeId}>
                                <input id={alternativeId} name={questionId} type='radio' value={index} />
                                {alternative}
                            </QuestionAlternative>
                        )
                    })}
                    <Button text='confirmar' type='submit' />
                </form>
            </WidgetContent>
        </Widget>
    )
}

export default QuestionWidget