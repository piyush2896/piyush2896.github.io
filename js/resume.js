$(document).ready(function() {
  function loadJSON(callback) {

      var xobj = new XMLHttpRequest();
          xobj.overrideMimeType("application/json");
      xobj.open('GET', 'resume_data.json', true); // Replace 'my_data' with the path to your file
      xobj.onreadystatechange = function () {
            if (xobj.readyState == 4 && xobj.status == "200") {
              // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
              callback(xobj.responseText);
            }
      };
      xobj.send(null);
   }

   function convertToHtml(json_obj){
    if(json_obj.displayHead == 'false'){
      var str = [];
      $.each(json_obj.detail, function(index, val){
        str.push("<li><div class='detail'><article>" + val + "</article></div></li>");
      });

      return str.join("");
    }

    var str2 = [];
    $.each(json_obj.detail, function(index, val){
      $.each(val, function(key, value){
        if(key == "head"){
          str2.push("<li><div class='detail'><h3>"+value+"</h3>");
        }

        if(key == "sub-head"){
          str2.push("<p>"+value+"</h3>");
        }

        if(key == "article"){
          str2.push("<article>"+value+"</article></div></li>");
        }
      });
    });

    return str2.join("");
   }

   function init() {
   loadJSON(function(response) {
    // Parse JSON string into object
      var actual_JSON = JSON.parse(response);

      $('#education').html(convertToHtml(actual_JSON.Education));
      $('#experience').html(convertToHtml(actual_JSON.Experience));
      $('#talks').html(convertToHtml(actual_JSON.Talks));
   });
  }

  init();

});
