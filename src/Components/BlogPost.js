import axios from "axios";


const API_URL =
  "https://api.airtable.com/v0/appdAL6fkiTWC0Z3m/Table%201?api_key=keyaPGQk6v48Ci0cw";

const BlogPost = ({ postData, toggleFetch, setToggleFetch }) => {
  const deleteRecipe = async () => {
    await axios.delete(API_URL + `&records[]=${postData.id}`);
    setToggleFetch(!toggleFetch);
  };

  return (
    <div>
      <h2>{postData.fields.title}</h2>
      <p>Ingredients: {postData.fields.ingredients}</p>
      <em>Steps: {postData.fields.steps}</em>
      <br />
      <button onClick={deleteRecipe}>Delete</button>
    </div>
  );
};

export default BlogPost;
