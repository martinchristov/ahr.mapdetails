var bar, stateTitle, stateChosen=false;

function initDisparityMap () {
	$.get(uri.mapapi+"?compareName="+compareName,function(d){
		for(var i=0; i< d.length; i++){
			for(var s in mapData2){
				if(mapData2[s].shortname==d[i].StateCode){
					mapData2[s].color_map = d[i].Color;
					mapData2[s].perc = d[i].Value;
					break;
				}
			}
		}
		svgMap2.init($("#usamap"),mapData2,pathData);


//set the current state
		var i=0;
		for(var s in mapData2){
			if(mapData2[s].shortname==selectedState){
				i=s;
				break;
			}
		}
		if(mapData2[i]!=undefined)
		setTimeout(function(){
			angular.element($(".metric-type")).scope().changeState(mapData2[i].shortname)
	                    animateBar(mapData2[i].perc/100);
	                    stateTitle.animate({opacity:0},130,function(){
	                        stateTitle.html(mapData2[i].name).animate({opacity:1},130)
	                    })
	                    if(!stateChosen){
	                        stateChosen=true;
	                        stateTitle.next().css({display:"block",opacity:0}).animate({opacity:1},300)
	                    }
		},300);
	})
    
	bar = $("#ppl-mask-path").get(0);
	subar = $(".subar .met")
	stateTitle=$('#state-title')
	
	
}


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
	// mapapi:"http://staging.americashealthrankings.org/JsonService/GetDisparitiesVisualizationMap", //?compareName=smoking
	mapapi:"staticapi/GetDisparitiesVisualizationMap.json",
	// api:"http://staging.americashealthrankings.org/JsonService/GetDisparitiesVisualization" //?compareName=smoking&stateCode=MN
	api:"staticapi/GetDisparitiesVisualization.json"
}

function MainCtrl($scope,$http){
	
	$scope.changeState= function(state){
		$scope.$apply(function(){
			$http.get(uri.api+"?compareName="+compareName+"&stateCode="+state).success(function(d){
				trunkData();
				for(var i=0;i<d.disparities.length;i++){
					if(d.disparities[i].Value=="")d.disparities[i].Value=0;
					else d.disparities[i].Value = Number(d.disparities[i].Value);
					$scope.data[d.disparities[i].DisparityCategoryName].push(d.disparities[i])
				}
			})
		})
	}
	$scope.setWidth = function(d){
		return {width: ((d.Value/100)*280+40)}
	}
	$scope.setLeft = function(d){
		return {left: (d.Value/100)*280-20}
	}
	$scope.setWidth2 = function(d){
		return {width: (d.Affected/d.Population)*300+20}
	}
	$scope.setLeft2 = function(d){
		return {left: (d.Affected/d.Population)*300-40}
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