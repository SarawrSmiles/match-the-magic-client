import Component from '@ember/component';

export default Component.extend({
    didInsertElement() {
        var hex = this.element.firstElementChild.getAttribute("hex");
        var colorSwatchContainer = this.element.firstElementChild
        var colorSwatchCharacterLink = colorSwatchContainer.firstElementChild;

        var hexCompliment;
        var midHex = 100;

        var hexRed;
        var hexGreen;
        var hexBlue;
        
        if (hex.length <= 5) {
            hexRed = hex.substring(1,2) + hex.substring(1,2);
            hexGreen = hex.substring(2,3) + hex.substring(2,3);
            hexBlue = hex.substring(3) + hex.substring(3);
        } else { 
            hexRed = hex.substring(1,3);
            hexGreen = hex.substring(3,5);
            hexBlue = hex.substring(5);
        }

        var decimalRed = parseInt(hexRed, 16);
        var decimalGreen = parseInt(hexGreen, 16); 
        var decimalBlue = parseInt(hexBlue, 16);

        var redPrime = decimalRed / 255;
        var greenPrime = decimalGreen / 255;
        var bluePrime = decimalBlue / 255;

        var maxColorValue = Math.max(redPrime, greenPrime, bluePrime);

        var minColorValue = Math.min(redPrime, greenPrime, bluePrime);

        var chroma = maxColorValue - minColorValue;

        var HuePrime;
        var Hue
        var vals;

        if (chroma == 0) {
            HuePrime = 0;
            vals = "0";
        } else if (maxColorValue == redPrime) {
            vals = "red" + redPrime + " " + greenPrime + " " + bluePrime;
            var segment = ((greenPrime - bluePrime) / chroma); 
            var shift = 0 / 60;
            if (segment < 0) {
                shift = 360/60;
            }
            HuePrime = segment + shift;
        } else if (maxColorValue == greenPrime) {
            vals = "green" + redPrime + " " + greenPrime + " " + bluePrime;
            HuePrime = ((bluePrime - redPrime) / chroma) + 2;
        } else if (maxColorValue == bluePrime) {
            vals = "blue" + redPrime + " " + greenPrime + " " + bluePrime;
            var segment = ((redPrime - greenPrime) / chroma);
            var shift = 240 / 60;
            HuePrime = segment + shift;
        }


        var Lightness = (maxColorValue + minColorValue) / 2;

        var Saturation;

        if (chroma == 0) {
            Saturation = 0;
        } else {
            Saturation = chroma / (1 - Math.abs(2*Lightness - 1))
        }

        Hue = HuePrime * 60;
        Saturation *= 100;
        Lightness *= 100;

        vals += "H: " + Hue + " S: " + Saturation + " L: " + Lightness

        var newLightness;

        if (Lightness <= 10) {
            newLightness = 80;
        } else if ( Lightness <= 30) {
            newLightness = 70;
        } else if (Lightness <= 50) {
            newLightness = 80;
        } else if (Lightness <= 70) {
            if (Hue >= 200 || Hue <= 20) {
                newLightness = 90;
            } else {
                newLightness = 30;
            }
        } else if (Lightness <= 90){
            newLightness = 20;
        } else {
            newLightness = 10;
        }
        var fontColor = "hsl(" + Hue + ", " + Saturation + "%, " + newLightness + "%);"; 
        colorSwatchContainer.setAttribute("style", "background-color: " + hex + ";");
        colorSwatchContainer.setAttribute("vals", vals);
        colorSwatchCharacterLink.setAttribute("style", "color: " + fontColor); 

    }
});
