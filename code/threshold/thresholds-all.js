import http from 'k6/http';
import {
  Trend,
  Rate,
  Counter,
  Gauge
} from 'k6/metrics';
import {
  sleep
} from 'k6';

export const TrendRTT = new Trend('RTT');
export const RateContentOK = new Rate('Content OK');
export const GaugeContentSize = new Gauge('ContentSize');
export const CounterErrors = new Counter('Errors');
export const options = {
  thresholds: {

    /*  
     * 99th percentile response time must be below 300 ms
     * 70th percentile response time must be below 250 ms
     * Average response time must be below 200 ms
     * Median response time must be below 150 ms
     * Minimum response time must be below 100 ms
     */
    'RTT': ['p(99)<300', 'p(70)<250', 'avg<200', 'med<150', 'min<100'],
    'Content OK': ['rate>0.95'], // content must have been OK more than 95% of the time
    'ContentSize': ['value<4000'], // the returned content must be smaller than 4000 bytes
    'Errors': ['count<100'], // content can't have been bad more than 99 times
  },
};

export default function () {
  const res = http.get('https://test-api.k6.io/public/crocodiles/1/');
  const contentOK = res.json('name') === 'Bert';

  TrendRTT.add(res.timings.duration);
  RateContentOK.add(contentOK);
  GaugeContentSize.add(res.body.length);
  CounterErrors.add(!contentOK);

  sleep(1);
}
