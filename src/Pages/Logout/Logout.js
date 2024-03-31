import { useEffect } from "react";



const Logout=()=>{

    useEffect(()=>{
      localStorage.removeItem('loginValue');  
    })

return (<>

</>)
}

export default Logout;