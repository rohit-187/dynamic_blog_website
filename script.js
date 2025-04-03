
//When the page loads, all current posts stored will show via load posts function
//document.addEventListener("DOMContentLoaded", loadPosts);
document.addEventListener("DOMContentLoaded", loadPosts);

//This function displays the current blog posts from local storage
function loadPosts() {

    //Creats an array that displays the posts if they exist
    //Using JSON to convert the post into an object, to then turn into an array
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    
    const postContainer = document.getElementById("posts");
    //If there are posts
    if (postContainer) {
        //Clears content after reloading
        postContainer.innerHTML = "";
        //For loop that loops through each post
        posts.forEach((post, index) => {
            //Adding features on each post. This includes: Post title, post content, image, and view and delete button
            postContainer.innerHTML += `
                <div class="post">    
                <h2>${post.title}</h2>
                    <p>${post.content.substring()}</p>
                    
                    <button onclick="viewPost(${index})">View</button>
                    <button onclick="deletePost(${index})">Delete</button>
                </div>`;
        });
    }
}


//Creating a function that creates a post
function savePost(event) {
    //Prevents the form from reloading after submission
    event.preventDefault();
    //Gets the title and content for post
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    //Alerts the user if there is nothing entered in either box
    if (title=="" || content=="") {
        alert("Please enter both a title and content before saving.");
        return;
    }
    //Retrieves the existing posts
    //Creates an empty array if there is none
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    //Adds this post to the array
    posts.push({ title, content });
    //Saves upadated post to local storage after converting into a string (stringify)
    localStorage.setItem("posts", JSON.stringify(posts));
    //Goes back to homepage after saving post
    location.href = "index.html";
}



//This function allows the user to update a post
function updatePost(event) {
    //Prevents the form from reloading after submission
    
    event.preventDefault();
    //Gets the post number, title, and content
    const index = localStorage.getItem("editIndex");
    const title = document.getElementById("editTitle").value;
    const content = document.getElementById("editContent").value;
    //Displays an alert that shows if there is no title or content in box
    if (title=="" || content=="") {
        alert("Please enter both a title and content before updating.");
        return;
    }
    //Gets the post and updates it in the given spot it was in prior
    const posts = JSON.parse(localStorage.getItem("posts"));
    posts[index] = { title, content };
    //Saves upadated post to local storage after converting into a string (stringify)
    localStorage.setItem("posts", JSON.stringify(posts));
    //Goes back to homepage
    location.href = "index.html";
}

//This function deletes a post from the homepage
function deletePost(index) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    //Using splice to remove the post 
    posts.splice(index, 1);
    //saves updated posts
    localStorage.setItem("posts", JSON.stringify(posts));
    //Launches loadPosts function which shows all available posts after deletion
    loadPosts();
}

//This function allows the user to view a post, taking them to the view html page
function viewPost(index) {
    localStorage.setItem("viewIndex", index);
    location.href = "view.html";
}




