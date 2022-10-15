import "./BottomPart.css"
function BottomPart(props) {
  return (
    <div className="bottomPart">
      <div>{props.text}</div>
      <div>{props.date}</div>
    </div>
  );
}
export default BottomPart;
