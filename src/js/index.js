import Search from './models/Search';
import * as searchView from './views/SearchView';
import { DomElements, renderLoader, clearLoader } from './views/base';
/*
* GLOBAL STATE OBJECT
 ! search object
 ! - current recipe object
 ! - shopping list object
 ! - liked recipes 
 */
const state = {};

const controlSearch = async () => {
  //GETTING QUERY PARAMS FROM VIEW
  const query = searchView.getInput();

  if (query) {
    //CREATING A NEW SEARCH OBJECT
    state.search = new Search(query);
  }

  //PREPARE UI FOR RESULT
  searchView.clearResult();
  renderLoader(DomElements.searchResult);

  //SEARCH FOR RECIPES
  //returning a promise
  await state.search.getResults();

  //CLEAR THE LOADER
  clearLoader();

  //RENDER RESULTS ON UI
  searchView.renderResults(state.search.recipesArray);

  //CLEARING INPUT
  searchView.clearInput();
};

DomElements.searchForm.addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

//console.log(search);
