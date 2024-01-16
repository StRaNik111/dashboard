window.addEventListener('load', () => {
   const sidebarItems =document.querySelectorAll('.item-sidebar');
   
   sidebarItems.forEach(item => {
      item.addEventListener('click', (e) =>{
         removeClasses(sidebarItems, 'active')
         e.target.classList.add('active');
      })
   });


   
})




function removeClasses(arr, className) {
   for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      element.classList.remove(className);
   }
}