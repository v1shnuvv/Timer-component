import Provideradd from "./Provideradd"
import Provideredit from "./Provideredit"
import "../styles/Providerinfo.css"
import Collapsible from "react-collapsible";
import {MdArrowDropDownCircle} from "react-icons/md"
import { useState } from "react";

export default function Providerinfo({providername, setProvidername, providerarray, setProviderarray}){
    return(
        <><div className="providerinfo_container">
        <div className="providerinfo_header"><h2>Provider info</h2></div>
        <Collapsible trigger={<div className="providerinfo_subheader"><span><MdArrowDropDownCircle/></span><h3>Provider list</h3></div> }>
        <Provideredit providerarray={providerarray} setProviderarray={setProviderarray}/>
        </Collapsible>
        <Provideradd providername={providername}  setProvidername={setProvidername}/>
        </div>
        </>
    )
}