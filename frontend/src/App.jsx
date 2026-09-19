import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' // Global styles

// 1. Locate the HTML element with the id 'root'
// 2. Create a React root around it
// 3. Render your main App component inside it
createRoot(document.getElementById('root')).render(
    <App />
)
