// I JavaScript jobber man mye med objekter som man transformerer. I TypeScript
// kan du bruke "mapped types" for å definere generiske typer som avhenger av
// feltene på type-parameteret.

// Eksempler:

type ValidationMessages<T extends {}> = { [K in keyof T]: string | undefined }

type Validator<T> = (data: T) => ValidationMessages<T>


type FetchState<T>
  = { status: 'UNFETCHED' }
  | { status: 'IN_PROGRESS' }
  | { status: 'SUCCESS', data: T }
  | { status: 'FAILURE', error: unknown }

type ResourceState<T extends {}> = { [K in keyof T]: FetchState<T[K]> };
