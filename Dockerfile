FROM php:8.2-fpm-alpine

RUN apk add --no-cache \
    libzip-dev postgresql-dev

RUN docker-php-ext-install zip pdo_pgsql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . .

RUN composer install --no-interaction --optimize-autoloader

EXPOSE 9000

CMD ["php-fpm"]
