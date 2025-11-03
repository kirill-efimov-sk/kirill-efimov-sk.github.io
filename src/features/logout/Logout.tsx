import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { message } from 'antd';
import { useTranslation } from 'react-i18next';
import { LogoutOutlined } from '@ant-design/icons';
import { tokenActions } from 'src/app/store/slices/token';
import { profileActions } from 'src/app/store/slices/profile';

export const Logout: FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const eventHandler = () => {
    dispatch(tokenActions.logout());
    dispatch(profileActions.clear());
    message.success(t('screens.AuthScreen.logout.success'));
  };

  return (
    <div>
      <LogoutOutlined
        onClick={eventHandler}
        role="button"
        aria-label={t('screens.AuthScreen.logout.title')}
        title={t('screens.AuthScreen.logout.title')}
      />
    </div>
  );
};
