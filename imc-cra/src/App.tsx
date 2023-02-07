import React, { useState } from 'react'
import styles from'./app.module.css'
import poweredImage from './images/powered.png'
import leftArrowImage from './images/leftarrow.png'
import rightArrowImage from './images/leftarrow.png'
import {Levels,calculateIMC, Level} from'./helpers/imc'
import {GridItem} from './components/gridItem'
const App = () => {
  const [heightField,setHeightField] = useState<number>(0)
  const [weightField,setWeightField] = useState<number>(0)
  const [ToShow,setToShow]= useState<Level | null>(null)

  
  function handleCalculateButton(){
    if(heightField && weightField){
      setToShow(calculateIMC(heightField,weightField))
    }
    else{
      alert('Digite todos os campos!!!')
    }
  }

  function handleBackButton(){
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }


return(
  
  <div className={styles.main}>
    <header>
    <div className={styles.headerContainer}>
      <img src={poweredImage}  width={150} />
    </div>
    </header>
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <h1>Calcule seu IMC.</h1>
        <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa</p>

        <input type="number" placeholder='Digite a sua altura' value={heightField > 0 ? heightField : ''} onChange={e=> setHeightField(parseFloat(e.target.value))}  disabled={ToShow? true : false}/>
        <input type="number" placeholder='Digite seu peso' value={weightField > 0? weightField : ''} onChange={e=>setWeightField(parseFloat(e.target.value))} disabled={ToShow? true : false} />

        <button onClick={handleCalculateButton} disabled={ToShow?true:false}>Calcular</button>
      </div>
      <div className={styles.rightSide}>
        {!ToShow &&
        <div className={styles.grid}>
          {Levels.map((item,key)=>(
            <GridItem key={key} item={item}/>
          ))}
        </div>
        }
        {ToShow &&
        <div className={styles.rightBig}>

          <div className={styles.leftArrow} onClick={handleBackButton}>
            <img src={leftArrowImage} width='25' />
          </div>

          <GridItem item={ToShow}/>

          

          <div></div>
        </div>
        }
      </div>
  </div>
  </div>
  
)
}
export default App
