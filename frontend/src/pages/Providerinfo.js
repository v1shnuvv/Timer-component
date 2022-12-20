import Provideradd from "../components/Provideradd"
import Provideredit from "../components/Provideredit"
export default function Providerinfo(){
    return(
        <>
        <div><h2>Provider info</h2></div>
        <Provideredit/>
        <Provideradd/>
        
        </>
    )
}