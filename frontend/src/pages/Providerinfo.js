import Provideradd from "../components/Provideradd"
import Provideredit from "../components/Provideredit"
import "../styles/Providerinfo.css"
export default function Providerinfo(){
    return(
        <><div className="providerinfo_container">
        <div className="providerinfo_header"><h1>Provider info</h1></div>
        <Provideredit/>
        <Provideradd/>
        </div>
        </>
    )
}