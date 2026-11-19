<!-- this taken from ai -->
# CineBook 1 — BookMyShow Application

A complete full-stack Movie & Theatre Booking platform built using **Spring Boot 3**, **Hibernate JPA**, **MySQL**, and a dynamic responsive frontend.

---

## 🎯 Category 1 – User Account Management
### Student 1: User Registration Module

### Assignment Requirements & Implementation:
1. **Registration Form**: Responsive modal form accessible directly from the top navigation bar.
2. **Collected Fields**:
   - Full Name
   - Email Address
   - 10-Digit Mobile Number
   - Password (Minimum 6 characters)
3. **Validations**:
   - Backend validation via Jakarta Validation (`@Valid`, `@NotBlank`, `@Email`, `@Pattern`, `@Size`) on `UserRegistrationRequest`.
   - Frontend instant regex validation for email and Indian 10-digit mobile numbers.
4. **Duplicate Email Prevention**:
   - Checked in `UserService.registerUser()` via `userRepository.findByEmail(email)`.
   - Returns HTTP 400 Bad Request with friendly error message: *"Email is already registered! Please login."*
   - Also protected by MySQL unique constraint on `users.email`.
5. **Database Storage**:
   - Automatically persisted to MySQL database: `cinebook1_db.users`.
   - Default user type: `CUSTOMER`.
6. **Success and Error Feedback**:
   - Dynamic alert banners and toast notifications.
   - Live Database Viewer modal (`📊 View Database Users`) to inspect live MySQL records.

---

## 🚀 How to Run

### 1. Database Setup (MySQL)
Ensure MySQL is running on `localhost:3306`:
```sql
CREATE DATABASE IF NOT EXISTS cinebook1_db;
```

### 2. Application Configuration
In `src/main/resources/application.properties`:
```properties
server.port=8085
spring.datasource.url=jdbc:mysql://localhost:3306/cinebook1_db?createDatabaseIfNotExist=true&useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
spring.datasource.username=root
spring.datasource.password=root123
spring.jpa.hibernate.ddl-auto=update
```

### 3. Run Application
Run using Maven Wrapper or in IntelliJ IDEA:
```bash
./mvnw spring-boot:run
```

### 4. Open in Browser
Visit: `http://localhost:8085`

---

## 📡 API Endpoints

| Method | Endpoint | Description | Public Access |
|---|---|---|---|
| `POST` | `/api/v1/user/register` | Register a new user | Yes |
| `POST` | `/api/v1/user/authenticate` | User authentication / login | Yes |
| `GET` | `/api/v1/user/all` | View live registered users | Yes |
