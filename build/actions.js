
// switch section in memories
function switchMEMORIES(m) { 
    var memory = document.getElementById(m);
    var photos = document.getElementById('photosMemories');
    var videos = document.getElementById('videosMemories');
    if (memory.style.display == 'none') {
        if (m == 'photoMEMORIES') {
            memory.style.display = 'block';
            videos.style.display = 'none';
        }
        if (m == 'videoMEMORIES') {
            memory.style.display = 'block';
            photos.style.display = 'none';
        }   
    }
    else {
        memory.style.display = 'none';
    };
}

// display a treasure
function showTREASURE(s, b) {    
    var shrine = document.getElementById(s);

    if (b.checked) {
        shrine.style.display = 'block';
    } 
    else {
        shrine.style.display = 'none';
    }
}


