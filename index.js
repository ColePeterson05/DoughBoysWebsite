const follower = document.getElementById('follower');

document.addEventListener('mousemove', (e) => {
    follower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
