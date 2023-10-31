import {useForm} from 'react-hook-form';
import axios from 'axios';
import './SendOrder.scss';

function SendOrder() {
    const{
        register,
        handleSubmit,
        formState:{errors},
        reset,
      } = useForm({mode:"onTouched"});

      const handleDiscont=()=>{
        async function getDiscount(){
          try{
            const response = await axios.post("http://localhost:3333/order/send");            
             return  localStorage.setItem("answerOrder", response.data.status)
          }catch(err){
            return err.message;
          }
        }
        getDiscount();
      };
     
      const submitForm = (data)=>{
        console.log(data);
        localStorage.setItem("order", data.telephon);
        reset();
      };

      setTimeout(()=>{
        localStorage.removeItem('order')
    },1000)

  return (
    <form onSubmit={handleSubmit(submitForm)}>
    <div className='button_order'>
      <div>
      <input type="number" placeholder='Phone number' {...register('telephon',{required:"This input is required"})}/>
      </div>
      <div>
      <button onClick={()=>handleDiscont()}>Order</button>
      </div>
    
    </div>
    { localStorage.getItem('order')
    ?<div className='message'><p className='message__p'>Congratulations!<br/> Your order has been sent.</p></div>
    :(errors?.telephon?.message
    ?<p className='message__p'>{errors?.telephon?.message}</p>
    :<p></p>)}
    

    </form>
  )
}

export default SendOrder