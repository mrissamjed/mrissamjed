function each(array, func) { 
    for (var i = 0; i < array.length; i++) { 
          func(array[i], i); 
    } 
}



function filter(array, predicate) {
 var acc = [];
 each(array, function (element, index) {
  
   if (predicate(element, index)) {
    
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
    // obj.display=displaySong
    obj.next=getNextSong

return obj  
}

// $("title").text("My Shop")

var addSong = function(name,images,songs,category) {
    var singsong= MakeSomething(name,images,songs,category)
    this.list.push(singsong)
}


var removeSong = function(singerr) {
    this.list =  filter(this.list,function(element,i){
        return element.singer!== singerr
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
    track.remove("NF")
    console.log(track.list)


    // var currentIndex =0
    // function getNextSong() {
    // currentIndex=(currentIndex+1)%track.songs.length
    // $("body").html('src',track.song[currentIndex])
    // };
    // // $("body").html("<audio id='mp3' src = " + track.songs[0]  + "</audio>")
    // // $("#mp3").on("click",track.getNextSong)
    


    // var displaySong = function(categoryy) {
    //     var arr = []
    //     each(this.list,function(element){
    //         if (element.category ===categoryy) {
    //             arr.push(element)
    //         } 
    //     })
    //     console.log(arr)  
    // }


    


    // ('#remove').on("click",removeSong)

    // $('button').click(function(){
    //     $('ul').toggleClass('active')   
    //    })