import { useRouter } from "next/router"
import Button from "../Button"
import { Widget, WidgetContent, WidgetHeader } from "../Card"

interface ResultsProps {
    correctAnswers: number,
    restart: () => void
}

const ResultsWidget = ({correctAnswers, restart}: ResultsProps) => {
    const router = useRouter()
    return (
        <Widget>
            <WidgetHeader>
                <h1>Resultados</h1>
            </WidgetHeader>
            <WidgetContent>
                {correctAnswers > 5 ? <h2>Parabéns, {window.location.search.split('=')[1]}! Você acertou {correctAnswers} perguntas, e mostrou que conhece bem o World of Darkness. Mandou bem!</h2> : <h2>Você acertou {correctAnswers}, muito bom. Mas sempre há o que aprender. Então, boa sorte!</h2>}
                <Button text='jogar de novo' onClick={() => restart()} />
                <Button text='trocar nome' onClick={() => router.push('/')} />
            </WidgetContent>
        </Widget>
    )
}

export default ResultsWidget