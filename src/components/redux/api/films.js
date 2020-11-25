export const fetchApiFilms = async () => {
  try {
    const response = await fetch("https://robin-devc.herokuapp.com/films");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchApiFilm = async (id) => {
  try {
    const response = await fetch(
      `https://robin-devc.herokuapp.com/films/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchApiFilms = async (query) => {
  try {
    const response = await fetch(
      `https://robin-devc.herokuapp.com/films?q=${query}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
