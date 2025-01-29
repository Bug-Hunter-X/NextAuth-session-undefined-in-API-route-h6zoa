# NextAuth Session Undefined in API Route

This repository demonstrates a common issue encountered when using NextAuth.js with API routes: the session object is unexpectedly undefined, even when the user is clearly logged in.

## Problem

The provided `bug.js` file showcases the problem.  Despite successfully authenticating with NextAuth, the `session` object within the API route remains undefined, leading to an unexpected `401 Unauthorized` response.

## Solution

The `bugSolution.js` file provides a solution. The key is ensuring the correct usage of `unstable_getServerSession` and proper error handling.