export const options = {
  thresholds: {
    metric_name: [{
      threshold: 'p(99) < 10', // string
      abortOnFail: true, // boolean
      delayAbortEval: '10s', // string
      /*...*/
    }, ],
  },
};
