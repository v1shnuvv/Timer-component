import Provideradd from "./Provideradd"
import Provideredit from "./Provideredit"
import "../styles/Providerinfo.css"
import Collapsible from "react-collapsible";
import {MdArrowDropDownCircle} from "react-icons/md"
import { useState } from "react";

export default function Providerinfo(){
    return(
        <><div className="providerinfo_container">
        <Collapsible trigger={<div className="providerinfo_header"><span><MdArrowDropDownCircle/></span><h4>Provider info</h4></div>}>
        <Collapsible trigger={<div className="providerinfo_subheader"><span><MdArrowDropDownCircle/></span><h4>Provider list</h4></div> }>
        <Provideredit/>
        </Collapsible>
        <Provideradd/></Collapsible>
        </div>
        </>
    )
}