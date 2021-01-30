import { useRouter } from "next/router"
import Button from "../Button"
import { Widget, WidgetContent, WidgetHeader } from "../Card"

interface ResultsProps {
    correctAnswers: number,
    restart: () => void
}

const ResultsWidget = ({correctAnswers, restart}: ResultsProps) => {
    const router = useRouter()
    const username = window.location.search.split('=')[1]

    function resolveMessage() {
        if(correctAnswers === 0) {
            return `${username}, eu tenho duas notícias para você, uma boa e uma ruim. A ruim é que você não acertou nenhuma questão, mas a boa é que a solução pra isso é maravilhosa: jogue mais RPGs do World of Darkness! Bons estudos e divirta-se!`
        }
        if(correctAnswers < 4) {
            return `Das duas uma: ou você chutou e acertou algumas ou conhece um pouco do jogo. Independente da resposta, sempre há tempo pra aprender mais, então, vai jogar, ${username}!`
        }
        if(correctAnswers < 7) {
            return `Claramente temos um jogador de RPG aqui. Mandou bem. Mesmo assim, se quiser saber porque as respostas para as perguntas que errou são aquelas, recomendo dar uma lida e uma jogada, hein, ${username}? Bom aprendizado ae!`
        }
        if(correctAnswers < 10) {
            return `Nossa, ${username}, tá mandando bem no quiz, hein? Assim que é bom. Se continuar assim, logo estará sugerindo coisas para os escritores do jogo! Mas, até lá, continue jogando, lendo e aprendendo mais sobre este vasto universo.`
        }
        else {
            return `Parabéns, ${username}! Você acertou todas as perguntas do quiz. Da próxima vez, terei que me esforçar mais pra ver se você erra alguma, pelo visto. Mas não se engane: felizmente, sempre há mais um pedaço de lore e worldbuilding pra descobrir!`
        }
    }

    return (
        <Widget>
            <WidgetHeader>
                <h1>Resultados</h1>
            </WidgetHeader>
            <WidgetContent>
                {<h2 style={{lineHeight: 1.3}}>{resolveMessage()}</h2>}
                <Button text='jogar de novo' onClick={() => restart()} />
                <Button text='trocar nome' onClick={() => router.push('/')} />
            </WidgetContent>
        </Widget>
    )
}

export default ResultsWidget