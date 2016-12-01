import { HangmanSimplePage } from './app.po';

describe('hangman-simple App', function() {
  let page: HangmanSimplePage;

  beforeEach(() => {
    page = new HangmanSimplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
