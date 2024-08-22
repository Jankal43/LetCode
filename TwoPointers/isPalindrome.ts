function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;

    while (i < j) {
        while (i < j && !isAlphanumeric(s[i])) {
            i++;
        }
        while (i < j && !isAlphanumeric(s[j])) {
            j--;
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /^[a-z0-9]$/i.test(char);
}

var s = "Was it a car or a cat I saw?";
console.log(isPalindrome(s));
