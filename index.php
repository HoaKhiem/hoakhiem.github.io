<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <script src="https://kit.fontawesome.com/4533631142.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="head">
            <a href="#">Black friday</a>
        </div>
        <div class="menu">
        <ul>
            <li>
                <a href="#">Home</a>
                <a href="#">product</a>
                <a href="#">Warranty</a>
                <a href="#">about us</a>
                <form method="GET" action="timkiem.php">
            <input type="text" placeholder="Tìm kiếm..." name="search">
           <label for="timkiem"> <i class="fas fa-search cust"></i></label>
           <input style="display: none;" type="submit">
           <i class="fas fa-shopping-cart cartt"></i>
            <a href="login.php"><i class="fas fa-user ccst"></i></a>
        </form>
            </li>
        </ul>
        </div>
    </header>
   <?php
  $connect = mysqli_connect("localhost","root","","ontap");
  $query = "SELECT * FROM product";
  $to = "SELECT COUNT(id) as total from product";
  $toresult = mysqli_query($connect, $to);
  $rowrs = mysqli_fetch_assoc($toresult);
  $total = $rowrs['total']; 
  $result = mysqli_query($connect,$query);

 //tìm trang hiện tại:
 $current_page;
 if(isset($_GET['page'])){
     $current_page = $_GET['page'];
 }
 else{
     $current_page = 1;
 }
 //giới hạn sản phẩm mỗi trang:
 $limit = 8;
 //Tổng số trang:
 $total_page = ceil($total/$limit);
 if($current_page > $total_page){
     $current_page = $total_page;
 }
 elseif($current_page <0){
 $current_page = 1;
 } 
 $start = ($current_page - 1) * $limit;
 $qr = "SELECT * FROM product LIMIT $limit OFFSET $start";
 $rss = mysqli_query($connect,$qr);
  while($row = mysqli_fetch_assoc($rss)){
    ?>
    <div class="main">
          <div class="khung">
              <div class="img">
                    <img src="Images/<?php echo $row["anh"] ?>" alt="<?php echo $row["anh"]?>">
              </div>
              <div class="content">
                <h3><?php echo $row["ten"]; ?></h3>
                <p>Giá: <?php echo $row["Gia"]; ?> VND</p>
                <button><a href="#">Mua Ngay</a></button>
                <button><a href="#">Thêm vào giỏ hàng</a></button>
              </div>
          </div>
   </div>
   <?php }
   ?>
  <footer>
  <div class="container">
    <div class="pagination">
        <?php
         for ($i=0; $i < $total_page; $i++) { 
             ?>
             <a <?php if($current_page == $i + 1){ echo "Class = 'active'";} ?> href="index.php?page=<?php echo $i + 1;?>"><?php echo $i + 1; ?></a>
         <?php } ?>
    </div>
  </div>
  </footer>
</body>
</html>