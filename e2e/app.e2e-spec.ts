import { MiscellaneousPage } from './app.po';

describe('miscellaneous App', () => {
  let page: MiscellaneousPage;

  beforeEach(() => {
    page = new MiscellaneousPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
