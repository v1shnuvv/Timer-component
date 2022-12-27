import "../styles/List.css";
export default function List({
  label1, label2, label3, array, value1, value2, value3
}) {
  return (
    <div className="list">
      <table className="list_table">
        <tr className="list_table_row1">
          <th className="list_table_row1_clm1">{label1}</th>
          <th className="list_table_row1_clm2">{label2}</th>
          <th className="list_table_row1_clm4">{label3}</th>
        </tr>
        {array.map((item, index) => {
          return (
            <>
              <tr>
                <td>{item[value1]}</td>
                <td>{item[value2]}</td>
                <td>{item[value3]}</td>
                {/* <td><span>{item[value4]}</span></td> */}
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}
