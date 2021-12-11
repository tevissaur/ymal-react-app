import './SearchForm.css'

const SearchForm = ({ searchTerm, setSearchTerm }) => {
	const handleChange = e => {
		// console.log(e.target.value)
		setSearchTerm(e.target.value)
	}
	return (
		<form className="search-form">
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