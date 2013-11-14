var bar;
$Doc.ready(function () {
	$.get(uri.mapapi,function(d){
		for(var i=0; i< d.length; i++){
			for(var s in mapData){
				if(mapData[s].shortname==d[i].StateCode){
					mapData[s].color_map = d[i].Color;
					break;
				}
			}
		}
		svgMap.init($("#usamap"),mapData,pathData);
	})
    
	bar = $("#ppl-mask-path").get(0);
	subar = $(".subar")
	
    // $.get("http://development.americashealthrankings.org/JsonService/GetDisparitiesVisualizationMap?compareName=smoking")
    // $.get("img/peoples.txt",function(d){
    // 	var c = Raphael($(".affected .bar").get(0),650,60);
    // 	var mask = c.rect(0,0,300,100);
    // 	mask.attr({id:"mask"})

    // 	c.path(d).attr({fill:"#cbc6c6", stroke:"none", mask:"url(#mask)", transform:"t50,50"})
    // })
    
})

var anint=0,curx=-881,totalsteps = 50;
var $subar;
function animateBar(perc){
	//-881:0%     
	//-249: 100%
	//632 diff
	clearInterval(anint);
	var endx = -881+ perc*632;
	anint = setInterval(inter,10);
	var stepx = (endx-curx)/totalsteps;
	var steps = 0;
	function inter(){
		curx+=stepx;
		bar.setAttribute("transform","matrix(1,0,0,1,"+curx+",-10)")
		steps++;
		if(steps==totalsteps)clearInterval(anint)
	}
	subar.find('.fill').css({width:(perc*100)+"%"})
		
}

var uri = {
	mapapi:"http://development.americashealthrankings.org/JsonService/GetDisparitiesVisualizationMap?compareName=smoking", //?compareName=smoking
	api:"staticapi/GetDisparitiesVisualization.json" //?compareName=smoking&stateCode=MN
}