const photos = document.querySelectorAll('.photo')

photos.forEach((photo) => {
  photo.addEventListener('click', () => {
    removeActiveClasses()
    photo.classList.add('active');
  })
})

function removeActiveClasses() {
  photos.forEach((photo) => {
    photo.classList.remove('active');
  })
}
