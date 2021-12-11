import './Iframe.css'

const Iframe = ({ src }) => {
    return (
        <div className='iframe-container'>
            <iframe src={src} className='responsive-iframe'/>
        </div>
    )
}

export default Iframe