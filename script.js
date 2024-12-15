const openModal = document.getElementById('openModal')
const theModal = document.getElementById('theModal')
const closeModal = document.getElementById('closeModal')







openModal.addEventListener('click', () => {
    theModal.style.display = 'block'
});



closeModal.addEventListener('click', () => {
    theModal.style.display = 'none'
})

