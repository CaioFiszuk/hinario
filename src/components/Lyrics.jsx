import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function Lyrics() {
    const location = useLocation();
    const [lyrics, setLyrics] = useState([]);

    const getHymn = async () => {
    try {
      const response = await axios.get(
        `https://harpa-api.onrender.com/hymns/${location.state.number}`
      );

      setLyrics(response.data.hymn.verses);

    } catch (err) {
      console.error(err);
    }
    }

    useEffect(()=>{
       getHymn();
    }, []);

  return (
    <section className='main-page'>
      <h1 className='title'>{location.state.title}</h1>
      
      {
        lyrics ? (
           <div>
              {
                lyrics.map((v)=>(
                  <p className='lyrics'>{v.lyrics}</p>
                ))
              }
           </div>
        ) 
        : 
        (
            <p>nao encontrado</p>
        )
      }
    </section>
  )
}

export default Lyrics;
