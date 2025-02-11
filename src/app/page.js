
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import { faUserNinja } from '@fortawesome/free-solid-svg-icons';

import MyChat from './components/MyMessages';



export default function denis() {

return(

    <div className='container'>

    
   
       <MyChat name="Denis" time="9:22" text="hello everybody" icon={faUser}/>

       <MyChat name="Alex" time="9:23" text="hello" icon={faUserSecret}/>

       <MyChat name="Artem" time="9:24" text="hi" icon={faUserNinja}/>

       <MyChat name="Denis" time="9:25" text="how are you doing guys?" icon={faUser}/>

       <MyChat name="Alex" time="9:26" text="i'm good, thank you" icon={faUserSecret}/>

       <MyChat name="Artem" time="9:27" text="me as well" icon={faUserNinja}/>

       <MyChat name="Denis" time="9:28" text="bye" icon={faUser}/>

       <MyChat name="Alex" time="9:29" text="good bye" icon={faUserSecret}/>

       <MyChat name="Artem" time="9:30" text="see you soon" icon={faUserNinja}/>
    
       
       </div>


)




}





