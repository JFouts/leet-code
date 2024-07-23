/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        x *= -1;
        sign = -1;
    }

    const strValue = x.toString().split("").reverse().join("");

    if (sign == -1) {
        if (strGreaterThan(strValue, "2147483648")) {
            return 0;
        }
    } else {
        if (strGreaterThan(strValue, "2147483647")) {
            return 0;
        }
    }

    return parseInt(strValue) * sign;
};

var strGreaterThan = function (str1, str2) {
    if (str1.length > str2.length) {
        return true;
    }
    if (str1.length < str2.length) {
        return false;
    }

    for (let i = 0; i < str1.length; i++) {
        if (parseInt(str1[i]) > parseInt(str2[i])) {
            return true;
        }
        if (parseInt(str1[i]) < parseInt(str2[i])) {
            return false;
        }
    }
}

module.exports = reverse