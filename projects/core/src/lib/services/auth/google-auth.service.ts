import { Injectable, NgZone, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  error?: string;
  error_description?: string;
  error_uri?: string;
}

interface TokenClient {
  requestAccessToken(overrideConfig?: { scope?: string }): void;
}

interface GoogleOAuth2 {
  initTokenClient(config: {
    client_id: string;
    scope: string;
    callback: (response: TokenResponse) => void;
    error_callback?: (error: { type: string; message: string }) => void;
  }): TokenClient;
}

interface GoogleGlobal {
  accounts: { oauth2: GoogleOAuth2 };
}

function getGoogle(): GoogleGlobal | undefined {
  return (window as unknown as Record<string, unknown>)['google'] as GoogleGlobal | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class GoogleAuthService {
  private ngZone = inject(NgZone);

  signIn(): Promise<string> {
    return new Promise((resolve, reject) => {
      const google = getGoogle();
      if (!google) {
        reject(new Error('Google Identity Services not loaded'));
        return;
      }

      const client = google.accounts.oauth2.initTokenClient({
        client_id: environment.googleClientId,
        scope: 'email profile',
        callback: (response: TokenResponse) => {
          this.ngZone.run(() => {
            if (response.error) {
              reject(new Error(response.error_description || 'Google sign-in failed'));
              return;
            }
            if (response.access_token) {
              resolve(response.access_token);
            } else {
              reject(new Error('No access token received from Google'));
            }
          });
        },
        error_callback: (error: { type: string; message: string }) => {
          this.ngZone.run(() => {
            reject(new Error(error.message || 'Google sign-in was cancelled'));
          });
        },
      });

      client.requestAccessToken();
    });
  }
}
