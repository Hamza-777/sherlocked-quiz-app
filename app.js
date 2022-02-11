const animeBtn = document.querySelector('.anime-btn');
const webBtn = document.querySelector('.web-btn');
const movieBtn = document.querySelector('.movie-btn');
const animeCategory = document.querySelector('.anime-category');
const webCategory = document.querySelector('.web-category');
const movieCategory = document.querySelector('.movie-category');

animeBtn.addEventListener('click', e => {
    if(!animeBtn.classList.contains('active-category')) {
        animeBtn.classList.toggle('active-category');
        webBtn.classList.remove('active-category');
        movieBtn.classList.remove('active-category');
        animeCategory.style.display = 'flex';
        webCategory.style.display = 'none';
        movieCategory.style.display = 'none';
    }
});

webBtn.addEventListener('click', e => {
    if(!webBtn.classList.contains('active-category')) {
        webBtn.classList.toggle('active-category');
        animeBtn.classList.remove('active-category');
        movieBtn.classList.remove('active-category');
        webCategory.style.display = 'flex';
        animeCategory.style.display = 'none';
        movieCategory.style.display = 'none';
    }
});

movieBtn.addEventListener('click', e => {
    if(!movieBtn.classList.contains('active-category')) {
        movieBtn.classList.toggle('active-category');
        webBtn.classList.remove('active-category');
        animeBtn.classList.remove('active-category');
        movieCategory.style.display = 'flex';
        webCategory.style.display = 'none';
        animeCategory.style.display = 'none';
    }
});