import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        getFormData: function (color) {
            var newCharacter = this.get("newCharacter");
            var hex = this.get("hex");
            var url = "http://localhost:5000/addCharacterByColor";
            var data = {
                "color": color.name,
                "character" : newCharacter,
                "hex": hex
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
        }
    }
});
