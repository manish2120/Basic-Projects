<?php
// INSERT INTO `notes app` (`Sr.no.`, `Note`, `Description`, `Time Stamp`) VALUES (NULL, 'Buy Books', 'plz buy books from store', current_timestamp());
$servername = "localhost";
$username = "root";
$password = "";
$database = "notes";

$connect = mysqli_connect($servername, $username, $password, $database);

if($connect) {
  // echo "DB connected";
}
else {
  die("DB is not connected -> ".mysqli_connect_error());
}

if($_SERVER['REQUEST_METHOD'] === 'POST') {
  $title = $_POST['note'];
  $description = $_POST['description'];

  $insertData = "INSERT INTO `notes app` (`Sr.no.`, `Note`, `Description`, `Time Stamp`) VALUES (NULL, '$title', '$description', current_timestamp())";

  $result = mysqli_query($connect, $insertData);

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  
  
  <link rel="stylesheet" href="//cdn.datatables.net/1.13.7/css/jquery.dataTables.min.css">

  <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>

  <script src="//cdn.datatables.net/1.13.7/js/jquery.dataTables.min.js"></script>

  <script>
    $(document).ready( function () {
    $('#myTable').DataTable();
} );
  </script>

</head>
<body class="d-flex align-items-center flex-column mt-5">
<form action="/php1/2024/db-crud.php" method="POST" class="w-50">
  <div class="mb-3">
    <h2>Notes</h2>
    <label for="note" class="form-label">Note</label>
    <input type="text" class="form-control" id="note" name="note" aria-describedby="noteHelp">
  </div>
  <div class="description-input">
    <label for="description">Description</label>
  <textarea class="form-control my-2" placeholder="note description" id="description" name="description"></textarea>
</div>
  <button type="submit" class="btn btn-primary">Add Note</button>
</form>


<div>
<table class="table" id="myTable">
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
$sql = "SELECT * FROM `notes app`";
$result = mysqli_query($connect, $sql);

  while($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
      <th scope='row'>" . $row['Sr.no.']."</th>
      <td>" . $row['Note']."</td>
      <td>" . $row['Description'] . "</td>
      <td> Actions </td>
    </tr>";
  }
  
}

?>
  </tbody>
</table>
</div>

  
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
</body>
</html>
