// src/pages/protected-page.tsx
import { useProtectedRoute } from '../hooks/useProtectedRoute';

const ProtectedPage = () => {
  useProtectedRoute();
  // Your protected page content
  return <div>Protected content goes here.</div>;
};

export default ProtectedPage;
