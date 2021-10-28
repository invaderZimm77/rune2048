import axios from "axios";

const API_URL =
  "https://api.airtable.com/v0/appT75kZsb3WTw7pA/Table%201?api_key=keyzOz9iJrfKlIX63";

const GamePost = ({ postData, toggleFetch, setToggleFetch }) => {
  const deleteGamePost = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <h2>{postData.fields.playerName}</h2>
      <p>Name of the game: {postData.fields.gameName}</p>
      <p>Game score: {postData.fields.score}</p>
      <br />
      <button onClick={deleteGamePost}>Delete Entry</button>
    </div>
  );
};

export default GamePost;
