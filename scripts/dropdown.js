function arrayRemove(arr, value) {

    return arr.filter(function (ele) {
        return ele != value;
    });

}


var e = document.getElementById("mcdnutrients_dropdown");
var strUser = e.options[e.selectedIndex].text;
console.log(strUser)
function nutritionChange() {
    var e = document.getElementById("mcdnutrients_dropdown");
    var strUser = e.options[e.selectedIndex].text;
    document.getElementById("textholder_nutrient").innerHTML = strUser;
    var strValue = e.options[e.selectedIndex].value.split('_')[1];
    console.log(strValue)
    ids = ['199dc3b3-7e9d-455d-9106-179622aa9710', '8fc516b5-9ce6-4ca3-a384-913f22b82b2c', '2b13568c-5a02-4ef6-8529-a1c6453aaecc', '6933c0ee-7a14-45f4-93cb-266811f7b953', 'a0d4822a-7942-4ac7-9837-66e12d537a83', '16f8d219-edef-420a-b21a-6147f439c20e']
    ids = arrayRemove(ids, strValue);
    console.log(ids)
    function draw_graph(id, nutrient) {
        window.PLOTLYENV = { 'BASE_URL': 'https://plot.ly' };

        var gd = document.getElementById(id)
        var resizeDebounce = null;

        function resizePlot() {
            var bb = gd.getBoundingClientRect();
            Plotly.relayout(gd, {
                width: bb.width,
                height: bb.height
            });
        }


        window.addEventListener('resize', function () {
            if (resizeDebounce) {
                window.clearTimeout(resizeDebounce);
            }
            resizeDebounce = window.setTimeout(resizePlot, 100);
        });

        if (nutrient == 'carbohydrate') {
            Plotly.plot(gd, {
                data: carbohydrate.data,
                layout: carbohydrate.layout,
                frames: carbohydrate.frames,
                config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
            });

        }
        if (nutrient == 'calories') {
            Plotly.plot(gd, {
                data: calories.data,
                layout: calories.layout,
                frames: calories.frames,
                config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
            });

        }
        if (nutrient == 'protein') {
            Plotly.plot(gd, {
                data: protein.data,
                layout: protein.layout,
                frames: protein.frames,
                config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
            });
        }
        if (nutrient == 'fats') {
            Plotly.plot(gd, {
                data: fats.data,
                layout: fats.layout,
                frames: fats.frames,
                config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
            });
        }
        if (nutrient == 'sugar') {
            Plotly.plot(gd, {
                data: sugar.data,
                layout: sugar.layout,
                frames: sugar.frames,
                config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
            });
        }


    }

    if (strUser == 'Carbohydrate') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    if (strUser == 'Calcium') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    if (strUser == 'Calories') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    if (strUser == 'Protein') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    if (strUser == 'Fats') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    if (strUser == 'Sugar') {
        for (i of ids) {
            var elem = document.getElementById(i)
            if (!elem.hasAttribute('data')) {
                elem.setAttribute('data', 'no')
                elem.style.display = "none"

                //function to draw plotly graph
            }
            else {
                var elem = document.getElementById(strValue)
                elem.style.display = "block"
                elem.removeAttribute('data')
                draw_graph(strValue, strUser.toLowerCase())
            }
        }
        ids.push(strValue);
    }
    console.log(strUser)
}




(function () {
    window.PLOTLYENV = { 'BASE_URL': 'https://plot.ly' };

    var gd = document.getElementById('199dc3b3-7e9d-455d-9106-179622aa9710')
    var resizeDebounce = null;

    function resizePlot() {
        var bb = gd.getBoundingClientRect();
        Plotly.relayout(gd, {
            width: bb.width,
            height: bb.height
        });
    }


    window.addEventListener('resize', function () {
        if (resizeDebounce) {
            window.clearTimeout(resizeDebounce);
        }
        resizeDebounce = window.setTimeout(resizePlot, 100);
    });



    Plotly.plot(gd, {
        data: calcium.data,
        layout: calcium.layout,
        frames: calcium.frames,
        config: { "showLink": false, "linkText": "Export to plot.ly", "mapboxAccessToken": "pk.eyJ1IjoiY2hyaWRkeXAiLCJhIjoiY2lxMnVvdm5iMDA4dnhsbTQ5aHJzcGs0MyJ9.X9o_rzNLNesDxdra4neC_A" }
    });

}());