import { BrowserRouter,Switch,Route } from "react-router-dom";
import Header from "./Header";
import Signin from "./pages/Signin";
import Posts from "./pages/Posts";
import NewPost from"./pages/NewPost";
import Post from "./pages/Post";
import Todo from "./ToDoList";

function App(){
    return (
        <div class="root">
        <Todo />
        </div>
    );
}

export default App;