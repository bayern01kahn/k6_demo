import http from 'k6/http';
import {
  sleep
} from 'k6';

export const options = {
  stages: [{
      duration: '10s',
      target: 100
    }, // below normal load
    {
      duration: '1m',
      target: 100
    },
    {
      duration: '10s',
      target: 1400
    }, // spike to 1400 users
    {
      duration: '3m',
      target: 1400
    }, // stay at 1400 for 3 minutes
    {
      duration: '10s',
      target: 100
    }, // scale down. Recovery stage.
    {
      duration: '3m',
      target: 100
    },
    {
      duration: '10s',
      target: 0
    },
  ],
};
export default function () {
  const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/public/crocodiles/1/`, null, {
      tags: {
        name: 'PublicCrocs'
      }
    }],
    ['GET', `${BASE_URL}/public/crocodiles/2/`, null, {
      tags: {
        name: 'PublicCrocs'
      }
    }],
    ['GET', `${BASE_URL}/public/crocodiles/3/`, null, {
      tags: {
        name: 'PublicCrocs'
      }
    }],
    ['GET', `${BASE_URL}/public/crocodiles/4/`, null, {
      tags: {
        name: 'PublicCrocs'
      }
    }],
  ]);

  sleep(1);
}
