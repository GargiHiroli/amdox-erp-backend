
# AMDox ERP Backend

A scalable and modular ERP backend system built to manage enterprise operations including authentication, tenant management, users, departments, employee workflows, and business services.

---

# Table of Contents

1. Overview
2. Features
3. Tech Stack
4. Project Architecture
5. Modules
6. Installation
7. Environment Variables
8. Running the Project
9. API Documentation
10. Authentication
11. Database Setup
12. Folder Structure
13. Git Workflow
14. Deployment
15. Future Enhancements
16. Contributing
17. License

---

# Overview

AMDox ERP Backend is a multi-tenant enterprise resource planning backend application designed for scalability, security, and modular business operations.

The system supports:

* Role-based authentication
* Tenant-based architecture
* Secure APIs
* Department and employee management
* Business process integration
* ERP service extensibility

---

# Features

* Multi-Tenant Architecture
* JWT Authentication
* Role-Based Access Control (RBAC)
* User & Employee Management
* Department Management
* RESTful APIs
* Secure Environment Configuration
* Modular Backend Structure
* Database Integration
* API Validation
* Middleware Support
* Scalable Service Architecture

---

# Tech Stack

| Technology         | Purpose              |
| ------------------ | -------------------- |
| Node.js            | Runtime Environment  |
| NestJS / Express   | Backend Framework    |
| TypeScript         | Programming Language |
| PostgreSQL / MySQL | Database             |
| Prisma / TypeORM   | ORM                  |
| JWT                | Authentication       |
| bcrypt             | Password Hashing     |
| Docker             | Containerization     |
| GitHub             | Version Control      |

---

# Project Architecture

```text
Client Applications
        ↓
 REST API Gateway
        ↓
 Authentication Layer
        ↓
 Business Services
        ↓
 Database Layer
```

---

# Modules

## Authentication Module

* Login
* Registration
* JWT Tokens
* Role Permissions

## Tenant Module

* Tenant Creation
* Tenant Isolation
* Tenant Configuration

## User Module

* User CRUD Operations
* User Roles
* Permissions

## Employee Module

* Employee Records
* Department Assignment
* Employee Profiles

## Department Module

* Department Creation
* Hierarchy Management

---

# Installation

Clone the repository:

```bash
git clone git@github.com:GargiHiroli/amdox-erp-backend.git
```

Move into project directory:

```bash
cd amdox-erp-backend
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file:

```env
PORT=3000

DATABASE_URL=

JWT_SECRET=

JWT_EXPIRES_IN=1d
```

---

# Running the Project

Development mode:

```bash
npm run start:dev
```

Production mode:

```bash
npm run build
npm run start:prod
```

---

# API Documentation

API documentation can be accessed using:

```bash
/swagger
```

Example:

```text
http://localhost:3000/swagger
```

---

# Authentication

The application uses:

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Role-Based Access Control

---

# Database Setup

Run migrations:

```bash
npm run migration:run
```

Seed database:

```bash
npm run seed
```

---

# Folder Structure

```text
src/
│
├── auth/
├── tenant/
├── users/
├── employees/
├── departments/
├── common/
├── middleware/
├── guards/
├── interceptors/
├── database/
├── config/
└── main.ts
```

---

# Git Workflow

Create feature branch:

```bash
git checkout -b feature/module-name
```

Commit changes:

```bash
git commit -m "Added feature"
```

Push branch:

```bash
git push origin feature/module-name
```

---

# Deployment

Deployment can be done using:

* Docker
* AWS
* Railway
* Render
* DigitalOcean

---

# Future Enhancements

* Payroll Management
* Attendance Tracking
* Notification Services
* Email Integration
* Audit Logs
* Analytics Dashboard
* Microservice Architecture

---

# Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to your branch
5. Create a Pull Request

---

# License

This project is licensed under the Apache-2.0 License.
