window.onload = function(){
    var myImg = document.querySelector('#imgPath');
    element = document.getElementById('btn');
    element.onclick = function(){
        getSrc = myImg.getAttribute('src');
        if(getSrc == 'https://www.w3schools.com/w3images/fjords.jpg'){
            myImg.setAttribute('src', 'https://freerangestock.com/sample/39010/into-thin-air--base-jumping-off-trolltunga--extreme-sports-in-norway.jpg');
        }else{
            myImg.setAttribute('src', 'https://www.w3schools.com/w3images/fjords.jpg');
        }
    }
}