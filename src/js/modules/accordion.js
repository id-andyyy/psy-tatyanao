function accordion() {
  const accordionItemsNode = document.querySelectorAll('.accordion__item');

  if (accordionItemsNode) {
    accordionItemsNode.forEach(itemNode => {
      const buttonNode = itemNode.querySelector('.accordion__button');

      buttonNode.addEventListener('click', () => {
        accordionItemsNode.forEach(activeItemNode => {
          if (checkActiveItem(activeItemNode) && activeItemNode != itemNode) {
            closeAccordionItem(activeItemNode);
          }
        })

        if (!checkActiveItem(itemNode)) {
          openAccordionItem(itemNode);
        } else {
          closeAccordionItem(itemNode);
        }
      })
    })
  }

  function openAccordionItem(itemNode) {
    const bodyNode = itemNode.querySelector('.accordion__body');

    bodyNode.style.height = bodyNode.scrollHeight + 'px';
    itemNode.classList.add('accordion-active');
  }

  function closeAccordionItem(itemNode) {
    const bodyNode = itemNode.querySelector('.accordion__body');

    bodyNode.style.height = null;
    itemNode.classList.remove('accordion-active');
  }

  function checkActiveItem(itemNode) {
    return itemNode.classList.contains('accordion-active');
  }
}

export default accordion;