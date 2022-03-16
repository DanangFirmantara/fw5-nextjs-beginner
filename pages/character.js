import Image from "next/image"
import ButtonTest from "../components/ButtonTest"

const Character = ()=>{
   return(
      <>
         <div className="d-flex justify-content-center align-items-center vh-100">
            <div>
               <div><Image src='/images/dinosaur.webp' alt="dinosaur" width={200} height={200}/></div>
               <div className="text-center"><ButtonTest >Hello !</ButtonTest></div>
            </div>
         </div>
      </>
      
   )
}
export default Character