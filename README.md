# Note Takeing App
My app is a system for taking app by cli and put it in database 
and I used in ths app File Based system using .json file

## Installation
To install MyApp, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/note-taking-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd note-taking-app.git
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
-- To start note taking app 
```bash
  npm start
```

then make your app run with note command
```bash
  npm link
```

to add new note
```bash
  note new "add note here" --tags "tag1, tag2"
```
To show all note
```bash
  note all
```

To show find note by the note
```bash
  note find "add note what you search"
```

To show find note by id
```bash
  note find id
```

To show remove note by id
```bash
  note remove id
```

To show clear notes
```bash
  note clear
```

This will launch the application, and you can begin managing your tasks.

Contributing
We welcome contributions to MyApp! To contribute, please follow these steps:

Fork the repository.
Create a new branch:
  git checkout -b feature-branch

Make your changes and commit them:
  git commit -m "Description of changes"

Push to the branch:
  git push origin feature-branch

Create a pull request.

License
This project is licensed under the MIT License. ```