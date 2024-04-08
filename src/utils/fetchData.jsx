// fetchData.jsx
const getCharacters = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching data:', error);
      return error; 
    }
  };
  
  export default getCharacters;
  