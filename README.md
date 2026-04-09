# StudyForce — Developer Learning & Debugging Platform (Frontend)

## Project Description

StudyForce is a full-stack learning platform designed to help developers study technical concepts and debug applications during training. The frontend provides an interactive user interface for managing study content, answering questions, and navigating debugging tools.

This repository contains the frontend application built using Angular, which communicates with a Spring Boot backend through RESTful APIs.

---

## Features

- Interactive flashcard-based study system  
- User-friendly interface for answering and reviewing questions  
- Difficulty rating system for study content  
- Integration with backend REST APIs for data retrieval and persistence  
- Authentication flow integrated with AWS Cognito  
- Responsive UI design using Angular and Bootstrap  
- Pagination and data display for structured learning content  

---

## Tech Stack

### Frontend
- Angular  
- TypeScript  
- HTML5  
- CSS3  
- Bootstrap  

### Testing
- Karma  
- Jasmine  
- Protractor  

### Tools
- Node.js  
- npm  
- Git  

---

## Architecture Overview

The frontend follows a component-based architecture:

- Components — UI elements and views  
- Services — Handle API communication with the backend  
- Models — Represent application data structures  
- Routing — Manages navigation between views  

The application communicates with the backend via REST APIs and integrates with AWS Cognito for user authentication.

---

## Getting Started

```bash
git clone https://github.com/[org-name]/[frontend-repo]
cd [frontend-repo]
npm install
ng serve
