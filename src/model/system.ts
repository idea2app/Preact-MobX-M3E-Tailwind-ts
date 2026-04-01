import { observable } from 'mobx';
import { persist, restore } from 'mobx-restful';

export type ColorScheme = 'light' | 'dark' | 'auto';

const matchColorScheme = (color: ColorScheme) =>
  globalThis.matchMedia?.(`(prefers-color-scheme: ${color})`);

export class SystemModel {
  @persist()
  @observable
  accessor color: string = '#904a43';

  @persist()
  @observable
  accessor colorScheme: ColorScheme = matchColorScheme('dark').matches
    ? 'dark'
    : matchColorScheme('light').matches
      ? 'light'
      : 'auto';

  @persist()
  @observable
  accessor direction: 'ltr' | 'rtl' = 'ltr';

  restored = restore(this, 'System');

  setTheme(type: 'colorScheme' | 'direction' | 'color', value: string) {
    switch (type) {
      case 'color':
        this.color = value;
        break;
      case 'colorScheme':
        this.colorScheme = value as ColorScheme;
        break;
      case 'direction':
        document.documentElement.dir = value;
        this.direction = value as 'ltr' | 'rtl';
        break;
    }
  }
}

export default new SystemModel();
