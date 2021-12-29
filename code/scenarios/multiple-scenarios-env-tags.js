import http from 'k6/http';
import {
  fail
} from 'k6';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'constant-vus',
      exec: 'contacts',
      vus: 50,
      duration: '30s',
      tags: {
        my_custom_tag: 'contacts'
      },
      env: {
        MYVAR: 'contacts'
      },
    },
    news: {
      executor: 'per-vu-iterations',
      exec: 'news',
      vus: 50,
      iterations: 100,
      startTime: '30s',
      maxDuration: '1m',
      tags: {
        my_custom_tag: 'news'
      },
      env: {
        MYVAR: 'news'
      },
    },
  },
};

export function contacts() {
  if (__ENV.MYVAR != 'contacts') fail();
  http.get('https://test.k6.io/contacts.php');
}

export function news() {
  if (__ENV.MYVAR != 'news') fail();
  http.get('https://test.k6.io/news.php');
}
