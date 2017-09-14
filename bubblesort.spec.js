describe('Bubble Sort', function(){
  // beforeAll(function () {
  //   spyOn(someArr, 'swap').and.callThrough();
  // });

  /*
  var foo, bar, fetchedBar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      },
      getBar: function() {
        return bar;
      }
    };
   */

  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    // expect(swap.calls.count()).toEqual(0);
  });

  it('will return the only element if the array has length of 1', function() {
    expect(bubbleSort([1])).toEqual([1]);
    // expect(swap.calls.count()).toEqual(0);
  });

  it('correctly sorts arrays of lengths greater than 1', function() {
    expect(bubbleSort([3,4,5,8,6,0,9])).toEqual([0,3,4,5,6,8,9]);
  });
});

/*
// testing code
...
beforeAll(function () {
  spyOn(tootsiepop, 'lick').and.callThrough(); // replace existing `tootsiepop['lick']` method
});
it('getting to the center of tootsiepop involves exactly three licks', function () {
  tootsiepop.getToCenter();
  expect(tootsiepop.lick.calls.count()).toEqual(3);
});
...
 */

// we don't know if it (tracking) can necessarily be approximate... yet.