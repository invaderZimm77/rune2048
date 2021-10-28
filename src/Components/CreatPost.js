import axios from "axios";
import { useState } from "react";
import { Redirect, useParams } from "react-router-dom";

const API_URL =
  "https://api.airtable.com/v0/appT75kZsb3WTw7pA/Table%201?api_key=keyzOz9iJrfKlIX63";

const CreatPost = ({ formType, toggleFetch, setToggleFetch }) => {
  const [playerName, setPlayerName] = useState("");
  const [gameName, setGameName] = useState("");
  const [score, secScore] = useState("");
  const [redirectHome, setRedirectHome] = useState(false);
  const params = useParams();

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//POST REQUEST
  const HandlePostRequest = async (ev) => {
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
  const HandlePutRequest = async (ev) => {
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
        onSubmit={formType === "post" ? HandlePostRequest : HandlePutRequest}
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

export default CreatPost;
