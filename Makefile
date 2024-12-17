# Define project name
PROJECT_NAME := test-angular-symfony

# Define Docker Compose service names
FPM_SERVICE := fpm

# Build and launch Docker containers (detached)
up:
	@echo "Building and starting Docker containers..."
	@docker-compose up -d

# Install dependencies within fpm container
install-fpm-dependencies: up
	@echo "Installing dependencies in fpm container..."
	@docker-compose exec -ti $(FPM_SERVICE) composer install

# Generate JWT keypair within fpm container
generate-jwt-keypair: install-fpm-dependencies
	@echo "Generating JWT keypair in fpm container..."
	@docker-compose exec -ti $(FPM_SERVICE) php bin/console lexik:jwt:generate-keypair

# Database migration within fpm container
migrate-database: generate-jwt-keypair
	@echo "Migrating database in fpm container..."
	@docker-compose exec -ti $(FPM_SERVICE) php bin/console d:m:m --no-interaction

# Load fixtures within fpm container
load-fixtures: migrate-database
	@echo "Loading fixtures in fpm container..."
	@docker-compose exec -ti $(FPM_SERVICE) php bin/console d:f:l --no-interaction

# Display helpful message
open-app:
	@echo "Open your browser and go to http://localhost:88"

# Display login credentials
credentials:
	@echo "Email: john@doe.com"
	@echo "Password: lorem"

# Default target to run the build process
.PHONY: all
all: up install-fpm-dependencies generate-jwt-keypair migrate-database load-fixtures open-app credentials

# Help message for available targets
help:
	@grep -E '^##|^#' Makefile | awk '{print NR ": " $$1}'
