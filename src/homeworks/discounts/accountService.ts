import { discountLimit } from './mocks';
import { ProductType, UserType } from './types';

export class AccountService {
  private userDiscounts: Map<UserType, number> = new Map();
  private productSpecificDiscounts: Map<string, number> = new Map();

  // Установка базовой скидки для типа пользователя
  setUserDiscount(userType: UserType, discount: number): void {
    this.discountValidateGuard(discount);
    this.userDiscounts.set(userType, discount);
  }

  // Получение базовой скидки для типа пользователя
  getUserDiscount(userType: UserType): number {
    return this.userDiscounts.get(userType);
  }

  // Установка специальной скидки для типа пользователя на тип товара
  setProductSpecificDiscount(userType: UserType, productType: ProductType, additionalDiscount: number): void {
    this.discountValidateGuard(additionalDiscount);

    const key = this.getDiscountKey(userType, productType);
    this.productSpecificDiscounts.set(key, additionalDiscount);
  }

  // Получение специальной скидки для типа пользователя на тип товара
  getProductSpecificDiscount(userType: UserType, productType: ProductType): number {
    const key = this.getDiscountKey(userType, productType);
    return this.productSpecificDiscounts.get(key);
  }

  // Получение суммарной скидки для типа пользователя на тип товара
  getTotalDiscount(userType: UserType, productType: ProductType): number {
    const additionalDiscount = this.getProductSpecificDiscount(userType, productType);
    const totalDiscount = this.calculateTotalDiscount(userType, additionalDiscount);
    return totalDiscount;
  }

  // Получение информации о всех скидках
  getDiscountSummaryInfo(
    userType: UserType,
    productType: ProductType
  ): {
    baseDiscount: number;
    additionalDiscount: number;
    totalDiscount: number;
  } {
    const baseDiscount = this.getUserDiscount(userType);
    const additionalDiscount = this.getProductSpecificDiscount(userType, productType);
    const totalDiscount = this.getTotalDiscount(userType, productType);

    return {
      baseDiscount,
      additionalDiscount,
      totalDiscount,
    };
  }

  // Вспомогательный метод для создания ключа
  private getDiscountKey(userType: UserType, productType: ProductType): string {
    return `${userType}_${productType}`;
  }

  // Валидация крайних значений скидки
  private discountValidateGuard(additionalDiscount: number) {
    if (additionalDiscount < 0 || additionalDiscount > 100) {
      throw new Error(discountLimit);
    }
  }

  // Установка суммарной скидки товара от типа пользователя
  private calculateTotalDiscount(userType: UserType, additionalDiscount: number) {
    const userDiscount = this.getUserDiscount(userType);
    const totalDiscount = this.discountMaxValueValidate(userDiscount + additionalDiscount);

    return totalDiscount;
  }

  // Проверка верхней границы скидки в 100%
  private discountMaxValueValidate(discount: number): number {
    return Math.min(discount, 100);
  }
}
