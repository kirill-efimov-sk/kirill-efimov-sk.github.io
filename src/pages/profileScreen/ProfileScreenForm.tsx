import React, { useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { FormikConfig } from 'formik/dist';
import { useTranslation } from 'react-i18next';
import { Button, message } from 'antd';
import { UserForms } from '../../features/forms';
import { Title } from '../../shared/Title';
import { ProfileFormValues, ProfileFormErrors } from '../../features/forms/profileForm/types';
import styles from './profileScreenForm.module.scss';

const initProfile = {
  name: '',
  about: '',
};

export interface ProfileFormProps {
  initialProfile?: ProfileFormValues;
}

export const ProfileScreenForm: React.FC<ProfileFormProps> = ({ initialProfile = initProfile }) => {
  const { t } = useTranslation();
  const { onSubmit, validate, initialValues } = useMemo<
    Pick<FormikConfig<ProfileFormValues>, 'onSubmit' | 'validate' | 'initialValues'>
  >(() => {
    return {
      initialValues: {
        name: initialProfile.name,
        about: initialProfile.about,
      },
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
  }, [initialProfile, t]);

  const formManager = useFormik<ProfileFormValues>({
    initialValues,
    onSubmit,
    validate,
  });
  const { submitForm, setValues } = formManager;

  useEffect(() => {
    setValues({
      name: initialProfile.name,
      about: initialProfile.about,
    });
  }, [initialProfile, setValues]);

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
