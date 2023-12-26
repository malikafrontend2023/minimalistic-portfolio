const elSiteHeader = document.querySelector('.site-header');
const elSiteHeaderMenuButton = elSiteHeader.querySelector('.site-header__menu-button');

if (elSiteHeaderMenuButton) {
  elSiteHeaderMenuButton.addEventListener('click', function(){
    elSiteHeader.classList.toggle('site-header--open')
  })
}