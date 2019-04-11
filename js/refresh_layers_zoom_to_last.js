lizMap.events.on({
    'uicreated': function(e) {
        rlayers = [
            'layer_view', //Create view in postgis - Exemple : SELECT '1'::integer AS gid, * FROM layer ORDER BY time DESC LIMIT 1
            'layer'
        ];

        // Refresh interval in milliseconds
        var refreshInterval = 5000;

        // ****
        // Do not edit below
        // ****

        // Get layers by name
        var tlayers = [];
        for(var i in rlayers){
            var olayers = lizMap.map.getLayersByName(rlayers[i]);
            if( olayers.length > 0 ){
                for(var l in olayers){
                    var layer = olayers[l];
                    tlayers.push(layer);
                }
            }
        }

        // Refresh all given layers
        function refreshLayers() {
            for( var l in tlayers ){
                if( tlayers[l].visibility ){
                    tlayers[l].redraw();

                }
            }
            //Refresh data
            var config = lizMap.config;
            var layerConfig = config.layers['layer_view'];
            layerConfig['features'] = {};
            //Zoom to
            lizMap.zoomToFeature('layer_view',1,'zoom');
        }

        // Set timer to refresh layers every N milliseconds
        var tid = setInterval(refreshLayers, refreshInterval);

    }

});
