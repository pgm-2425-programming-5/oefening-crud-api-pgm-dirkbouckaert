'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NavBar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  return (
    <div className="bg-gray-200">
      <nav className="mx-auto max-w-3xl p-6">
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className={cn(
                'rounded-lg bg-slate-50 px-4 py-2 transition hover:bg-slate-100',
                pathname === '/' && 'bg-slate-900 text-slate-50'
              )}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={cn(
                'rounded-lg bg-slate-50 px-4 py-2 transition hover:bg-slate-100',
                pathname === '/posts' && 'bg-slate-900 text-slate-50'
              )}
            >
              Posts
            </Link>
          </li>
          {!session && (
            <li>
              <Link
                href="/login"
                className={cn(
                  'rounded-lg bg-slate-50 px-4 py-2 transition hover:bg-slate-100',
                  pathname === '/login' && 'bg-slate-900 text-slate-50'
                )}
              >
                Login
              </Link>
            </li>
          )}
          {session && (
            <li>
              <button className="rounded-lg bg-slate-50 px-4 py-2 transition hover:bg-slate-100">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
