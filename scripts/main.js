let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/160px-1954_Bowman_Mickey_Mantle.jpeg') {
      myImage.setAttribute('src','img/220px-Mickey_Mantle_-_New_York_Yankees_-_1957.jpeg');
    } else if (mySrc === 'img/220px-Mickey_Mantle_-_New_York_Yankees_-_1957.jpeg'){
      myImage.setAttribute('src','img/220px-Mickey_Mantle_1951.jpeg');
    } else if (mySrc === 'img/220px-Mickey_Mantle_1951.jpeg'){
      myImage.setAttribute('src','img/160px-1954_Bowman_Mickey_Mantle.jpeg');
    }
}
