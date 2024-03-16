import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhooks',
    'question/:id',
    '/tags',
    '/tags:id',
    '/profile/:id',
    '/community',
    '/jobs',
    '/api/webhooks(.*)',
  ],
  ignoredRoutes: ['/api/webhooks', '/api/chatgpt', '/api/webhooks(.*)'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
