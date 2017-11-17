(function () {
    var r = new RegExp("(^|(.*?\\/))(include-classic\.js)(\\?|$)"),
        s = document.getElementsByTagName('script'), targetScript;
    for (var i = 0; i < s.length; i++) {
        var src = s[i].getAttribute('src');
        if (src) {
            var m = src.match(r);
            if (m) {
                targetScript = s[i];
                break;
            }
        }
    }

    function inputScript(url) {
        var script = '<script type="text/javascript" src="' + url + '"><' + '/script>';
        document.writeln(script);
    }

    function inputCSS(url) {
        var css = '<link rel="stylesheet" href="' + url + '">';
        document.writeln(css);
    }

    function inArray(arr, item) {
        for (i in arr) {
            if (arr[i] == item) {
                return true;
            }
        }
        return false;
    }

    //加载类库资源文件
    function load() {
        var includes = (targetScript.getAttribute('include') || "").split(",");
        var excludes = (targetScript.getAttribute('exclude') || "").split(",");
        if (!inArray(excludes, 'iclient8c')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/libs/SuperMap.Include.js");
        }
        if (inArray(includes, 'mapv')) {
            inputScript("http://mapv.baidu.com/build/mapv.min.js");
        }
        if (inArray(includes, 'echarts')) {
            inputScript("http://cdn.bootcss.com/echarts/3.6.2/echarts.min.js");
        }
        if (!inArray(excludes, 'iclient-classic')) {
            inputScript("../../dist/iclient-classic.min.js");
        }
        if (inArray(includes, 'tianditu')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/layer/Tianditu.js");
        }
        if (inArray(includes, 'echarts-all')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/echarts-all.js");
        }
        if (inArray(includes, 'baidu')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/layer/Baidu.js");
        }
        if (inArray(includes, 'OSMBuildings-SuperMap')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/OSMBuildings-SuperMap.js");
        }
        if (inArray(includes, 'D3WindMap')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/D3WindMap.js");
        }
        if (inArray(includes, 'd3')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/d3.v3.min.js");
        }
        if (inArray(includes, 'three')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/third-party/Three/ThreeWebGL.js");
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/third-party/Three/ThreeExtras.js");
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/third-party/Three/RequestAnimationFrame.js");
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/third-party/Three/Detector.js");
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/third-party/globe.js");
        }
        if (inArray(includes, 'MapToImg')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/MapToImg.js");
        }
        if (inArray(includes, 'Bar')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Bar.js");
        }
        if (inArray(includes, 'Bar3D')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Bar3D.js");
        }
        if (inArray(includes, 'Circle')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Circle.js");
        }
        if (inArray(includes, 'Line')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Line.js");
        }
        if (inArray(includes, 'Pie')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Pie.js");
        }
        if (inArray(includes, 'Point')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Point.js");
        }
        if (inArray(includes, 'Ring')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/graph/Ring.js");
        }
        if (inArray(includes, 'style')) {
            inputCSS("http://iclient.supermap.io/libs/iclient8c/theme/default/style.css");
        }
        if (inArray(includes, 'sm-doc')) {
            inputCSS("http://iclient.supermap.io/libs/iclient8c/examples/css/sm-doc.css");
        }
        if (inArray(includes, 'LargeFormatPrints')) {
            inputScript("http://iclient.supermap.io/libs/iclient8c/examples/js/LargeFormatPrints.js");
        }

    }

    load();
    window.isLocal = false;
    window.server = "http://localhost:8090";
})();
