const dropdown = document.getElementById('dropdown').classList
// document.addEventListener("click", checkDropdown);

const showDropdown = () => {
    if (dropdown.contains('non-active')){
        dropdown.remove('non-active')
    } else {
        dropdown.add("non-active")
    }
}

// const checkDropdown = () => {
//     if(!dropdown.contains('non-active')){
//         dropdown.add('non-active')
//     }
// }
