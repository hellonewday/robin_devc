export const fetchApi =  async () => {
  try {
    const response = await fetch("http://localhost:5000/films");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
