# lab8: Storage in Kubernetes 

# Short Description
The lab we are working on involves  Kubernetes storage using Minikube. We can see  various storage types such as `emptyDir`, `hostPath`, and `PersistentVolume`. The project aims to demonstrate the basic principles of managing storage in a Kubernetes environment.

# List of Functionalities
1. Using `emptyDir` Storage: Demonstrates the usage of `emptyDir` for temporary storage linked to a Pod's lifecycle.
2. Using `hostPath` Storage: Implements `hostPath` to map a directory from the host to the Pod.
3. Using `PersistentVolume`: Showcases the use of `PersistentVolume` and `PersistentVolumeClaim` to manage long-term and resilient storage.

# Installation Instructions
1. Install Minikube following the instructions for your specific OS.
2. Start Minikube using `minikube start`.
3. Verify Minikube status with `minikube status`.
4. Clone the Git repository and navigate to the `lab/` directory.

# Usage Instructions
## 1. Use emptyDir Storage
- Complete the `lab/emptyDir/deployment.yml` file.
- Apply the configuration with `kubectl apply -f lab/emptyDir/deployment.yml`.

## 2. Use hostPath Storage
- Complete the `lab/hostPath/deployment.yml` file.
- Apply the configuration with `kubectl apply -f lab/hostPath/deployment.yml`.

## 3. Use PersistentVolume
- Follow the tutorial [here](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/) to set up PersistentVolume.


# Steps of the lab
after applying kubectl 'apply -f lab/emptyDir/deployment.yml' on the terminal we get the following response:
'deployment.apps/project-devops configured'
<br>
after applying the follwoing command 'kubectl get pods' on the terminal we get those responses 
<br>
NAME                              READY   STATUS    RESTARTS         AGE
loki-0                            1/1     Running   8 (2m43s ago)    28h
project-devops-7dccc8886f-7w25r   2/2     Running   18 (2m43s ago)   5d22h
project-devops-7dccc8886f-cf9hc   2/2     Running   18 (2m43s ago)   5d22h
project-devops-7dccc8886f-vk6xr   2/2     Running   18 (2m44s ago)   5d22h



# Author Information
- BENSARSA Alexandre
- CHAOUACHI Soraya











