import { environment } from './environment.prod';

describe('production environment', () => {
  it('should define URL', () => {
    expect(environment.URL).toBeDefined();
  });
});
