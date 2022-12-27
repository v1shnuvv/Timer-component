import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import List from "./List"
export default function Uservalidationfetch(){

const [latestunits, setLatestunits] = useState([])
console.log("hai",latestunits)
const [latestresult, setLatestresult] = useState([])
console.log("hello",latestresult)

useEffect(()=>{
    let url = "http://localhost:8000/latestdrawunits"
    let req = {};
    let header = {};
    axios.post(url, req, header).then((res)=>{
        setLatestunits(res.data)}).catch()
    
    let url1 = "http://localhost:8000/latestresultchoicenumber"
    let req1 = {};
    let header1 = {};
    axios.post(url1, req1, header1).then((res)=>{
        setLatestresult(res.data)}).catch()
    
},[])
    return(
        <>
        <h1>Latest draw </h1>
        <List label1={"Username"} label2={"Unit"} label3="Prize Money"/>
        </>
    )
}