import "../styles/Drawresult.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Drawresult() {
  var current = new Date();
  const dt = current.getDate();
  const month = current.getMonth();
  const yr = current.getFullYear();

  const [lotteryresult, setLotteryresult] = useState([]);
  const [latestlotteryresult, setLatestLotteryresult] = useState([]);
  const [latestDrawNum, setLatestDrawNum] = useState([]);
  const [matchinNum, setMatchingNum] = useState([]);

  useEffect(() => {
    let url = "http://localhost:8000/upcominglotterydraws";
    let req = {};
    let header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        setLotteryresult(res.data);
      })
      .catch();

    let url1 = "http://localhost:8000/latestdrawunits";
    let req1 = {};
    let header1 = {};
    axios
      .post(url1, req1, header1)
      .then((res) => {
        setLatestLotteryresult(res.data);
      })
      .catch();

    axios
      .post(url1, req1, header1)
      .then((res) => {
        setLatestDrawNum(JSON.parse(res.data[0].txtLotteryresult));
      })
      .catch();

    axios
      .post(url1, req1, header1)
      .then((res) => {
        var temp = [...res.data];
        let result = temp.map((a) => a.txtMatchingcount);
        const counts = {};
        for (const iterator of result) {
          if (counts[iterator] == undefined) counts[iterator] = 1;
          else counts[iterator]++;
        }
        const newobj = Object.entries(counts).map(([key, value]) => ({
          key,
          value,
        }));
        setMatchingNum(newobj);
      })

      .catch();
  }, []);

  return (
    <div className="drawres_container">
      <div className="drawres_box">
        <div className="drawres_header">
          <div className="drawres_header_date">
            <p>
              Today {dt}.{month + 1}.{yr}{" "}
            </p>
          </div>
        </div>
        <div className="drawres_body">
          <div className="drawres_body_sec_lft">
            <div className="drawres_body_sec_lft_content">
              <div className="drawres_body_sec_header">
                <h2>Upcoming Lottery Draws</h2>
              </div>

              <div className="drawres_body_lft_row">
                <div className="drawres_body_sec_lft_row_header">
                  <p>Lottery Name</p>
                  <p>Amount</p>
                </div>
                {lotteryresult.map((itm, index) => {
                  return (
                    <div className="drawres_body_sec_lft_row">
                      <div className="drawres_sec_lft_row_div">
                        <div className="drawres_sec_lft_row_inner_div">
                          <p>{itm.txtLotteryname}</p>
                          <p>{itm.txtCost}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="drawres_body_sec_rgt">
            <div className="drawres_body_sec_rgt_content">
              <div className="drawres_body_sec_header">
                <h2>Latest Grand Draw Results </h2>
                <label>
                  {latestlotteryresult[0] != undefined
                    ? latestlotteryresult[0].Lotterydrawdate
                    : ""}
                </label>
              </div>

              <div className="drawres_body_sec_rgt_num">
                <div className="drawres_rgt_numbers_div">
                  {latestDrawNum.map((itm, index) => {
                    return (
                      <span className="drawres_rgt_numbers_span">{itm}</span>
                    );
                  })}
                </div>
              </div>

              <div className="drawers_body_sec_rgt_row">
                <div className="drawres_sec_rgt_row_div">
                  {matchinNum.map((item, index) => {
                    return (
                      <div className="drawres_sec_rgt_row_inner_div">
                        <p>
                          Matching {item.key}/{latestDrawNum.length}
                        </p>
                        <p>{item.value} Winners</p>
                      </div>
                    );
                  })}
                </div>

                <div className="drawres_sec_rgt_row_div">
                  <div className="drawres_sec_rgt_row_inner_div">
                    <p>Matching</p>
                    <p>{latestlotteryresult.length}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
