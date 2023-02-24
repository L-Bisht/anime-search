import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  useEffect(() => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("accessToken", "<REQUIRED>");
    encodedParams.append("userId", "<REQUIRED>");

    const options = {
      method: "POST",
      url: "https://anilistmikilior1v1.p.rapidapi.com/getAnimeList",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "fc37b89ba9mshdd6569e704f56bbp18777djsna1800dbe7285",
        "X-RapidAPI-Host": "Anilistmikilior1V1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return <div className="App">test</div>;
}

export default App;
