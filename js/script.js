 function switchProfilePic() {
                const img = document.getElementById('profile-pic');
                img.style.opacity = 0;
                setTimeout(() => {
                    if (img.src.includes('avatar.jpg')) {
                        img.src = 'images/profile.jpg';
                    } else {
                        img.src = 'images/avatar.jpg';
                    }
                    img.onload = () => {
                        img.style.opacity = 1;
                    };
                    // For cached images, trigger opacity immediately
                    if (img.complete) {
                        img.style.opacity = 1;
                    }
                }, 400);

            }
            const menuToggle = document.getElementById("menu-toggle");
            const navLinks = document.getElementById("nav-links");

                menuToggle.addEventListener("click", () => {
                    navLinks.classList.toggle("show");
                });