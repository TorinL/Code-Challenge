if (window.File && window.FileReader && window.FileList && window.Blob) {
  console.log("All the File APIs are supported!");
} else {
  alert('File APIs are not fully supported on this browser')
}

$('#files').change(getFile)

function getFile(evt) {

  var files = evt.target.files;

  let output = files[0]

  var reader = new FileReader();

  reader.onload = function(e) {
    $('#render').text(reader.result)
  }

  reader.readAsText(event.target.files[0])
}
