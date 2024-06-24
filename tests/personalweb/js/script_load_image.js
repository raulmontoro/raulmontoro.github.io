<div id="id_1"></div>

<script>
    var images = {  // images with properties
        image1 : {url:'http://image1',property:'value'},
        image2 : {url:'http://image2',props:[]}
    }
    
    for(var i in images){
        var image = new Image();
        image.src = images[i].url;
        // put image anywhere you want
        document.getElementById('id_1').appendChild(image)
    }
</script>

