var moment = require("moment")
var time = function(time){
    // Handle URL decoding
    time = decodeURIComponent(time);
    
    var patt = /^[0-9]*$/g;
    var isNum = patt.test(time);
    
    if(isNum){
        var date = moment.unix(time);
        if(date.isValid()){
            var data = {
                unix: parseInt(time),
                natural: date.format('MMMM DD, YYYY')
            }
            return data;
        } else {
            return {
                unix: null,
                natural: null
            }
        }
    } else {
        // Try multiple date formats with strict parsing
        var dateFormats = [
            'MMMM DD, YYYY',
            'MMMM DD YYYY',
            'MMM DD, YYYY',
            'MMM DD YYYY',
            'YYYY-MM-DD',
            'MM/DD/YYYY',
            'DD/MM/YYYY'
        ];
        
        for(var i = 0; i < dateFormats.length; i++){
            var date = moment(time, dateFormats[i], true); // true for strict parsing
            if(date.isValid()){
                var data = {
                    unix: parseInt(date.format('X')),
                    natural: date.format('MMMM DD, YYYY')
                }
                return data;
            }
        }
        
        // If strict parsing fails, try loose parsing for common formats
        var looseFormats = [
            'MMMM DD, YYYY',
            'MMMM DD YYYY'
        ];
        
        for(var j = 0; j < looseFormats.length; j++){
            var date = moment(time, looseFormats[j]);
            if(date.isValid()){
                var data = {
                    unix: parseInt(date.format('X')),
                    natural: date.format('MMMM DD, YYYY')
                }
                return data;
            }
        }
        
        return {
            unix: null,
            natural: null
        }
    }
}
module.exports = time;