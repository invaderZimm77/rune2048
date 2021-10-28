import axios from "axios";
import { Link } from "react-router-dom";
const API_URL =
  "https://api.airtable.com/v0/appT75kZsb3WTw7pA/Table%201?api_key=keyzOz9iJrfKlIX63";

const GamePost = ({ postData, toggleFetch, setToggleFetch }) => {
  const deleteGamePost = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);

    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <h2>{postData.fields.playerName}'s Entry:</h2>
      <p>Name of the game: {postData.fields.gameName}</p>
      <p>Game score: {postData.fields.score}</p>
      <br />

      <Link to={`/`} onClick={deleteGamePost} className="modButton">Delete Entry</Link>
      <Link to={`/edit/${postData.id}`} className="modButton">Edit Post</Link>
    </div>
  );
};

export default GamePost;
