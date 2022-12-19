import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import { ThemeProvider } from "@mui/material";
import { theme } from "./app/theme";

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
);