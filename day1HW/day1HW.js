const input = document.getElementById("fileUpload")
const preview =  document.getElementById("preview")


input.addEventListener("change", () => {
    const file = input.files[0];
    if(!file) return
    const url = URL.createObjectURL(file);
    preview.src=url
})