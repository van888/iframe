const options = {
    // Required: API key
    key: 'MX80JBQCIix1NjcKRqqyjUXvFhJzgKOK', // REPLACE WITH YOUR KEY !!!

    // Put additional console output
    verbose: true,

    // Optional: Initial state of the map
    lat: 40.68,
    lon: -73.98,
    zoom: 11,
};

// Initialize Windy API
windyInit(options, windyAPI => {
    // windyAPI is ready, and contain 'map', 'store',
    // 'picker' and other usefull stuff

    const { map } = windyAPI;
    // .map is instance of Leaflet map

    L.popup()
        .setLatLng([40.68, -73.98])
        .setContent('Hello World')
        .openOn(map);
});
