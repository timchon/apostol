const iconMenu = document.querySelector('.menu__icon');
if (iconMenu){
  const navigation = document.querySelector('.navigation');
  iconMenu.addEventListener("click", function(e){
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    navigation.classList.toggle('_active');
  })
}

if(iconMenu.classList.contains('_active')){
  document.body.classList.remove('_lock');
    iconMenu.classList.remove('_active');
    navigation.classList.remove('_active');
}