declare namespace google {
  namespace accounts {
    namespace id {
      interface IdConfiguration {
        client_id: string;
        callback: (response: CredentialResponse) => void;
        auto_select?: boolean;
        cancel_on_tap_outside?: boolean;
        context?: 'signin' | 'signup' | 'use';
        ux_mode?: 'popup' | 'redirect';
        login_uri?: string;
        itp_support?: boolean;
      }

      interface CredentialResponse {
        credential: string;
        select_by: string;
        clientId?: string;
      }

      function initialize(config: IdConfiguration): void;
      function prompt(momentListener?: (notification: PromptMomentNotification) => void): void;
      function disableAutoSelect(): void;
      function revoke(loginHint: string, callback?: (response: RevocationResponse) => void): void;

      interface PromptMomentNotification {
        isDisplayMoment(): boolean;
        isDisplayed(): boolean;
        isNotDisplayed(): boolean;
        getNotDisplayedReason(): string;
        isSkippedMoment(): boolean;
        getSkippedReason(): string;
        isDismissedMoment(): boolean;
        getDismissedReason(): string;
      }

      interface RevocationResponse {
        successful: boolean;
        error?: string;
      }
    }
  }
}
