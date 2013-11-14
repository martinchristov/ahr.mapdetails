var $Doc = $(document), $Win = $(window);

var isie = false;

var svgMap = {
    initHasRun: false,
    initDefault: function () { svgMap.init($("#usa-map"), mapData, pathData); },
    init: function (where, mapData, pathData) {
        var canvas = Raphael(where.get(0), mapSettings.width, mapSettings.height);
        if (isie) {
            var rect = canvas.rect(0, 0, mapSettings.width, mapSettings.height).attr({ fill: "#333", stroke: "none", opacity: 0 });
            rect.mouseover(svgMap.hoverRect)
        }
        for (var i in pathData) {
            function init(i) {
                var svg = canvas.path(pathData[i].outline.path).attr({ fill: mapData[i].color_map, stroke: "white", "stroke-width": 1.01, cursor: "pointer" });
                var state = canvas.set();
                state.push(svg);
                var text = canvas.text(pathData[i].outline.label.x, pathData[i].outline.label.y, mapData[i].shortname).attr({ fill: "#fff", "font-weight": "bold", "font-size": "12px", cursor: "pointer" });
                state.push(text);

                mapData[i].svg = svg;

                var shad = null;
                state.mouseover(function () {
                    if (shad == null) shad = svg.glow({ "width": mapSettings.shadow.width, "opacity": mapSettings.shadow.opacity, "color": mapSettings.shadow.color }).transform("t" + mapSettings.shadow.x + "," + mapSettings.shadow.y);
                    else { shad.stop().attr({ opacity: mapSettings.shadow.opacity }); }
                    shad.toFront()
                    svg.toFront(); text.toFront();
                    fill: mapData[i].color_map_over,
                    svg.animate({ stroke: mapSettings.borderColorOver }, mapSettings.animSpeed);


                    $Doc.bind('mousemove', svgMap.tip.follow).mousemove();
                    var comments = ''; if (mapData[i].comment != "") comments = '<div class="comments">' + mapData[i].comment + '</div>';
                    svgMap.tip.div.html('<div class="title">' + mapData[i].name + '</div>' + comments).css({ borderColor: mapData[i].color_map, display: "block", opacity: 1 }).find('.title').css({ color: mapData[i].color_map });
                    if (isie) {
                        if (svgMap.hovered.svg !== svg) svgMap.hoverRect();
                        svgMap.hovered.svg = svg;
                        svgMap.hovered.shad = shad;
                    }

                })
                state.mouseout(function () {
                    //fill: mapData[i].color_map,
                    svg.stop().animate({ stroke: mapSettings.borderColor }, mapSettings.animSpeed);
                    shad.stop().animate({ opacity: 0 }, mapSettings.animSpeed);

                    $Doc.unbind('mousemove', svgMap.tip.follow);
                    svgMap.tip.div.css({ opacity: 0, display: "none" });
                });

                state.click(function () {
                    animateBar(Math.random())
                    // if (mapData[i].link != null && mapData[i].link != "") {
                    //     if (typeof mapData[i].link != "function") {
                    //         window.location.href = mapData[i].link;
                    //     }
                    //     else mapData[i].link(mapData[i]);
                    // }
                })
                if (isie) {
                    state.mousedown(function () {
                        if (mapData[i].link != null && mapData[i].link != "") {
                            if (typeof mapData[i].link != "function") {
                                window.location.href = mapData[i].link;
                            }
                            else mapData[i].link(mapData[i]);
                        }
                    })
                }
            }; init(i)
        }
        //init tip
        $("body").append('<div id="svgmap-tip"></div>');
        svgMap.tip.div = $("#svgmap-tip").css({ display: "block", opacity: 0 });
        this.initHasRun = true;
    },
    update: function () {
        if (!svgMap.initHasRun)
            svgMap.initDefault();
        for (var i in mapData) {
            mapData[i].svg.stop().animate({ fill: mapData[i].color_map }, 600)
        }
    },
    tip: {
        div: null,
        follow: function (e) {
            svgMap.tip.div.css({ top: e.pageY + 15, left: e.pageX + 10 })
        }
    },
    hovered: { svg: null, shad: null },
    hoverRect: function () {
        if (svgMap.hovered.svg != null) {
            svgMap.hovered.svg.stop().animate({ stroke: mapSettings.borderColor }, mapSettings.animSpeed);
            svgMap.hovered.shad.stop().animate({ opacity: 0 }, mapSettings.animSpeed);
            svgMap.hovered.svg = null;
            svgMap.hovered.shad = null;
            $Doc.unbind('mousemove', svgMap.tip.follow)
            svgMap.tip.div.css({ opacity: 0, display: "none" });
        }
    }
}