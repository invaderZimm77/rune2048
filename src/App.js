import axios from "axios";
import'./App.css';
import { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import BlogPost from "./Components/BlogPost.js";
import Form from "./Components/Form.js"


const apiKEy= "keyzOz9iJrfKlIX63";

const API_URL =
  "https://api.airtable.com/v0/appdAL6fkiTWC0Z3m/Table%201?api_key=keyaPGQk6v48Ci0cw";

function App() {
  const [gamePosts, setGamePosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    console.log("Retreving Server Data...");

    const getGamePosts = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setGamePosts(resp.data.records);
    };

    getGamePosts();
  }, [toggleFetch]);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/" className="home-Button">Home</Link>
          <br />
          <Link to="/newpost">Add a Game</Link>
        </nav>
        <br />

        <Route exact path="/">
          <ul>
            {gamePosts.map((gamePosts) => (
              <Link to={`/recipe/${gamePosts.id}`} key={gamePosts.id}>
                <li >{gamePosts.fields.title}</li>
              </Link>
            ))}
          </ul>

        </Route>
        {gamePosts.map((gamePosts) => (
          <Route exact path={`/recipe/${gamePosts.id}`} key={gamePosts.id}>
            <BlogPost
              key={gamePosts.id}
              postData={gamePosts}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          </Route>
        ))}

        <Route path="/newpost">
          <Form
            formType={"post"}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>
      </div>
    </Router>
  );
}

export default App;
