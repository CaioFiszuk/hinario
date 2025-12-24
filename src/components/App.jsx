import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function App() {
    const [hymns, setHymns] = useState([]);

    const getHymns = async () => {
      try {
        let hymnTitles = [];
        for(let i = 0; i < 64; i++) {
            const hymn = await axios.get(`https://harpa-api.onrender.com/hymns?page=${i+1}`);
            hymnTitles.push(...hymn.data.hymns);
        }

        setHymns(hymnTitles);
        console.log(hymnTitles);

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

      {
       <ul className="hymn-list">
        {hymns.map((hymn) => (
          <li key={hymn.number} className="hymn-item">
            <Link 
              to={`/lyrics/${hymn.number}`} 
              className="hymn-link"
              state={hymn}
            >
                {hymn.title}
            </Link>
          </li>
        ))}
       </ul>
      }
    </section>
  )
}

export default App;