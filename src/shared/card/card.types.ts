/** Базовые пропсы для всех карточек */
export interface BaseCardProps {
  name: string;
  description: string;
  price: number;
  children?: React.ReactNode;
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
