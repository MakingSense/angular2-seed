export class Angular2SeedPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-seed-app h1')).getText();
  }
}
