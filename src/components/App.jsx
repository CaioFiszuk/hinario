import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
    const [hymns, setHymns] = useState([]);
    const [loading, setLoading] = useState(true);

    const getHymns = async () => {
      try {
        let hymnTitles = [];

        for(let i = 1; i <= 64; i++) {
            hymnTitles.push(axios.get(`https://harpa-api.onrender.com/hymns?page=${i}`));
        }

        const responses = await Promise.all(hymnTitles);

         const allHymns = responses.flatMap(
           res => res.data.hymns
          );

        setHymns(allHymns);
        setLoading(false);

      } catch(error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getHymns();
    }, []);
  return (
    <section className="main-page">
      <h1 className="title">Harpa Cristã</h1>

      <input type="search" className="search-bar" placeholder="Buscar Hino..."/>

      {loading ? (
        <p>Carregando hinos...</p>
      ) : (
        <ul className="hymn-list">
          {hymns.map(hymn => (
            <Link
              key={hymn.number}
              to={`/lyrics/${hymn.number}`}
              className="hymn-link"
            >
              <li className="hymn-item">{hymn.title}</li>
           </Link>
          ))}
        </ul>
     )}
    </section>
  )
}

export default App;
