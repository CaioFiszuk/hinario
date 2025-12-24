import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

function Lyrics() {
    const { number } = useParams();
    const [lyrics, setLyrics] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);

    const getHymn = async () => {
    try {
      const response = await axios.get(
        `https://harpa-api.onrender.com/hymns/${number}`
      );

      setLyrics(response.data.hymn.verses);
      setTitle(response.data.hymn.title);
      setLoading(false);

    } catch (err) {
      console.error(err);
    }
    }

    useEffect(()=>{
       getHymn();
    }, []);

  return (
    <section className='main-page'>
      
      <h1 className='title'>{title}</h1>

      {loading ? (
        <p>Carregando hino...</p>
      ) : (
        <ul className="hymn-list">
          {lyrics.map(v => (
             <p className='lyrics'>{v.lyrics}</p>
          ))}
        </ul>
     )}
    </section>
  )
}

export default Lyrics;