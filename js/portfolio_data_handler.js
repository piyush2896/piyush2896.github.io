$(document).ready(function() {
    function loadJSON(callback) {
  
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'data/portfolio_data.json', true);
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);
     }
  
     function convertToHtml(json_obj, choice){
        var str = ["<div class='row project'>"]
        if (choice == 1){
            str.push("<div class='project-img col-xs-4'><a target='_blank'href='");
            str.push(json_obj.link);
            str.push("'><img class='img-responsive' src='img/projects/");
            str.push(json_obj.project_img);
            str.push("'></a></div><div class='col-xs-8 project-content'><div class='heading col-xs-12'><h3>");
            str.push(json_obj.project_name);
            str.push("</h3></div><div class='project-explanation col-xs-12'>");
            str.push(json_obj.project_desc);
            str.push("</div></div>");
        }else{
            str.push("<div class='col-xs-8 project-content'><div class='heading col-xs-12'><h3>");
            str.push(json_obj.project_name);
            str.push("</h3></div><div class='project-explanation col-xs-12'>");
            str.push(json_obj.project_desc);
            str.push("</div></div>");
            str.push("<div class='project-img col-xs-4'><a target='_blank'href='");
            str.push(json_obj.link);
            str.push("'><img class='img-responsive' src='img/projects/");
            str.push(json_obj.project_img);
            str.push("'></a></div>");
        }
        str.push("</div>");
        return str.join("");
      }
  
     function init() {
     loadJSON(function(response) {
      // Parse JSON string into object
        var actual_JSON = JSON.parse(response);

        var res = []
        $.each(actual_JSON, function(index, value){
            if(index % 2 == 0){
                res.push(convertToHtml(value, 1));
            }else{
                res.push(convertToHtml(value, 2));
            }
            console.log(index, value);
        });
  
        $('#projects').html(res.join(""));
     });
    }
  
    init();
  
  });
  