// geojsonWorker.js
self.addEventListener('message', async (e) => {
    const url = e.data;
    try {
        const response = await fetch(url);
        const geojson = await response.json();
        self.postMessage({ status: 'success', data: geojson, url: url });
    } catch (error) {
        self.postMessage({ status: 'error', error: error.message, url: url });
    }
});
