import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        var outfit = this.element.firstElementChild.firstElementChild;
        var outfitColorSwatches = outfit.children;
        for (var i = 0; i < outfitColorSwatches.length; i++) {
            var hex = outfitColorSwatches[i].getAttribute("hex");
            var flex = outfitColorSwatches[0].getAttribute("flex");
            if (flex == "") {
                flex = "1"
            }
            var style = "background-color: " + hex + "; flex: " + flex;
            
            outfitColorSwatches[i].setAttribute("style", style); 
        }
        
    }
});
