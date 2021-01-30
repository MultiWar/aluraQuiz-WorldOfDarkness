import { GetServerSideProps } from "next"

const ExternalQuizes = (props) => {
    return (
        <div>
            Teste
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const dbExterno = await fetch()
    return {
        props: {}
    }
}

export default ExternalQuizes