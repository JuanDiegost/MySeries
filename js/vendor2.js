$(document).ready(function() {

//episodios
var api= 'https://api.betaseries.com/shows/episodes?v=3.0&thetvdb_id=102261&season=1&key=abe36347d6ca';
//series similar
var apisimi="https://api.betaseries.com/shows/similars?v=3.0&thetvdb_id=102261&key=abe36347d6ca";
//ver serie
var apiserie= 'https://api.betaseries.com/shows/display?v=3.0&thetvdb_id=80327&key=abe36347d6ca';
//buscar todo
var search="https://api.betaseries.com/search/all?v=3.0&query=sword+art+online&key=abe36347d6ca";
var e;

$("#1").on("click",function(event) {
  $("#episode-list").removeClass("none");
  $("#other-temps").addClass("none");
  $("#recomend").addClass("none");
});

$("#2").on("click",function(event) {
  $("#episode-list").addClass("none");
  $("#other-temps").removeClass("none");
  $("#recomend").addClass("none");
});
$("#3").on("click",function(event) {
  $("#episode-list").addClass("none");
  $("#other-temps").addClass("none");
  $("#recomend").removeClass("none");
});

$.ajax({
        url: api,
        dataType: 'json',
        success: function(data){
          fillEpisodes(data.episodes);
        }
});

$.ajax({
        url: apiserie,
        dataType: 'json',
        success: function(data){
          e=data;
        }
});

function fillEpisodes(e) {
  for (var i = 0; i < e.length; i++) {
      $("#episode-list").append('<article class="episode-li"><img src="'+'https://api.betaseries.com/pictures/episodes?v=2.4&id='+e[i].id+'&=&key=abe36347d6ca'+'" alt=""><button class="fa fa-square-o" type="button" name="button"></button><h2 class="name">'+e[i].title+'</h2></article>')
  }
  $(".fa-square-o").on("click", function(event) {
    $(this).toggleClass("fa-check-square-o");
    $(this).toggleClass("fa-square-o");

  });
}

/*  $.ajax({
    url:api,
    data:{
      'X-BetaSeries-Key': 'abe36347d6ca'
    },
    type:'GET',
    dataType:'JSON',
    success : function(json) {
    console.log(json);
    }


    <!--<div class="geners">
      <div class="state gener yellow"><span>Action</span></div>
      <div class="state gener green"><span>Adventure</span></div>
      <div class="state gener purple"><span>Drama</span></div>
    </div>-->

  });*/
});
