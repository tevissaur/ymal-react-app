import './ResultCard.css'

const ResultCard = ({ Name, wUrl, wTeaser }) => {
    return (
        <div className="card">
            <h4>
                {Name}
            </h4>
            <a
                href={wUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="button"
            >
                LEARN MORE
            </a>
            {/* <p>
                {wTeaser}
            </p> */}
        </div>
    )
}
export default ResultCard