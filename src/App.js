import Header from './components/Header'
import SearchForm from './components/SearchForm'
import API from './utils/API'
import { useState, useEffect } from "react";
import './App.css';


// Higher order component
//  - responsible for data fetching
//  - updates state
function App() {

  const [searchTerm, setSearchTerm] = useState('Tame Impala')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getRecomendations()
  }, [])


  const getRecomendations = async () => {
    setLoading(true)
    try {
      const results = await API.getRecommendations(searchTerm)
      console.log(results)
      
    } catch(err) {
      alert(err)
    }
  }
  return (
    <>
      <Header>
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
      </Header>
    </>
  );
}

export default App;
