/** Базовые пропсы для всех карточек */
export interface BaseCardProps extends CardNameProps {
  description: string;
  price: number;
  children?: React.ReactNode;
}

export interface CardNameProps {
  name: string;
}

export interface CardQuantityProps {
  quantity: number;
}

/** Дополнительные поля для карточек */
export interface CardImageProps {
  image?: {
    url: string;
    title: string;
  };
}

export interface CardCategoryProps {
  category?: string;
}

export interface BaseCardDateProps {
  date?: string;
}

export interface CardDateProps {
  date?: Date;
}
