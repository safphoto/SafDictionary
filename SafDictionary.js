// Safely create namespace
var SAF = SAF || {};

SAF.Dictionary = function () {
    var store = [];
    var length = 0;

    for (var i = 0; i < arguments.length; i += 2) {
        if (typeof (arguments[i + 1]) != 'undefined') {
            store[arguments[i]] = arguments[i + 1];
            this.length++;
        }
    }

    this.add = function (key, value) {
        if (typeof (value) != 'undefined') {
            if (typeof (!store.hasOwnProperty(key))) {
                length++;
                store[key] = value;
            }
        }

        return this;
    };

    this.remove = function (key) {
        if (typeof (store.hasOwnProperty(key))) {
            this.length--;
            delete store[key];
        }

        return this;
    };

    this.find = function (key) {
        return store[key];
    };

    this.contains = function (key) {
        return typeof (store.hasOwnProperty(key));
    };

    this.clear = function () {
        for (var key in store) {
            if (store.hasOwnProperty(key)) {
                delete store[key];
            }
        }
    }

    this.count = function () {
        return store.length;
    };

};