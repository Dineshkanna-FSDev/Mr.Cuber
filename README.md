# Mr.Cuber

Mr.Cuber is a full-stack application featuring a React (Vite) frontend and a Django backend.

## Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Python](https://www.python.org/) (v3.8 or higher)
- [Git](https://git-scm.com/)

## Local Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd Mr.Cuber
```

### 2. Frontend Setup (React + Vite)

Navigate to the `frontend` directory and install the dependencies:

```bash
cd frontend
npm install
```

Start the development server:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`.

### 3. Backend Setup (Django)

Open a new terminal window, navigate to the `backend` directory, and set up a virtual environment:

```bash
cd backend
python -m venv venv
```

Activate the virtual environment:
- On Windows: `venv\Scripts\activate`
- On macOS/Linux: `source venv/bin/activate`

Install the required packages (assuming you have a `requirements.txt`):

```bash
pip install -r requirements.txt
```
*(If `requirements.txt` does not exist, you may need to install django and other dependencies manually, e.g., `pip install django django-cors-headers djangorestframework`)*

Apply migrations and start the backend server:

```bash
python manage.py migrate
python manage.py runserver
```

The backend API will be available at `http://localhost:8000`.

## Hosting on Vercel

Vercel is an excellent platform for hosting frontend frameworks like React/Vite. You can also host Django on Vercel using serverless functions, though deploying the backend on platforms like Render or Heroku is more common.

### Option A: Deploying only the Frontend to Vercel

This is the simplest and most recommended approach for Vercel.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/).
3. Click on **Add New...** -> **Project**.
4. Import your repository.
5. In the **Configure Project** section:
   - **Framework Preset**: Vercel should automatically detect **Vite**.
   - **Root Directory**: Click "Edit" and select the `frontend` folder.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Add any environment variables if required (e.g., your backend API URL like `VITE_API_URL`).
7. Click **Deploy**.

*Note: If you deploy the frontend to Vercel, you will need to host your Django backend on a platform like Render, Railway, or Heroku, and update the frontend to point to the live backend URL.*

### Option B: Deploying Full-Stack (Frontend + Django Backend) on Vercel

If you want to host both the React frontend and Django backend on Vercel, you will need to add a `vercel.json` configuration file at the root of your project to tell Vercel how to handle the Python (Django) serverless functions and the Node.js frontend. 

Create a `vercel.json` in the root `Mr.Cuber/` directory (example configuration):

```json
{
  "builds": [
    {
      "src": "backend/backend/wsgi.py",
      "use": "@vercel/python",
      "config": { "maxLambdaSize": "15mb", "runtime": "python3.9" }
    },
    {
      "src": "frontend/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "backend/backend/wsgi.py"
    },
    {
      "src": "/(.*)",
      "dest": "frontend/$1"
    }
  ]
}
```

*You would also need a `build.sh` script to install Python dependencies, configure `wsgi.py` for serverless execution (e.g., using `wsgi-vercel`), and make sure Vercel builds the frontend.*

**Steps:**
1. Configure your `vercel.json` and adjust `wsgi.py` as needed for Vercel Serverless.
2. Push your code to GitHub.
3. Import the root repository in Vercel (do not change the root directory).
4. Deploy!

---
Happy coding!
