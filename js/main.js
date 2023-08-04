const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsItem = document.querySelectorAll('.tabs__item')
const elsTabsPanel = document.querySelectorAll('.tabspanel__item')

const elsAccordionItem = document.querySelectorAll('.js-accordion__item')
const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')

/* DeactivateTabItems */
function deactivateTabItem(){
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs__item--active')
  });
};

/* DeactivateTabPanel */
function deactivateTabPanel(){
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tabspanel--active')
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
        elTargetPanel.classList.add('tabspanel--active')

    })
  })
}

function deactivateAccordionOpen(){
  elsAccordionItem.forEach(function (elsAccordionItem) {
    elsAccordionItem.classList.remove('accordion__item--open')
})
}

if (elsAccordionItemToggler) {
  elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
    elAccordionItemToggler.addEventListener('click', function () {

      // remove active class from tabs el
      deactivateAccordionOpen();

      // add avtive class to clikced tabs item
      elAccordionItemToggler.closest('.accordion__item').classList.add('accordion__item--open')

    })

  })


}

// // FAQ
// if (elsAccordionItem) {

//   })

// }