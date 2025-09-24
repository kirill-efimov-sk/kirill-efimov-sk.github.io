import { uid } from 'uid';

type Category = {
  id: string;
  name: string;
  foto?: string;
};
type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt?: string;
  amount: number;
  category: Category;
  type: 'Cost';
};
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt?: string;
  amount: number;
  category: Category;
  type: 'Profit';
};
export type Product = {
  id: string;
  name: string;
  foto: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
export type Operation = Cost | Profit;

//Множители для числовых значений
const priceMultiplier = 10000.425;
const amountMultiplier = 10;
const arcticleMultiplier = 100000.125;

//Вспомогательные функции
const createRandomArticle = (): number => Math.round(Math.random() * arcticleMultiplier);
const generateId = (): string => uid(18);
const generateFotoUrl = (): string => `https://example.ru/gallery/${uid(8)}.jpg`;

//Ассет для единого списка продуктов
const products = [
  {
    value: 'Капот',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Китай',
  },
  {
    value: 'Бампер передний',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Россия',
  },
  {
    value: 'Бампер задний',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Россия',
  },
  {
    value: 'Фара передняя левая',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Россия',
  },
  {
    value: 'Фара передняя правая',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Россия',
  },
  {
    value: 'Фара задняя левая',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Япония',
  },
  {
    value: 'Фара задняя правая',
    category: { name: 'Кузов', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Япония',
  },
  {
    value: 'Колодки передние',
    category: { name: 'Элементы тормозной системы', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Китай',
  },
  {
    value: 'Колодки задние',
    category: { name: 'Элементы тормозной системы', id: generateId(), foto: generateFotoUrl() },
    desc: 'Производство Китай',
  },
];

//Создание единицы рандомного продукта
const getRandomProduct = (): Omit<Product, 'id' | 'createdAt'> => {
  const product = products[Math.floor(Math.random() * products.length)];
  const name = `${product.value}, артикул: ${createRandomArticle()}`;
  const price = Math.round(Math.random() * priceMultiplier);
  const oldPrice = Math.round(price + price * 0.1);
  const foto = generateFotoUrl();

  return { ...product, name, foto, price, oldPrice };
};

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
  const { name, foto, desc, oldPrice, price, category } = getRandomProduct();

  return {
    id: generateId(),
    name,
    foto,
    desc,
    createdAt,
    oldPrice,
    price,
    category,
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
  const { name, desc, category, price } = getRandomProduct();
  const amount = Math.round((Math.random() + 1) * amountMultiplier);
  const totalSum = amount * price;

  if (Math.random() > 0.5) {
    // Расход (например, покупка запчасти)
    const cost: Cost = {
      id: generateId(),
      name: `Покупка позиций (${amount} шт.) на сумму ${totalSum}`,
      desc: `Операция покупки товара. ${name}. ${desc}`,
      createdAt,
      amount: price,
      category,
      type: 'Cost',
    };
    return cost;
  } else {
    // Доход (например, продажа запчасти)
    const profit: Profit = {
      id: generateId(),
      name: `Продажа позиций (${amount}) на сумму ${totalSum}`,
      desc: `Операция продажи товара. ${name}. ${desc}`,
      createdAt,
      amount: price,
      category,
      type: 'Profit',
    };
    return profit;
  }
};

export const generateItems = <T>(count: number, creator: (date: string) => T): T[] => {
  return Array.from({ length: count }, () => creator(new Date().toISOString()));
};

// Использование:
export const addProducts = (count: number) => generateItems(count, createRandomProduct);

export const addOperations = (count: number) => generateItems(count, createRandomOperation);
