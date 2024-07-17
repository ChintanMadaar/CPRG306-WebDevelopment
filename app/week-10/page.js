"use client";
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

const UserProfile = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleGitHubSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub sign-in error:", error);
    }
  };

  const handleFirebaseSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Firebase sign-out error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center py-10">
      <div className="bg-slate-100 p-6 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-slate-900">
          User Profile
        </h1>
        <div className="flex flex-col items-center">
          <button
            className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg mb-4 transition-colors duration-300"
            onClick={handleGitHubSignIn}
          >
            Sign in with GitHub
          </button>
          <button
            className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-6 rounded-lg mb-4 transition-colors duration-300"
            onClick={handleFirebaseSignOut}
          >
            Sign out
          </button>
          <Link
            href="../week-10/shopping-list" // Ensure this path matches the actual route
            className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg mb-4 text-center block transition-colors duration-300"
          >
            Open Shopping List
          </Link>
          <div className="mt-4 text-center">
            {user ? (
              <p className="text-lg text-slate-800">
                Welcome, {user.displayName} ({user.email})
              </p>
            ) : (
              <p className="text-lg text-slate-800">
                Please sign in to view your profile.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
