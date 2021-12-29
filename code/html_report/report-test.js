import http from 'k6/http';
import {
  htmlReport
} from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import {
  textSummary
} from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

import {
  check,
  sleep
} from "k6";
import {
  Counter
} from "k6/metrics";

let ErrorCount = new Counter("errors");

export const options = {
  vus: 1000,
  duration: "30s",
  thresholds: {
    errors: ["count<10"]
  },
  stages: [{
      durations: "1s",
      target: 10
    },
    {
      durations: "9s",
      target: 100
    },
    {
      durations: "15s",
      target: 1000
    },
    {
      durations: "5s",
      target: 100
    }
  ]
};

// export function setup() {
//   // set up code
// }

export default function () {
  let res = http.get("https://swapi.dev/api/people/30/")
  let success = check(res, {
    "status is 200": r => r.status === 200
  });
  if (!success) {
    ErrorCount.add(1);
  }

  sleep(2);
}

export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, {
      indent: " ",
      enableColors: true
    }),
  };
}

// export function teardown(data) {

// }
