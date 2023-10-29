import {useForm} from 'react-hook-form';
import axios from 'axios';
import './GetDiscount.scss'


function GetDiscount() {

    const{
        register,
        handleSubmit,
        formState:{errors},
        reset,
      } = useForm({mode:"onTouched"});

      const handleDiscont=()=>{
      
        async function getDiscount(){
           
          try{
            const response = await axios.post("http://localhost:3333/sale/send");
            
             return  localStorage.setItem("answer", response.data.status)
          }catch(err){
            return err.message;
          }
         
        }
      
        getDiscount();
      };
     
     

     
      const submitForm = (data)=>{
        console.log(data);
        localStorage.setItem("discont", data.telephon);
        reset();
      };
      console.log(errors);

      setTimeout(()=>{
        localStorage.removeItem('discont')
    },1000)

    console.log(errors?.telephon?.message);
  return (
    <form onSubmit={handleSubmit(submitForm)}>
    <div className='discount__main_button'>
    <input type="number" placeholder='+49' {...register('telephon',{required:"This input is required"})}/>
    <button onClick={()=>handleDiscont()}>Get a discount</button>
    </div>
    { localStorage.getItem('discont')
    ?<div className='message'><p className='message__p'>You received a discount 5%</p></div>
    :(errors?.telephon?.message?<p className='message__p'>{errors?.telephon?.message}</p>:<p></p>)}
    

    </form>
  )
}

export default GetDiscount