import calculate from '../logic/calculate';

describe('tests calculate function', () => {
  it('should reset calculator', () => {
    expect(calculate({ total: '6', next: '2', operation: '+' }, 'AC')).toEqual(
      {
        total: 0,
        next: null,
        operation: null
      }
    );
  });

  it('should handle next as 0', () => {
    expect(calculate({ total: '6', next: '2', operation: '+' }, '0')).toEqual(
      {
        total: '6',
        next: '20',
        operation: '+'
      }
    );
  });

  it('should handle next as =', () => {
    expect(calculate({ total: '6', next: '2', operation: '+' }, '=')).toEqual(
      {
        total: '8',
        next: null,
        operation: null
      }
    );
  });

  it('should handle next as .', () => {
    expect(calculate({ total: '6', next: '2', operation: '+' }, '.')).toEqual(
      {
        total: '6',
        next: '2.',
        operation: '+'
      }
    );
  });

  it('should handle next as -', () => {
    expect(calculate({ total: '6', next: '2', operation: '+' }, '-')).toEqual(
      {
        total: '8',
        next: null,
        operation: '-'
      }
    );
  });
});
