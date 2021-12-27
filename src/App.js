import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/actions/postAction";
import "./App.css";
import logo from "./logo.svg";

function App() {
  const dispatch = useDispatch();
  const postList = useSelector((state) => state.posts.data);
  const status = useSelector((state) => state.posts.status);

  const handleGetPosts = () => {
    dispatch(getPosts());
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleGetPosts}>Get User's Posts</button>
        {status === "requesting" ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          false
        )}
        {status === "successful" ? (
          postList && postList.length > 0 ? (
            <div>
              <ul className="list-group">
                {postList.map((item) => (
                  <li key={item.id} className="list-group-item">
                    <p>User name: {item.name}</p>
                    <p>User email: {item.email}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div>Data is empty</div>
          )
        ) : (
          false
        )}
      </header>
    </div>
  );
}

export default App;
