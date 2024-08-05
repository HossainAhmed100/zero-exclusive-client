import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from './routes/Routes';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
          <RouterProvider router={router} />
          <Toaster
            position="bottom-right"
            reverseOrder={false}
          />
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
