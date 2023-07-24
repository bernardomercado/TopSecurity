(function(){
   const listElements = document.querySelectorAll('.servicios-item');
   const list = document.querySelector('.navegador__links');
   const menu = document.querySelector('.navegador__hamburguesa');

   const AddClick = ()=>{
    listElements.forEach(element =>{
      element.addEventListener('click', ()=>{

        let subMenu = element.children[1];
        let height = 0;
        element.classList.toggle('menu__item--active');

        if(subMenu.clientHeight === 0){
          height = subMenu.scrollHeight;
        }

        subMenu.style.height = `${height}px`;

      })
    })
  }

  const deleteStyleHeight = ()=>{
    listElements.forEach(element =>{

      if(element.children[1].getAttribute('style')){
        element.children[1].removeAttribute('style');
        element.children[1].remove('menu__item--active');
      }

    })
  }

  window.addEventListener('resize', ()=>{
    if(window.innerWidth > 768){
      deleteStyleHeight();
      if(list.classList.contains('menu__links--show'))
        list.classList.remove('menu__links--show')

    }else{
      AddClick();
    }
  });

  if(window.innerWidth <= 768){
    AddClick();
  }

  menu.addEventListener('click', ()=>list.classList.toggle('menu__links--show'))

})();