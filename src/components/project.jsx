export default function Project({title, description, link}) {
    return (
        <>
            <h1>{title}</h1>
            <p>{description}</p>
            <a href={link}>Link to Project</a>
        </>
    )
}
