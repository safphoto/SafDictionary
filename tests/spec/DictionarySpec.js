describe("Dictionary", function() {
    var d;

    beforeEach(function() {
        d = new SAF.Dictionary()
            .add("Scott", 49)
            .add("Corey", 45)
            .add("Cindy", 43)
            .add("Shawn", 53)
            .add("Steve", 51)
            .add("Willie", 57);
    });

    afterEach(function() {
        d.clear();
        d = null;
    });

    describe("When an item is added to the dictionary", function() {
        it("should have an incremented count", function() {
              var origCount = d.count();
              d.add('Howard', 49);
              var newCount = d.count();

              expect(newCount).toBeGreaterThan(origCount);
        });
    });

    describe("When an item is removed from the dictionary", function() {
        it("should have a decremented count", function() {
              var origCount = d.count();
              d.remove('Scott');
              var newCount = d.count();

              expect(newCount).toBeLessThan(origCount);
        });
    });

    describe("When clearing a dictionary", function() {
        var d1 = new SAF.Dictionary()
            .add("Scott", 49)
            .add("Corey", 45)
            .add("Cindy", 43)
            .add("Shawn", 53);

        var newCount = 0;

        d1.clear();
        newCount = d1.count();

        it("should result in a count of 0", function() {
            expect(newCount).toEqual(0);
        });

        it("should not result in a null object ref", function() {
            expect(d1).not.toBeNull();
        });
    });

    describe("When getting a list of keys", function() {
        it("should be sorted when specified", function() {
            var keys = d.keys(d.sortOptions.descending);
            expect(keys.join(',')).toEqual('Willie,Steve,Shawn,Scott,Corey,Cindy');
        });

        it("should be unsorted when specified as such", function() {
            var keys = d.keys(d.sortOptions.none);
            expect(keys.join(',')).toEqual('Scott,Corey,Cindy,Shawn,Steve,Willie');
        });
    });

    describe("When serializing the dictionary", function() {
        it("should output valid JSON", function() {
            var result = d.toString();
            expect(result).toEqual('{"Scott":49,"Corey":45,"Cindy":43,"Shawn":53,"Steve":51,"Willie":57}');
        });
    });

    describe("When checking to se if the dictionary contains a specific key", function() {
        it("should return 'true' if found", function() {
            var result = d.contains('Scott');
            expect(result).toBeTruthy();
        });

        it("should return 'false' if not found", function() {
            var result = d.contains('Jerry');
            expect(result).toBeFalsy();
        });
    });

    describe("When checking to se if the dictionary contains a specific key", function() {
        it("should return the value for the key item if found", function() {
            var result = d.find('Scott');
            expect(result).toEqual(49);
        });

        it("should return null if not found", function() {
            var result = d.find('Jerry');
            expect(result).toBeNull();
        });
    });

    describe("When merging two dictionaries", function() {
        d1 = new SAF.Dictionary()
            .add("Scott", 49)
            .add("Corey", 45)
            .add("Cindy", 43)
            .add("Shawn", 53);

        d2 = new SAF.Dictionary()
            .add("Steve", 51)
            .add("Willie", 57);

        d1.merge(d2);

        it("should append the second dictionary to the first", function() {
            var result = d1.toString();
            expect(result).toEqual('{"Scott":49,"Corey":45,"Cindy":43,"Shawn":53,"Steve":51,"Willie":57}');
        });
    });

});
