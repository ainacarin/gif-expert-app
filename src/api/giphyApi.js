
export const getGifs = async (category) => {
    const url =
      `${process.env.REACT_APP_BASE_URL_GIF_SEARCH}?q=${ encodeURI( category ) }&limit=10&api_key=${process.env.REACT_APP_API_KEY_GIF}`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
      const { id, title, images } = img;
      return {
        id,
        title,
        url: images?.downsized_medium.url,
      };
    });
    return gifs; //promise
  };