import Controller from '@ember/controller';

export default Controller.extend({

    actions: {
        addCharacterToMovie: function(movie) {
            var post_url = "https://match-the-magic-server.herokuapp.com/assignMovieToCharacter";
            var name = this.get("name");
            var title = movie;
            
            var data = {
                "movie_title": title,
                "character_name": name
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
