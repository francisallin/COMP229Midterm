# COMP 229 Midterm

## Instructions to run project
1. In command Prompt, cd to the folder containing the project
2. Run "npm start". If command line returns "server is running" and "DB connection successful", there is no error
3. Open Postman or other software to test DB function
4. Test get [server address]/students (eg: localhost:3000/students). It should return the list of all students and their info
5. Test get [server address]/students/:id (eg: localhost:3000/students/649244e0dca91a5179088c1c). It should return the info of student of the specified id.
6. Test post [server address]/students. It should add a new student into the students collection in database and return the new student info. 
7. Test put [server address]/students/:id. Remember to include the updated student info in the json body. It should update the student spedified in by id and return the updated info.
8. Test delete [server address]/students/:id. It should delete the student spedified in by id and return the confirmation message "Record deleted".
9. If you receive "Something went wrong" in the returned message, there is an error.

## Credits:
- COMP 229 todos lab