import './App.css';
import Row from './Row';
import requests from './requests';


function App() {
  return (
    <div className="App">
      <h1>Apparently I'll add something here later</h1>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} />
      <Row title="TRENDING NOW" fetchURL={requests.fetchTrending}/>
      <Row title="TOP RATED" fetchURL={requests.fetchTopRated}/>
    </div>
  );
}

export default App;
