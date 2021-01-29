import { Widget, WidgetContent, WidgetHeader } from "../Card"

const LoadingWidget = () => {
    return (
        <Widget>
            <WidgetHeader>
                Carregando...
            </WidgetHeader>
            <WidgetContent>
                [Desafio do Loading]
            </WidgetContent>
        </Widget>
    )
}

export default LoadingWidget