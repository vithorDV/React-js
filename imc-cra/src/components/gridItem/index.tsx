import { Level } from '../../helpers/imc'
import styles from '../gridItem/gridItem.module.css'
import upImage from '../../images/up.png'
import downImage from '../../images/down.png'
type Props = {
    item: Level
}
export const  GridItem = ({item}:Props) =>{
    return(
        <div className={styles.main} style={{ backgroundColor: item.color }}>
            <div className={styles.gridIcon}>
            <img src={item.icon === 'up'? upImage: downImage} width='30' />
           
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourIMC &&
            <div className={styles.yourIMC}>seu IMC é  de {item.yourIMC.toFixed(2)}kg</div>
            }
            <div className={styles.gridInfo}>
            <>
            IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
            </div>
        </div>
    )
}