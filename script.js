let menuList = document.getElementById("menuList")


function toggleMenu(){
    if(menuList.style.maxHeight === "0px" || menuList.style.maxHeight === "")
    {
        menuList.style.maxHeight = "300px";
    }
    else{
        menuList.style.maxHeight = "0px";
    }
}


  function h() {
    menuList.style.maxHeight="0px"
  }