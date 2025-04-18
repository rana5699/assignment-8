# 🛠️ Bike Service Management API

An Express.js-based backend API for managing bike services and customers. It includes features for bike tracking, service records, and status-based filtering.

---

## 🌐 Live Backend URL

🚀 [Live API on Render](https://assignment-8-eight-olive.vercel.app/)  

---

## 💻 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (Prisma ORM)
- **ORM:** Prisma
- **Deployment:** Railway
- **Error Handling:** Global custom middleware
- **UUID & Dates:** Prisma defaults

---

## 🔧 Install & Setup Guide

### 1. **Clone the Repository**

```bash
git clone https://github.com/rana5699/assignment-8.git
```
Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn prod
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`DATABASE_URL`




## ✨ Key Features

- ✅ **Customer Management** (CRUD)
- 🏍️ **Bike Management** linked to customers
- 🛠️ **Service Records** with status tracking (pending, in-progress, done)
- 📅 **Automatic Date Handling** for service and completion
- 🧠 **Filter API** for overdue or pending services (older than 7 days)
- 🛑 **Global Error Handler** for cleaner debugging
- 📦 **Prisma ORM** integration with PostgreSQL
- 🔐 **Unique UUIDs** for customer, bike, and service IDs
- 🚀 **Production-ready Deployment** via Render
