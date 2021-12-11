import './SearchForm.css'

const SearchForm = ({ searchTerm, setSearchTerm, getRecomendations }) => {
	const handleChange = e => {
		// console.log(e.target.value)
		setSearchTerm(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		getRecomendations()
	}
	return (
		<form onSubmit={handleSubmit} className="search-form">
			<input
				value={searchTerm}
				name="searchTerm"
				onChange={handleChange}
				type='search'
			/>
			<button className="button button-white"> 
			Search </button>
		</form>
	)
}

export default SearchForm