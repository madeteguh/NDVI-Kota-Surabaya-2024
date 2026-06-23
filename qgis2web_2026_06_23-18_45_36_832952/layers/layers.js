var wms_layers = [];


        var lyr_Googlesatelitlitlit_0 = new ol.layer.Tile({
            'title': 'Google satelitlitlit',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_Clippedmask_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (mask)<br />\
    <img src="styles/legend/Clippedmask_1_0.png" /> 1,0000<br />\
    <img src="styles/legend/Clippedmask_1_1.png" /> 2,0000<br />\
    <img src="styles/legend/Clippedmask_1_2.png" /> 3,0000<br />\
    <img src="styles/legend/Clippedmask_1_3.png" /> 4,0000<br />\
    <img src="styles/legend/Clippedmask_1_4.png" /> 5,0000<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Clippedmask_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12533700.000000, -820554.191233, 12562000.000000, -802811.475911]
        })
    });

lyr_Googlesatelitlitlit_0.setVisible(true);lyr_Clippedmask_1.setVisible(true);
var layersList = [lyr_Googlesatelitlitlit_0,lyr_Clippedmask_1];
