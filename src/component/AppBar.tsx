import { M3eAppBar } from '@m3e/react/app-bar';
import { M3eDrawerToggle } from '@m3e/react/drawer-container';
import { M3eIcon } from '@m3e/react/icon';
import { M3eIconButton } from '@m3e/react/icon-button';
import { M3eMenu, M3eMenuItemRadio, M3eMenuTrigger } from '@m3e/react/menu';
import { observer } from 'mobx-react';
import type { FC } from 'react';

import { i18n, LanguageName } from '../model/translation';

import { GitHubIcon } from './Svg';

export const AppBar: FC = observer(() => {
  const { currentLanguage } = i18n;

  return (
    <M3eAppBar
      className="sticky top-0 z-4 flex-none"
      htmlFor="scroll-container"
    >
      <M3eIconButton aria-label="Menu" slot="leading-icon" toggle>
        <M3eIcon name="menu" />
        <M3eIcon name="menu_open" slot="selected" />
        <M3eDrawerToggle htmlFor="nav-drawer" />
      </M3eIconButton>

      <span slot="title">Preact-MobX-M3E-Tailwind-ts</span>
      <span slot="subtitle">1.0.0</span>
      <span slot="trailing-icon">
        <M3eIconButton
          aria-label="Git"
          href="https://github.com/idea2app/Preact-MobX-M3E-Tailwind-ts"
          id="github-button"
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </M3eIconButton>
        <M3eIconButton>
          <M3eIcon name="translate" />
          <M3eMenuTrigger htmlFor="language-menu" />
        </M3eIconButton>
        <M3eMenu id="language-menu">
          {Object.entries(LanguageName).map(([key]) => (
            <M3eMenuItemRadio
              aria-checked={currentLanguage === key}
              checked={currentLanguage === key}
              key={key}
              onClick={() => {
                i18n.loadLanguages(key as keyof typeof LanguageName);
              }}
              role="menuitemradio"
            >
              {key}
            </M3eMenuItemRadio>
          ))}
        </M3eMenu>
        <M3eIconButton aria-label="Settings" id="settings-button" toggle>
          <M3eIcon name="settings" />
          <M3eDrawerToggle htmlFor="settings-drawer" />
        </M3eIconButton>
      </span>
    </M3eAppBar>
  );
});
