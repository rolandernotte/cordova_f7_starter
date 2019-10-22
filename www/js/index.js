var app = {
    
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // gestionnaire d'évènement deviceready 
    onDeviceReady: function() {
        // initialisation de Framework7
		var f7App = new Framework7({
            root: '#app'
        });
		// initialisation de la vue principale
        var mainView = f7App.views.create('.view-main');

    }
};

app.initialize();