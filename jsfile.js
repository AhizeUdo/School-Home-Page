function release() {
    document.getElementById("panel").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.navbtn')) {
      var dropdowns = document.getElementsByClassName("navmenu");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
}
