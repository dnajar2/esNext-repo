//5c8f7f48703a262175a69ac1d884e274
//https://www.food2fork.com/api/search
import Search from './models/Search'
import * as searchView from './viwes/searchView'
import {elements, renderLoader,clearLoader} from './viwes/base'
/**Global State of app
 * -search object
 * -current recipe object
 * -Shopping list object
 * -Liked recipes
 * @type {{}}
 */
const state = {};
//search controller;
const controlSearch = async () => {
    const query = searchView.getInput();

    if(query){
        //New search Object and add to state
        state.search = new Search(query);
        //Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        // search
        await state.search.getResults();

        //log results
        clearLoader();
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');

    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
        console.log(goToPage)
    }
})


