window.onload = function() {
    var submit = document.querySelector('#signup');
    var error = document.querySelector('#error');
    var errorHead = document.querySelector('#errorHeader');
    var valid = true;

    submit.onsubmit = function() {
        error.innerHTML = '';
        var username = submit.username.value;
        var password = submit.password.value;
        var confirm_password = submit.confirm_password.value;

        if (username.length < 6) {
            error.innerHTML += 'Username is too short <br>';
            valid = false;
        }

        if (username[0].match(/[a-zA-Z]/) === null) {
            error.innerHTML +=
                'Username needs to begin with an alphebet <br>';
            valid = false;
        }

        if (password.length < 6) {
            error.innerHTML += 'OOPS! Password length is too short, try again! <br>';
            valid = false;
        }

        if (password[0].match(/[a-zA-Z]/) === null) {
            error.innerHTML +=
                'Password needs to begin with an alphebet letter <br>';
            valid = false;
        }

        if (password.match(/\d+/) === null) {
            error.innerHTML += 'Password needs to have at least 1 number <br>';
            valid = false;
        }

        if (password.match(/[A-Z]/) === null) {
            error.innerHTML +=
                'Password needs to have atleast 1 uppercase letter <br>';
            valid = false;
        }

        if (!(password === confirm_password)) {
            error.innerHTML += 'Passwords need to match <br>';
            valid = false;
        }

        var age = submit.age.value;
        if (age < 18 || age > 60) {
            error.innerHTML += 'Age must be between 18-60' + '<br>';
            valid = false;
        }

        if (valid) {
            errorHead.innerHTML = 'Great, well done';
        }
        if (!valid) {
            errorHead.innerHTML = 'Errors';
            show();
        }
        return valid;
    };

    submit.onreset = function() {
        error.innerHTML = '';
        errorHead.classList.add('hidden');
        valid = true;
    };

    submit.username.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Username Format';
            error.innerHTML = 'at least 6 character <br> Must start with an alphabet';
            show();
        }
    };

    submit.username.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    submit.password.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Password Format';
            error.innerHTML =
                'at least 6 character <br> Must start with an alphabet <br> at least 1 number <br> at least 1 uppercase character <br> Both passwords must match';
            show();
        }
    };

    submit.password.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    submit.cpassword.onmouseover = function() {
        if (valid) {
            errorHead.innerHTML = 'Password Forward';
            error.innerHTML =
                'at least 6 character <br> Must start with an alphabet <br> at least 1 number <br> at least 1 uppercase character <br> Both passwords must match';
            show();
        }
    };

    submit.cpassword.onmouseout = function() {
        if (valid) {
            hide();
        }
    };

    function hide() {
        errorHead.innerHTML = '';
        error.innerHTML = '';
        errorHead.classList.add('hidden');
        error.classList.add('hidden');
    }

    function show() {
        errorHead.classList.remove('hidden');
        error.classList.remove('hidden');
    }
};