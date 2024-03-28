const destinations = [
  {
    name: "Venetian Renaissance",
    International: true,
    price: 1300,
    img: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80&quot;",
  },
  {
    name: "Swiss Mountain Getaway",
    International: true,
    price: 800,
    img: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80&quot;",
  },
  {
    name: "Ibizan Coastal Vacation",
    International: true,
    price: 1200,
    img: "https://images.unsplash.com/photo-1547138494-97041dec734b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80&quot;",
  },
  {
    name: "Hawaiian Vacation",
    International: false,
    price: 900,
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80&quot;",
  },
  {
    name: "Cascade Mountains",
    International: false,
    price: 400,
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80&quot;",
  },
  {
    name: "Egyptian Exploration",
    International: true,
    price: 800,
    img: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80&quot;",
  },
];
let x = document.querySelector(".container");
destinations.forEach((item) => {
  x.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
  <h2 class="card-header">${item.name}</h2>
  <img
    src=${item.img}
    alt="Green and Purple Moss"
    class="card-img"
  />
  <h3 class="card-price">$${item.price}</h3>
</div>`
  );
});
