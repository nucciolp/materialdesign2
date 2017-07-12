import { MaterialdesignPage } from './app.po';

describe('materialdesign App', () => {
  let page: MaterialdesignPage;

  beforeEach(() => {
    page = new MaterialdesignPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
