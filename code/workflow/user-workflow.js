import http from 'k6/http';
import {
  check,
  group,
  sleep
} from 'k6';

const options = {
  vus: 1000,
  duration: '600s',
};
const SLEEP_DURATION = 0.1;

export default function () {
  let body = JSON.stringify({
    username: 'user_' + __ITER,
    password: 'PASSWORD',
  });
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
    tags: {
      name: 'login', // first request
    },
  };

  group('simple user journey', (_) => {
    // Login request
    const login_response = http.post('http://api.yourplatform.com/v2/login', body, params);
    check(login_response, {
      'is status 200': (r) => r.status === 200,
      'is api key present': (r) => r.json().hasOwnProperty('api_key'),
    });
    params.headers['api-key'] = login_response.json()['api_key'];
    sleep(SLEEP_DURATION);

    // Get user profile request
    params.tags.name = 'get-user-profile';
    const user_profile_response = http.get(
      'http://api.yourplatform.com/v2/users/user_' + __ITER + '/profile',
      params
    );
    sleep(SLEEP_DURATION);

    // Update user profile request
    body = JSON.string({
      first_name: 'user_' + __ITER,
    });
    params.tags.name = 'update-user-profile';
    const update_profile_response = http.post(
      'http://api.yourplatform.com/v2/users/user_' + __ITER + '/profile',
      body,
      params
    );
    sleep(SLEEP_DURATION);

    // Logout request
    params.tags.name = 'logout';
    const logout_response = http.get('http://api.yourplatform.com/v2/logout', params);
    sleep(SLEEP_DURATION);
  });
}
