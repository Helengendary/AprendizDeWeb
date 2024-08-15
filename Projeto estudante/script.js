

function arquivar(input) {
    let file = input.files[0];

    let reader = new FileReader();    

    reader.readAsDataURL(file);

    reader.onload = () => {
        
    }

    alert(`File name: ${file.name}`); // e.g my.png
    alert(`Last modified: ${file.lastModified}`); // e.g 1552830408824
}