import { useState,useEffect } from "react"
import styles from './style.module.css'
import { Movie } from "./types/movie"
function App() {
  const [movies,setMovies] = useState<Movie[]>([])
  useEffect(()=>{
    loadMovies()
  },[])
  function loadMovies(){
    fetch('https://api.b7web.com.br/cinema/').then((response)=>{
      return response.json()
    })
    .then((json)=>{
      setMovies(json)
    })
  }
  return(
    <div>
      <button className={styles.button}  onClick={loadMovies}>Carregar filmes</button>
      Total de filmes:{movies.length}
      <div className={styles.moviesArea}>
        {movies.map((item,index)=>(
          <div key={index}>
            <img src={item.avatar} className={styles.imgAvatar} alt="" />
            {item.titulo}
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
