// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const filteredPosts = posts.filter(post => post.userId === 1);
    const postsDiv = document.getElementById('posts');
    filteredPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postsDiv.appendChild(postElement);
    });
  })
  .catch(error => console.log(error));


// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const filteredPosts = posts.filter(post => post.userId === 1);
    const postsDiv = document.getElementById('posts');
    filteredPosts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
      postElement.classList.add('post');
      postsDiv.appendChild(postElement);
    });
  })
  .catch(error => console.log(error));





// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    

  })
