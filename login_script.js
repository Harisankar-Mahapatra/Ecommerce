const true_toast = document.getElementById('true-snackbar');
const false_toast = document.getElementById('false-snackbar');
const neutral_toast = document.getElementById('neutral-snackbar');
const error_toast = document.getElementById('error-snackbar');


async function signin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const data = await axios.post('http://localhost:5000/signin', {
        email: email,
        pass: pass
    })
    let result = data.data
    window.location.href = 'index.html'
    //snackBar(result)
}

async function signup(event) {
    event.preventDefault();
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value
    const re_pass = document.getElementById('re_pass').value

    const data = await axios.post('http://localhost:5000/signup', {
        email: email,
        pass: pass,
        re_pass: re_pass
    })
    let result = data.data
    //snackBar(result)
}

async function recovery(event) {
    event.preventDefault();
    const email = document.getElementById('email').value

    const data = await axios.post('http://localhost:5000/recovery', {
        email: email
    })
    let result = data.data
    //snackBar(result)
}

// function clearForm() {
//     document.getElementById('email').value = ''
//     document.getElementById('pass').value = ''
//     document.getElementById('re_pass').value = ''
// }

// async function snackBar(result) {
//     if (result == 1) {
//         true_toast.className = "show";
//         setTimeout(function () {
//             true_toast.className = true_toast.className.replace("show", "")
//             // console.log('redirected')
            
//         }, 2000);
//         clearForm()
//     }
//     else if (result == 0) {
//         false_toast.className = "show";
//         setTimeout(function () { false_toast.className = false_toast.className.replace("show", "");  }, 2000);
//         clearForm()
//     }
//     else if (result == 2) {
//         neutral_toast.className = "show";
//         setTimeout(function () { neutral_toast.className = neutral_toast.className.replace("show", "");  }, 2000);
//         clearForm()
//     }
//     else {
//         error_toast.className = "show";
//         setTimeout(function () { error_toast.className = error_toast.className.replace("show", ""); }, 2000);
//         clearForm()
//     }
// }