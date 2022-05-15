const checkTheRole = (data) => {
  switch (data.getRole()) {
    case 'Manager':
      return `Office: ${data.officeNumber}`;
    case 'Engineer':
      return `GitHub: <a href="https://github.com/${data.getGithub()}"
      target="_blank">${data.getGithub()}</a>`;
    case 'Intern':
      return `School: ${data.getSchool()}`;
  }
}



// create the about section


const generateCard = data => {
  if (!data) {
    return '';
  }

  return `
<div class="card m-2 shadow-sm" id="" style="width: 18rem;">
  <div class="card-header bg-primary text-white">
      <h2 class="">${data.getName()}</h2>
      <h3 class="">Role: ${data.getRole()}</h3>
  </div>
  <div class="card-body bg-light">
      <ul class="list-group bg-white">
          <li class="list-group-item">ID: ${data.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${data.getEmail()}">${data.getEmail()}</a>
          </li>
          <li class="list-group-item">${checkTheRole(data)}</li>
      </ul>
  </div>
</div>
  `;
};



const templateData = (dataArray) => {
  let html = ''

  for (let i = 0; i < dataArray.length; i++) {
    html += generateCard(dataArray[i]);
  }
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
      <nav class="navbar navbar-dark bg-danger text-center">
          <span class="navbar-header mb-0 w-100 h1 text-white">My Team</span>
      </nav>
      <main class="container my-5">
  
          <div class="row justify-content-center">
          ${html}
          </div>
  
      </main>
  
  </body>
  
  </html>
  `;
};

module.exports = templateData;