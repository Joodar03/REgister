import React, {Component} from 'react';
import Swal from "sweetalert2";

const Register = async () => {
    const { value: formValues } = await Swal.fire({
        title: 'YARIK BACHOK POTIK',
        html:
            '<input id="Email" class="swal2-input">' +
            '<input id="Password" class="swal2-input">'+
            '<input id="Password2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('Email').value,
                document.getElementById('Password').value,
                document.getElementById('Password2').value
            ]
        }
    })


}
export default Register;