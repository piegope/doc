window.addEventListener('DOMContentLoaded', () => {
  const searchButtons = document.querySelectorAll('.dwd-search-button');
  const searchIconButtons = document.querySelectorAll('.dwd-search-button-icon');
  const devolutionsSearch = document.querySelector('devolutions-search');

  document.addEventListener('devolutions-search:closed', () => {
    devolutionsSearch.setAttribute('opened', false);
  });

  for (let searchButton of searchButtons) {
    searchButton.addEventListener('click', () =>
      devolutionsSearch.setAttribute('opened', true)
    );
  }

  for (let searchIconButton of searchIconButtons) {
    searchIconButton.addEventListener('click', () =>
      devolutionsSearch.setAttribute('opened', true)
    );
  }
});