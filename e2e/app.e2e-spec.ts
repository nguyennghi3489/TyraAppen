import { TyraAppenPage } from './app.po';

describe('tyra-appen App', function() {
  let page: TyraAppenPage;

  beforeEach(() => {
    page = new TyraAppenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
