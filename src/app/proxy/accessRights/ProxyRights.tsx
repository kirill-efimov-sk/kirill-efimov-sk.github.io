import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { profileSelectors } from 'src/app/store/slices/profile';
import { tokenSelectors } from 'src/app/store/slices/token';

interface ProxyRightsProps {
  children: React.ReactNode;
}

export const ProxyAdminRights: FC<ProxyRightsProps> = ({ children }) => {
  const profile = useSelector(profileSelectors.get);
  const hasAccess = profile?.rights.editing;

  if (!hasAccess) {
    return null;
  }

  return <>{children}</>;
};

export const ProxyAuthRights: FC<ProxyRightsProps> = ({ children }) => {
  const token = useSelector(tokenSelectors.get);

  if (!token) {
    return null;
  }

  return <>{children}</>;
};
