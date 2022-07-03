const { builder, divider } = require('./ex1')

describe('tests divider', () => {
  test('tests if number 3 will be printed as "Visual"', () => {
    expect(divider(3)).toBe('Visual');
  });

  test('tests if number 5 will be printed as "Nuts"', () => {
    expect(divider(5)).toBe('Nuts');
  });

  test('tests if number 15 will be printed as "Visual Nuts"', () => {
    expect(divider(15)).toBe('Visual Nuts');
  });

  test('tests if number 9 will be printed as "Visual"', () => {
    expect(divider(9)).toBe('Visual');
  });

  test('tests if number 25 will be printed as "Nuts"', () => {
    expect(divider(25)).toBe('Nuts');
  });

  test('tests if number 30 will be printed as "Visual Nuts"', () => {
    expect(divider(30)).toBe('Visual Nuts');
  });
})

describe('tests builder', () => {
  describe('tests builder for a 1 and 100 input', () => {
    const arr = builder(1, 100)

    test('array length', () => {
      expect(arr.length).toBe(100);
    })

    test('array pos 3 is equal to "Visual"', () => {
      expect(arr[2]).toBe("Visual");
    })

    test('array pos 5 is equal to "Nuts"', () => {
      expect(arr[4]).toBe("Nuts");
    })

    test('array pos 15 is equal to "Visual Nuts"', () => {
      expect(arr[14]).toBe("Visual Nuts");
    })

    test('array count of "Visual" positions to be 27', () => {
      const count = arr.filter(a => a === 'Visual').length
      expect(count).toBe(27);
    })

    test('array count of "Nuts" positions to be 14', () => {
      const count = arr.filter(a => a === 'Nuts').length
      expect(count).toBe(14);
    })

    test('array count of "Visual Nuts" positions to be 6', () => {
      const count = arr.filter(a => a === 'Visual Nuts').length
      expect(count).toBe(6);
    })
  });

  describe('tests builder for a 1 and 500 input', () => {
    const arr = builder(1, 500)

    test('array length', () => {
      expect(arr.length).toBe(500);
    })

    test('array pos 297 is equal to "Visual"', () => {
      expect(arr[296]).toBe("Visual");
    })

    test('array pos 500 is equal to "Nuts"', () => {
      expect(arr[499]).toBe("Nuts");
    })

    test('array pos 150 is equal to "Visual Nuts"', () => {
      expect(arr[149]).toBe("Visual Nuts");
    })

    test('array count of "Visual" positions to be 133', () => {
      const count = arr.filter(a => a === 'Visual').length
      expect(count).toBe(133);
    })

    test('array count of "Nuts" positions to be 67', () => {
      const count = arr.filter(a => a === 'Nuts').length
      expect(count).toBe(67);
    })

    test('array count of "Visual Nuts" positions to be 33', () => {
      const count = arr.filter(a => a === 'Visual Nuts').length
      expect(count).toBe(33);
    })
  });
})