import Timer from "../components/Timer";
const deadline1 = "2023-04-30";

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
