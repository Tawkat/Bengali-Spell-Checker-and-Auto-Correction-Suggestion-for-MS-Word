
var dataList=[];

function GlobalWrong() {

    this.misspelledPart = null;


    this.setMisspelledPart = function (misspelledPart) {
        this.misspelledPart = misspelledPart;
    }

    this.getMisspelledPart = function() {
        return this.misspelledPart;
    }

    this.destroyMisspelledPart = function() {
        this.misspelledPart = null;
    }


}

function Dl() {

    this.dataList = [];


}
