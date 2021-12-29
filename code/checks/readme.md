Checks are nice for codifying assertions, but unlike thresholds, checks will not affect the exit status of k6.

If you only use checks to verify that things work as expected, you will not be able to fail the whole test run based on the results of those checks.
