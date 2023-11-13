document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova est à présent initialisé !

	// Initialisation de Framework7
    var f7App = new Framework7({
        el: '#app'
    });

    var mainView = f7App.views.create('.view-main');
}
