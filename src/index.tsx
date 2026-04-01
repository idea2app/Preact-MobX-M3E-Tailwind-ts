import { auto } from 'browser-unhandled-rejection';
import { configure } from 'mobx';
import { createRoot } from 'react-dom/client';
import { serviceWorkerUpdate } from 'web-utility';

import PageRoot from './page';

import './index.css';

auto();

configure({ enforceActions: 'never' });

globalThis.addEventListener('unhandledrejection', ({ reason }) => {
  if (reason instanceof URIError) console.error(reason.message);
});

const { serviceWorker } = window.navigator;

if (process.env.NODE_ENV !== 'development')
  serviceWorker
    ?.register('sw.js')
    .then(serviceWorkerUpdate)
    .then((worker) => {
      if (window.confirm('New version of this Web App detected, update now?'))
        worker.postMessage({ type: 'SKIP_WAITING' });
    });

serviceWorker?.addEventListener('controllerchange', () =>
  window.location.reload()
);

createRoot(document.querySelector('#root')).render(<PageRoot />);
