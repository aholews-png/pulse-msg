# Pulse Messenger

🔐 Безопасный мессенджер с end-to-end шифрованием

## Особенности

- ✅ End-to-End шифрование всех сообщений
- ✅ Голосовые и видео звонки
- ✅ Обмен файлами
- ✅ Группировка чатов
- ✅ Двухфакторная аутентификация
- ✅ Темный режим
- ✅ Поддержка множества языков

## Технологический стек

### Frontend
- React 18
- React Router v6
- Zustand (управление состоянием)
- Vite (сборщик модулей)
- Socket.io (реал-тайм коммуникация)

### Backend
- Node.js
- Express.js
- MongoDB
- Socket.io
- JWT (аутентификация)

## Установка и запуск

### Требования
- Node.js 16+
- npm или yarn

### Frontend установка

```bash
# Клонирование репозитория
git clone https://github.com/aholews-png/pulse-msg.git
cd pulse-msg

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## Структура проекта

```
src/
├── components/       # React компоненты
│   ├── Layout.jsx
│   ├── Sidebar.jsx
│   └── ChatList.jsx
├── pages/           # Страницы приложения
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── ChatListPage.jsx
│   ├── ChatPage.jsx
│   ├── ContactsPage.jsx
│   ├── CallsPage.jsx
│   ├── SettingsPage.jsx
│   └── ProfilePage.jsx
├── store/          # Zustand хранилища
│   ├── authStore.js
│   └── chatStore.js
├── App.jsx         # Главный компонент
├── main.jsx        # Точка входа
└── index.css       # Глобальные стили
```

## API Endpoints

### Аутентификация
- `POST /api/auth/login` - Вход
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/reset-password` - Сброс пароля
- `POST /api/auth/verify-code` - Проверка кода

### Чаты
- `GET /api/chats` - Получить все чаты
- `POST /api/chats` - Создать новый чат
- `GET /api/chats/:id` - Получить чат
- `DELETE /api/chats/:id` - Удалить чат

### Сообщения
- `GET /api/chats/:id/messages` - Получить сообщения чата
- `POST /api/chats/:id/messages` - Отправить сообщение
- `DELETE /api/chats/:id/messages/:msgId` - Удалить сообщение

## Безопасность

- 🔐 End-to-End шифрование всех сообщений (TweetNaCl.js)
- 🔑 JWT токены для аутентификации
- 🛡️ Двухфакторная аутентификация (TOTP)
- ✅ CORS защита
- ✅ Rate limiting
- ✅ Валидация входных данных

## Лицензия

MIT License - смотрите файл LICENSE для подробностей

## Контакты

- Email: aholews@gmail.com
- GitHub: [@aholews-png](https://github.com/aholews-png)

---

**Pulse** - Приватность начинается здесь 🔐
