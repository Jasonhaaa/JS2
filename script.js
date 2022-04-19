function myFunction() {
    var x = document.getElementById("myText").value;
    var y = document.getElementById("Text").value;
    var z= Number(x) + Number(y);
    document.getElementById("demo").innerHTML = z ;
    const message = document.getElementById("demo");
    message.innerHTML = z ;
    var z = document.getElementById("demo").value;
    try { 
    if(x == "")  throw "is empty";
    if(isNaN(x)) throw "error";
    x = Number(x);
    if(y == "")  throw "is empty";
    if(isNaN(y)) throw "error";
    y = Number(y);
    }
    catch(err) {
    message.innerHTML = "Type of data " + err;
      }
      finally {
        document.getElementById("demo").value = "";
      }
    }