# Используем официальный образ Node.js
FROM node:22.11.0-alpine3.20

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install -g @ionic/cli
RUN npm ci

# Копируем все файлы проекта
COPY . .

# Запускаем приложение
CMD ["ionic", "serve", "--no-open"]