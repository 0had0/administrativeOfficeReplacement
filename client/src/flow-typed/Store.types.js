declare type Action = { type: string, payload: any };

// <== API state
declare type LoadingState = { [action: String]: Boolean };
declare type LoadedState = { [action: String]: Boolean };
declare type ErrorState = { [action: String]: String };

declare type ApiState = {
  loading: LoadingState,
  loaded: LoadedState,
  error: ErrorState,
};
// ==>

// <== Root state

// <== App state
declare type AppState = { theme: ThemeMode };
// ==>

declare type PostLoginBody = { email: string, password: string };
declare type AccountId = string | string | null;
declare type AuthState = { accountId: AccountId, isAuth: boolean };

declare type RootState = { auth: AuthState, api: ApiState, app: AppState };
// ==>
