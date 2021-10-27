import axios from "axios";

import { useEffect, useState } from "react";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import BlogPost from "./Components/BlogPost.js";
import Form from "./Components/Form.js"


const apiKEy= "keyzOz9iJrfKlIX63";

const API_URL =
  "https://api.airtable.com/v0/appdAL6fkiTWC0Z3m/Table%201?api_key=keyaPGQk6v48Ci0cw";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    console.log("Getting Blog Posts");

    const getBlogPosts = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setBlogPosts(resp.data.records);
    };

    getBlogPosts();
  }, [toggleFetch]);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/newpost">Add a Recipe</Link>
        </nav>
        <br />

        <Route exact path="/">
          <ul>
            {blogPosts.map((blogPosts) => (
              <Link to={`/recipe/${blogPosts.id}`} key={blogPosts.id}>
                <li >{blogPosts.fields.title}</li>
              </Link>
            ))}
          </ul>

        </Route>
        {blogPosts.map((blogPosts) => (
          <Route exact path={`/recipe/${blogPosts.id}`} key={blogPosts.id}>
            <BlogPost
              key={blogPosts.id}
              postData={blogPosts}
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
