import { M3eHeading } from '@m3e/react/heading';
import { M3eIcon } from '@m3e/react/icon';
import {
  M3eButtonSegment,
  M3eSegmentedButton
} from '@m3e/react/segmented-button';
import type { M3eSegmentedButtonElement } from '@m3e/web/segmented-button';
import { observer } from 'mobx-react';
import type { FC } from 'react';

import systemStore, { type ColorScheme } from '../model/system';

export const SCHEME_OPTIONS = [
  {
    icon: 'light_mode',
    label: 'Light',
    name: 'light'
  },
  {
    icon: 'settings_brightness',
    label: 'System',
    name: 'auto'
  },
  {
    icon: 'dark_mode',
    label: 'Dark',
    name: 'dark'
  }
];

export const Setting: FC = observer(() => {
  const { color, colorScheme } = systemStore;

  return (
    <aside className="flex flex-col gap-4 p-2" id="settings-drawer" slot="end">
      <M3eHeading id="color-header" size="large" variant="label">
        Color
      </M3eHeading>
      <input
        aria-labelledby="color-header"
        className="h-12 w-12 cursor-pointer appearance-none rounded-full border-none outline-secondary"
        id="color"
        onChange={({ target: { value } }) =>
          systemStore.setTheme('color', value)
        }
        type="color"
        value={color}
      />
      <M3eHeading id="color-scheme-header" size="large" variant="label">
        Color scheme
      </M3eHeading>
      <M3eSegmentedButton
        aria-labelledby="color-scheme-header"
        className="w-fit"
        id="color-scheme-button"
        onChange={({ target }) =>
          systemStore.setTheme(
            'colorScheme',
            (target as M3eSegmentedButtonElement).value as ColorScheme
          )
        }
      >
        {SCHEME_OPTIONS.map(({ name, icon, label }) => (
          <M3eButtonSegment
            checked={colorScheme === name}
            key={name}
            value={name}
          >
            <M3eIcon name={icon} slot="icon" />
            {label}
          </M3eButtonSegment>
        ))}
      </M3eSegmentedButton>
      <M3eHeading id="directionality-header" size="large" variant="label">
        Directionality
      </M3eHeading>
      <M3eSegmentedButton
        aria-labelledby="directionality-header"
        id="directionality-button"
        onChange={({ target }) =>
          systemStore.setTheme(
            'direction',
            (target as M3eSegmentedButtonElement).value as 'ltr' | 'rtl'
          )
        }
      >
        <M3eButtonSegment checked value="ltr">
          <M3eIcon name="format_textdirection_l_to_r" slot="icon" />
          Left to right
        </M3eButtonSegment>
        <M3eButtonSegment value="rtl">
          <M3eIcon name="format_textdirection_r_to_l" slot="icon" />
          Right to left
        </M3eButtonSegment>
      </M3eSegmentedButton>
    </aside>
  );
});
