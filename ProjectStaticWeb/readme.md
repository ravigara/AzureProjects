Azure Static Website Deployment with CI/CD

A production-ready static website deployed using Microsoft Azure Storage with an automated CI/CD pipeline using GitHub Actions.

This project demonstrates cloud deployment automation, secure authentication using Azure Service Principal, and static website hosting architecture.

📌 Project Overview

This project provisions a static website hosted on Azure Blob Storage and automatically deploys updates using GitHub Actions whenever changes are pushed to the main branch.

🏗 Architecture

Developer (Git Push)
        ↓
GitHub Repository
        ↓
GitHub Actions Runner (Ubuntu VM)
        ↓
Azure Login (Service Principal - RBAC)
        ↓
Azure Storage Account ($web container)
        ↓
Public Static Website Endpoint

🧰 Tech Stack

Microsoft Azure Storage Account

Azure Blob Storage (Static Website Hosting)

Azure CLI

GitHub Actions (CI/CD)

Azure RBAC (Role-Based Access Control)

📂 Project Structure

AzureProjects/
│
├── ProjectStaticWeb/
│     ├── index.html
│     ├── style.css
│     └── 404.html
│
└── .github/
      └── workflows/
            └── deploy.yml

⚙️ Implementation Steps
1️⃣ Create Azure Resources

Created Resource Group

Created Storage Account

Enabled Static Website hosting

Configured:

index.html

404.html

2️⃣ Create Azure Service Principal

Used Azure CLI:
az ad sp create-for-rbac \
  --name "github-static-deployer" \
  --role contributor \
  --scopes /subscriptions/<subscription-id> \
  --sdk-auth
This generated secure JSON credentials for CI/CD authentication

3️⃣ Configure GitHub Secrets

Create a GitHub Secret Key and add the generated JSON to the secret value 
name the secret key to AZURE_CREDENTIALS (for easier access)

4️⃣ Configure GitHub Actions Workflow

Add a GitHub workflow 
.github/workflows/deploy.yml

Pipeline performs:

Checkout repository
Login to Azure
Upload website files to $web container

Deployment command used:
az storage blob upload-batch \
  --account-name <storage-account-name> \
  -d '$web' \
  -s ProjectStaticWeb

  🔄 CI/CD Workflow

Whenever code is pushed to main:

GitHub triggers workflow

Runner VM starts

Azure login via Service Principal

Website files uploaded to Azure

Live site updates automatically

🔐 Security Implementation

Used Azure RBAC for controlled access

Used Service Principal instead of personal credentials

Stored secrets securely in GitHub Actions

No hardcoded credentials in repository

🌐 Deployment

Static website is hosted via:

Azure Storage → $web container → Public endpoint

The site is accessible using the Azure-generated static website URL.

🧠 Key Cloud Concepts Demonstrated

Infrastructure Management in Azure

Role-Based Access Control (RBAC)

Identity & Access via Service Principal

Continuous Deployment

Automation using GitHub Actions

Secure secret management

Static Website Hosting Architecture

