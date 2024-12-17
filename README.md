# Project setup

## Prerequisites
- Docker & Docker compose
- `make` command (optional)

## Method 1: Using Make
```bash
make all
```

## Method 2: Manual
1. Build & launch containers
```bash
docker compose up -d
```

2. Install dependencies
```bash
docker compose exec -ti fpm composer install
```

3. Generate jwt keypair
```bash
docker compose exec -ti fpm php bin/console lexik:jwt:generate-keypair --overwrite
```

4. Database migration
```bash
docker compose exec -ti fpm php bin/console d:m:m --no-interaction
```

5. Load fixtures
```bash
docker compose exec -ti fpm php bin/console d:f:l --no-interaction
```

6. Open your browser and go to `http://localhost:88`

7. Credentials
- Email: `john@doe.com`
- Password: `lorem`

8. Enjoy!
