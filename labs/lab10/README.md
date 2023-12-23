# LAB10 - Part 1

## 1. Quick Start with Istio : 

All of this part was done in the last lab

## 2. Install and use Prometheus

To install and use Prometheus, we reuse the last lab cluster and we install dependencies for Prometheus thanks to this comand : 
```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/prometheus.yaml
```

And we obtain thoses results : 
![Image1](C:\Users\alexb\OneDrive\Bureau\starrr\labs\lab10\images_lab10\Image1.png)


## 3. Install and use Grafana

To install and use Grafana, we reuse the last lab cluster and we install dependencies for Grafana thanks to this comand : 
```
kubectl apply -f https://raw.githubusercontent.com/istio/istio/release-1.20/samples/addons/grafana.yaml
```

And we enter it in our bash to apply it  : 
![Image2](C:\Users\alexb\OneDrive\Bureau\starrr\labs\lab10\images_lab10\Image2.png)