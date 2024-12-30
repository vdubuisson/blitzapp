import HomePage from './home.page';

describe('HomePage', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });
});
