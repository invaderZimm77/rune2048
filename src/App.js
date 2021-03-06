import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import GamePost from "./Components/GamePost.js";
import CreatPost from "./Components/CreatPost.js";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/NavBar";
import { Header } from "./Components/Header";


const API_URL =
  "https://api.airtable.com/v0/appT75kZsb3WTw7pA/Table%201?api_key=keyzOz9iJrfKlIX63";

function App() {
  const [gamePosts, setGamePosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    // console.log("Retreving Server Data...");
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //GET REQUEST
    const getGamePosts = async () => {
      const gameP = await axios.get(API_URL);
      // console.log(gameP.data);
      setGamePosts(gameP.data.records);
    };

    getGamePosts();
  }, [toggleFetch]);
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <Router>
      <Header />
      <div>
        <Navbar />
        <Route exact path="/">
          <h3>Player's Post</h3>
          <ul>
            {gamePosts.map((gamePosts) => (
              <Link to={`/gamePosts/${gamePosts.id}`} key={gamePosts.id}className="post-Links">
                <li>{gamePosts.fields.playerName}</li>
              </Link>
            ))}
          </ul>
        </Route>
        {gamePosts.map((gamePosts) => (
          <Route exact path={`/gamePosts/${gamePosts.id}`} key={gamePosts.id}>
            <GamePost
              key={gamePosts.id}
              postData={gamePosts}
              toggleFetch={toggleFetch}
              setToggleFetch={setToggleFetch}
            />
          </Route>
        ))}

        <Route path="/newpost">
          <CreatPost
            formType={"post"}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>

        <Route path="/edit/:game_id">
          <CreatPost
            formType={"put"}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
