import { PrepMyFoodClientPage } from './app.po';

describe('prep-my-food-client App', function() {
  let page: PrepMyFoodClientPage;

  beforeEach(() => {
    page = new PrepMyFoodClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
