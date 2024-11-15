# PriceProphet

Uses ML algorithms to help users evaluate a property's value.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [npm](https://www.npmjs.com/get-npm) (v6 or later)
- [Docker](https://www.docker.com/get-started)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/priceprophet.git
   cd HousingPrice
   ```

2. Install dependencies:

   **Backend dependencies:**

   ```bash
   npm install
   ```

   **Frontend dependencies:**

   ```bash
   cd frontend
   npm install
   ```

3. Environment Variables

   Create a `.env` file in the root directory of the project. Use the `.env.example` as a template.

4. Start the Database

   Use Docker Compose to start the PostgreSQL database:

   ```bash
   docker-compose up -d
   ```

   This will start a PostgreSQL container with the database name, user, and password specified in your `.env` file.

5. Create the Database

   If the database does not exist, create it using the following command:

   ```bash
   createdb -U priceprophet price_prophet
   ```

6. Import the Database

   Import the database dump into your PostgreSQL instance:

   ```bash
   pg_restore -U priceprophet -d price_prophet -v db_backups/database_export.dump
   ```

7. Run Prisma Migrations

   Ensure your database schema is up to date by running Prisma migrations:

   ```bash
   npx prisma migrate deploy
   ```

8. Running the Application

   **Backend:**

   ```bash
   npm run dev
   ```

   **Frontend:**

   ```bash
   cd frontend
   npm start
   ```

### Additional Information

- **Prisma Studio:** You can use Prisma Studio to explore your database:

  ```bash
  npx prisma studio
  ```

- **Docker Management:** Use `docker-compose down` to stop the database container when not in use.
# HousingPrice
