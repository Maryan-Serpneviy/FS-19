function safeCall(f) {
    try {
        f();
    } catch (e) {
        return false;
    }
    return true;
}

safeCall(() => console.log('Hello!')); // true
safeCall(() => JSON.parse('abc')); // false
safeCall(() => false); // true
safeCall(() => abc); // false

Function.prototype.safeCall = function() {
    try {
        this(...this.arguments);
    } catch (e) {
        return null;
    }
    return true;
}