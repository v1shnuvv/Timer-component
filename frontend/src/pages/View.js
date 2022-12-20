import Timer from "../components/Timer";
const deadline1 = "2022-12-31";

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
