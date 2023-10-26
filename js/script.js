// Definisikan fungsi replaceName
function replaceName() {
    let name = prompt("Siapakah nama anda ?", "");
    document.getElementById("name").innerHTML = name;
}

// Panggil fungsi replaceName saat halaman dimuat
window.onload = function() {
    replaceName();
};
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var phone = document.forms["contactForm"]["phone"].value;
    var message = document.forms["contactForm"]["message"].value;

    // Validasi email menggunakan ekspresi reguler
    var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name == "" || email == "" || phone == "" || message == "") {
        alert("Harap lengkapi semua field!");
        return false;
    } else if (!email.match(emailFormat)) {
        alert("Harap masukkan alamat email yang valid!");
        return false;
    }

    // Mengirim data formulir ke halaman baru
    var formValues = {
        'Name': name,
        'Email': email,
        'Phone': phone,
        'Message': message
    };

    var formJSON = JSON.stringify(formValues);
    localStorage.setItem('formData', formJSON);
    window.open('form_result.html', '_blank');

    return true;
}
