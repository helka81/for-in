import orderByProps from '../index'

describe('orderByProps function additional tests', () => {
    test('sorts object properties based on the order array', () => {
      const obj = { a: 1, c: 3, b: 2 };
      const order = ['b', 'a', 'c'];
      const result = orderByProps(obj, order);
  
      expect(result[0].key).toBe('b');
      expect(result[1].key).toBe('a');
      expect(result[2].key).toBe('c');
    });
  
    test('handles objects with string and numeric keys', () => {
      const obj = { 2: 'two', b: 'bee', 1: 'one' };
      const order = ['b', 2, 1];
      const result = orderByProps(obj, order);
  
      expect(result[0].key).toBe('b');
      expect(result[1].key).toEqual(2);
      expect(result[2].key).toEqual(1);
    });
  
    test('handles incorrect data gracefully', () => {
      const obj = { a: 1, b: 2 };
      const order = ['a', 'c']; // 'c' key does not exist in the object
      const result = orderByProps(obj, order);
  
      expect(result.length).toBe(2);
      expect(result[0].key).toBe('a');
      expect(result[1].key).toBe('b');
    });
  
    test('handles empty object gracefully', () => {
      const obj = {};
      const order = ['a', 'b'];
      const result = orderByProps(obj, order);
  
      expect(result.length).toBe(0);
    });
  });