import { CardQuantityProps } from 'src/shared/card/card.types';
import { Product } from 'src/utils/dataListGenerator';

export interface CartProductItemProps extends Product, CardQuantityProps {}
