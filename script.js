// const newTaskInput = document.querySelector("#new-task input");
// const listTasks = document.querySelector("#tasks");
// let deleteTasks, editTasks, tasks;
// let updateNote = "";
// let count;

// //Function on window load
// window.onload = () => {
//     updateNote = "";
//     count = Object.keys(localStorage).length;
//     displayTasks();
// };

// //Hiển thị task từ local storage
// const displayTasks = () => {
//     if (Object.keys(localStorage).length > 0) {
//         listTasks.style.display = "inline-block";
//     } else {
//     listTasks.style.display = "none";
//     }

//     //Clear the tasks
//     listTasks.innerHTML = "";

//     //Fetch All The Keys in local storage
//     let tasks = Object.keys(localStorage);
//     tasks = tasks.sort();

//     for (let key of tasks) {
//         let classValue = "";

//         //Lấy tất cả giá trị trong local storage
//         let value = localStorage.getItem(key);
//         let innerTask = document.createElement("div");
//         innerTask.classList.add("task");
//         innerTask.setAttribute("id", key);
//         innerTask.innerHTML = `<span id="taskname">${key.split("_")[1]}</span>`;
//         //localstorage would store boolean as string so we parse it to boolean back
//         let editButton = document.createElement("button");
//         editButton.classList.add("edit");
//         editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
//         if (!JSON.parse(value)) {
//             editButton.style.visibility = "visible";
//         } else {
//             editButton.style.visibility = "hidden";
//             innerTask.classList.add("completed");
//         }
//         innerTask.appendChild(editButton);
//         innerTask.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
//         listTasks.appendChild(innerTask);
//     }

//     //Completed task(Click vào task sẽ hoàn thành và ngược lại)
//     tasks = document.querySelectorAll(".task");
//     tasks.forEach((element, index) => {
//         element.onclick = () => {
//         //Cập nhật trạng thái trong local storage
//             if (element.classList.contains("completed")) {
//                 updateStorage(element.id.split("_")[0], element.innerText, false);
//             } else {
//                 updateStorage(element.id.split("_")[0], element.innerText, true);
//             }
//         };
//     });

//     //Cập nhật task
//     editTasks = document.getElementsByClassName("edit");
//     Array.from(editTasks).forEach((element, index) => {
//         element.addEventListener("click", (e) => {
//         //Stop propogation to outer elements (if removed when we click delete eventually rhw click will move to parent)
//         e.stopPropagation();
//         //Ẩn nút chỉnh sửa
//         disableButtons(true);
//         //Lấy nội dung task đẩy lên ô input và xóa task
//         let parent = element.parentElement;
//         newTaskInput.value = parent.querySelector("#taskname").innerText;
//         //Đặt updateNote để cập nhật task
//         updateNote = parent.id;
//         //xóa task
//         parent.remove();
//         });
//     });

//     //Xóa task hiển thị và ở local storage
//     deleteTasks = document.getElementsByClassName("delete");
//     Array.from(deleteTasks).forEach((element, index) => {
//         element.addEventListener("click", (e) => {
//             e.stopPropagation();
//             //Xóa task ở local storage và xóa thẻ div hiển thị
//             let parent = element.parentElement;
//             removeTask(parent.id);
//             parent.remove();
//             count -= 1;
//         });
//     });
// };

// //Ẩn-hiện nút chỉnh sửa khi hoàn thành task
// const disableButtons = (bool) => {
//     let editButtons = document.getElementsByClassName("edit");
//     Array.from(editButtons).forEach((element) => {
//         element.disabled = bool;
//     });
// };

// //Xóa task ở local storage
// const removeTask = (taskValue) => {
//     localStorage.removeItem(taskValue);
//     // displayTasks();
// };

// //Thêm task vào local storage
// const updateStorage = (index, taskValue, completed) => {
//     localStorage.setItem(`${index}_${taskValue}`, completed);
//     displayTasks();
// };

// //Thêm mới, cập nhật task vào local storage
// document.querySelector("#push").addEventListener("click", () => {
//     //Hiện thị nút chỉnh sửa
//     disableButtons(false);
//     if (newTaskInput.value.length == 0) {
//         alert("Vui lòng nhập công việc");
//     } else {
//     if (updateNote == "") {
//         //Thêm task mới
//         updateStorage(count, newTaskInput.value, false);
//     } else {
//         //Cập nhật task
//         let index = updateNote.split("_")[0];
//         removeTask(updateNote);
//         updateStorage(index, newTaskInput.value, false);
//         updateNote = "";
//     }
//     count += 1;
//     newTaskInput.value = "";
//     }
// });


// //Button select task (Tất cả, hoàn thành, chưa hoàn thành)
// const filterOption = document.querySelector(".filter-todo");
// filterOption.addEventListener("click", filterTodo);
// const btnOptions = document.querySelectorAll(".btn-option");

// function filterTodo(e) {
//     btnOptions.forEach(function(btnOption) {
//         btnOption.classList.remove("active");
//     });
//     const todos = listTasks.childNodes;
//     todos.forEach(function(todo) {
//         switch(e.target.value) {
//             case "all":
//                 e.target.classList.add("active");
//                 todo.style.display = "flex";
//                 break;
//             case "completed":
//                 e.target.classList.add("active");
//                 if(todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//             case "incomplete":
//                 e.target.classList.add("active");
//                 if(!todo.classList.contains("completed")) {
//                     todo.style.display = "flex";
//                 } else {
//                     todo.style.display = "none";
//                 }
//                 break;
//         }
//     });
// }


const newTaskInput = document.querySelector("#new-task input");
const listTasks = document.querySelector("#tasks");
let deleteTasks, editTasks, tasks;
let updateNote = "";
let count;

//Function on window load
window.onload = () => {
    updateNote = "";
    // count = Object.keys(localStorage).length;
    let tong = Object.keys(localStorage);
    const max = tong.length;
    tong = tong.sort(function(a, b){return a-b});
    if (max == 0) {
        count = max;
    } else {
        count = Number(tong[max-1]) + 1;
    }
    // count = tong.length;
    // tong = tong.sort(function(a, b){return a-b});
    // const max = Number(tong[count-1]) + 1;
    // console.log(max);
    // const trung = Object.keys(localStorage);
    // trung.sort();
    // const trung1 = trung.length;
    // console.log(typeof(trung1));
    // console.log(typeof(Number(trung[trung1-1])));
    displayTasks();
};

//Hiển thị task từ local storage
const displayTasks = () => {
    if (Object.keys(localStorage).length > 0) {
        listTasks.style.display = "inline-block";
    } else {
    listTasks.style.display = "none";
    }

    //Clear the tasks
    listTasks.innerHTML = "";

    //Fetch All The Keys in local storage
    let tasks = Object.keys(localStorage);
    tasks = tasks.sort(function(a, b){return a-b});

    for (let key of tasks) {
        let classValue = "";

        //Lấy tất cả giá trị trong local storage
        let value = localStorage.getItem(key);
        let innerTask = document.createElement("div");
        innerTask.classList.add("task");
        innerTask.setAttribute("id", key);
        innerTask.innerHTML = `<span id="taskname">${value.split("_")[1]}</span>`;
        //localstorage would store boolean as string so we parse it to boolean back
        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = `<i class="fa-solid fa-pen-to-square"></i>`;
        if (!JSON.parse(value.split("_")[0])) {
            editButton.style.visibility = "visible";
        } else {
            editButton.style.visibility = "hidden";
            innerTask.classList.add("completed");
        }
        innerTask.appendChild(editButton);
        innerTask.innerHTML += `<button class="delete"><i class="fa-solid fa-trash"></i></button>`;
        listTasks.appendChild(innerTask);
    }

    //Completed task(Click vào task sẽ hoàn thành và ngược lại)
    tasks = document.querySelectorAll(".task");
    tasks.forEach((element, index) => {
        element.onclick = () => {
        //Cập nhật trạng thái trong local storage
            if (element.classList.contains("completed")) {
                updateStorage(element.id.split("_")[0], element.innerText, false);
            } else {
                updateStorage(element.id.split("_")[0], element.innerText, true);
            }
        };
    });

    //Cập nhật task
    editTasks = document.getElementsByClassName("edit");
    Array.from(editTasks).forEach((element, index) => {
        element.addEventListener("click", (e) => {
        //Stop propogation to outer elements (if removed when we click delete eventually rhw click will move to parent)
        e.stopPropagation();
        //Ẩn nút chỉnh sửa
        disableButtons(true);
        //Lấy nội dung task đẩy lên ô input và xóa task
        let parent = element.parentElement;
        newTaskInput.value = parent.querySelector("#taskname").innerText;
        //Đặt updateNote để cập nhật task
        updateNote = parent.id;
        //xóa task
        parent.remove();
        });
    });

    //Xóa task hiển thị và ở local storage
    deleteTasks = document.getElementsByClassName("delete");
    Array.from(deleteTasks).forEach((element, index) => {
        element.addEventListener("click", (e) => {
            e.stopPropagation();
            //Xóa task ở local storage và xóa thẻ div hiển thị
            let parent = element.parentElement;
            removeTask(parent.id);
            parent.remove();
            // count -= 1;
        });
    });
};

//Ẩn-hiện nút chỉnh sửa khi hoàn thành task
const disableButtons = (bool) => {
    let editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((element) => {
        element.disabled = bool;
    });
};

//Xóa task ở local storage
const removeTask = (taskValue) => {
    localStorage.removeItem(taskValue);
    // displayTasks();
};

//Thêm task vào local storage
const updateStorage = (index, taskValue, completed) => {
    localStorage.setItem(`${index}`, `${completed}_${taskValue}`);
    displayTasks();
};

//Thêm mới, cập nhật task vào local storage
document.querySelector("#push").addEventListener("click", () => {
    //Hiện thị nút chỉnh sửa
    disableButtons(false);
    if (newTaskInput.value.length == 0) {
        alert("Vui lòng nhập công việc");
    } else {
    if (updateNote == "") {
        //Thêm task mới
        updateStorage(count, newTaskInput.value, false);
    } else {
        //Cập nhật task
        let index = updateNote.split("_")[0];
        removeTask(updateNote);
        updateStorage(index, newTaskInput.value, false);
        updateNote = "";
    }
    count += 1;
    newTaskInput.value = "";
    }
});


//Button select task (Tất cả, hoàn thành, chưa hoàn thành)
const filterOption = document.querySelector(".filter-todo");
filterOption.addEventListener("click", filterTodo);
const btnOptions = document.querySelectorAll(".btn-option");

function filterTodo(e) {
    e.preventDefault();
    btnOptions.forEach(function(btnOption) {
        btnOption.classList.remove("active");
    });
    const todos = listTasks.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value) {
            case "all":
                e.target.classList.add("active");
                todo.style.display = "flex";
                console.log("all");
                break;
            case "completed":
                e.target.classList.add("active");
                if(todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                console.log("completed");
                break;
            case "incomplete":
                e.target.classList.add("active");
                if(!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                console.log("incompleted");
                break;
        }
    });
}
