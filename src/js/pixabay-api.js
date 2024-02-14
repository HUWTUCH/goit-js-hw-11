import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { renderPhotoTemplate } from './render-function.js';

const refs = {
  formEL: document.querySelector('.js-search-form'),
  loaderEl: document.querySelector('.loader')
}
refs.loaderEl.style.display = "none";
refs.formEL.addEventListener('submit', async (e)=>{
  e.preventDefault()
  const userSubmit = e.target.elements.query.value.trim();
  refs.loaderEl.style.display = "block";
  getSearchPhotoAPI(userSubmit).then(data => {
    if (!data.hits.length){
      iziToast.show({
        message: "Sorry, there are no images matching your search query. Please try again!",
        backgroundColor: 'red',
        position: 'topRight'
      })
    } else {
      renderPhotoTemplate(data);
    }
  })
  .finally(()=> {
      refs.loaderEl.style.display = "none";
    })
  e.target.reset()
})

export function getSearchPhotoAPI(userSymbol)  {
  const KEY_API = '42320428-e8ed9ab9e474091db19815d3a'

  const listParameters = {
    key: KEY_API,
    q: userSymbol,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  }

  const queryString = new URLSearchParams(listParameters).toString();
  const BASE_URL = `https://pixabay.com/api?${queryString}`

  return fetch(BASE_URL, {
    method: "GET",
    mode: "cors",
  }).then(res=>res.json());
}