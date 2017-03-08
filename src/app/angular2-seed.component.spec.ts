import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2SeedAppComponent } from '../app/angular2-seed.component';

beforeEachProviders(() => [Angular2SeedAppComponent]);

describe('App: Angular2Seed', () => {
  it('should create the app',
      inject([Angular2SeedAppComponent], (app: Angular2SeedAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-seed works!\'',
      inject([Angular2SeedAppComponent], (app: Angular2SeedAppComponent) => {
    expect(app.title).toEqual('angular2-seed works!');
  }));
});
