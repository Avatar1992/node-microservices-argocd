<img width="1914" height="1077" alt="Screenshot from 2025-11-03 08-47-56" src="https://github.com/user-attachments/assets/4d94ad18-5985-4699-8940-38655f60c1c5" /># 🚀 Node.js Microservices Deployment with Argo CD on Minikube

A complete **DevOps hands-on project** demonstrating how to deploy a **Node.js + MongoDB microservices application** on **Kubernetes (Minikube)** using **Argo CD** for GitOps-based Continuous Delivery.

---

## 🧩 Project Overview

This project showcases a simple **3-tier microservice architecture**:

- **Frontend:** Node.js-based UI  
- **Backend:** Node.js REST API  
- **Database:** MongoDB  
- **Deployment Environment:** Minikube Kubernetes Cluster  
- **GitOps Tool:** Argo CD  

All services are containerized using Docker, deployed to Kubernetes, and automatically synchronized via Argo CD.

---

## ⚙️ Tech Stack

| Tool/Technology | Purpose |
|-----------------|----------|
| **Node.js** | Frontend and backend microservices |
| **MongoDB** | Database for storing user data |
| **Docker** | Containerization of services |
| **Kubernetes (Minikube)** | Local orchestration platform |
| **Argo CD** | GitOps-based continuous delivery |
| **GitHub** | Version control for manifests & source code |

---

## 🧱 Architecture

      ┌────────────┐        ┌────────────┐        ┌────────────┐
      │ Frontend   │ <----> │ Backend    │ <----> │ MongoDB    │
      │ Node.js    │        │ Node.js API│        │ Database   │
      └─────┬──────┘        └─────┬──────┘        └─────┬──────┘
            │                         │
            │    Kubernetes Services  │
            └────────────┬────────────┘
                         │
                  Minikube Cluster

---

## 📂 Project Structure
node-microservices-argocd/
│
├── frontend/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
│
├── backend/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
│
├── manifests/
│ ├── frontend-deployment.yaml
│ ├── backend-deployment.yaml
│ ├── mongo-deployment.yaml
│ ├── namespace.yaml
│ └── argo-app.yaml
│
└── README.md

---

## 🐳 Step 1: Build and Push Docker Images

```bash
# Frontend
cd frontend
docker build -t <your-dockerhub-username>/frontend:latest .
docker push <your-dockerhub-username>/frontend:latest

# Backend
cd ../backend
docker build -t <your-dockerhub-username>/backend:latest .
docker push <your-dockerhub-username>/backend:latest

## Step 2: Deploy to Kubernetes (Minikube)

# Start Minikube
minikube start

# Create namespace
kubectl apply -f manifests/namespace.yaml

# Deploy services
kubectl apply -f manifests/mongo-deployment.yaml -n node-app
kubectl apply -f manifests/backend-deployment.yaml -n node-app
kubectl apply -f manifests/frontend-deployment.yaml -n node-app

# Verify pods
kubectl get pods -n node-app

# Verify services
kubectl get svc -n node-app

Example Output:
NAME                        READY   STATUS    RESTARTS   AGE
backend-54df7c47b4-brrks    1/1     Running   0          2m
frontend-6654688b54-c9nb5   1/1     Running   0          2m
mongo-85d555b746-bz4r7      1/1     Running   0          2m

Step 3: Access Application
minikube ip
http://<minikube-ip>:30001

Step 3: Setup Argo CD

# Create namespace
kubectl create namespace argocd

# Install Argo CD
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Forward Argo CD service
kubectl port-forward svc/argocd-server -n argocd 8080:443

https://localhost:8080

Get admin password:
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 -d

Login with:

Username: admin

Password: (above output)

# Argo CD Application (GitOps)

Apply your Argo CD app manifest:

Validation

kubectl get pods -n node-app
kubectl get svc -n node-app




