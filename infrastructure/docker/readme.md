1. start influx and grafana
```
docker-compose up -d influxdb grafana
```

2. Load testing with Grafana dashboard
http://localhost:3000/d/k6/k6-load-testing-results"


3. run k6 script
```
docker-compose run --rm k6 run /scripts/ewoks.js
```
