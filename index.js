function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let session = "AM";
    if(h == 0)
    {
        h = 12;
        session = "AM"
    }

    if( h > 12 )
    {
        h = h - 12;
        session = "PM";
    }
   
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    // console.log(h)
    document.getElementById("h").innerText = h;
    document.getElementById("m").innerText = m;
    document.getElementById("s").innerText = s;
    document.getElementById("se").innerText = session;
    // let time = h + ":" + m + ":" + s + session;
    // document.getElementById("box2").innerText = time;
    let t = setTimeout(
        function(){
             startTime() }, 1000);
}
startTime();

// var data = [];
function creatBlock()
{
    const w = document.getElementById("wake").value;
    const lunch = document.getElementById("lunch").value;
    const snap = document.getElementById("snap").value;
    const box = document.getElementById("message")
    box.style.backgroundColor = "#8E53F0";
    box.style.borderRadius = "10px";
    // get value on the screen

    document.getElementById("wake_up").innerText = "Wake-Up Time :" + w;
    document.getElementById("lunch_t").innerText = "Lunch Time :" + lunch;
    document.getElementById("snap_t").innerText = "Snap Time :" + snap;

    const today = new Date();
    let hh = today.getHours();
    // let m = today.getMinutes();
    // let s = today.getSeconds();
    let session = "AM";
    if(hh == 0)
    {
        hh = 12;
    }

    if( hh > 12 )
    {
        hh = hh - 12;
        session = "PM";
    }
    var hr = h.innerText + session  ;
    var AddPara = document.getElementById("text");
    var image ="./1-16911_balloon-png-images-free-picture-download-with-transparency.png"
    var b = w.split("-");
    var x = document.getElementById("image");
    var l = lunch.split("-");
    var sn = snap.split("-")
    console.log(b[0],hr)

    if( hr == b[0]  )
    {
        AddPara.innerText = "Good Morning!!"
        image = "WhatsApp Image 2021-11-25 at 8.20.32 PM.jpeg"
    }
    else if ( hr == l[0])
    {
        AddPara.innerText = "Let's Have Some Lunch!!";
        image = "WhatsApp Image 2021-11-25 at 8.33.01 PM.jpeg"

    }
    else if(hr == sn[0] )
    {
        AddPara.innerText = "Let's Have Some Dinner!!"
        image = "WhatsApp Image 2021-11-25 at 8.19.28 PM.jpeg"
    }
    else
    {
        AddPara.innerText = ""
        image = "https://juststickers.in/wp-content/uploads/2016/08/eat-sleep-code-repeat.png"
    }

   x.src = image;

}