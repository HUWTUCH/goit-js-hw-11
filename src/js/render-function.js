const refs = {
  formEL: document.querySelector('.js-search-form')
}
function photoTemplate(data) {
  const markup = data.hits
    .map(data => {
    return `<li class="gallery-item"><a href="${data.webformatURL}">
          <img class="gallery-image" src="${data.webformatURL}" alt="${data.tags}"></a>
          <p><b>Likes: </b>${data.likes}</p>
          <p><b>Views: </b>${data.view}</p>
          <p><b>Comments: </b>${data.comments}</p>
          <p><b>Downloads: </b>${data.download}</p>
          </li>`;

  });
  refs.formEL.insertAdjacentHTML('afterbegin', markup);

}
export function renderPhotoTemplate(data) {
  photoTemplate(data)
}