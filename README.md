# CPP Clinic Clone

This repository contains a simplified full-stack setup inspired by [cpp.pl](https://cpp.pl/en).

## Stack
- **Frontend**: Next.js (App Router) with Tailwind CSS and React Admin
- **Backend**: Django, Django REST Framework, PostgreSQL
- **Task Queue**: Celery with Redis
- **Deployment**: Docker Compose

## Features
- Public pages for home, about, contact, services and knowledge base
- Appointment booking flow with basic steps
- Admin dashboard powered by React Admin
- API endpoints for specialists, appointment slots, bookings and payments
- Email notifications via Celery tasks

## Development
1. Build and start services:
   ```bash
   docker-compose up --build
   ```
2. The frontend will be available on `http://localhost:3000` and the backend on `http://localhost:8000`.

## GitHub Actions
A sample workflow is included in `.github/workflows/ci.yml` to run backend tests and build Docker images.
