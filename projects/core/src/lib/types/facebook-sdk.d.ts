interface Window {
  FB: FB.FacebookStatic;
  fbAsyncInit: () => void;
}

declare namespace FB {
  interface FacebookStatic {
    init(params: InitParams): void;
    login(callback: (response: LoginStatusResponse) => void, params?: LoginOptions): void;
    logout(callback?: (response: unknown) => void): void;
    getLoginStatus(callback: (response: LoginStatusResponse) => void): void;
    api(path: string, callback: (response: ApiResponse) => void): void;
    api(path: string, params: Record<string, string>, callback: (response: ApiResponse) => void): void;
  }

  interface InitParams {
    appId: string;
    cookie?: boolean;
    xfbml?: boolean;
    version: string;
  }

  interface LoginOptions {
    scope?: string;
    return_scopes?: boolean;
    auth_type?: string;
  }

  interface LoginStatusResponse {
    status: 'connected' | 'not_authorized' | 'unknown';
    authResponse: AuthResponse | null;
  }

  interface AuthResponse {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
  }

  interface ApiResponse {
    id?: string;
    name?: string;
    email?: string;
    picture?: { data: { url: string } };
    error?: { message: string; type: string; code: number };
  }
}
