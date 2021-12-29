##Spike testing
Spike testing is a variation of a stress testing, but it does not gradually increase the load. Instead it spikes to extreme load over a very short period of time. While a stress test allows the SUT (System Under Test) to gradually scale up its infrastructure, a spike test does not.

####What is spike testing?
#####Spike testing is a type of stress testing that immediately overwhelms the system with an extreme surge of load.

You want to execute a spike test to determine:

1. How your system will perform under a sudden surge of traffic.
2. If your system will recover once the traffic has subsided.

A classic need for a spike testing is if you've bought advertising on a big television event, such as the Super Bowl or a popular singing competition.

You’re expecting a large number of people to see your advertisement and immediately visit your website, which can end with disastrous results if you haven't tested for this scenario and made performance optimizations in advance.

Another typical example is a "HackerNews hug of death" - someone links to your website on one of the popular internet forums such as HackerNews or Reddit which makes thousands of people visit your system at once.

Success or failure of a spike test depends on your expectations. Systems generally react in 4 different ways:

* Excellent: 
  system performance is not degraded during the surge of traffic. Response time is similar during low traffic and high traffic.
* Good: 
  Response time is slower, but the system does not produce any errors. All requests are handled.
* Poor: 
  System produces errors during the surge of traffic, but recovers to normal after the traffic subsides.
* Bad: 
  System crashes, and does not recover after the traffic has subsided.
