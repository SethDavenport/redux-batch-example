import { ReduxBatchExamplePage } from './app.po';

describe('redux-batch-example App', () => {
  let page: ReduxBatchExamplePage;

  beforeEach(() => {
    page = new ReduxBatchExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
