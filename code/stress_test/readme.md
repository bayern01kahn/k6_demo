## Stress testing

Stress testing is one of the many different types of load testing.

While load testing is primarily concerned with assessing the systems performance, the purpose of stress testing is to assess the availability and stability of the system under heavy load.


#### What is stress testing?
##### Stress Testing is a type of load testing used to determine the limits of the system. The purpose of this test is to verify the stability and reliability of the system under extreme conditions.


To execute a proper stress test, you need a tool to push the system over its normal operations, to its limits, and beyond the breaking point.

You typically want to stress test an API or website to determine:

1. How your system will behave under extreme conditions.
2. What the maximum capacity of your system is in terms of users or throughput.
3. The breaking point of your system and its failure mode.
4. If your system will recover without manual intervention after the stress test is over.

When stress testing, you're going to configure the test to include more concurrent users or generate higher throughput than:

1. Your application typically sees.
2. You think it will be able to handle.

It's important to note that a stress test does not mean you're going to overwhelm the system immediately — that's a spike test, which we'll cover in a minute.

A stress test should be configured in many gradual steps, each step increasing the concurrent load of the system.

A classic example of a need for stress testing is "Black Friday" or "Cyber Monday" - two days each year that generate multiple times the normal traffic for many websites.

A stress test can be only a couple of steps, or it can be many, as you see in the example below. No matter how many steps you include, just remember this type of test is about finding out what happens when pushing the performance limits of your system — so don’t worry about being too aggressive.

With this said, you probably don't want to run this test against your production environment. We recommend running a stress test in a UAT or staging environment.
