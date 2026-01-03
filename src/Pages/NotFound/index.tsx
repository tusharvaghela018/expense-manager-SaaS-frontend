import { ROUTES } from '@/Constants/Routes';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-900 via-gray-900 to-black px-6">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative z-10 max-w-xl text-center">
        <h1 className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-8xl font-extrabold text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-semibold text-white">Page Not Found</h2>

        <p className="mt-3 text-gray-400">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to={ROUTES.HOME.path}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="rounded-lg border border-gray-600 px-6 py-3 text-sm font-medium text-gray-300 transition hover:bg-gray-800"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
