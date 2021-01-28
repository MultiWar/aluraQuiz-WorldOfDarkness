import {Widget} from './styles'

const Card = ({title, desc}) => {
    return (
        <Widget>
            <Widget.Header>
                <h1>{title}</h1>
            </Widget.Header>
            <Widget.Content>
                <p>{desc}</p>
            </Widget.Content>
        </Widget>
    )
}

export default Card