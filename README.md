# A Safe Technical Test

## Documentation

### Project initialisation

_npm run dev_

### Authentication

- Through Github
- With credentials: rafaelalma92@gmail.com / unsafe-password

### Folder structure

- **/src/app/lib** for type definitions, data fetching and utility functions
- **/src/app/ui** for custom reusable components
- **/src/components** for _shadcnui_ reusable components
- Collocation of components by route

### Architecture

React Server Components with _streaming_

## Authentication with Next.js

DONE

- Authentication NextAuth.js
- With Credentials
- With GitHub provider
- Secure private routes

TODO

- With Google provider
- Secure routes through middleware

## Component development

DONE

- Reusable ui components
- Theme system through classes and local storage
- See _Customize_ button down right
- See **use-theme-switcher.ts**

TODO

- **use-theme-switcher.ts** with _useSyncExternalStorage_
- Fix FOUC with Client Hints

## Dashboard generation

DONE

- Summary of information
- D3.js graph

TODO

- Improve design
- Improve graph. Learn more about [D3.js](https://d3js.org/)

## Large Data Set Handling

DONE

- Dataset of 1000 invoices
- Pagination and querying through route params

TODO

- Validate responses with Zod

## Performance Optimisation

DONE

- SSR, RSC, Streaming

TODO

- Mobile performance using Google Lighthouse metrics
- [Partial Prerendering](https://nextjs.org/docs/app/api-reference/next-config-js/ppr)
- [Prefetching links in Middleware](https://nextjs.org/docs/app/api-reference/components/link#prefetching-links-in-middleware)
- Optimise queries

## Testing

TODO

- Unit testing with Vitest
- Component testing with React Testing Library
- E2E testing with Cypress or Playwright
