import styles from './ButtonTest.module.css'
import { Button as BsButton } from 'react-bootstrap'

const ButtonTest = ({children, ...rest})=>{
   return (
      <>
         {/* styles.button berfungsi sebagai class tambahan pada className */}
         <BsButton className={styles.button} {...rest}>
            {children}
         </BsButton>
      </>
      
   )
}

export default ButtonTest