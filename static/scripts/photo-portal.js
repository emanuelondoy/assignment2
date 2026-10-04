// Requirement 5.2
function validate_data() {
  // hint: https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/value
  // Get the search_select value and search_input value
  // Use document.getElementById()
  // return false if the data validation checks fail. Also raise appropriate alert.
  // return true if the data validation checks pass.
}

function show_photo_details(photo_name, date_taken, tags) {
  alert("Photo:" + photo_name + " date_taken:" + date_taken + " tags:" + tags);
}


// Requirement 4.3 - Implement the preview_photo method that displays the photo in modal
function preview_photo(photo_name) {
  var previousImg = document.getElementById("preview-image");
  if (previousImg != null) {
    previousImg.parentNode.removeChild(previousImg);
  }
  var preview_img = document.createElement("img");
  preview_img.setAttribute("id", "preview-image");
  preview_img.setAttribute("src", "../static/images/photos/" + photo_name);
  document.getElementById("image-modal-body").appendChild(preview_img);
}


function show_settings() {
  alert("Settings called.");
}

function logout() {
  document.getElementById("settings-and-logout-form").submit();
}
