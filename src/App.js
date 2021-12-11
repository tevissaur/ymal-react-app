import Header from './components/Header'
import SearchForm from './components/SearchForm'
import Spinner from './components/Spinner';
import API from './utils/API'
import { useState, useEffect } from "react";
import './App.css';


// Higher order component
//  - responsible for data fetching
//  - updates state
function App() {

  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [info, setInfo] = useState(null)
  const [results, setResults] = useState([]) 

  useEffect(() => {
    getRecomendations()
  }, [])


  const getRecomendations = async () => {
    setLoading(true)
    try {
      const results = await API.getRecommendations(searchTerm)
      if (results?.data?.Similar?.Info && results.data.Similar.Info.length > 0) {
        setInfo(results.data.Similar.Info[0])
      }
      if (results?.data?.Similar?.Results) {
        setResults(results.data.Similar.Results)
      }

    } catch (err) {
      alert(err)
    }
    setLoading(false)
  }


  return (
    <>
      <Header>
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          getRecomendations={getRecomendations}
        />
      </Header>
      <div className='container'>
        { loading ? <Spinner /> : (
          <>
            <pre>
              {JSON.stringify(info, null, 2)}
            </pre>
            <pre>
              {JSON.stringify(results, null, 2)}
            </pre>
          </>
        ) }
      </div>
    </>
  );
}

export default App;
