import "./App.css";
import BottomPart from "./components/BottomPart";
import TopPart from "./components/TopPart";
const comment = [
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/62/62",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
  {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      name: "Hello Kitty",
      avatarUrl: "http://placekitten.com/g/64/64",
    },
  },
];

function App() {
  return (
    <div className="App">
      {comment.map((item, id) => (
        <div key={id} className="container">
          <TopPart avatarUrl={item.author.avatarUrl} name={item.author.name} />
          <BottomPart text={item.text} date={item.date.toLocaleDateString()} />
        </div>
      ))}
    </div>
  );
}

export default App;
