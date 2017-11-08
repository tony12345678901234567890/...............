<html>
  <head>
    <script src="hotel.js"></script>
    <link rel="stylesheet" type="text/css" href="hotel.css">
      <title>Tony's Hotel</title>
      <h1 id="title">Tony's Hotel</h1>
  </head>
  <body>
     <div style="background-color:#ff6699; margin-bottom:10px;" colorspan="2" id="topbar">
       <p id="price">$100 per guest</p>
    <div id="hotelOne">
      <p id="one">Room One</p>
    <input type="text" id="roomOne" onkeydown="if(event.keyCode == 13)document.getElementById('buttonOne').click()" maxlength="20">
    <input type="button" value="Add Guest" id="buttonOne" onclick="addOne()">
    </div>
    <div id="removeHotelOne">
    <input type="number" id="removeOne" onkeydown="if(event.keyCode == 13)document.getElementById('removeButtonOne').click()">
    <input type="button" value="Remove a Guest" onclick="removeOne()" id="removeButtonOne">
    </div>
    <ol id="listOne">
    </ol>
    
    <div id="hotelTwo">
      <p id="two">Room Two</p>
    <input type="text" id="roomTwo" onkeydown="if(event.keyCode == 13)document.getElementById('buttonTwo').click()" maxlength="20">
    <input type="button" value="Add Guest" onclick="addTwo()" id="buttonTwo">
    </div>
    <div id="removeHotelTwo">
    <input type="number" id="removeTwo" onkeydown="if(event.keyCode == 13)document.getElementById('removeButtonTwo').click()">
    <input type="button" id="removeButtonTwo" value="Remove a Guest" onclick="removeTwo()">
    </div>
    <ol id="listTwo">
    </ol>
    
    <div id="hotelThree">
      <p id="Three">Room Three</p>
    <input type="text" id="roomThree" onkeydown="if(event.keyCode == 13)document.getElementById('buttonThree').click()" maxlength="20">
    <input type="button" onclick="addThree()" id="buttonThree" value="Add Guest">
    </div>
    <div id="removeHotelThree">
    <input type="number" id="removeThree" onkeydown="if(event.keyCode == 13)document.getElementById('removeButtonThree').click()">
    <input type="button" value="Remove a Guest" onclick="removeThree()" id="removeButtonThree">
    </div>
    
    <ol id="listThree">
    </ol>
    <p id="grandTotal">Grand Total</p>
    </div>
    
    <div id="payBox">
    <input type="number" id="credit" onkeydown="if(event.keyCode == 13)document.getElementById('creditCardPayMent').click()" max="16">
    <input type="button" value="Pay Here!" id="creditCardPayMent" onclick="creditCard()">
    <p id="outcome">Enter credit card number (2 numbers only!)</p>
    </div>
    
    <div style="background-color: #ff6699; margin-bottom=:10px;" id="bottomBar"></div>
  <input type="button" value="Information" id="linkOne" onclick="window.location.href='http://www.mangafox.com'">
  <input type="button" value="About" id="linkTwo" onclick="window.location.href='http://www.mangafox.com'">
  <input type="button" value="Management" id="linkThree" onclick="window.location.href='http://www.mangafox.com'">
  
  </body>
</html>
