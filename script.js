

data = {
    products:[
        {
            name: "Oscilloscope",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP  ",
            bigimg : 'img/osc.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "1",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : 'img/osc.jpg',
            bigimg : 'img/50.jpg'
        },
        {
            name: "2",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : 'img/osc.jpg',
            bigimg : 'img/pexels-benjamin-suter-3617460.jpg'
        },
        {
            name: "3",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/pexels-karolina-grabowska-4021773.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "4",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/pexels-karolina-grabowska-4210556.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "5",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/pexels-rodolfo-clix-1366942.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "6",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/pexels-zhang-kaiyv-1168940.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "7",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/osc.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "8",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/osc.jpg',
            image : 'img/background-2462431_1920.jpg'
        },
        {
            name: "9",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            bigimg : 'img/osc.jpg',
            image : 'img/background-2462431_1920.jpg'
        }
    ]
}


let items = data.products.map((product) => {
    
return(
`<div  class="col-12 col-sm-4">
<div class="card">
    <div class="card-img">
        <img class=${product.bigimg} data-src=${product.image}></img>
    </div>
    <div class="class-body text-center">
        <h4 class="card-title">
            ${product.name}
        </h4>
        <p class="card-text">
            ${product.description}
        </p>
        <button class="btn">
            Add to cart
        </button>
    </div>
</div>
</div>`
)
});

let s = "";
let final = items.map((item)=>{
    s = s + item;
})
document.getElementById('main').innerHTML= s ;

/*setTimeout(function(){
loadedcount = 0;
var count = data.products.length;
for(var i=0;i <count;i++){
    var img = new Image();
    img.onload = function(){
        loadedcount = loadedcount+1;
        if (loadedcount==count){
            console.log("loaded")
            let items1 = data.products.map((product) => {
            return(
                `<div  class="col-12 col-sm-4 wow fadeInUp slow">
                <div class="card">
                    <div class="card-img">
                    <img src=${product.bigimg} ></img>
                    </div>
                    <div class="class-body text-center">
                        <h4 class="card-title">
                            ${product.name}
                        </h4>
                        <p class="card-text">
                            ${product.description}
                        </p>
                        <button class="btn">
                            Add to cart
                        </button>
                    </div>
                </div>
                </div>`
            )
                
        });
        let r = "";
        let final = items1.map((item)=>{
            r = r + item;
        })
        document.getElementById('main').innerHTML= r ;
        }
    };
    img.src = data.products[i].bigimg;
}
},3000)*/

var images = document.querySelectorAll("[data-src]");
    console.log("selected");
    options = {
        rootMargin : "0px 0px -300px 0px",
    }
    var imgObserver = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting){
                entry.target.src = entry.target.getAttribute("data-src");
                setTimeout(()=>{
                    var y = new Image();
                y.onload= ()=>{
                    entry.target.src = y.src;
                }
                y.src = entry.target.className;
                },100)
                
                
                imgObserver.unobserve(entry.target);
            }
        });
    } ,options);
images.forEach(img=>{
    imgObserver.observe(img)
})
    




