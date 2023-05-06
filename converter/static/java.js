//drag drop event
const dragDropArea = document.getElementById("drag-drop");

dragDropArea.addEventListener("dragover", function(event) {
    event.preventDefault();
    dragDropArea.classList.add("drag-over");
});
dragDropArea.addEventListener("dragleave", function(event) {
    event.preventDefault();
    dragDropArea.classList.remove("drag-over");
    
});
dragDropArea.addEventListener("drop", function(event) {
    event.preventDefault();
    dragDropArea.classList.remove("drag-over");
    const file = event.dataTransfer.files[0];
    document.getElementById("file").files = event.dataTransfer.files;
    const fileName = file.name.toLowerCase();
    const fileSize = (file.size / 1024).toFixed(2);
    const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1);
    const truncatedName = fileName.substring(0, 10) + (fileName.length > 10 ? '' : '');
    const fileDescription = `<p>File Name: ${truncatedName}.${fileExt} (${fileSize} kB)</p>`;
    document.getElementById("drag-drop").innerHTML = fileDescription;
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col">  <button class="btn btn-outline-danger shadow-sm " id="remove-btn" onclick="removeFile()">Remove</button></div></div>';
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col">  <button class="btn btn-outline-primary shadow-sm" id="upload-btn"onclick="uploadFile()">Upload</button></div></div>';

});



//browse button event
document.getElementById("file").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const dragDrop = document.getElementById("drag-drop");
    const fileName = file.name.toLowerCase();
    const fileSize = (file.size / 1024).toFixed(2);
    const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1);
    const truncatedName = fileName.substring(0, 10) + (fileName.length > 10 ? '' : '');
    const extension = fileName[1];
    const fileDescription = `<p>File Name: ${truncatedName}.${fileExt} (${fileSize} kB)</p>`;
    document.getElementById("drag-drop").innerHTML = fileDescription;
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col ">  <button class="btn btn-outline-danger  shadow-sm" id="remove-btn" onclick="removeFile()">Remove</button></div></div>';
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col">  <button class="btn btn-outline-primary shadow-sm" id="upload-btn"onclick="uploadFile()">Upload</button></div></div>';

  });


//remove and reset function
function removeFile()
{
  const fileName = document.querySelector("#drag-drop p");
  if (fileName) 
  {
     fileName.parentNode.removeChild(fileName);
  }
  dragDropArea.innerHTML = `
  
      <i class="bi bi-cloud-plus-fill mx-auto  " style="font-size: 8rem;margin-top: -40px; "></i>
    <div class="inputbtn mx-auto">
<input type="file" id="file" style="display: none;">
<button class="btn btn-outline-secondary btn-rounded shadow-sm " type="button" id="file" onclick="document.getElementById('file').click()">Browse</button>
 </div>
 `;


  const fileInput = document.getElementById("file");
  fileInput.value = '';

  document.getElementById("file").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const dragDrop = document.getElementById("drag-drop");
    const fileName = file.name.toLowerCase();
    const fileSize = (file.size / 1024).toFixed(2);
    const fileExt = fileName.substring(fileName.lastIndexOf('.') + 1);
    const truncatedName = fileName.substring(0, 10) + (fileName.length > 10 ? '' : '');
    const extension = fileName[1];
    const fileDescription = `<p>File Name: ${truncatedName}.${fileExt} (${fileSize} kB)</p>`;
    document.getElementById("drag-drop").innerHTML = fileDescription;
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col ">  <button class="btn btn-outline-danger  shadow-sm" id="remove-btn" onclick="removeFile()">Remove</button></div></div>';
    document.getElementById("drag-drop").innerHTML +='<div"class="row mx-auto"><div class="col ">  <button class="btn btn-outline-primary shadow-sm" id="upload-btn"onclick="uploadFile()">Upload</button></div></div>';

  });

 
 }
 

const removeButton = document.querySelector("#remove-btn");
if (removeButton) {
  removeButton.addEventListener("click", removeFile);
}

