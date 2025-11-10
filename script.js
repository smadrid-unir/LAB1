document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const postId = this.getAttribute('data-post');
        document.querySelectorAll('.post').forEach(post => {
            post.style.display = (post.id === postId) ? 'block' : 'none';
        });
    });
});