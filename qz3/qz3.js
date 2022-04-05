document.addEventListener('keydown', logkey);
    
    function logkey(e) {
            var output = document.getElementById("OUTPUT");
            output.innerHTML = e.key;
    }
