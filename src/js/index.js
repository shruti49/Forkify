import Search from './models/Search';

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
  const query = 'pizza';

  if (query) {
    //CREATING A NEW SEARCH OBJECT
    state.search = new Search(query);
  }

  //PREPARE UI FOR RESULT

  //SEARCH FOR RECIPES
  //returning a promise
  await state.search.getResults();

  //RENDER RESULTS ON UI
  console.log(state.search.recipesArray);
};

document.querySelector('.search').addEventListener('submit', e => {
  e.preventDefault();
  controlSearch();
});

//console.log(search);
