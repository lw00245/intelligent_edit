module.exports = [
"[project]/node_modules/tga-js/dist/esm/tga.js [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/node_modules_tga-js_dist_esm_tga_05~t3xk.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/node_modules/tga-js/dist/esm/tga.js [app-route] (ecmascript)");
    });
});
}),
"[project]/app/api/quantilized-image/route.ts [app-route] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.resolve().then(() => {
        return parentImport("[project]/app/api/quantilized-image/route.ts [app-route] (ecmascript)");
    });
});
}),
];