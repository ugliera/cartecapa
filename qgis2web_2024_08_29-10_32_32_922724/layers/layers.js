var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_deptbdcr76_1 = new ol.format.GeoJSON();
var features_deptbdcr76_1 = format_deptbdcr76_1.readFeatures(json_deptbdcr76_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr76_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr76_1.addFeatures(features_deptbdcr76_1);
var lyr_deptbdcr76_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr76_1, 
                style: style_deptbdcr76_1,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr76_1.png" /> dept bdc r76 '
            });
var format_deptbdcr75_2 = new ol.format.GeoJSON();
var features_deptbdcr75_2 = format_deptbdcr75_2.readFeatures(json_deptbdcr75_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_deptbdcr75_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_deptbdcr75_2.addFeatures(features_deptbdcr75_2);
var lyr_deptbdcr75_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_deptbdcr75_2, 
                style: style_deptbdcr75_2,
                interactive: true,
                title: '<img src="styles/legend/deptbdcr75_2.png" /> dept bdc r75 '
            });
var format_capa_faf_2024_3 = new ol.format.GeoJSON();
var features_capa_faf_2024_3 = format_capa_faf_2024_3.readFeatures(json_capa_faf_2024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capa_faf_2024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capa_faf_2024_3.addFeatures(features_capa_faf_2024_3);
var lyr_capa_faf_2024_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capa_faf_2024_3, 
                style: style_capa_faf_2024_3,
                interactive: true,
                title: '<img src="styles/legend/capa_faf_2024_3.png" /> capa_faf_2024'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_deptbdcr76_1.setVisible(true);lyr_deptbdcr75_2.setVisible(true);lyr_capa_faf_2024_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_deptbdcr76_1,lyr_deptbdcr75_2,lyr_capa_faf_2024_3];
lyr_deptbdcr76_1.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_deptbdcr75_2.set('fieldAliases', {'NOM_DEP': 'NOM_DEP', 'INSEE_DEP': 'INSEE_DEP', 'x': 'x', 'y': 'y', });
lyr_capa_faf_2024_3.set('fieldAliases', {'NOM': 'NOM', 'UAI_ETBLT': 'UAI_ETBLT', 'TYP_EXA_1': 'TYP_EXA_1', 'TYP_EXA_2': 'TYP_EXA_2', 'TYP_EXA_3': 'TYP_EXA_3', 'paddest_PA': 'paddest_PA', });
lyr_deptbdcr76_1.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': '', 'y': '', });
lyr_deptbdcr75_2.set('fieldImages', {'NOM_DEP': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_capa_faf_2024_3.set('fieldImages', {'NOM': 'TextEdit', 'UAI_ETBLT': 'TextEdit', 'TYP_EXA_1': 'TextEdit', 'TYP_EXA_2': 'TextEdit', 'TYP_EXA_3': 'TextEdit', 'paddest_PA': 'TextEdit', });
lyr_deptbdcr76_1.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'header label', 'x': 'no label', 'y': 'no label', });
lyr_deptbdcr75_2.set('fieldLabels', {'NOM_DEP': 'inline label', 'INSEE_DEP': 'no label', 'x': 'header label', 'y': 'inline label', });
lyr_capa_faf_2024_3.set('fieldLabels', {'NOM': 'no label', 'UAI_ETBLT': 'no label', 'TYP_EXA_1': 'no label', 'TYP_EXA_2': 'no label', 'TYP_EXA_3': 'no label', 'paddest_PA': 'no label', });
lyr_capa_faf_2024_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});