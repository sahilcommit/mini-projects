# 05 | Quara: RESTful CRUD Application

A full-stack social post application built with **Node.js** and **Express**. This project bridges the gap between frontend interfaces and server-side data management, implementing the full **CRUD** (Create, Read, Update, Delete) lifecycle.

## 🏗️ Architecture

### Server-Side Rendering (SSR)
Unlike client-side apps, Quara uses **EJS (Embedded JavaScript)** to render views on the server. This allows for dynamic HTML generation where the backend injects data (`posts` array) directly into the templates before sending them to the client.

### RESTful Routing
The application strictly adheres to REST conventions:

| Verb | Path | Purpose |
| :--- | :--- | :--- |
| **GET** | `/posts` | **Index:** Displays all posts. |
| **GET** | `/posts/new` | **New:** Renders the creation form. |
| **POST** | `/posts` | **Create:** Ingests form data, generates UUID, saves post. |
| **GET** | `/posts/:id` | **Show:** detailed view of a single resource. |
| **PATCH** | `/posts/:id` | **Update:** Modifies specific post content. |
| **DELETE** | `/posts/:id` | **Destroy:** Removes a post from the dataset. |

### Key Dependencies
* **`uuid`:** Generates collision-resistant unique identifiers for every post, ensuring data integrity during lookups and deletions.
* **`method-override`:** A crucial middleware that allows HTML forms (which natively only support GET/POST) to submit `PATCH` and `DELETE` requests, adhering to proper REST architecture.

## 💻 How to Run
1.  Initialize the project:
    ```bash
    npm install
    ```
2.  Start the server (listens on port 8080):
    ```bash
    node index.js
    ```
3.  Visit `http://localhost:8080/posts` in your browser.