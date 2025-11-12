export const resources = {
  en: {
    translation: {
      switchLanguage: 'Language',
      aboutMe:
        'Hello! My name is Kirill. I am a frontend developer with over 2 years of experience using React and I want to systematize my knowledge during training. Telegram: @kirillefimov01',
      header: {
        routes: {
          operations: 'Operations',
          products: 'Products',
          profile: 'Profile',
          cart: 'Cart',
          over: 'Administration',
          logout: 'Logout',
        },
      },
      errors: {
        is_required: 'The field cannot be empty',
        min_value: 'The field contains an invalid value',
        is_invalid: 'The field contains invalid characters',
        password_not_match: 'The passwords do not match',
        password_to_small: 'The password must contain at least 8 characters',
        invalid_email: 'Invalid username format, missing mail',
      },
      modal: {
        close: 'Close',
        label: 'Close modal window',
      },
      forms: {
        AuthForm: {
          username: {
            title: 'Email',
            placeholder: 'Enter your email',
          },
          password: {
            title: 'Password',
            placeholder: 'Enter your password',
          },
          repeatPassword: {
            title: 'Confirm password',
            placeholder: 'Enter your password again',
          },
        },
        ProfileForm: {
          name: {
            title: 'Nickname',
            placeholder: 'Come up with a pseudonym for yourself',
          },
          about: {
            title: 'About',
            placeholder: 'Write something about yourself',
          },
        },
        OperationForm: {
          category: {
            title: 'Сategory',
            placeholder: 'Operation category',
          },
          date: {
            title: 'Date',
            placeholder: 'Operation date',
          },
          description: {
            title: 'Description',
            placeholder: 'Operation description',
          },
          name: {
            title: 'Name',
            placeholder: 'Operation name',
          },
          price: {
            title: 'Price',
            placeholder: 'Operation price',
          },
        },
        ProductForm: {
          category: {
            title: 'Сategory',
            placeholder: 'Product category',
          },
          description: {
            title: 'Description',
            placeholder: 'Product description',
          },
          name: {
            title: 'Name',
            placeholder: 'Product name',
          },
          price: {
            title: 'Price',
            placeholder: 'Product price',
          },
          image: {
            title: 'Image',
            placeholder: 'Product image',
            upload: {
              text: 'Click or drag a file to add',
              hint: 'The file must not exceed 5MB.',
              remove: 'Delete file',
            },
          },
        },
      },
      screens: {
        MainScreen: {
          h1: 'Home page',
          text: 'Select the section you are interested in',
        },
        PageNotFoundScreen: {
          h1: '404 - Page not found',
          text: 'Sorry, the page you requested does not exist',
        },
        AuthScreen: {
          signIn: {
            success: 'Authorization completed successfully',
            title: 'Authorization',
            submit: 'Sign in',
            question: 'Already have an account?',
          },
          signUp: {
            success: 'Registration completed successfully',
            title: 'Registration',
            submit: 'Sign up',
            question: 'Not registered yet?',
          },
          logout: {
            success: 'Logout completed successfully',
            title: 'Logout',
            submit: 'Logout',
            question: 'Are you sure you want to exit?',
          },
        },
        ProfileScreen: {
          title: 'Profile',
          updateProfile: {
            title: 'Change profile',
            success: 'Profile changed successfully',
            save: 'Save',
          },
          changePassword: {
            title: 'Change password',
            success: 'Password changed successfully',
            save: 'Change',
          },
        },
        OperationScreen: {
          title: 'Operation data',
          edit: {
            title: 'Operation information',
            success: 'Information saved successfully',
            save: 'Save',
            button: {
              name: 'Edit',
              title: 'Edit operation information',
            },
          },
          list: {
            title: 'Operations list',
          },
        },
        ProductScreen: {
          title: 'Product data',
          edit: {
            title: 'Product information',
            success: 'Information saved successfully',
            save: 'Save',
            button: {
              name: 'Edit',
              title: 'Edit product information',
            },
          },
          list: {
            title: 'Product list',
          },
        },
        CartScreen: {
          list: {
            title: 'Product cart',
            empty: `Your shopping cart is empty. Please select the items you're interested in.`,
          },
          buttons: {
            add: {
              name: 'Add to cart',
              title: 'Add item to cart',
            },
          },
        },
        AdminScreen: {
          title: 'Administration',
          buttons: {
            generateOperations: {
              name: 'Generating 5 random operations (mocks)',
              title: 'Generating random operations',
            },
            generateProducts: {
              name: 'Generate 5 random products (mocks)',
              title: 'Generate random products',
            },
            addNewOperationItem: {
              name: 'Adding an operation',
              title: 'Adding a new operation',
            },
            addNewProductItem: {
              name: 'Adding a product',
              title: 'Adding a new product',
            },
          },
          messages: {
            createRandomItemsMessage: 'Data generation completed successfully',
          },
        },
      },
    },
  },
  ru: {
    translation: {
      switchLanguage: 'Язык',
      aboutMe:
        'Привет! Меня зовут Кирилл. Я frontend-разработчик c опытом более 2 лет, использующий React и на обучении хочу систематизировать свои знания. Telegram: @kirillefimov01',
      header: {
        routes: {
          operations: 'Операции',
          products: 'Товары',
          profile: 'Профиль',
          cart: 'Корзина',
          over: 'Администрирование',
        },
      },
      errors: {
        is_required: 'Поле не может быть пустым',
        min_value: 'Поле содержит недопустимое значение',
        is_invalid: 'Поле содержит недопустимые символы',
        password_not_match: 'Пароли не совпадают',
        password_to_small: 'Пароль должен содержать минимум 8 символов',
        invalid_email: 'Неверный формат имени пользователя, отсутствует почта',
      },
      modal: {
        close: 'Закрыть',
        label: 'Закрыть модальное окно',
      },
      forms: {
        AuthForm: {
          username: {
            title: 'Почта',
            placeholder: 'Введите адрес электронной почты',
          },
          password: {
            title: 'Пароль',
            placeholder: 'Введите пароль',
          },
          repeatPassword: {
            title: 'Подтвердите пароль',
            placeholder: 'Введите пароль повторно',
          },
        },
        ProfileForm: {
          name: {
            title: 'Псевдоним',
            placeholder: 'Придумайте себе псевдоним',
          },
          about: {
            title: 'О себе',
            placeholder: 'Напишите что-нибудь о себе',
          },
        },
        OperationForm: {
          category: {
            title: 'Категория',
            placeholder: 'Категория операции',
          },
          date: {
            title: 'Дата',
            placeholder: 'Дата операции',
          },
          description: {
            title: 'Детализация',
            placeholder: 'Детализация операции',
          },
          name: {
            title: 'Наименование',
            placeholder: 'Наименование операции',
          },
          price: {
            title: 'Цена',
            placeholder: 'Цена операции',
          },
        },
        ProductForm: {
          category: {
            title: 'Категория',
            placeholder: 'Категория продукта',
          },
          description: {
            title: 'Детализация',
            placeholder: 'Детализация продукта',
          },
          name: {
            title: 'Наименование',
            placeholder: 'Наименование продукта',
          },
          price: {
            title: 'Цена',
            placeholder: 'Цена продукта',
          },
          image: {
            title: 'Изображение',
            placeholder: 'Изображение продукта',
            upload: {
              text: 'Кликните или перетащите файл, чтобы добавить',
              hint: 'Файл не должен превышать 5МБ',
              remove: 'Удалить файл',
            },
          },
        },
      },
      screens: {
        MainScreen: {
          h1: 'Домашняя страница',
          text: 'Выберите интересующий вас раздел',
        },
        PageNotFoundScreen: {
          h1: '404 - Страница не найдена',
          text: 'Извините, запрашиваемая страница не существует',
        },
        AuthScreen: {
          signIn: {
            success: 'Авторизация завершена успешно',
            title: 'Авторизация',
            submit: 'Войти',
            question: 'Уже есть аккаунт?',
          },
          signUp: {
            success: 'Регистрация завершена успешно',
            title: 'Регистрация',
            submit: 'Зарегистрироваться',
            question: 'Еще не зарегистрированы?',
          },
          logout: {
            success: 'Выход осуществлен успешно',
            title: 'Выход',
            submit: 'Выход',
            question: 'Вы уверены, что хотите выйти?',
          },
        },
        ProfileScreen: {
          title: 'Профиль',
          updateProfile: {
            title: 'Изменить профиль',
            success: 'Профиль успешно изменен',
            save: 'Сохранить',
          },
          changePassword: {
            title: 'Изменить пароль',
            success: 'Пароль успешно изменен',
            save: 'Изменить',
          },
        },
        OperationScreen: {
          title: 'Данные об операции',
          edit: {
            title: 'Информация об операции',
            success: 'Информация успешно сохранена',
            save: 'Сохранить',
            button: {
              name: 'Редактировать',
              title: 'Редактировать информацию об операции',
            },
          },
          list: {
            title: 'Список операций',
          },
        },
        ProductScreen: {
          title: 'Данные о товаре',
          edit: {
            title: 'Информация о товаре',
            success: 'Информация успешно сохранена',
            save: 'Сохранить',
            button: {
              name: 'Редактировать',
              title: 'Редактировать информацию о товаре',
            },
          },
          list: {
            title: 'Список товаров',
          },
        },
        CartScreen: {
          list: {
            title: 'Корзина товаров',
            empty: 'В корзине пусто. Выберите интересующие Вас товары',
          },
          buttons: {
            add: {
              name: 'В корзину',
              title: 'Добавить в корзину',
            },
          },
        },
        AdminScreen: {
          title: 'Администрирование',
          buttons: {
            generateOperations: {
              name: 'Генерация 5 случайных операций (моки)',
              title: 'Генерация случайных операций',
            },
            generateProducts: {
              name: 'Генерация 5 случайных продуктов (моки)',
              title: 'Генерация случайных продуктов',
            },
            addNewOperationItem: {
              name: 'Добавление операции',
              title: 'Добавление новой операции',
            },
            addNewProductItem: {
              name: 'Добавление товара',
              title: 'Добавление нового товара',
            },
          },
          messages: {
            createRandomItemsMessage: 'Генерация данных завершена успешно',
          },
        },
      },
    },
  },
};
