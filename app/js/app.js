var bar, stateTitle, stateChosen=false;
$Doc.ready(function () {
	$.get(uri.mapapi+"?compareName="+compareName,function(d){
		for(var i=0; i< d.length; i++){
			for(var s in mapData){
				if(mapData[s].shortname==d[i].StateCode){
					mapData[s].color_map = d[i].Color;
					mapData[s].perc = d[i].Value;
					break;
				}
			}
		}
		svgMap.init($("#usamap"),mapData,pathData);
	})
    
	bar = $("#ppl-mask-path").get(0);
	subar = $(".subar .met")
	stateTitle=$('#state-title')
    // $.get("http://development.americashealthrankings.org/JsonService/GetDisparitiesVisualizationMap?compareName=smoking")
    // $.get("img/peoples.txt",function(d){
    // 	var c = Raphael($(".affected .bar").get(0),650,60);
    // 	var mask = c.rect(0,0,300,100);
    // 	mask.attr({id:"mask"})

    // 	c.path(d).attr({fill:"#cbc6c6", stroke:"none", mask:"url(#mask)", transform:"t50,50"})
    // })
    
})

var anint=0,curx=-805,totalsteps = 15,prevperc=0,curperc=0;
var $subar;
function animateBar(perc){
	//-805:0%     
	//-199: 100%
	//606 diff
	clearInterval(anint);
	var endx = -805+ perc*606;
	anint = setInterval(inter,20);

	var stepx = (endx-curx)/totalsteps;
	var steps = 0;

	var percstep = (perc*100-curperc)/totalsteps;
	// prevperc = perc;
	function inter(){
		curx+=stepx;
		bar.setAttribute("transform","matrix(1,0,0,1,"+curx+",-10)")
		steps++;
		if(steps==totalsteps)clearInterval(anint);
		
		curperc +=percstep;
		subar.html(Math.round(curperc)+"%")
	}
	// subar.find('.fill').css({width:(perc*100)+"%"})
	subar.css({left:perc*606-40})
}


var uri = {
	mapapi:"http://development.americashealthrankings.org/JsonService/GetDisparitiesVisualizationMap", //?compareName=smoking
	api:"http://development.americashealthrankings.org/JsonService/GetDisparitiesVisualization" //?compareName=smoking&stateCode=MN
}

function MainCtrl($scope,$http){
	
	$scope.changeState= function(state){
		$scope.$apply(function(){
			$http.get(uri.api+"?compareName="+compareName+"&stateCode="+state).success(function(d){
				trunkData();
				for(var i=0;i<d.disparities.length;i++){
					$scope.data[d.disparities[i].DisparityCategoryName].push(d.disparities[i])
				}
			})
		})
	}
	$scope.chooseMetric = function(metric){
		$scope.currentMetric = metric;
	}
	function trunkData(){
		$scope.data = {
			"Age":[],
			"Race/Ethnicity":[],
			"Gender":[],
			"Education":[],
			"Income":[],
			"Urbanicity":[]
		}
		// $scope.currentMetric = "Age";
	}
	trunkData();
$scope.currentMetric = "Age";
	$scope.Ks = function(num){
		num = num / 1000;
		num = String(num);
		var spl = num.split(".");
		if(spl.length>1){
			if(spl[1].length>1){
				num = spl[0]+"."+spl[1][0];
			}
		}
		return num;
	}
	
}