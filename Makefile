.PHONY: setup setup-backend setup-frontend run-backend run-frontend

setup: setup-backend setup-frontend

setup-backend:
	cd backend && python3 -m venv .venv && .venv/bin/pip install -r requirements.txt

setup-frontend:
	cd frontend && npm install

run-backend:
	cd backend && .venv/bin/python3 app.py

run-frontend:
	cd frontend && npm run dev
