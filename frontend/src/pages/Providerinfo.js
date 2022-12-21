import Provideradd from "../components/Provideradd"
import Provideredit from "../components/Provideredit"
import "../styles/Providerinfo.css"
import Collapsible from "react-collapsible";
import {MdArrowDropDownCircle} from "react-icons/md"

export default function Providerinfo(){
    return(
        <><div className="providerinfo_container">
        <div className="providerinfo_header"><h1>Provider info</h1></div>
        <Collapsible trigger={<div className="providerinfo_subheader"><span><MdArrowDropDownCircle/></span><h2>Provider list</h2></div> }>
        <Provideredit/>
        </Collapsible>
        
        <Provideradd/>
        </div>
        </>
    )
}