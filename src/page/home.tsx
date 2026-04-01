import { M3eButton } from '@m3e/react/button';
import { M3eCard } from '@m3e/react/card';
import { M3eHeading } from '@m3e/react/heading';
import { M3eIcon } from '@m3e/react/icon';
import { observer } from 'mobx-react';
import { Component } from 'react';
import { type RouteComponentProps, withRouter } from 'react-router-class-tools';

import projectStore, { type Project } from '../model/project';
import { t } from '../model/translation';

@withRouter
@observer
export class HomePage extends Component<
  RouteComponentProps<object, object, { guest: string }>
> {
  componentDidMount() {
    projectStore.getList(
      'facebook/react',
      'microsoft/TypeScript',
      'mobxjs/mobx',
      'ant-design/ant-design',
      'EasyWebApp/KoAJAX'
    );
  }

  componentWillUnmount() {
    projectStore.clearList();
  }
  renderProject = ({
    id,
    name,
    logo,
    description,
    homepage,
    html_url
  }: Project) => (
    <M3eCard className="grid h-full gap-2" key={id} variant="elevated">
      <img alt={name} className="max-w-full" slot="header" src={logo} />
      <M3eHeading
        className="row-span-1"
        size="small"
        slot="header"
        variant="display"
      >
        {name}
      </M3eHeading>
      <p className="row-span-2" slot="content">
        {description}
      </p>
      <div className="row-span-1 flex gap-2" slot="actions">
        <M3eButton
          href={homepage}
          size="extra-small"
          target="_blank"
          variant="tonal"
        >
          {t('home_page')}
          <M3eIcon name="open_in_new_window" slot="trailing-icon" />
        </M3eButton>
        <M3eButton
          href={html_url}
          size="extra-small"
          target="_blank"
          variant="tonal"
        >
          {t('source_code')}
          <M3eIcon name="open_in_new_window" slot="trailing-icon" />
        </M3eButton>
      </div>
    </M3eCard>
  );

  render() {
    return (
      <>
        <M3eHeading size="medium" variant="display">
          {t('upstream_projects')}
        </M3eHeading>
        <div className="grid @2xl:grid-cols-2 @5xl:grid-cols-3 @7xl:grid-cols-4 grid-cols-1 gap-4 px-4">
          {projectStore.list.map(this.renderProject)}
        </div>
      </>
    );
  }
}
