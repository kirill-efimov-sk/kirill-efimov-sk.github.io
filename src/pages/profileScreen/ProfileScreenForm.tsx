import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { Button, message } from 'antd';
import { UserForms } from '../../features/forms';
import { Title } from '../../shared/title';
import { ProfileFormValues, ProfileFormErrors } from '../../features/forms/profileForm/types';
import { profileSelectors } from 'src/app/store/slices/profile';
import styles from './profileScreenForm.module.scss';

export const ProfileScreenForm: React.FC = () => {
  const { t } = useTranslation();
  const profile = useSelector(profileSelectors.get);

  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: profile,
      onSubmit: (values) => {
        console.log('Submitting:', values);
        // Имитация успешного сохранения
        setTimeout(() => {
          message.success(t('screens.ProfileScreen.updateProfile.success'));
        }, 1000);
      },
      validate: (values) => {
        const errors = {} as ProfileFormErrors;
        if (!values.name?.trim()) {
          errors.name = t('errors.is_required');
        }
        return errors;
      },
    };
  }, [profile, t]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues(profile);
  }, [profile, setValues]);

  return (
    <div className={`${styles.container}`}>
      <Title className={`${styles.title}`}>{t('screens.ProfileScreen.updateProfile.title')}</Title>
      <UserForms.ProfileForm formManager={formManager} />
      <Button type="primary" onClick={submitForm} style={{ marginTop: '16px' }}>
        {t('screens.ProfileScreen.updateProfile.save')}
      </Button>
    </div>
  );
};
