openTab = (evt, cityName) => {
    // Get all elements with class="tabcontent" and hide them
   const tabcontent = document.getElementsByClassName('tabcontent');
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName('tablinks');
    for (let j = 0; j < tablinks.length; j++) {
        tablinks[j].className = tablinks[j].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
