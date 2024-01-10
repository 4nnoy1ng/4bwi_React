import React from 'react'

export default function Button() {
    return (
        <button id="alertButton" className="bg-green-400 py-3 px-6 my-3 mx-3"> Sendar    </button>
    )
    var alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', function() {
        alert('Hello! This is an alert.');
    });
}
