var SAF = SAF || {};

SAF.Dictionary = function () {
    'use strict';

    var store = {};
    var length = 0;

    /**
     * Options for controlling the sort direction
     * @type {{none: number, ascending: number, descending: number}}
     */
    this.sortOptions = {
        none:  0,
        ascending: 1,
        descending: 2
    };

    /**
     * Add an item to the collection
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
     * Merge two dictionary objects
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
     * Remove an item from the collection based on its key
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
     * Find an item in the collection based on its key
     * @param key
     * @returns {*}
     */
    this.find = function (key) {
        return (store.hasOwnProperty(key)) ? store[key] : null;
    };

    /**
     * Determine whether the collection has the specified key
     * @param key
     * @returns {boolean}
     */
    this.contains = function (key) {
        return store.hasOwnProperty(key);
    };

    /**
     * Clear all items form the collection
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
     * Returns he number of items in the collection
     * @returns {number}
     */
    this.count = function () {
        return length;
    };

    /**
     * Returns a list of keys . . . sorted if specified
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
     * Serializes the collection
     * @returns {*}
     */
    this.toString = function () {
        return JSON.stringify(store);
    };
};