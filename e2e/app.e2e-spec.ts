import { CioRegistrationPage } from './app.po';

describe('cio-registration App', () => {
  let page: CioRegistrationPage;

  beforeEach(() => {
    page = new CioRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
