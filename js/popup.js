var write_us_open=document.querySelector(".write-us .btn");
var write_us_form=document.querySelector(".modal-form");
var write_us_close=document.querySelector(".modal-form-close");
var write_us_name=write_us_form.querySelector("[name=user-name]");
var write_us_mail=write_us_form.querySelector("[name=user-mail]");
var storage=localStorage.getItem("login");

write_us_open.addEventListener("click",function(event) {
    event.preventDefault();
    write_us_form.classList.add("modal-form-show");

    if (storage) {
        write_us_name.value=storage;
        write_us_mail.focus();
    } else {
        write_us_name.focus();
    }
});

write_us_close.addEventListener("click",function(event) {
    event.preventDefault();
    write_us_form.classList.remove("modal-form-show");
    write_us_form.classList.remove("modal-form-error");
});

write_us_form.addEventListener("submit", function(event){
    if (!write_us_name.value || !write_us_mail.value) {
        event.preventDefault();
        write_us_form.classList.add("modal-form-error");
    } else {
        localStorage.setItem("login",write_us_name.value);
    }
});

window.addEventListener("keydown",function(event) {
    if (event.keyCode === 27) {
        if (write_us_form.classList.contains("modal-form-show")) {
            write_us_form.classList.remove("modal-form-show");
            write_us_form.classList.remove("modal-form-error");
        }
    }
});
