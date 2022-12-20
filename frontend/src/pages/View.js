import Timer from "../components/Timer";
const deadline1 = "december,31,2022";

//sample

export default function View() {
  return (
    <>
      <div className="testt">
        <Timer deadline={deadline1} />
      </div>
    </>
  );
}
