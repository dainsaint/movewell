var warmup = [
  { name: "CARs" },
  { name: "Ball Irradiation" },
  { name: "Superman Irradiation" },

]

var lowerBody = [
  {
    name: "Ankle CARs",
    video: "https://www.instagram.com/p/BQdwMZ5Ab2X/?taken-by=movewellphilly",
    sets: "3 each direction @75%"
  },

  {
    name: "Knee CARs",
    video: "https://www.instagram.com/p/BPbeRX6AN_M/?taken-by=movewellphilly",
    sets: "3 each direction @75%"
  },

  {
    name: "Plantar PAILS/RAILS",
    video: "https://www.instagram.com/p/BRKDFglADGt/?taken-by=movewellphilly",
    sets: "3 rounds"
  },

  {
    name: "Knee extension w/ resistance ",
    video: "https://www.instagram.com/p/BQQhWBcASWi/?taken-by=movewellphilly",
    sets: "3 sets x 4 reps per leg"
  },

  {
    name: "Straight-leg hovers",
    video: "http://www.youtube.com/watch?v=SKPQFDkryt0",
    sets: "3 sets x 3 each way"
  },

  {
    name: "Half-kneeling PRH",
    video: "http://www.youtube.com/watch?v=UnttT76W1PU",
    sets: "3 sets x 5 reps each leg"
  },

  {
    name: "Hamstring eccentrics",
    video: "http://www.youtube.com/watch?v=BWIvrCCgnpo",
    sets: "3 sets x 3 each way"
  },

  {
    name: "Hip extension hovers w/ball",
    video: "https://www.instagram.com/p/BPxTJUEgI5p/?taken-by=movewellphilly",
    sets: "3 sets x 6-8 reps each way"
  },

  {
    name: "Ankle PAILs/RAILs",
    video: "http://www.youtube.com/watch?v=rKVwRrwdsHs",
    sets: "3 sets x 3 each way"
  },

  {
    name: "Ankle PRH",
    video: "http://www.youtube.com/watch?v=rKVwRrwdsHs",
    sets: "3 sets x 3 each way"
  },



]

var cooldown = [
  { name: "MEB" }

]


var today = [];



$(document).ready(function(){

  Sugar.extend();
  today = [warmup, lowerBody, cooldown].flatten();

  show(cursor);

  $(".prev").click( navigate.partial(-1) );
  $(".next").click( navigate.partial(1) );

});



var cursor = 0;
function navigate( direction )
{
  cursor += direction;
  cursor = cursor.clamp(0, today.length - 1);
  show(cursor);;
}


function show( i )
{
  var exercise = today[i];
  $("h1").html( exercise.name || "" );
  $("h2").html( exercise.sets || "" );
  $("h3").html( "{0}/{1}".format( cursor + 1, today.length ) );
  $("a").attr( "href", exercise.video || "" );
  if( !exercise.video )
    $("a").hide();
  else {
    $("a").show();
  }

}
