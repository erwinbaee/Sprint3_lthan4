function login (email, password) {
    const user = "erwin@gmail.com"
    const pass = "135"
    function gohome() {
        document.write("<h2>" + "anda berhasil login" + "</h2>")
        
    }
    function backlogin() {
        document.write( "<h1>" + "anda gagal login...silahkan ulang lagii..!" + "</h1>")
        
    }
    if (user == email && password == pass) {
        return gohome()
        
    } else if (email != user || password != pass) {
        return backlogin ()
    } else if (email != user && password != pass) {
        return backlogin ()
    } else {
        document.write('anda gagal login...!');
    }
}

let email2 = prompt ('silahkan masukkank email anda :')
let password2 = prompt ('silahkan masukkan password anda :')

login (email2, password2)