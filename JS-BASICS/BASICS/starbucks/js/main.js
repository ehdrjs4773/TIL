const searchEl = document.querySelector('.search'); //document <- HTML 자체다.
const searchInputEl =searchEl.querySelector('Input');

searchEl.addEventListener('click', function () {
    // Logic..
    searchInputEl.focus();

});


searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});