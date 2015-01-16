var SAF = SAF || {};

SAF.Dictionary = function () {
    'use strict';

    var store = {};
    var length = 0;

    this.sortOptions = {
        none:  0,
        ascending: 1,
        descending: 2
    };

    this.add = function (key, value) {
        if (typeof value !== 'undefined') {
            if (typeof (!store.hasOwnProperty(key))) {
                length++;
                store[key] = value;
            }
        }

        return this;
    };

    this.merge = function (dictionary) {
        var keys = dictionary.keys(this.sortOptions.none);

        for (var i = 0; i < keys.length; i++) {
            var value = dictionary.find(keys[i]);
            this.add(keys[i], value);
        }
    };

    this.remove = function (key) {
        if (typeof store.hasOwnProperty(key)) {
            length--;
            delete store[key];
        }

        return this;
    };

    this.find = function (key) {
        return (store.hasOwnProperty(key)) ? store[key] : null;
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

    this.keys = function (sortOption) {
        var array = [];

        for (var key in store) {
            if (store.hasOwnProperty(key)) {
                array.push(key);
            }
        }

        if (sortOption !== this.sortOptions.none) {
            array.sort();

            if (sortOption === this.sortOptions.descending) {
                array.reverse();
            }
        }

        return array;
    };

    this.toString = function () {
        return JSON.stringify(store);
    };
};