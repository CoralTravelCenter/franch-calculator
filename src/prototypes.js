Number.prototype.pluralForm = function (root, suffix_list) {
    return root + (this >= 11 && this <= 14 ? suffix_list[0] : suffix_list[this % 10]);
}

Number.prototype.asMonths = function () {
    const n = Math.floor(this);
    return n.pluralForm('месяц', ['ев', '', 'а', 'а', 'а', 'ев', 'ев', 'ев', 'ев', 'ев']);
};
Number.prototype.asRoubles = function () {
    const n = Math.floor(this);
    return n.pluralForm('рубл', ['ей', 'ь', 'я', 'я', 'я', 'ей', 'ей', 'ей', 'ей', 'ей']);
};
Number.prototype.asTours = function () {
    const n = Math.floor(this);
    return n.pluralForm('тур', ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов']);
};

String.prototype.asMonths = function () {
    return Number(this).asMonths();
};
String.prototype.asRoubles = function () {
    return Number(this).asRoubles();
};
String.prototype.asTours = function () {
    return Number(this).asTours();
};

Number.prototype.formatPrice = function(prefix, suffix) {
    var s;
    s = String(Math.round(this));
    var sum = s.split('').reverse().join('').replace(/\d{3}(?=\d)/g, "$& ").split('').reverse().join('');
    return `${ prefix ? (prefix + ' ') : '' }${ sum }${ suffix ? (' ' + suffix) : '' }`;
};

Number.prototype.formatCurrency = function (code = 'RUB') {
    return {
        RUB: this.formatPrice('', '₽'),
        EUR: this.formatPrice('€', ''),
        USD: this.formatPrice('$', '')
    }[code];
};

export default null;