import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      {/* Navbar */}
      {/* Banner */}
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
      <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies}/>
      <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies}/>
      <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="DOCUMENTARIES" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
