import Controller from '@ember/controller';

export default Controller.extend({
    movie_selection : [],
    color_selection : [],
    outfit_selection: [],
    color_preview: "#eee",

    setupController: function() {
        this._super(...arguments)
        Ember.run.next(() => {
            const scrollContainer = Ember.$('.character-page');
            const scrollDurationMS = 1000;

            scrollContainer.animate({
                scrollTop: 0,
            }, scrollDurationMS);
        });
     },


    trigger: function() {
                 Ember.run.scheduleOnce('afterRender', this, function() {
                     var get_url = "https://match-the-magic-server.herokuapp.com/movies";
                     var me = this;
                     $.get(get_url).then(function(response) {
                         me.movie_selection.pushObjects(JSON.parse(response));
                     });
                     var get_url = "https://match-the-magic-server.herokuapp.com/colors";
                     var me = this;
                     $.get(get_url).then(function(response) {
                         var colors = []
                         response = JSON.parse(response);
                         for (var i =0; i < response.length; i++){
                             colors.push({ "name" : response[i].name,
                                           "hex": response[i].hex});
                         }
                         console.log(colors)
                         me.color_selection.pushObjects(colors);
                     });
                     var get_url = "https://match-the-magic-server.herokuapp.com/outfits/" + this.name;
                     $.get(get_url).then(function(response) {
                         me.outfit_selection.pushObjects(JSON.parse(response));
                     });
               });
     }.on('init'),

    actions: {
        updateColorPreview: function() {
            var color = this.get("newColor");
            if (color[0] == "#" && (color.length == 4 || color.length == 7)) {
                Ember.set(this, "color_preview", color)
            }
            else {
                Ember.set(this, "color_preview", "#eee")
            }
        },

        addColor: function(color, character, outfit) {
            var url = "https://match-the-magic-server.herokuapp.com/addCharacterByColor";
            if (outfit == undefined) {
                outfit = this.get("newOutfit")
            }
            var data = {
                "color": color.name ,
                "character" : character.name,
                "outfit": outfit,
                "hex": this.get("newColor")
            };
            try {
                $.ajax({
                type: "POST",
                url: url,
                data: data
                }); 
            } catch(err) {
                console.log("having issues");
            }   
            window.location.reload(true);
        }, 

        carouselScroll: function(anchor) {
            var anchored_div = document.getElementById(anchor);
            var anchored_parent = anchored_div.parentElement.parentElement;
            var scrollLocation = anchored_parent.scrollLeft;
            var scrollGoal = anchored_div.offsetLeft - anchored_parent.offsetLeft;
            console.log("Location ", scrollLocation, " Goal ", scrollGoal);
            var scrollDistance = scrollGoal - scrollLocation;
            anchored_parent.scrollLeft += scrollDistance;
        },

        getColors: function () {
            var get_url = "https://match-the-magic-server.herokuapp.com/colors";
            var me = this;
            $.get(get_url).then(function(response) {
                var colors = []
                response = JSON.parse(response);
                for (var i =0; i < response.length; i++){
                    colors.push({ "name" : response[i].name,
                                  "hex": response[i].hex});
                }
                console.log(colors)
                me.color_selection.pushObjects(colors);
            });

            this.toggleProperty("add_color");
        },
        assignBestFriend: function(character) {
            var post_url = "https://match-the-magic-server.herokuapp.com/assignBestFriends";
            var best_friend =document.getElementById("best-friend-selection").value;

            var data = {
                "friend1" : character.name,
                "friend2" : best_friend
            }
            try {
                    $.ajax({
                    type: "POST",
                    url: post_url,
                    data: data
                    }); 
                } catch(err) {
                    console.log("having issues");
                } 
     
            window.location.reload(true);
        },
        assignMovie: function(character) {
            var post_url = "https://match-the-magic-server.herokuapp.com/assignBestFriends";
            var movie_title =document.getElementById("movie-selection").value;


            var data = {
                "movie_title": movie_title,
                "character_name": character.name
            }

            try {
                $.ajax({
                type: "POST",
                url: post_url,
                data: data
                }); 
            } catch(err) {
                console.log("having issues");
            } 
            window.location.reload(true);
        }
    }
});
