import {
  check
} from 'k6';
import http from 'k6/http';

export default function () {
  const res = http.get('http://test.k6.io/');
  check(res, {
    'body size is 11,105 bytes': (r) => r.body.length == 11105,
  });
}
