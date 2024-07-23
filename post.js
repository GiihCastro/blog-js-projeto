         function getUserId() {
            
            return 'user_' + Math.floor(Math.random() * 1000000);
        }

        
        let posts = [];

        function toggleNewPostForm() {
            const form = document.getElementById('newPostForm');
            form.classList.toggle('active');
        }

        function submitNewPost(event) {
            event.preventDefault(); 
            const postTitle = document.getElementById('postTitle').value;
            const postContent = document.getElementById('postContent').value;

            
            const newPost = {
                id: posts.length + 1,
                title: postTitle,
                content: postContent,
                likes: 0,
                likedBy: []
            };

           
            posts.push(newPost);

            
            document.getElementById('postTitle').value = '';
            document.getElementById('postContent').value = '';

            
            toggleNewPostForm();

            
            renderPosts();

          
            localStorage.setItem('posts', JSON.stringify(posts));
        }

        function renderPosts() {
            const container = document.querySelector('.posts-section');
            container.innerHTML = ''; 

            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const postHTML = `
                    <div class="content">
                        <h3>${post.title}</h3>
                        <p>${post.content}</p>
                    </div>
                    <div class="actions">
                        <button class="button like-button ${hasLiked(post.id) ? 'active' : ''}" onclick="toggleLike(${post.id})">
                            ${hasLiked(post.id) ? 'Curtido' : 'Curtir'} (${post.likes})
                        </button>
                    </div>
                `;
                postElement.innerHTML = postHTML;
                container.appendChild(postElement);
            });
        }

        function hasLiked(postId) {
            const userId = getUserId();
            const post = posts.find(p => p.id === postId);
            return post.likedBy.includes(userId);
        }

        function toggleLike(postId) {
            const userId = getUserId();
            const post = posts.find(p => p.id === postId);

            if (!post.likedBy.includes(userId)) {
                post.likes++;
                post.likedBy.push(userId);
            } else {
                post.likes--;
                post.likedBy = post.likedBy.filter(id => id !== userId);
            }

          
            renderPosts();

      
            localStorage.setItem('posts', JSON.stringify(posts));
        }

    
        function changeBackgroundColor() {
            const body = document.body;
            const h1 = document.querySelector('.typing-effect');
            if (body.style.backgroundColor === 'black') {
                body.style.backgroundColor = 'white';
                h1.style.color = 'black';
            } else {
                body.style.backgroundColor = 'black';
                h1.style.color = 'white';
            }
        }

       
        document.addEventListener('DOMContentLoaded', () => {
            // Recupera posts do localStorage se existir
            const storedPosts = localStorage.getItem('posts');
            if (storedPosts) {
                posts = JSON.parse(storedPosts);
            }
            
            renderPosts();
        });
   