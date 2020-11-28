
data = {
    products:[
        {
            name: "Oscilloscope",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP  ",
            image : '/img/osc.jpg'
        },
        {
            name: "1",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "2",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "3",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "4",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "5",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "6",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "7",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "8",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        },
        {
            name: "9",
            description:"India's largest manufacturer and exporter of FRP/GRP Equipments, Field storage tanks, process equipments,high pressure vessels, Glass Flake lining,PVC/GRP ",
            image : '/img/osc.jpg'
        }
    ]
}

console.log(data.products[0].description);
let items = data.products.map((product) => {
return(
`<div  class="col-12 col-sm-4 wow fadeInUp slow">
<div class="card">
    <div class="card-img">
        <img src=${product.image}></img>
    </div>
    <div class="class-body text-center">
        <h4 class="card-title">
            ${product.name}
        </h4>
        <p class="card-text">
            ${product.description}
        </p>
        <button class="btn">
            View more
        </button>
    </div>
</div>
</div>`


)});
let s = "";
let final = items.map((item)=>{
    s = s + item;
})
document.getElementById('main').innerHTML= s ;