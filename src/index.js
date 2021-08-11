module.exports = function toReadable (number) {
    const digits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety','hundred'];
    const digitsBig = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety','hundred'];
    
    const u = number % 10;
    const d = Math.floor(number % 100 / 10);
    const du = number % 100;
    const h = Math.floor(number / 100);

    const units = number === 0 ? 'zero' : du < 20 ? digits[du] : digits[u];
    const dozens = du < 20 ? '' : u === 0 ? digitsBig[d] : `${digitsBig[d]} `
    const hundreds = h === 0 ? '' : du === 0 ? `${digits[h]} hundred` : `${digits[h]} hundred `;
    return `${hundreds}${dozens}${units}`;
}
