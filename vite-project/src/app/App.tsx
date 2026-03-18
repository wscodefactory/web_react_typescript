import { RouterProvider } from 'react-router';
import { DarkModeProvider } from './context/DarkModeContext';
import { router } from './routes';

export default function App() {
  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}
