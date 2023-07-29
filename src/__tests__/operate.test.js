import operate from '../logic/operate';

describe('operate function', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '3', '-')).toBe('2');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('2', '3', 'x')).toBe('6');
  });

  it('should perform division correctly', () => {
    expect(operate('6', '2', '÷')).toBe('3');
  });

  it('should return "Can\'t divide by 0." for division by zero', () => {
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo correctly', () => {
    expect(operate('7', '4', '%')).toBe('3');
  });

  it('should return "Can\'t find modulo as can\'t divide by 0." for modulo by zero', () => {
    expect(operate('5', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('5', '3', '&')).toThrowError("Unknown operation '&'");
  });
});
