// I JavaScript jobber man mye med objekter som man transformerer.

type ValidationMessages<T extends {}> = { [K in keyof T]: string | undefined }

type FetchState<T>
  = { status: 'UNFETCHED' }
  | { status: 'IN_PROGRESS' }
  | { status: 'SUCCESS', data: T }
  | { status: 'FAILURE', error: unknown }

export type ResourceState<T extends {}> = { [K in keyof T]: FetchState<T[K]> };
