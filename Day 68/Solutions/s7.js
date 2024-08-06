
// 7. The Local Storage Manager:
// Implement a function named saveNoteToLocalStorage that takes a note object and saves it to the browser's local storage.

const note = { title: "Reminder", content: "Meeting at 10 AM" };
localStorage.setItem('note', JSON.stringify(note));
console.log('Note saved to local storage');
