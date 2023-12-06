import { test as base } from '../testFixture';
import AboutPage from './aboutPage';
import HomePage from './homePage';
import FooterComponent from './footerComponent';
import HeaderComponent from './headerComponent';
import CatalogPage from './catalogPage';
import DatasetPage from './datasetPage';

export const test = base.extend<{
  aboutPage: AboutPage;
  footerComponent: FooterComponent;
  headerComponent: HeaderComponent;
  homePage: HomePage;
  catalogPage: CatalogPage;
  datasetPage: DatasetPage;
}> ({
  aboutPage: async ({page}, use) => {
    await use(new AboutPage(page));
  },
  catalogPage: async ({page}, use) => {
    await use(new CatalogPage(page));
  },
  datasetPage: async ({page}, use) => {
    await use(new DatasetPage(page));
  },
  homePage: async ({page}, use) => {
    await use(new HomePage(page));
  },
  headerComponent: async ({page}, use) => {
    await use(new HeaderComponent(page));
  },
  footerComponent: async ({page}, use) => {
    await use(new FooterComponent(page));
  },
});

export const expect = test.expect;