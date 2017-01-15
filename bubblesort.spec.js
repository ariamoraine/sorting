describe('Bubble Sort', function() {
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });

  it('handles a single item array', function () {
    expect( bubbleSort([1]) ).toEqual( [1] );
  });

  it('sorts an array with unique values', function () {
    expect( bubbleSort([2, 4, 5, 1, 7, 3])).toEqual([1, 2, 3, 4, 5, 7]);
  });

  it('sorts an array with duplicate values', function () {
    expect( bubbleSort([3, 2, 5, 2, 4, 2])).toEqual([2, 2, 2, 3, 4, 5]);
  });
});
