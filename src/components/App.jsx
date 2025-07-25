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
    <>
      <h1>hinario</h1>

      {
        hymns.map((hymn)=>(
          <ul key={hymn.number}>
            <li>{hymn.title}</li>
          </ul>
        ))

      }
    </>
  )
}

export default App;