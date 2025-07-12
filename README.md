# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



🏥 Hospital Management System (Frontend-Only)
A fully functional hospital management system built using React. It supports three types of users:

👨‍⚕️ Doctor

🧑‍💼 Hospital Administrator

🧑‍🦽 Patient

No backend or database is used. All data is persisted in localStorage.

🚀 Features
👤 User Roles
Role	Capabilities
Admin	Register hospitals with departments, manage departments
Doctor	Register/login, define specializations, link to hospitals, set slots/fees
Patient	View hospitals and doctors, search by specialization/hospital, book appointments, view booking history

🧱 Technology Stack
React (Functional Components & Hooks)

React Router DOM

CSS

LocalStorage (as persistent database)

💻 Setup Instructions
1. Clone the Repository
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
2. Install Dependencies
npm install
3. Run the App
npm start
Open http://localhost:3000 in your browser.

🗃️ Data Flow Overview
1. localStorage Keys Used:
Key	Description
hospitals	List of registered hospitals
doctors	Registered doctor profiles
bookings	Patient bookings (appointments)
currentUser	Stores currently logged-in user info

2. Booking Flow:
Patient selects specialization and hospital.

System filters available doctors.

Patient books a slot.

Booking is saved to localStorage under bookings.

📷 Screenshots
(Add screenshots of Hospital Register, Doctor Booking, Patient Dashboard, etc.)

🛠️ Future Enhancements
⛅ Add backend (Node.js + Express + PostgreSQL)

📱 Make mobile responsive

🔐 Role-based route protection

📊 Admin dashboard with analytics

👨‍💻 Author
Harshavardhan Reddy
[LinkedIn](https://www.linkedin.com/in/harshavardhan-reddy-391b51218/) • [GitHub](https://github.com/Harsha572)
