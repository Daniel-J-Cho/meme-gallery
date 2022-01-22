var gallery = document.querySelector('main');

var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/023/397/C-658VsXoAo3ovC.jpg',
  'https://www.shutupandtakemymoney.com/wp-content/uploads/2020/05/people-complaining-about-people-at-the-beach-when-you-are-people-at-the-beach-spiderman-meme.jpg',
  'https://dogsofaustralia.com.au/wp-content/uploads/2021/08/Seafood-diet-dog-meme.jpeg'
];

var imageUrlInput = document.querySelector('input');
var addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value);
    imageUrlInput.value = '';
  }
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (let i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement('img');
    imageElement.className = 'gallery-image';
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
