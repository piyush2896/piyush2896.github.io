function typeWriter(){
    var speed = 100;
    titles = ['Adventurer', 'Loud Mouth', 'Machine Learning Researcher'];
    titles = titles.join('-');
    $('#person-title').html('&nbsp;');
    setTimeout(typeWriterHelper, 1000, titles, 0, speed);
}

function typeWriterHelper(txt, index, speed){
    if (index < txt.length){
        // if '-' is encountered clean the id
        // else append character at given index
        if (txt.charAt(index) == '-'){
            $('#person-title').html('&nbsp;');
        }else{
            $('#person-title').append(txt.charAt(index));
        }

        // Give few seconds for different headings
        if (index + 1 < txt.length){
            if (txt.charAt(index + 1) == '-'){
                curSpeed = speed + 1000
            }else{
                curSpeed = speed
            }
        }
            
        setTimeout(typeWriterHelper, curSpeed, txt, index+1, speed);
    }
}


$(document).ready(function() {
    typeWriter();
});