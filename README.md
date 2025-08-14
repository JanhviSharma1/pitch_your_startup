![YCDirectory Banner](/public/ycdirectory-banner.png)
# YCDirectory

**YCDirectory** is a modern platform designed to help startups gain exposure, connect with fellow entrepreneurs, and grow together.  
As the name suggests, it serves as a **directory for startups**, allowing founders to **showcase their projects**, **pitch their ideas**, and **network with like-minded innovators**.

## 🌟 Features

- **Live Content API**:  Displays the latest startup ideas dynamically on the homepage using Sanity's Content API.  
- **GitHub Authentication**:  Allows users to log in easily using their GitHub account.  
- **Pitch Submission**:  Users can submit startup ideas, including title, description, category, and multimedia links (image or video).  
- **View Pitches**: Browse through submitted ideas with filtering options by category.  
- **Pitch Details Page**:  Click on any pitch to view its details, with multimedia and description displayed.  
- **Profile Page**:  Users can view the list of pitches they've submitted.  
- **Editor Picks**:  Admins can highlight top startup ideas using the *Editor Picks* feature managed via Sanity Studio.  
- **Views Counter**:  Tracks the number of views for each pitch instead of an upvote system.  
- **Search**:  Search functionality to load and view pitches efficiently.  
- **Minimalistic Design**:  Fresh and simple UI with only the essential pages for ease of use and a clean aesthetic.  

## Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)  
- **Web Framework:** [Next.js 15](https://nextjs.org/)  
- **Content Management:** [Sanity](https://www.sanity.io/)  
- **Styling:** [TailwindCSS](https://tailwindcss.com/)  
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)  
- **Language:** [TypeScript](https://www.typescriptlang.org/)  
- **Error Tracking:** [Sentry](https://sentry.io/)


### 1️⃣ Clone the repository
```bash
git clone https://github.com/JanhviSharma1/pitch_your_startup.git
cd pitch_your_startup
```

### 2️⃣ Install dependencies
```bash 
npm install
```

### 3️⃣ Set up environment variables
Create a .env.local file in the root directory and add:
```bash
AUTH_SECRET="your_auth_secret"
AUTH_GITHUB_ID="your_github_id"
AUTH_GITHUB_SECRET="your_github_secret"
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="your_dataset"
NEXT_PUBLIC_SANITY_API_VERSION="your_api_version"
SANITY_WRITE_TOKEN="your_sanity_token"
SENTRY_AUTH_TOKEN="your_sentry_token"
```

### 4️⃣ Run the development server
```bash
npm run dev
```
Open http://localhost:3000 to view the app.
