import { AccountService } from './accountService';
import { userDiscounts, discounts, setUsersDiscount, discountLimit } from './mocks';
import { UserType, ProductType } from './types';

const mockCallback = jest.fn(setUsersDiscount);

describe('Account service tests', () => {
  let accountService: AccountService;

  beforeEach(() => {
    accountService = mockCallback(new AccountService());
  });

  describe('User discount tests for a Standard, Premium, Gold, Free users', () => {
    test('positive tests', () => {
      expect(accountService.getUserDiscount(UserType.Standard)).not.toBeUndefined();
      expect(accountService.getUserDiscount(UserType.Premium)).not.toBeUndefined();
      expect(accountService.getUserDiscount(UserType.Gold)).not.toBeUndefined();
      expect(accountService.getUserDiscount(UserType.Free)).not.toBeUndefined();

      expect(accountService.getUserDiscount(UserType.Standard)).toBe(userDiscounts.standard);
      expect(accountService.getUserDiscount(UserType.Premium)).toBe(userDiscounts.premium);
      expect(accountService.getUserDiscount(UserType.Gold)).toBe(userDiscounts.gold);
      expect(accountService.getUserDiscount(UserType.Free)).toBe(userDiscounts.free);

      expect(accountService.getUserDiscount(UserType.Standard)).not.toBe(0);
      expect(accountService.getUserDiscount(UserType.Premium)).not.toBe(0);
      expect(accountService.getUserDiscount(UserType.Gold)).not.toBe(0);
      expect(accountService.getUserDiscount(UserType.Free)).not.toBeNull();
    });

    test('negative test', () => {
      expect(() => accountService.setUserDiscount(UserType.Standard, -5)).toThrow(discountLimit);
      expect(() => accountService.setUserDiscount(UserType.Premium, -5)).toThrow(discountLimit);
      expect(() => accountService.setUserDiscount(UserType.Gold, -5)).toThrow(discountLimit);
      expect(() => accountService.setUserDiscount(UserType.Free, -5)).toThrow(discountLimit);
    });
  });

  describe('Specific and Total discount tests for different types', () => {
    test('standard user test', () => {
      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Car)).toBe(
        discounts.standard.car
      );

      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Car)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Standard, ProductType.Car)).toBe(
        userDiscounts.standard + discounts.standard.car
      );

      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Toy)).toBe(
        discounts.standard.toy
      );
      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Toy)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Standard, ProductType.Toy)).toBe(
        userDiscounts.standard + discounts.standard.toy
      );

      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Food)).toBe(
        discounts.standard.food
      );
      expect(accountService.getProductSpecificDiscount(UserType.Standard, ProductType.Food)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Standard, ProductType.Food)).toBe(
        userDiscounts.standard + discounts.standard.food
      );
    });

    test('premium user tests', () => {
      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Car)).toBe(discounts.premium.car);
      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Car)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Premium, ProductType.Car)).toBe(
        userDiscounts.premium + discounts.premium.car
      );

      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Toy)).toBe(discounts.premium.toy);
      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Toy)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Premium, ProductType.Toy)).toBe(
        userDiscounts.premium + discounts.premium.toy
      );

      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Food)).toBe(
        discounts.premium.food
      );
      expect(accountService.getProductSpecificDiscount(UserType.Premium, ProductType.Food)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Premium, ProductType.Food)).toBe(
        userDiscounts.premium + discounts.premium.food
      );
    });

    test('gold user tests', () => {
      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Car)).toBe(discounts.gold.car);
      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Car)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Gold, ProductType.Car)).toBe(
        userDiscounts.gold + discounts.gold.car
      );

      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Toy)).toBe(discounts.gold.toy);
      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Toy)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Gold, ProductType.Toy)).toBe(
        userDiscounts.gold + discounts.gold.toy
      );

      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Food)).toBe(discounts.gold.food);
      expect(accountService.getProductSpecificDiscount(UserType.Gold, ProductType.Food)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Gold, ProductType.Food)).toBe(
        userDiscounts.gold + discounts.gold.food
      );
    });

    test('free user test', () => {
      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Car)).toBe(discounts.free.car);
      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Car)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Free, ProductType.Car)).toBe(
        userDiscounts.free + discounts.free.car
      );

      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Toy)).toBe(discounts.free.toy);
      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Toy)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Free, ProductType.Toy)).toBe(
        userDiscounts.free + discounts.free.toy
      );

      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Food)).toBe(discounts.free.food);
      expect(accountService.getProductSpecificDiscount(UserType.Free, ProductType.Food)).not.toBe(0);
      expect(accountService.getTotalDiscount(UserType.Free, ProductType.Food)).toBe(
        userDiscounts.free + discounts.free.food
      );
    });
  });
});
