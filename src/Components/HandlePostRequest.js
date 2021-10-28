import axios from "axios";
// import { useState } from "react";
// import { Redirect, useParams } from "react-router-dom";

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

export default HandlePostRequest