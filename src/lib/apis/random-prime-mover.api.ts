import axios from "axios";

export function getRandomPrimeMover(language = "en") {
  return axios
    .get("https://fitness.elevateegy.com/api/v1/muscles/random", {
      headers: {
        "Accept-Language": language,
      },
    })
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching random prime mover:", error);
      throw error;
    });
}

export function getPrimeMoverMuscleByID(id: string, language: string = "en") {
  const url = `https://fitness.elevateegy.com/api/v1/musclesGroup/by-muscle-group?muscleGroupId=${id}`;

  return axios
    .get(url, {
      headers: {
        "Accept-Language": language,
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error fetching muscles by group ID:", error);
      throw error;
    });
}
