(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  // $.get('http://localhost:3001', (command) => SwimTeam.move(command));

  let randomDirection = () => {
    let possibleMovesArr = ['down', 'up', 'left', 'right'];
    let randomDirection = possibleMovesArr[Math.floor(Math.random()*4)];
    // SwimTeam.move(randomDirection)
    return randomDirection
  }

  const swimFetch = (command) => {
    $.ajax({
      type:'GET',
      url: serverUrl,
      success: () => {
        if (command) {
          SwimTeam.move(command)
        } else {
          SwimTeam.move(randomDirection)
        }
      }
    });
  }

  // setInterval(swimFetch, 1000)

  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
