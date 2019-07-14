import { getGreeting } from '../support/app.po';

describe('onlyclimbing', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to onlyclimbing!');
  });
});
