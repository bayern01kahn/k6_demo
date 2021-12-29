import http from 'k6/http';
import {
  sleep
} from 'k6';
import {
  Rate
} from 'k6/metrics';

export const options = {
  thresholds: {
    'http_req_duration{type:API}': ['p(95)<500'], // threshold on API requests only
    'http_req_duration{type:staticContent}': ['p(95)<200'], // threshold on static content only
  },
};

export default function () {
  const res1 = http.get('https://test-api.k6.io/public/crocodiles/1/', {
    tags: {
      type: 'API'
    },
  });
  const res2 = http.get('https://test-api.k6.io/public/crocodiles/2/', {
    tags: {
      type: 'API'
    },
  });

  const responses = http.batch([
    ['GET', 'https://test-api.k6.io/static/favicon.ico', null, {
      tags: {
        type: 'staticContent'
      }
    }],
    [
      'GET',
      'https://test-api.k6.io/static/css/site.css',
      null,
      {
        tags: {
          type: 'staticContent'
        }
      },
    ],
  ]);

  sleep(1);
}
