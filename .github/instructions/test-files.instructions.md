---
applyTo: "**/*.spec.ts"
---

# Test File Instructions

## Testing Framework

- Use **Vitest** as the test runner and assertion library
- Use **Spectator** (`@ngneat/spectator/vitest`) for Angular component and service testing

## Observables

- Use `firstValueFrom` from `rxjs` to resolve Observable results in tests
- **Never** use `.subscribe()` inside tests

## Mocking

- **Never** use `vi.mock()` to mock modules
- Use Spectator's `mocks` array (e.g., `createServiceFactory({ mocks: [MyService] })`) to mock dependencies
- Access mocks via `spectator.inject(MyService)` — they are automatically typed as `SpyObject<MyService>`

## Launch tests

- Use `npx run test-ci` to run tests
