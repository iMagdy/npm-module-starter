import { assert } from 'chai';
import MyModule from '../lib';

describe('MyModule', () => {
  it('should sum two params', () => {
    assert(MyModule.method(1, 1) === 2);
  });
});
