describe("Dictionary", function() {

  describe("When an item is added to the dictionary", function() {
    var d = new SAF.Dictionary();

    it("should have an incremented count", function() {
      var origCount = d.count();
      d.add('key1', 'value1');
      var newCount = d.count();

      expect(newCount).toBeGreaterThan(origCount);
    });
  });

  describe("When an item is removed from the dictionary", function() {
    var d = new SAF.Dictionary();

    it("should have a decremented count", function() {
      d.add('key1', 'value1');
      var origCount = d.count();
      d.remove('key1');
      var newCount = d.count();

      expect(newCount).toBeLessThan(origCount);
    });
  });

  describe("When clearing a dictionary", function() {
    var d = new SAF.Dictionary();
    var newCount;

    beforeAll(function() {
      for(var i = 0; i < 10; i++) {
        d.add('key' + i, 'value' + i);
      }

      d.clear();
      newCount = d.count();
    });

    it("should result in a count of 0", function() {
      expect(newCount).toEqual(0);
    });

    it("should not result in a null object ref", function() {
      expect(d).not.toBeNull(0);
    });
  });

  describe("When getting a list of keys", function() {
    var d = new SAF.Dictionary();

    beforeAll(function() {
      d.add("Scott", 49);
      d.add("Corey", 45);
      d.add("Cindy", 43);
      d.add("Shawn", 53);
      d.add("Steve", 51);
      d.add("Willie", 57);
    });

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
    var d = new SAF.Dictionary();

    beforeAll(function() {
      d.add("Scott", 49);
      d.add("Corey", 45);
      d.add("Cindy", 43);
      d.add("Shawn", 53);
      d.add("Steve", 51);
      d.add("Willie", 57);
    });

    it("should output valid JSON", function() {
      var keys = d.keys(d.sortOptions.none);
      expect(d.toString()).toEqual('{"Scott":49,"Corey":45,"Cindy":43,"Shawn":53,"Steve":51,"Willie":57}');
    });
  });

  describe("When checking to se if the dictionary contains a specific key", function() {
    var d = new SAF.Dictionary();

    beforeAll(function() {
      d.add("Scott", 49);
      d.add("Corey", 45);
      d.add("Cindy", 43);
      d.add("Shawn", 53);
      d.add("Steve", 51);
      d.add("Willie", 57);
    });

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
    var d = new SAF.Dictionary();

    beforeAll(function() {
      d.add("Scott", 49);
      d.add("Corey", 45);
      d.add("Cindy", 43);
      d.add("Shawn", 53);
      d.add("Steve", 51);
      d.add("Willie", 57);
    });

    it("should return the value for the key item if found", function() {
      var result = d.find('Scott');
      expect(result).toEqual(49);
    });

    it("should return null if not found", function() {
      var result = d.find('Jerry');
      expect(result).toBeNull();
    });
  });

});
