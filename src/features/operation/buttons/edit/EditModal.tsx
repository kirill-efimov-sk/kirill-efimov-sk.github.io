import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DefaultButton } from 'src/shared/defaultButton';

interface EditModalButtonProps {
  onOpen: () => void;
}

export const EditModalButton: FC<EditModalButtonProps> = ({ onOpen }) => {
  const { t } = useTranslation();

  return (
    <DefaultButton title={t('screens.OperationScreen.edit.button.title')} onClick={() => onOpen()}>
      {t('screens.OperationScreen.edit.button.name')}
    </DefaultButton>
  );
};
