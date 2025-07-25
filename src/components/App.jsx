import { useEffect, useState } from "react";
import axios from "axios";

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

      } catch(error) {
        console.log(error);
      }
    }

    useEffect(()=>{
      getHymns();
    }, []);
  return (
    <div className="main-page">
      <h1 className="main-page__title">Harpa Cristã</h1>

      <input type="search" className="search-bar" placeholder="Buscar Hino..."/>

      {
       <ul className="hymn-list">
        {hymns.map((hymn) => (
           <li key={hymn.number} className="hymn-item">{hymn.title}</li>
        ))}
       </ul>
      }
    </div>
  )
}

export default App;