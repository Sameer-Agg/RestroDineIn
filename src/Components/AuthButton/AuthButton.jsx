import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

export default function AuthButton() {
  return (
    <div>
      {/* Show Sign In button if user is signed out */}
      <SignedOut>
        <SignInButton>
          <button style={{
            padding: '8px 16px',
            backgroundColor: '#1d4ed8',
            color: 'white',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      {/* Show profile avatar if user is signed in */}
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-10 h-10 rounded-full'
            },
          }}
        />
      </SignedIn>
    </div>
  );
}
