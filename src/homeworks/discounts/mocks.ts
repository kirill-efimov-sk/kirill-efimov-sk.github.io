import { AccountService } from './accountService';
import { ProductType, UserType } from './types';

export const userDiscounts = {
  standard: 5,
  premium: 10,
  gold: 15,
  free: 0,
};

export const discounts = {
  standard: {
    car: 3,
    toy: 5,
    food: 10,
  },
  premium: {
    car: 5,
    toy: 7,
    food: 12,
  },
  gold: {
    car: 7,
    toy: 9,
    food: 14,
  },
  free: {
    car: 3,
    toy: 5,
    food: 10,
  },
};

export const discountLimit = 'The discount must be between 0 and 100%';

export const setUsersDiscount = (accountService: AccountService) => {
  accountService.setUserDiscount(UserType.Standard, userDiscounts.standard);
  accountService.setUserDiscount(UserType.Premium, userDiscounts.premium);
  accountService.setUserDiscount(UserType.Gold, userDiscounts.gold);
  accountService.setUserDiscount(UserType.Free, userDiscounts.free);

  accountService.setProductSpecificDiscount(UserType.Standard, ProductType.Car, discounts.standard.car);
  accountService.setProductSpecificDiscount(UserType.Standard, ProductType.Toy, discounts.standard.toy);
  accountService.setProductSpecificDiscount(UserType.Standard, ProductType.Food, discounts.standard.food);

  accountService.setProductSpecificDiscount(UserType.Premium, ProductType.Car, discounts.premium.car);
  accountService.setProductSpecificDiscount(UserType.Premium, ProductType.Toy, discounts.premium.toy);
  accountService.setProductSpecificDiscount(UserType.Premium, ProductType.Food, discounts.premium.food);

  accountService.setProductSpecificDiscount(UserType.Gold, ProductType.Car, discounts.gold.car);
  accountService.setProductSpecificDiscount(UserType.Gold, ProductType.Toy, discounts.gold.toy);
  accountService.setProductSpecificDiscount(UserType.Gold, ProductType.Food, discounts.gold.food);

  accountService.setProductSpecificDiscount(UserType.Free, ProductType.Car, discounts.free.car);
  accountService.setProductSpecificDiscount(UserType.Free, ProductType.Toy, discounts.free.toy);
  accountService.setProductSpecificDiscount(UserType.Free, ProductType.Food, discounts.free.food);

  return accountService;
};
