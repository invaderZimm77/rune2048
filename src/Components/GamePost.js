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
      <h2>{postData.fields.title}</h2>
      <p>Ingredients: {postData.fields.ingredients}</p>
      <em>Steps: {postData.fields.score}</em>
      <br />
      <button onClick={deleteGamePost}>Delete</button>
    </div>
  );
};

export default GamePost;
