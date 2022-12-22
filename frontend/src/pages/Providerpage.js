import Providerinfo from "../components/Providerinfo";
import axios from "axios";
import { useState } from "react";
export default function Providerpage() {

    //-------------------propsForProvideraddcomponent-----------------------//
    const [providername, setProvidername] = useState("");


    //-------------------propsForProvidereditcomponent-----------------------//

    const [providerarray, setProviderarray] = useState([]);

  return (
    <>
      <Providerinfo providername={providername}  setProvidername={setProvidername} 
      
      providerarray={providerarray} setProviderarray={setProviderarray}/>
    </>
  );
}

    //----------------------------¯\_(ツ)_/¯---------------------------------//