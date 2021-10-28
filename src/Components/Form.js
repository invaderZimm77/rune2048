import axios from "axios";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const API_URL =
  "https://api.airtable.com/v0/appT75kZsb3WTw7pA/Table%201?api_key=keyzOz9iJrfKlIX63";

/*
To get data pre-populated into the form for PUT requets we would
    need to write another GET request and filter using the id from
    the url. Not the easiest workaround but the simplest way we 
    could accomplish this given the Airtable API.
    1. Get all blog post data from Airtable
    2. blog data .find matching our param to the full set.
*/

const Form = ({ formType, toggleFetch, setToggleFetch }) => {
  const [playerName, setPlayerName] = useState("");
  const [gameName, setGameName] = useState("");
  const [score, secScore] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);
  const params = useParams();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//POST REQUEST
  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    const newGamePost = {
      records: [
        {
          fields: {
            playerName,
            gameName,
            score,
          },
        },
      ],
    };

    await axios.post(API_URL, newGamePost);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//PUT REQUEST
  const handlePutRequest = async (ev) => {
    ev.preventDefault();
    const game_id = params.game_id;

    const updatedPostData = {
      records: [
        {
          id: game_id,
          fields: {
            playerName,
            gameName,
            score,
          },
        },
      ],
    };
    await axios.put(API_URL, updatedPostData);

    setRedirectHome(true);
    setToggleFetch(!toggleFetch);
  };
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  if (redirectHome) {
    return <Redirect to="/" />;
  }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  return (
    <div>
      {/* determine which type of request will happen */}
      <form
        onSubmit={formType === "post" ? handlePostRequest : handlePutRequest}
      >
        <label htmlFor="playerName">Player's Name: </label>
        <input
          type="text"
          id="playerName"
          onChange={(ev) => setPlayerName(ev.target.value)}
        /><br />

        <label htmlFor="gameName">Name of the Game: </label>
        <input
          type="text"
          id="gameName"
          onChange={(ev) => setGameName(ev.target.value)}
        />

        <label htmlFor="score"> Score: </label>
        <input
          type="text"
          id="score"
          onChange={(ev) => secScore(ev.target.value)}
        /><br />

        <input className="submit-Button" type="submit" />
      </form>
    </div>
  );
};

export default Form;
