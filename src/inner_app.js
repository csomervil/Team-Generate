// Using Large String with Prompt Values to Generate Page
module.exports = templateData => {

    return ` 
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="./assets/css/style.css" />
      <title>My Team</title>
    </head>
    
    <div class="row days">
            <div class="card" style="width: 12rem; height: 12rem; margin: 10px">
            <div class="card-body">
            <h5 class="card-title">${templateData.status}</h5>
            <div class="card-text">
            <div class="name" id="i-temp2">${templateData.name}</div>
                <div class="email">${templateData.email}</div>
                <div class="offn" id="i-feel2">${templateData.spec}</div>

            </div>
            </div>
        </div>
    
    </div>

    <div>
    
  
  `;
  };  