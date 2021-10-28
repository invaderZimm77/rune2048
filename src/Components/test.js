import axios from "axios";

import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const API_URL =
  "https://api.airtable.com/v0/appTlifz4bcguCnQH/Table%201?api_key=keyi9RwVi66DoO4Gf";

const Form = ({ formType, toggleFetch, setToggleFetch }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);
  const params = useParams();

  const handlePostRequest = async (ev) => {
    ev.preventDefault();

    /* Copied from Postman. Airtable requires a specific format
            for our requests. Make sure our POST matches
          {
              "records": [
                  {
                      "fields": {
                          "title": "Test Title 2",
                          "text": "Test Text 2",
                          "author": "Phil"
                      }
                  }
              ]
          }
        */
    const newBlogPost = {
      records: [
        {
          fields: {
            title,
            text,
            author,
          },
        },
      ],
    };

    await axios.post(API_URL, newBlogPost);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  };

  const handlePutRequest = async (ev) => {
    ev.preventDefault();
    const blog_id = params.blog_id;

    const updatedPostData = {
      records: [
        {
          id: blog_id,
          fields: {
            title,
            text,
            author,
          },
        },
      ],
    };
    await axios.put(API_URL, updatedPostData);

    setToggleFetch(!toggleFetch);
  };

  if (redirectHome) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {/* determine which type of request will happen */}
      <form
        onSubmit={formType === "post" ? handlePostRequest : handlePutRequest}
      >
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          onChange={(ev) => setTitle(ev.target.value)}
        />

        <label htmlFor="text">Text: </label>
        <input
          type="text"
          id="text"
          onChange={(ev) => setText(ev.target.value)}
        />

        <label htmlFor="author">Author: </label>
        <input
          type="text"
          id="author"
          onChange={(ev) => setAuthor(ev.target.value)}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;








import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = async (e) => {
    // first prevent the default event
    e.preventDefault();
    // assemble data
    const newPost = {
      author,
      content,
    };
    // make POST request
    await axios.post("https://morning-island-35239.herokuapp.com/", newPost);
    // set togglefetch to its opposite
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Chirp to us!</h4>
      <label>Content:</label>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <label>Author:</label>
      <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button type="submit">Chirp!</button>
    </form>
  );
}

export default Form;