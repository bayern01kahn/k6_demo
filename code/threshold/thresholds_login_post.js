import {
  check
} from 'k6';
import http from 'k6/http';

export let options = {
  thresholds: {
    'http_req_duration{url:http://demo.loadimpact.com/login}': ['p95<100'],
  },
};

export function testLogin(params) {
  let data = params || {
    username: 'admin',
    password: 'test'
  };
  let res = http.post('http://demo.loadimpact.com/login', data);
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}

export default function () {
  testLogin();
}
