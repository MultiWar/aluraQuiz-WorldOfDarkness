import { AnchorHTMLAttributes } from "react"
import Link, { LinkProps } from 'next/link'

type customType = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> & LinkProps

const LinkEstilizado = ({href, children, ...props}: customType) => {
    return (
        <Link href={href} passHref>
            <a {...props}>
                {children}
            </a>
        </Link>
    )
}

export default LinkEstilizado