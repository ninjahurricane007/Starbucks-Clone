async function fetchData() {
    try {
      const response = await fetch("https://dummyjson.com/products/");
      if (!response.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);
      const products = [];
      data.products.forEach((element) => {
        products.push(element);
        console.log(products);
      });


      const maincontainer = document.getElementById("outer_container");
      maincontainer.classList.add("main");

    //   const container = document.getElementById("frap-div");
      for(let i=0;i<3;i++){
        const frapContainer = document.createElement("div");
        frapContainer.classList.add("frap");
        const container1 = document.createElement("div");
        container1.classList.add("frap1");
        const image1 = document.createElement("img");
        image1.src=`${products[i].thumbnail}`;
        container1.appendChild(image1);

        const container2 = document.createElement("div");
        container2.classList.add("frap2");
        const image2 = document.createElement("img");
        image2.src= `${products[i].thumbnail}`;
        const h4 = document.createElement("h4");
        h4.textContent=`${products[i].title}`;
        container2.appendChild(image2);
        container2.appendChild(h4);

        const container3 = document.createElement("div");
        container3.classList.add("tall");
        const p3 = document.createElement("p");
        p3.textContent=`${products[i].category}`;
        const p4 = document.createElement("p");
        p4.textContent=`${products[i].description}`;
        container3.appendChild(p3);
        container3.appendChild(p4);

        const container4 = document.createElement("div");
        container4.classList.add("money");
        const p5 = document.createElement("h3");
        p5.textContent=`${products[i].price}`;
        const aa = document.createElement("a");

        container4.appendChild(p5);
        container4.appendChild(aa);
        container2.appendChild(container3);
        container2.appendChild(container4);
        frapContainer.appendChild(container2);
        frapContainer.appendChild(container1);
        maincontainer.appendChild(frapContainer);
        maincontainer.style.display = "block";
    }




    const maincontainer2 = document.getElementById("outer_container2");
      maincontainer2.classList.add("main2");

    //   const container = document.getElementById("frap-div");
      for(let i=3;i<6;i++){
        const frapContainer = document.createElement("div");
        frapContainer.classList.add("frap");
        const container1 = document.createElement("div");
        container1.classList.add("frap1");
        const image1 = document.createElement("img");
        image1.src=`${products[i].thumbnail}`;
        container1.appendChild(image1);

        const container2 = document.createElement("div");
        container2.classList.add("frap2");
        const image2 = document.createElement("img");
        image2.src= `${products[i].thumbnail}`;
        const h4 = document.createElement("h4");
        h4.textContent=`${products[i].title}`;
        container2.appendChild(image2);
        container2.appendChild(h4);

        const container3 = document.createElement("div");
        container3.classList.add("tall");
        const p3 = document.createElement("p");
        p3.textContent=`${products[i].category}`;
        const p4 = document.createElement("p");
        p4.textContent=`${products[i].description}`;
        container3.appendChild(p3);
        container3.appendChild(p4);

        const container4 = document.createElement("div");
        container4.classList.add("money");
        const p5 = document.createElement("h3");
        p5.textContent=`${products[i].price}`;
        const aa = document.createElement("a");

        container4.appendChild(p5);
        container4.appendChild(aa);
        container2.appendChild(container3);
        container2.appendChild(container4);
        frapContainer.appendChild(container2);
        frapContainer.appendChild(container1);
        maincontainer2.appendChild(frapContainer);
        maincontainer2.style.display = "block";
    }


    } catch (error) {
      console.error("error:", error);
    }
  }
  fetchData();



