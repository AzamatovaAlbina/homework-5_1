import "./TopPart.css"
function TopPart(props){
    return (
      <div className="topPart">
        <img src={props.avatarUrl} alt="img" className="img" />
        {props.key}
        <div>
          {props.name} {props.kay}
        </div>
      </div>
    );
}
export default TopPart