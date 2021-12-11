import ResultCard from "./ResultCard"
import './Gallery.css'

const Gallery = ({ results }) => {

    console.log(results)

    return (
        <div className="gallery">
            {results.map(result => {
                return (
                    <ResultCard {...result} />
                )
            })}
        </div>
    )
}

export default Gallery