module.exports = function toReadable (number) {
  
    const units = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const teens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred  = ['hundred']
    

    
    let strNum = '';
    if (number === 0) {
        return 'zero';
    }
    

    if (Math.floor(number / 100) > 0) {
        strNum = strNum + units[Math.floor(number / 100) - 1] + ' ' + hundred + ' ';
        number = number - (Math.floor(number / 100) * 100);    
    }        
    
    if (Math.floor(number / 10) > 1) {
        strNum = strNum + teens[Math.floor(number / 10) - 1] + ' ';
        number = number - (Math.floor(number / 10) * 10);    
    }       
    if (number > 0) {
        strNum = strNum + units[number - 1];     
        number = number - number;
    }

    return strNum;
}


