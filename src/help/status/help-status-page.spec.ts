import HelpStatusPage from './help-status-page';

describe('HelpStatusPage', () => {
  let page: HelpStatusPage;

  beforeEach(() => {
    page = new HelpStatusPage();
  });

  it('should create page', () => {
    expect(page).toBeTruthy();
  });
});
