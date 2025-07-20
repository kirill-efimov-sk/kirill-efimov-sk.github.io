/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

type Category = {
  id: string;
  name: string;
  foto?: string;
};
type Product = {
  id: string;
  name: string;
  foto: string;
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: Category;
};
type Operation = Cost | Profit;
type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};
type Profit = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Profit';
};

//Множители для числовых значений
const priceMultiplier = 10000.425;
const amountMultiplier = 10;
const arcticleMultiplier = 100000.125;

//Вспомогательные функции
const createRandomArticle = (): number => Math.round(Math.random() * arcticleMultiplier);
const generateId = (): string => Date.now().toString(36) + Math.random().toString(36).substring(2, 14); //UID
const generateFotoUrl = (): string => `https://example.ru/gallery/${Math.random().toString(36).substring(2, 12)}.jpg`;

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
      name: `Покупка позиций (${amount}) на сумму ${totalSum}`,
      desc: `Операция покупки товара. ${name}. ${desc}`,
      createdAt,
      amount,
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
      amount,
      category,
      type: 'Profit',
    };
    return profit;
  }
};
