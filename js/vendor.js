$(document).ready(function() {
var api= 'https://api.betaseries.com/shows/search?v=2.4&title=noragami&key=abe36347d6ca';

$.ajax({
        url: api,
        dataType: 'json',
        success: function(data){
            console.log(data);
            //process the JSON data etc
        }
});

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
