export const fecher = (url: string) => {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => json)
    .catch((error) => {
      console.log("error: ", error);
    });
};
