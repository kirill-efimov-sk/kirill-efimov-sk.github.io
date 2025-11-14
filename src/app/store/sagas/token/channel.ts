import { store } from '../../index';
import { tokenActions } from '../../slices/token';

type TokenChannelMessageInit = {
  type: 'init';
};

type TokenChannelMessageSet = {
  type: 'set';
  payload: string;
};

type TokenChannelMessageLogout = {
  type: 'logout';
};

type TokenChannelMessage = TokenChannelMessageSet | TokenChannelMessageInit | TokenChannelMessageLogout;

export class TokenChannel {
  channel: BroadcastChannel;
  init: boolean;
  wasUpdated: boolean;
  token: string | undefined;
  isProcessingExternalMessage: boolean;

  constructor(key: string) {
    this.channel = new BroadcastChannel(key);
    this.wasUpdated = false;
    this.init = false;
    this.token = null;
    this.isProcessingExternalMessage = false;

    this.setupMessageListener();
  }

  requestToken = () => {
    this.channel.postMessage({ type: 'init' });
  };

  setToken = (token: string) => {
    this.token = token;

    if (!this.init) {
      this.init = true;
      this.channel.postMessage({ type: 'init' });
      return;
    }

    if (this.wasUpdated) {
      this.wasUpdated = false;
      return;
    }

    this.channel.postMessage({ type: 'set', payload: token });
  };

  logout = () => {
    if (this.isProcessingExternalMessage) {
      console.log('Skipping logout message - processing external message');
      return;
    }
    this.token = null;
    this.wasUpdated = false;
    this.channel.postMessage({ type: 'logout' });
  };

  destroy = () => {
    this.channel.close();
  };

  private setupMessageListener = () => {
    this.channel.addEventListener('message', (event: MessageEvent<TokenChannelMessage>) => {
      this.isProcessingExternalMessage = true;
      this.handleMessage(event.data);
      this.isProcessingExternalMessage = false;
    });
  };

  private handleMessage = (data: TokenChannelMessage) => {
    const { type } = data;

    switch (type) {
      case 'init': {
        if (this.token) {
          this.wasUpdated = true;
          this.channel.postMessage({ type: 'set', payload: this.token });
        }
        break;
      }

      case 'set': {
        this.wasUpdated = true;
        const token = (data as TokenChannelMessageSet).payload;

        if (this.token !== token) {
          if (token) {
            store.dispatch(tokenActions.set(token));
          } else {
            store.dispatch(tokenActions.logout());
          }
          this.token = token;
        }
        break;
      }

      case 'logout': {
        this.wasUpdated = true;
        this.token = null;
        store.dispatch(tokenActions.logout());
        break;
      }

      default:
        break;
    }
  };
}
