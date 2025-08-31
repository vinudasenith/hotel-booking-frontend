# 🏨 Hotel Booking Management Frontend

![Homepage Screenshot](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/home%20page.jpeg)

## 📌 Overview
This is the frontend for a full-stack hotel booking management web application. It provides a responsive, user-friendly interface for browsing hotels, viewing galleries, making bookings, and managing user/admin functionalities. Built with **Angular** and styled with **Tailwind CSS**, it integrates with the backend APIs to deliver a seamless experience.

## 🛠 Tech Stack
- **Angular**: Version 17.x
- **Tailwind CSS**: Version 3.x
- **TypeScript**: Version 5.x
- **Node.js**: Version 20.x
- **npm**: Version 10.x or higher

## ✨ Features
- ** 👤 User Features**:
  - Browse hotels, rooms, and gallery etc.
  - User registration and login
  - Book rooms 
- ** 🛠 Admin Features**:
  - View and manage users (block/unblock)
  - View, confirm, or cancel bookings
  - Add, update, or delete rooms
- Responsive design for mobile and desktop

## 📋 Prerequisites
- Node.js 20.x or higher
- Angular CLI 17.x or higher
- A modern web browser (e.g., Chrome, Firefox)
- Backend server running (see backend README for setup)

## 🚀 Setup Instructions
1. ** 📥 Clone the Repository**:
   ```bash
   git clone https://github.com/vinudasenith/hotel-booking-frontend.git
   cd hotel-booking-frontend
   ```

2. ** 📦 Install Dependencies**:
   ```bash
   npm install
   ```

3. ** ⚙ Configure Environment**:
   - Update the API base URL in `src/environments/environment.ts`:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:8080/api'
     };
     ```

4. ** ▶ Run the Application**:
   Start the Angular development server:
   ```bash
   ng serve
   ```
   The application will be available at `http://localhost:4200`.

5. ** 📦 Build for Production**:
   ```bash
   ng build
   ```
## 📂 Project Structure
```
hotel-booking-frontend/
├── src/
│   ├── app/
│   │   ├── shared/          # Reusable components (e.g. header, footer )
│   │   ├── services/        # Services for API calls 
│   │   ├── pages/           # Page components (e.g., Home, Booking, AdminDashboard)
│   │   ├── guards/          # middleware for routes 
│   │   └── app.module.ts    # Main Angular module
│   ├── assets/              # Static assets (images, icons)
│   ├── styles/              # Global styles and Tailwind CSS config
│   └── environments/        # Environment configuration files
├── public                   # Images
├── package.json             # npm dependencies
├── tailwind.config.js       # Tailwind CSS configuration
|── angular.json             # Angular CLI configuration 
```

## 🎨 Tailwind CSS Configuration
- Tailwind CSS is configured in `tailwind.config.js`.

## 🌍 Environment Variables
- `apiUrl`: Backend API base URL (set in `environment.ts` or `environment.prod.ts`).
- Ensure the backend server is running and accessible.

## 🧪 Running Tests
- Unit tests:
  ```bash
  ng test
  ```

## 📄 License
[Specify your license, e.g., MIT License]

## 📸 Screenshots of webpages
![register page Screenshot](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/user%20registration.jpeg)

![add room page](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/admin%20add%20room.jpeg)

![add user managment](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/admin%20user%20managment.jpeg)

![add booking managment](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/admin%20booking%20managment.jpeg)

![rooms page Screenshot](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/hotel%20rooms.jpeg)

![cart page Screenshot](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/cart%20page.jpeg)

![things to do page Screenshot](https://github.com/vinudasenith/hotel-booking-frontend/blob/master/webapp-shots/things%20to%20do.jpeg)




