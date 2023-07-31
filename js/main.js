const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsItem = document.querySelectorAll('.tabs__item')
const elsTabsPanel = document.querySelectorAll('.tabs__panel')

/* DeactivateTabItems */
function deactivateTabItem(){
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active')
  });
};

/* DeactivateTabPanel */
function deactivateTabPanel(){
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabs__panel--active')
  });
};

function activateTabItems() {

}

if(elsTabsLink){
  elsTabsLink.forEach(function (elTabsLink) {
    elTabsLink.addEventListener('click', function (evt) {
      // prevent page move
      evt.preventDefault();

      // remove active class from tabs el
      deactivateTabItem();

      /* Remove active class from TabPanel element */
      deactivateTabPanel()

      // add avtive class to clikced tabs item
      elTabsLink.parentElement.classList.add('tabs__item--active');

      // show active panel
      // const elTargetPanel = document.querySelector(`#${elTabsLink.href.split("#")[1]}`)
      const elTargetPanel = document.querySelector(elTabsLink.dataset.tabTarget)
      elTargetPanel.classList.add('tabs__panel--active')

    })
  })
}