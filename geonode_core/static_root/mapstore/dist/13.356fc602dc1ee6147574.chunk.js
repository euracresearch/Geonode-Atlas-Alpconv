(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"./js/previewPlugins.js":function(e,n,i){var l=i("./node_modules/rxjs/Rx.js"),p=i("./js/epics/index.js"),t=p._setThumbnail,s=p.updateMapLayoutEpic;e.exports={plugins:{MapPlugin:i("./MapStore2/web/client/plugins/Map.jsx"),IdentifyPlugin:i("./MapStore2/web/client/plugins/Identify.jsx"),ToolbarPlugin:i("./MapStore2/web/client/plugins/Toolbar.jsx"),ZoomAllPlugin:i("./MapStore2/web/client/plugins/ZoomAll.jsx"),MapLoadingPlugin:i("./MapStore2/web/client/plugins/MapLoading.jsx"),OmniBarPlugin:i("./MapStore2/web/client/plugins/OmniBar.jsx"),BackgroundSelectorPlugin:i("./MapStore2/web/client/plugins/BackgroundSelector.jsx"),FullScreenPlugin:i("./MapStore2/web/client/plugins/FullScreen.jsx"),ZoomInPlugin:i("./MapStore2/web/client/plugins/ZoomIn.jsx"),ZoomOutPlugin:i("./MapStore2/web/client/plugins/ZoomOut.jsx"),ExpanderPlugin:i("./MapStore2/web/client/plugins/Expander.jsx"),BurgerMenuPlugin:i("./MapStore2/web/client/plugins/BurgerMenu.jsx"),ScaleBoxPlugin:i("./MapStore2/web/client/plugins/ScaleBox.jsx"),MapFooterPlugin:i("./MapStore2/web/client/plugins/MapFooter.jsx"),PrintPlugin:i("./MapStore2/web/client/plugins/Print.jsx"),TimelinePlugin:i("./MapStore2/web/client/plugins/Timeline.jsx"),PlaybackPlugin:i("./MapStore2/web/client/plugins/Playback.jsx"),AddReducersAndEpics:{reducers:{security:i("./MapStore2/web/client/reducers/security.js"),maps:i("./MapStore2/web/client/reducers/maps.js"),currentMap:i("./MapStore2/web/client/reducers/currentMap.js"),maplayout:i("./MapStore2/web/client/reducers/maplayout.js")},epics:{_setThumbnail:t,updateMapLayoutEpic:s,zoomToVisibleAreaEpic:function(){return l.Observable.empty()}}}},requires:{ReactSwipe:i("./node_modules/react-swipeable-views/lib/index.js").default,SwipeHeader:i("./MapStore2/web/client/components/data/identify/SwipeHeader.jsx")}}}}]);