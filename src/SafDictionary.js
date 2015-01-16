var SAF = SAF || {};

SAF.Dictionary = function () {
    'use strict';

    var store = {};
    var length = 0;

    /**
     *
     * @type {{none: number, ascending: number, descending: number}}
     */
    this.sortOptions = {
        none:  0,
        ascending: 1,
        descending: 2
    };

    /**
     *
     * @param key
     * @param value
     * @returns {SAF.Dictionary}
     */
    this.add = function (key, value) {
        if (typeof value !== 'undefined') {
            if (typeof (!store.hasOwnProperty(key))) {
                length++;
                store[key] = value;
            }
        }

        return this;
    };

    /**
     *
     * @param dictionary
     */
    this.merge = function (dictionary) {
        var keys = dictionary.keys(this.sortOptions.none);

        for (var i = 0; i < keys.length; i++) {
            var value = dictionary.find(keys[i]);
            this.add(keys[i], value);
        }
    };

    /**
     *
     * @param key
     * @returns {SAF.Dictionary}
     */
    this.remove = function (key) {
        if (typeof store.hasOwnProperty(key)) {
            length--;
            delete store[key];
        }

        return this;
    };

    /**
     *
     * @param key
     * @returns {*}
     */
    this.find = function (key) {
        return (store.hasOwnProperty(key)) ? store[key] : null;
    };

    /**
     *
     * @param key
     * @returns {boolean}
     */
    this.contains = function (key) {
        return store.hasOwnProperty(key);
    };

    /**
     *
     */
    this.clear = function () {
        for (var key in store) {
            if (store.hasOwnProperty(key)) {
                length--;
                delete store[key];
            }
        }
    };

    /**
     *
     * @returns {number}
     */
    this.count = function () {
        return length;
    };

    /**
     *
     * @param sortOption
     * @returns {Array}
     */
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

    /**
     *
     * @returns {*}
     */
    this.toString = function () {
        return JSON.stringify(store);
    };
};