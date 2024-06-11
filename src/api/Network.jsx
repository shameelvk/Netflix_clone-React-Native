import axios from "axios";  
const Config={
    baseUrl:'https://api.themoviedb.org/3/movie/',
    token:'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjMyZDViYzkyZGJlMWRlNGIxY2MzYTUxNjM3MWE2NCIsInN1YiI6IjY2NjdmMjMxZDk4NDE0Yzg5ZDg1YzZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nEzktWrGyEHBVmicD1PcU77tdqHK8ya24jsTnNGgQuc'
}

export const getUpcomingMovies = async () => {
    try {
      const response = await axios.get(`${Config.baseUrl}/upcoming`, {
        headers: {
          Authorization: `Bearer ${Config.token}`,
        },
      });
      const data = response.data;
      const status = response.status;
      return {success: true, data: data, status: status};
    } catch (error) {
      console.log(error);
      return {success: false, data: error};
    }
  };