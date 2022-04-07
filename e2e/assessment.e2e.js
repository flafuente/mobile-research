describe('Candidates', () => {
  beforeAll(async () => {
    await device.launchApp();
  });
  it('should load home screen', async () => {
    await expect(element(by.id('home-screen'))).toBeVisible();
  });
  it('should be able to scroll', async () => {
    await element(by.id('candidate-list')).scroll(300, 'down');
    await expect(element(by.id('candidate-26'))).toBeVisible();
  });
  it('should tap candidate', async () => {
    await element(by.id('candidate-26')).tap();
  });
  it('should load details screen', async () => {
    await expect(element(by.id('detail-screen'))).toBeVisible();
  });
  it('should load member details', async () => {
    await expect(element(by.id('detail-email'))).toHaveText('annisvandervort@watsica.io');
    await expect(element(by.id('detail-age'))).toHaveText('41');
    await element(by.id("header-back")).tap();
  });
  it('should filter by name', async () => {
    await element(by.id('home-filter')).replaceText('Shanon');
    await expect(element(by.id('candidate-97'))).toBeVisible();
    await expect(element(by.id('candidate-13'))).toBeNotVisible();
  });
  it('should filter by position', async () => {
    await element(by.id('home-filter')).replaceText('Engineer');
    await expect(element(by.id('candidate-62'))).toBeVisible();
    await expect(element(by.id('candidate-51'))).toBeVisible();
  });
  it('should show empty screen when no results', async () => {
    await element(by.id('home-filter')).replaceText('qqqqqq');
    await expect(element(by.id('empty-screen'))).toBeVisible();
  });
});
