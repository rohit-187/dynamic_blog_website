
// //When the page loads, all current posts stored will show via load posts function
// //document.addEventListener("DOMContentLoaded", loadPosts);

// //This function displays the current blog posts from local storage
// function loadPosts() {

//     //Creats an array that displays the posts if they exist
//     //Using JSON to convert the post into an object, to then turn into an array
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
    
//     const postContainer = document.getElementById("posts");
//     //If there are posts
//     if (postContainer) {
//         //Clears content after reloading
//         postContainer.innerHTML = "";
//         //For loop that loops through each post
//         posts.forEach((post, index) => {
//             //Adding features on each post. This includes: Post title, post content, image, and view and delete button
//             postContainer.innerHTML += `
//                 <div class="post">    
//                 <h2>${post.title}</h2>
//                     <p>${post.content.substring()}</p>
                    
//                     <button onclick="viewPost(${index})">View</button>
//                     <button onclick="deletePost(${index})">Delete</button>
//                 </div>`;
//         });
//     }
// }


// //Creating a function that creates a post
// function savePost(event) {
//     //Prevents the form from reloading after submission
//     event.preventDefault();
//     //Gets the title and content for post
//     const title = document.getElementById("title").value;
//     const content = document.getElementById("content").value;
//     //Alerts the user if there is nothing entered in either box
//     if (title=="" || content=="") {
//         alert("Please enter both a title and content before saving.");
//         return;
//     }
//     //Retrieves the existing posts
//     //Creates an empty array if there is none
//     const posts = JSON.parse(localStorage.getItem("posts")) || [];
//     //Adds this post to the array
//     posts.push({ title, content });
//     //Saves upadated post to local storage after converting into a string (stringify)
//     localStorage.setItem("posts", JSON.stringify(posts));

//     location.href = "index.html";
// }



// //This function allows the user to update a post
// function updatePost(event) {
//     //Prevents the form from reloading after submission
//     event.preventDefault();
//     const index = localStorage.getItem("editIndex");
//     const title = document.getElementById("editTitle").value;
//     const content = document.getElementById("editContent").value;

//     if (title=="" || content=="") {
//         alert("Please enter both a title and content before updating.");
//         return;
//     }
//     const posts = JSON.parse(localStorage.getItem("posts"));
//     posts[index] = { title, content };
//     localStorage.setItem("posts", JSON.stringify(posts));

//     location.href = "index.html";
// }

// function deletePost(index) {
//     const posts = JSON.parse(localStorage.getItem("posts"));
//     posts.splice(index, 1);
//     localStorage.setItem("posts", JSON.stringify(posts));

//     loadPosts();
// }

// function viewPost(index) {
//     localStorage.setItem("viewIndex", index);
//     location.href = "view.html";
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const index = localStorage.getItem("viewIndex");
//     const editIndex = localStorage.getItem("editIndex");
//     const posts = JSON.parse(localStorage.getItem("posts"));

//     if (index !== null && document.getElementById("viewTitle")) {
//         document.getElementById("viewTitle").innerText = posts[index].title;
//         document.getElementById("viewContent").innerText = posts[index].content;
//     }

//     if (editIndex !== null && document.getElementById("editTitle")) {
//         document.getElementById("editTitle").value = posts[editIndex].title;
//         document.getElementById("editContent").value = posts[editIndex].content;
//     }
// });

document.addEventListener("DOMContentLoaded", loadPosts);

function loadPosts() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const postContainer = document.getElementById("posts");

    if (postContainer) {
        postContainer.innerHTML = "";
        posts.forEach((post, index) => {
            postContainer.innerHTML += `
                <div class="post">
                    <h2>${post.title}</h2>
                    <p>${post.content.substring(0, 100)}...</p>
                    <button onclick="viewPost(${index})">View</button>
                    <button onclick="editPost(${index})">Edit</button>
                    <button onclick="deletePost(${index})">Delete</button>
                </div>
            `;
        });
    }
}

function savePost(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    posts.push({ title, content });
    localStorage.setItem("posts", JSON.stringify(posts));

    location.href = "index.html";
}

function editPost(index) {
    localStorage.setItem("editIndex", index);
    location.href = "edit.html";
}

function updatePost(event) {
    event.preventDefault();
    const index = localStorage.getItem("editIndex");
    const title = document.getElementById("editTitle").value;
    const content = document.getElementById("editContent").value;

    const posts = JSON.parse(localStorage.getItem("posts"));
    posts[index] = { title, content };
    localStorage.setItem("posts", JSON.stringify(posts));

    location.href = "index.html";
}

function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts.splice(index, 1);
    localStorage.setItem("posts", JSON.stringify(posts));

    loadPosts();
}

function viewPost(index) {
    localStorage.setItem("viewIndex", index);
    location.href = "view.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const index = localStorage.getItem("viewIndex");
    const editIndex = localStorage.getItem("editIndex");
    const posts = JSON.parse(localStorage.getItem("posts"));

    if (index !== null && document.getElementById("viewTitle")) {
        document.getElementById("viewTitle").innerText = posts[index].title;
        document.getElementById("viewContent").innerText = posts[index].content;
    }

    if (editIndex !== null && document.getElementById("editTitle")) {
        document.getElementById("editTitle").value = posts[editIndex].title;
        document.getElementById("editContent").value = posts[editIndex].content;
    }
});
