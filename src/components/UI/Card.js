import classes from "./Card.module.scss"

const Card = (props) => {
    const classesUsed = `${classes.card} ${props.className}`

    return (<div className={classesUsed}>{props.children}</div>)
}

export default Card;
