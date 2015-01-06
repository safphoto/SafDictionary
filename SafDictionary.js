// Safely create namespace
var SAF = SAF || {};

SAF.Dictionary = function () {
    var store = {};
    var length = 0;

    for (var i = 0; i < arguments.length; i += 2) {
        if (typeof (arguments[i + 1]) != 'undefined') {
            store[arguments[i]] = arguments[i + 1];
            length++;
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
            length--;
            delete store[key];
        }

        return this;
    };

    this.find = function (key) {
        return store[key];
    };

    this.contains = function (key) {
        return store.hasOwnProperty(key);
    };

    this.clear = function () {
        for (var key in store) {
            if (store.hasOwnProperty(key)) {
                length--;
                delete store[key];
            }
        }
    };

    this.count = function () {
        return length;
    };

    this.sortedKeys = function (reversed) {
        var array = [];

        for (var key in store) {
            array.push(key);
        }

        array.sort();

        if(typeof reversed === "boolean"){
            if(reversed) {
                array.reverse();
            }
        }

        return array;
    };

    this.toString = function () {
        return JSON.stringify(store);
    }
};