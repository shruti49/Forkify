import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const proxy = 'https://cors-anywhere.herokuapp.com';
    const myKey = '152f197216a69f7479f1f8301eb04a52';
    try {
      const response = await axios(
        `${proxy}/https://www.food2fork.com/api/search?key=${myKey}&q=${this.query}`
      );
        this.recipesArray = response.data.recipes;
    } catch (error) {
      alert(error);
    }
  }
}
