var params = {};

function getParameters() {
  var searchString = window.location.search.substring(1),
      params = searchString.split("&"),
      hash = {};

  if (searchString == "") return {};
  for (var i = 0; i < params.length; i++) {
    var val = params[i].split("=");
    hash[unescape(val[0])] = unescape(val[1]);
  }
  return hash;
}

$( document ).ready(function() {
  console.log("working");
	params = getParameters()
	console.log(params);
    
    var newcode = "  <tr><td>" + params.AIHits + "</td><td>" + params.AIScore + "</td><td>" + params.WallHits + " </td><td>" + params.playerHits + "</td><td>" + params.playerScore + " </td></tr>"
    
    $("table").append(newcode);
	

});