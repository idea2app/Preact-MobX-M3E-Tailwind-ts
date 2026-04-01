import { M3eDrawerContainer } from '@m3e/react/drawer-container';
import { M3eIcon } from '@m3e/react/icon';
import { M3eNavMenu, M3eNavMenuItem } from '@m3e/react/nav-menu';
import { M3eTheme } from '@m3e/react/theme';
import { observer } from 'mobx-react';
import { Component, type PropsWithChildren } from 'react';
import type { RouteComponentProps } from 'react-router-class-tools';

import systemStore from '../model/system';
import { t } from '../model/translation';

import { AppBar } from './AppBar';
import { Setting } from './Setting';

// @withRouter
@observer
export class ThemeContainer extends Component<
  PropsWithChildren<RouteComponentProps>
> {
  renderNavMenu() {
    const { pathname } = this.props.location || {};

    return (
      <M3eNavMenu id="nav-drawer" slot="start">
        <M3eNavMenuItem selected={pathname === '/project'}>
          <M3eIcon name="rocket_launch" slot="icon" />
          <a href="#/project" slot="label">
            {t('upstream_projects')}
          </a>
        </M3eNavMenuItem>
        <M3eNavMenuItem disabled>
          <M3eIcon name="widgets" slot="icon" />
          <a href="/component" slot="label">
            {t('component')}
          </a>
        </M3eNavMenuItem>
      </M3eNavMenu>
    );
  }

  render() {
    const { color, colorScheme, direction } = systemStore;

    return (
      <M3eTheme color={color} dir={direction} scheme={colorScheme} strongFocus>
        <AppBar />
        <M3eDrawerContainer endMode="auto" start startMode="auto">
          {this.renderNavMenu()}
          <main
            className="@container h-full w-full overflow-y-auto bg-transparent"
            id="scroll-container"
          >
            {this.props.children}
          </main>
          <Setting />
        </M3eDrawerContainer>
      </M3eTheme>
    );
  }
}
