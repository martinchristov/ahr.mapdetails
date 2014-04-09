var $Doc = $(document), $Win = $(window);

var isie = false;

var svgMap2 = {
    initHasRun: false,
    collection:[],
    initDefault: function () { svgMap2.init($("#usa-map"), mapData2, pathData); },
    init: function (where, mapData2, pathData) {
        var canvas = Raphael(where.get(0), mapSettings.width, mapSettings.height);
        isie = isIE();
        if (isie) {
            var rect = canvas.rect(0, 0, mapSettings.width, mapSettings.height).attr({ fill: "#333", stroke: "none", opacity: 0 });
            rect.mouseover(svgMap2.hoverRect)
        }
        for (var i in pathData) {
            function init(i) {
                var svg = canvas.path(pathData[i].outline.path).attr({ fill: mapData2[i].color_map, stroke: "white", "stroke-width": 1.01, cursor: "pointer" });
                var state = canvas.set();
                state.push(svg);
                var text = canvas.text(pathData[i].outline.label.x, pathData[i].outline.label.y, mapData2[i].shortname).attr({ fill: "#fff", "font-weight": "bold", "font-size": "12px", cursor: "pointer" });
                state.push(text);

                state[0].data("name",mapData2[i].shortname);
                svgMap2.collection.push(state);

                mapData2[i].svg = svg;

                var shad = null;
                state.mouseover(function () {
                    if (shad == null) {
                        shad = svg.glow({ "width": mapSettings.shadow.width, "opacity": mapSettings.shadow.opacity, "color": mapSettings.shadow.color }).transform("t" + mapSettings.shadow.x + "," + mapSettings.shadow.y);
                        state.push(shad);
                    }
                    else { shad.stop().attr({ opacity: mapSettings.shadow.opacity }); }
                    
                    shad.toFront()
                    svg.toFront(); 
                    text.toFront();

                    // fill: mapData2[i].color_map_over,
                    // svg.animate({ stroke: mapSettings.borderColorOver }, mapSettings.animSpeed);


                    $Doc.bind('mousemove', svgMap2.tip.follow).mousemove();
                    var comments = ''; 
                    // if (mapData2[i].comment != "") comments = '<div class="comments">' + mapData2[i].comment + '</div>';
                    comments+='<div class="comments">'+mapData2[i].perc+'%</div>';
                    svgMap2.tip.div.html('<div class="title">' + mapData2[i].name + '</div>' + comments).css({ borderColor: mapData2[i].color_map, display: "block", opacity: 1 }).find('.title').css({ color: mapData2[i].color_map });
                    if (isie) {
                        if (svgMap2.hovered.svg !== svg) svgMap2.hoverRect();
                        svgMap2.hovered.svg = svg;
                        svgMap2.hovered.shad = shad;
                    }

                })

                if(mapData2[i].shortname==selectedState){
                    if (shad == null) {
                        shad = svg.glow({ "width": mapSettings.shadow.width, "opacity": mapSettings.shadow.opacity, "color": mapSettings.shadow.color }).transform("t" + mapSettings.shadow.x + "," + mapSettings.shadow.y);
                        state.push(shad);
                    }
                    else { shad.stop().attr({ opacity: mapSettings.shadow.opacity }); }
                    shad.toFront()
                    svg.toFront(); 
                    text.toFront();
                }
                
                state.mouseout(function () {
                    //fill: mapData2[i].color_map,
                    if(mapData2[i].shortname!=selectedState){
                        svg.stop().animate({ stroke: mapSettings.borderColor }, mapSettings.animSpeed);
                        shad.stop().animate({ opacity: 0 }, mapSettings.animSpeed);
                    }
                    

                    $Doc.unbind('mousemove', svgMap2.tip.follow);
                    svgMap2.tip.div.css({ opacity: 0, display: "none" });
                });

                
                state.click(function () {
                    angular.element($(".metric-type")).scope().changeState(mapData2[i].shortname)
                    animateBar(mapData2[i].perc/100);
                    stateTitle.animate({opacity:0},130,function(){
                        stateTitle.html(mapData2[i].name).animate({opacity:1},130)
                    })
                    if(!stateChosen){
                        stateChosen=true;
                        stateTitle.next().css({display:"block",opacity:0}).animate({opacity:1},300)
                    }
                    selectedState = mapData2[i].shortname;

                    for(var d in svgMap2.collection){
                        if(svgMap2.collection[d][0].data('name')!=mapData2[i].shortname){
                            try{svgMap2.collection[d][2].stop().animate({ opacity: 0 }, mapSettings.animSpeed);}catch(e){}
                        }
                    }

                    // state[0].stop().animate({ opacity:1 }, mapSettings.animSpeed);
                    // state[1].stop().animate({opacity:1},mapSettings.animSpeed);
                    // try{state[2].stop().animate({ opacity: mapSettings.shadow.opacity }, mapSettings.animSpeed);}catch(e){}
                })
                if (isie) {
                    state.mousedown(function () {
                        if (mapData2[i].link != null && mapData2[i].link != "") {
                            if (typeof mapData2[i].link != "function") {
                                window.location.href = mapData2[i].link;
                            }
                            else mapData2[i].link(mapData2[i]);
                        }
                    })
                }
            }; 
            init(i);
        }
        //init tip
        $("body").append('<div id="svgmap-tip"></div>');
        svgMap2.tip.div = $("#svgmap-tip").css({ display: "block", opacity: 0 });
        this.initHasRun = true;
    },
    update: function () {
        if (!svgMap2.initHasRun)
            svgMap2.initDefault();
        for (var i in mapData2) {
            mapData2[i].svg.stop().animate({ fill: mapData2[i].color_map }, 600)
        }
    },
    tip: {
        div: null,
        follow: function (e) {
            svgMap2.tip.div.css({ top: e.pageY + 15, left: e.pageX + 10 })
        }
    },
    hovered: { svg: null, shad: null },
    hoverRect: function () {
        if (svgMap2.hovered.svg != null) {
            svgMap2.hovered.svg.stop().animate({ stroke: mapSettings.borderColor }, mapSettings.animSpeed);
            svgMap2.hovered.shad.stop().animate({ opacity: 0 }, mapSettings.animSpeed);
            svgMap2.hovered.svg = null;
            svgMap2.hovered.shad = null;
            $Doc.unbind('mousemove', svgMap2.tip.follow)
            svgMap2.tip.div.css({ opacity: 0, display: "none" });
        }
    }
}

function isIE () {
    if(navigator.appName=="Netscape" || navigator.appName=="Microsoft Internet Explorer"){
        return true;
    }
    else return false;
}