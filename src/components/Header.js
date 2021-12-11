import './Header.css'

const Header = props => {


    return (
        <header className='app-header'>
            <div className='container'>
                <h1>
                    You might also like...
                </h1>
                <p>
                    Search for an artist for similar music
                </p>
                {props.children}
            </div>
        </header>
    )
}

export default Header