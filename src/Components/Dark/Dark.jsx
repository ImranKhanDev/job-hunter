import React, { useState, useEffect } from 'react';
import './darkMode.css';
function Dark() {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>Dark</button>
         
        </div>
    );
}
export default Dark;