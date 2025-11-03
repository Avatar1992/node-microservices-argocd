# 🚀 Node.js Microservices Deployment with Argo CD on Minikube  

![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![ArgoCD](https://img.shields.io/badge/Argo%20CD-FC6D26?style=flat-square&logo=argo&logoColor=white)
![GitOps](https://img.shields.io/badge/GitOps-A42E2B?style=flat-square&logo=git&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)
![Minikube](https://img.shields.io/badge/Minikube-FFDD00?style=flat-square&logo=kubernetes&logoColor=black)
![CI/CD](https://img.shields.io/badge/CI%2FCD-0066CC?style=flat-square&logo=jenkins&logoColor=white)

---

## 🧩 Project Overview

A complete **DevOps hands-on project** demonstrating how to deploy a **Node.js + MongoDB microservices application** on **Kubernetes (Minikube)** using **Argo CD** for **GitOps-based Continuous Delivery**.

This project automates:
- ✅ Continuous Delivery using **Argo CD**
- 🐳 Containerization with **Docker**
- ☸️ Orchestration via **Kubernetes**
- 🔄 Real-time sync between **GitHub** and your cluster

---

## 🧱 Architecture Diagram

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

## ⚙️ Tech Stack

| Tool/Technology | Purpose |
|-----------------|----------|
| **Node.js** | Frontend & backend microservices |
| **MongoDB** | Database for storing data |
| **Docker** | Containerization |
| **Kubernetes (Minikube)** | Local cluster environment |
| **Argo CD** | GitOps-based continuous delivery |
| **GitHub** | Version control for manifests & code |

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

## 🐳 Step 2: Deploy to Kubernetes (Minikube)

# Start Minikube
minikube start

# Create namespace
kubectl apply -f manifests/namespace.yaml

# Deploy services
kubectl apply -f manifests/mongo-deployment.yaml -n node-app
kubectl apply -f manifests/backend-deployment.yaml -n node-app
kubectl apply -f manifests/frontend-deployment.yaml -n node-app

# Verify pods and services
kubectl get pods -n node-app
kubectl get svc -n node-app

Step 3: Access the Application

minikube ip

Step 4: Set Up Argo CD

# Create Argo CD namespace
kubectl create namespace argocd

# Install Argo CD
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

# Port-forward Argo CD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

Access Argo CD at:
https://localhost:8080

Login credentials:
# Get admin password
kubectl get secret argocd-initial-admin-secret -n argocd -o jsonpath="{.data.password}" | base64 -d


<img width="1914" height="1077" alt="Screenshot from 2025-11-03 08-45-13" src="https://github.com/user-attachments/assets/fc005bc6-0736-46d7-a5f8-82cd1460c7e0" />

