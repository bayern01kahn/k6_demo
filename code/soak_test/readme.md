## Soak testing

While load testing is primarily concerned with performance assessment, and stress testing is concerned with system stability under extreme conditions, soak testing is concerned with reliability over a longer period of time.

A soak test uncovers performance and reliability issues stemming from a system being under pressure for an extended period.

Reliability issues typically relate to bugs, memory leaks, insufficient storage quotas, incorrect configuration or infrastructure failures. Performance issues typically relate to incorrect database tuning, memory leaks, resource leaks or a large amount of data.

With a soak test you can simulate days worth of traffic in only a few hours.

You typically run this test to:

* Verify that your system doesn't suffer from bugs or memory leaks, which result in a crash or restart after several hours of operation.
* Verify that expected application restarts don't lose requests.
* Find bugs related to race-conditions that appear sporadically.
* Make sure your database doesn't exhaust the allotted storage space and stops.
* Make sure your logs don't exhaust the allotted disk storage.
* Make sure the external services you depend on don't stop working after a certain amount of requests are executed.

You may discover that the performance of your application was much better at the beginning of the test in comparison to the end. This typically happens if your database is not properly tuned. Adding indexes or assigning additional memory may help.

!!! Warning Make a cost estimate before starting a soak test
Soak tests can simulate days or weeks worth of normal traffic within a few hours. This means that your infrastructure and vendor costs may be significant.

If you are testing a website, you should consider excluding your CDN from the test.

If your system makes use of external services, you may want to calculate the cost before you start the test.

#### When to do soak testing?
Soak testing helps you uncover bugs and reliability issues that surface over an extended period. Many complex systems have bugs of this nature.

You should execute soak tests after your standard load tests are successful, and your system has been found stable when executing a stress test.

Soak testing is the last major step on the road to building reliable systems.

