import { ProfileFormValues } from 'src/features/forms/profileForm/types';
import { store } from '../../index';
import { profileActions } from '../../slices/profile';

type ProfileChannelMessageInit = {
  type: 'init';
};

type ProfileChannelMessageSet = {
  type: 'set';
  payload: ProfileFormValues;
};

type ProfileChannelMessageClear = {
  type: 'clear';
};

type ProfileChannelMessage = ProfileChannelMessageSet | ProfileChannelMessageInit | ProfileChannelMessageClear;

export class ProfileChannel {
  channel: BroadcastChannel;
  init: boolean;
  wasUpdated: boolean;
  profile: ProfileFormValues | null;
  isProcessingExternalMessage: boolean;

  constructor(key: string) {
    this.channel = new BroadcastChannel(key);
    this.wasUpdated = false;
    this.init = false;
    this.profile = null;
    this.isProcessingExternalMessage = false;

    this.setupMessageListener();
  }

  requestProfile = () => {
    this.channel.postMessage({ type: 'init' });
  };

  setProfile = (profile: ProfileFormValues) => {
    this.profile = profile;

    if (!this.init) {
      this.init = true;
      this.channel.postMessage({ type: 'init' });
      return;
    }

    if (this.wasUpdated) {
      this.wasUpdated = false;
      return;
    }

    this.channel.postMessage({ type: 'set', payload: profile });
  };

  clearProfile = () => {
    if (this.isProcessingExternalMessage) {
      console.log('Skipping profile clear - processing external message');
      return;
    }
    this.profile = null;
    this.wasUpdated = false;
    this.channel.postMessage({ type: 'clear' });
  };

  destroy = () => {
    this.channel.close();
  };

  private setupMessageListener = () => {
    this.channel.addEventListener('message', (event: MessageEvent<ProfileChannelMessage>) => {
      this.isProcessingExternalMessage = true;
      this.handleMessage(event.data);
      this.isProcessingExternalMessage = false;
    });
  };

  private handleMessage = (data: ProfileChannelMessage) => {
    const { type } = data;

    switch (type) {
      case 'init': {
        if (this.profile) {
          this.wasUpdated = true;
          this.channel.postMessage({ type: 'set', payload: this.profile });
        }
        break;
      }

      case 'set': {
        this.wasUpdated = true;
        const profile = (data as ProfileChannelMessageSet).payload;

        if (JSON.stringify(this.profile) !== JSON.stringify(profile)) {
          if (profile) {
            store.dispatch(profileActions.set(profile));
          } else {
            store.dispatch(profileActions.clear());
          }
          this.profile = profile;
        }
        break;
      }

      case 'clear': {
        this.wasUpdated = true;
        this.profile = null;
        store.dispatch(profileActions.clear());
        break;
      }

      default:
        break;
    }
  };
}
