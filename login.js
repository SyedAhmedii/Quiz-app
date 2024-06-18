const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const main = document.getElementById('main');

        signUpButton.addEventListener('click', () => {
            main.classList.add("right-panel-active");
        });
        signInButton.addEventListener('click', () => {
            main.classList.remove("right-panel-active");
        });

        document.getElementById('signUpForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signUpName').value;
            const email = document.getElementById('signUpEmail').value;
            const password = document.getElementById('signUpPassword').value;
            
            let users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            
            alert('User registered successfully!');
        });

        document.getElementById('signInForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('signInEmail').value;
            const password = document.getElementById('signInPassword').value;
            
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let user = users.find(user => user.email === email && user.password === password);
            
            if (user) {
                alert('User logged in successfully!');
                window.location.href = "quiz.html"
            } else {
                alert('Invalid email or password!');
            }
        });