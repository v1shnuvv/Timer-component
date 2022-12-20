import "../styles/Provideredit.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { useState } from "react";
import { Collapsible } from "collapsible-react-component";
import "collapsible-react-component/dist/index.css";
import Input from "./Input";
import { useEffect } from "react";
import axios from "axios";

//install collapsible-react-component before using this component
//npm i collapsible-react-component

export default function Provideredit() {
  const [open, setOpen] = useState(false);

  const [providereditname, setProvidereditname] = useState("");
  const [providereditemail, setProvidereditemail] = useState("");
  const [providereditnumber, setProvidereditnumber] = useState("");
  const [providereditaddress, setProvidereditaddress] = useState("");
  const [providereditzip, setProvidereditzip] = useState("");
  const [providereditcity, setProvidereditcity] = useState("");

  const [providerarray, setProviderarray] = useState([]);
 
  



  useEffect(() => {
    let url2 = "http://localhost:8000/viewprovider";
    let req2 = {};
    let header2 = {};
    axios
      .post(url2, req2, header2)
      .then((res) => {
        setProviderarray(res.data);
        console.log(res.data);
      })
      .catch();
  }, []);
  return (
    <>
      <div className="provideredit_container">
        {providerarray.map((itm, indx) => {
          return (
            <>
              <div className="provideredit_list">
                <label>{itm.txtProvidername}</label>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <AiFillEdit />
                  </button>
                  <button>
                    <AiFillDelete />
                  </button>
                </div>
              </div>

              <div className="provideredit_collapsible_content">
                <Collapsible open={open}>
                  <h2>Edit provider</h2>
                  <div className="provideredit_input">
                    <Input
                      name="Provider Name" value={itm.txtProvidername}
                      onChange={(e) => {
                        setProvidereditname(e.target.value) ;
                      }}
                    />
                  </div>
                  <div className="provideredit_input">
                    <Input
                      name="Email" value={itm.txtEmail}
                      onChange={(e) => {
                        setProvidereditemail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="provideredit_input">
                    <Input
                      name="Mobile number" value={itm.txtContactnumber}
                      onChange={(e) => {
                        setProvidereditnumber(e.target.value);
                      }}
                    />
                  </div>
                  <div className="provideredit_input">
                    <Input
                      name="Address" value={itm.txtRegisteredaddress}
                      onChange={(e) => {
                        setProvidereditaddress(e.target.value);
                      }}
                    />
                  </div>
                  <div className="provideredit_input">
                    <Input
                      name="Zip code" value={itm.txtZipcode}
                      onChange={(e) => {
                        setProvidereditzip(e.target.value);
                      }}
                    />
                  </div>
                  <div className="provideredit_input">
                    <Input
                      name="City" value={itm.refCity}
                      onChange={(e) => {
                        setProvidereditcity(e.target.value);
                      }}
                    />
                  </div>

                  <div className="provideredit_button">
                    <button onClick={e=>
                    {}}>Update</button>
                  </div>
                </Collapsible>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
