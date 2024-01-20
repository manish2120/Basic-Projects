<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "notes-app";

$connect = mysqli_connect($servername, $username, $password, $database);

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $title = $_POST['title'];
  $description = $_POST['description'];

$insertData = "INSERT INTO `notes` (`sr.no`, `title`, `description`, `timestamp`) VALUES (NULL, '$title', '$description', current_timestamp())";

$sql = mysqli_query($connect, $insertData);

}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notes Maker</title>
  <!-- BOOTSTRAP -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  <!-- --------- -->

  <!-- DATATABLES CDN -->

  <link rel="stylesheet" href="//cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">

  <!-- -------------- -->
</head>

<body class="vh-100 d-flex flex-column align-items-center">
  <form class="w-50 mt-5" action="/recent/notes.php" method="POST">
    <div class="mb-3">
      <h2>Notes</h2>
      <label for="title" class="form-label">Title</label>
      <input type="text" class="form-control" id="title" name="title" aria-describedby="textHelp">
    </div>
    <div class="form-floating">
      <textarea class="form-control mb-3" placeholder="describe your title..." id="floatingTextarea2 description"
        name="description" style="height: 100px"></textarea>
      <label for="floatingTextarea2">Description</label>
    </div>
    <button type="submit" class="btn btn-primary mb-5">Add Note</button>

    <table class="table mt-5" id="myTable">
      <thead>
        <tr>
          <th scope="col">Sr.no.</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <?php
      $totalData = "SELECT * FROM `notes`";
      $connData = mysqli_query($connect, $totalData);
      $sno = 0;
      while($row = mysqli_fetch_assoc($connData)) {
        $sno = $sno + 1;
        echo '<tr>
        <th scope="row">' . $row["sr.no"] . '</th>
        <td>' . $row["title"] . '</td>
        <td>' . $row["description"] . '</td>
        <td><button class="btn btn-primary edit">Edit</button>  <a>Delete</a></td></tr>';
      };
      ?>

      </tbody>
    </table>
  </form>

  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Launch demo modal
  </button>

  <!-- Modal -->
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="editModal">Update Changes</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">

          <form action="/recent/notes.php" method="POST">
            <div class="mb-3">
              <label for="titleEdit" class="form-label">Title</label>
              <input type="text" class="form-control" id="titleEdit" name="titleEdit" aria-describedby="titleHelp">
            </div>
            <div class="form-floating">
              <textarea class="form-control mb-3" placeholder="describe your title..."
                id="floatingTextarea2 descriptionEdit" name="descriptionEdit" style="height: 100px"></textarea>
              <label for="floatingTextarea2 descriptionEdit">Description</label>
            </div>
          </form>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>




  <!-- SCRIPTS -->

  <!-- JQUERY SCRIPT -->
  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4="
    crossorigin="anonymous"></script>
  <!-- ------------------- -->

  <!-- BOOTSTRAP SCRIPT -->

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
    integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"
    integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
    crossorigin="anonymous"></script>
  <!-- -------------- -->

  <!-- DATATABLES -->
  <script src="//cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"></script>
  <!-- -------------- -->

  <script>
    $(document).ready(function () {
      $('#myTable').DataTable();
    });
  </script>

  <script>
    let edits = document.getElementsByClassName('edit');

    Array.from(edits).forEach((element) => {
      element.addEventListener('click', (e) => {
        console.log(e.target);
        e.preventDefault();
        let tr = e.target.parentElement.parentNode;
        let title = tr.getElementsByTagName('td')[0].innerText;
        let description = tr.getElementsByTagName('td')[1].innerText;
        console.log(title, description);
        titleEdit.value = title;
        descriptionEdit.value = description;
        $('#editModal').modal('toggle');
      })
    })
  </script>

</body>

</html>
