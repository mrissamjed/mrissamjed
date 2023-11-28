
// $(document).ready(function(){
//     $('button').click(function(){
//      $('ul').toggleClass('active')   
//     })
// })



function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}



function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
   // notice we added the index here
   if (predicate(element, index)) {
     // notice we added the index here
     acc.push(element);
   }
 });
 return acc;
}



function MakeSomething (singer,images,songs,category,) {
    return {
        singer:singer,
        images : images , 
        songs : songs,
        category : category,
        // getNextSongs
      }
      }


var song1 = MakeSomething("Eminem","/images/download (1).jpg",
["/New folder (4)/eminem/Eminem - Till I Collapse (HD).mp3",
"//New folder (4)/eminem/EMINEM - lose yourself (uncencored).mp3",
"/New folder (4)/eminem/Eminem - Must Be The Ganja dirty (128 kbps).mp3",
"/New folder (4)/eminem/Eminem - The Way I Am.mp3"],"RAP")
console.log(song1)

 
 
function MakePlaylist(namee) {
    var obj ={}
    obj.name=namee
    obj.list=[]
    obj.add=addSong
    obj.remove=removeSong
    obj.display=displaySong

return obj  
}

var addSong = function(name,images,songs,category) {
    var singsong= MakeSomething(name,images,songs,category)
    this.list.push(singsong)
}


var removeSong = function(genre) {
    this.list =  filter(this.list,function(element,i){
        return element.category!== genre
    })
    }
    
    
    var track = MakePlaylist("Music")
    track.add("NF","/images/NF.jpg",["/New folder (4)/NF - LAYERS.mp3","/New folder (4)/NF - Leave Me Alone.mp3","/New folder (4)/NF - Options.mp3","/New folder (4)/NF - TRUST ft. Tech N9ne.mp3"],"rap")
    
    track.add("Loreena McKennit","/images/Loreena.jpg",["/New folder (4)/yt1s.com - Loreena McKennitt  Caravanserai Lyrics.mp3",
    "/New folder (4)/yt1s.com - Loreena McKennitt  Marco Polo.mp3",
    "/New folder (4)/yt1s.com - loreena mckennitt  mummers dance.mp3","/New folder (4)/yt1s.com - The Highwayman  Loreena McKennitt.mp3"],"classic")
    
    
    track.add("Linkin Park","/images/linkin.jpg",["/New folder (4)/linkin park/Linkin Park - In The End (Official Video).mp3",
    "/New folder (4)/linkin park/Linkin Park - In The End (Official Video).mp3",
    "/New folder (4)/linkin park/Linkin Park - Somewhere I Belong.mp3",
    "/New folder (4)/linkin park/Linkin Park - Crawling.mp3"],"rock")


    console.log(track.list)
    track.remove("rock")
    console.log(track.list)


    var displaySong = function(categoryy) {
        var arr = []
        each(this.list,function(element){
            if (element.category ===categoryy) {
                arr.push(element)
            } 
        })
        console.log(arr)  
    }



    

