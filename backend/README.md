# Backend API для Pulse Messenger

Backend приложение для безопасного мессенджера с E2E шифрованием.

## Установка

```bash
cd backend
npm install
```

## Конфигурация

Создайте файл `.env`:

```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/pulse-msg
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## Запуск

### Режим разработки
```bash
npm run dev
```

### Production
```bash
npm start
```

## Структура проекта

```
backend/
├── models/              # MongoDB схемы
│   ├── User.js
│   ├── Chat.js
│   ├── Message.js
│   └── Contact.js
├── routes/              # API маршруты
│   ├── auth.js
│   ├── chat.js
│   └── user.js
├── middleware/          # Express middleware
│   ├── auth.js
│   ├── rateLimiter.js
│   └── validation.js
├── controllers/         # Логика запросов
│   ├── authController.js
│   ├── chatController.js
│   └── userController.js
├── utils/              # Утилиты
│   ├── encryption.js
│   ├── jwt.js
│   ├── mailer.js
│   └── validation.js
└── server.js           # Точка входа
```

## API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `POST /api/auth/refresh` - Обновление токена
- `POST /api/auth/logout` - Выход
- `POST /api/auth/2fa/enable` - Включить 2FA
- `POST /api/auth/2fa/verify` - Верифицировать 2FA

### Чаты
- `GET /api/chats` - Получить все чаты
- `POST /api/chats` - Создать чат
- `GET /api/chats/:id` - Получить чат
- `DELETE /api/chats/:id` - Удалить чат
- `GET /api/chats/:id/messages` - Получить сообщения
- `POST /api/chats/:id/messages` - Отправить сообщение

### Пользователи
- `GET /api/users/profile` - Получить профиль
- `PUT /api/users/profile` - Обновить профиль
- `GET /api/users/contacts` - Получить контакты
- `POST /api/users/contacts` - Добавить контакт

## Безопасность

- ✅ JWT аутентификация
- ✅ Двухфакторная аутентификация (TOTP)
- ✅ Шифрование сообщений
- ✅ Rate limiting
- ✅ CORS защита
- ✅ Валидация входных данных
- ✅ Защита от SQL инъекций

## WebSocket События

### Client → Server
- `join-room` - Присоединиться к комнате
- `send-message` - Отправить сообщение
- `typing` - Пользователь печатает
- `stop-typing` - Пользователь перестал печатать

### Server → Client
- `user-joined` - Пользователь присоединился
- `receive-message` - Получить сообщение
- `user-typing` - Пользователь печатает
- `user-stop-typing` - Пользователь перестал печатать

## Лицензия

MIT
