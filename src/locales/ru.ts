import type { Locale } from "./types";

const ru: Locale = {
  app: {
    title: "Пользователи из JSONPlaceholder",
    reload: "Обновить пользователей",
    loading: "Загрузка пользователей...",
    error: "Ошибка загрузки пользователей",
  },
  table: {
    id: "ID",
    name: "Имя",
    email: "Электронная почта",
    phone: "Телефон",
    city: "Город",
    company: "Компания",
    website: "Веб-сайт",
    pagination: {
      showing: "{{start}}-{{end}} из {{total}} пользователей",
    },
  },
  language: {
    switch: "Переключить язык",
    english: "English",
    russian: "Русский",
  },
  post: {
    create: "Создать пост",
    title: "Заголовок поста",
    body: "Содержание поста",
    submit: "Создать пост",
    cancel: "Отмена",
    success: "Пост успешно создан!",
    error: "Не удалось создать пост",
    userId: "ID пользователя",
    id: "ID поста",
    notFound: "Пост не найден",
    posts: "Посты",
    loadingPosts: "Загрузка постов...",
    noPosts: "У этого пользователя нет постов",
    totalPosts: "Всего постов",
    delete: "Удалить",
    deleteConfirm: "Вы уверены, что хотите удалить этот пост?",
    deleteSuccess: "Пост успешно удален!",
    deleteError: "Не удалось удалить пост",
  },
  footer: {
    madeWith: "Сделано с",
    using: "использованием современных веб-технологий",
    dataSource: "Данные предоставлены JSONPlaceholder API",
  },
  sidebar: {
    title: "Навигация",
    users: "Пользователи",
    counter: "Счётчик",
  },
  theme: {
    light: "Светлая тема",
    dark: "Тёмная тема",
  },
  counter: {
    title: "Счётчик",
    currentValue: "Текущее значение",
    increment: "Увеличить",
    decrement: "Уменьшить",
    reset: "Сбросить",
  },
};

export default ru;
