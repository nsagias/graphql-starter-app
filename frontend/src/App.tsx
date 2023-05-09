import "./App.css";
import { Post } from "./components/Post/Post";

const initialPosts: Post[] = [
  {
    id: 1,
    text: "Lorem ipsum",
    avatar: "/uploads/avatar1.png",
    username: "Test User 1"
  },
  {
    id: 2,
    text: "Lorem ipsum",
    avatar: "/uploads/avatar2.png",
    username: "Test User 2"
  },

];


function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
