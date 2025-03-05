const button = document.getElementById('theme');
            const body = document.body;

            button.addEventListener('click', () => {
                body.classList.toggle('dark-theme');
                body.classList.toggle('light-theme');
                button.textContent = body.classList.contains('dark-theme') ? 'Светлая тема' : 'Темная тема';
            })