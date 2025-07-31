import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from 'src/app/logo.svg';
import style from './aboutMe.module.scss';

const AboutMe: FC = () => {
  const { t } = useTranslation();
  return (
    <div className={style.about}>
      <img src={logo} className="App-logo" alt="logo" />
      <p>{t('aboutMe')}</p>
    </div>
  );
};

export default AboutMe;
