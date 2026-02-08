import { Injectable, NgZone, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

interface FbAuthResponse {
  accessToken: string;
  expiresIn: number;
  signedRequest: string;
  userID: string;
}

interface FbLoginStatusResponse {
  status: 'connected' | 'not_authorized' | 'unknown';
  authResponse: FbAuthResponse | null;
}

interface FbSdk {
  init(params: { appId: string; cookie?: boolean; xfbml?: boolean; version: string }): void;
  login(callback: (response: FbLoginStatusResponse) => void, params?: { scope?: string }): void;
}

interface FbWindow {
  FB?: FbSdk;
  fbAsyncInit?: () => void;
}

function getFbWindow(): FbWindow {
  return window as unknown as FbWindow;
}

@Injectable({
  providedIn: 'root',
})
export class FacebookAuthService {
  private ngZone = inject(NgZone);
  private initialized = false;

  initialize(): void {
    const fbWin = getFbWindow();
    if (this.initialized || fbWin.FB) {
      return;
    }

    fbWin.fbAsyncInit = () => {
      fbWin.FB!.init({
        appId: environment.facebookAppId,
        cookie: true,
        xfbml: false,
        version: 'v21.0',
      });
      this.initialized = true;
    };
  }

  signIn(): Promise<string> {
    return new Promise((resolve, reject) => {
      const fbWin = getFbWindow();
      if (!fbWin.FB) {
        reject(new Error('Facebook SDK not loaded'));
        return;
      }

      fbWin.FB.login(
        (response: FbLoginStatusResponse) => {
          this.ngZone.run(() => {
            if (response.status === 'connected' && response.authResponse) {
              resolve(response.authResponse.accessToken);
            } else {
              reject(new Error('Facebook login was cancelled or failed'));
            }
          });
        },
        { scope: 'email,public_profile' },
      );
    });
  }
}
