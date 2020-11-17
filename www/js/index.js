document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    var f7App = new Framework7({
		root: '#app'
	})
	
	var mainView = f7App.views.create('.view-main');
}