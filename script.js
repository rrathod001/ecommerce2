let w = document.getElementById("women")
let ws = document.getElementById("w_shop")

let item1 = document.getElementById('hover_item_1')
let item2 = document.getElementById('hover_item_2')
let item3 = document.getElementById('hover_item_3')
let item4 = document.getElementById('hover_item_4s')

let hamb = document.getElementById('hamb')

let carous = document.getElementById('carous')


document.addEventListener('click', function(event) {
    var clickedElement = event.target;
    
    if (clickedElement.id === 'women') {
        ws.classList.toggle('d-none')
        item1.classList.add('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_1') {
        item1.classList.toggle('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_11') {
        item1.classList.toggle('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_111') {
        item1.classList.toggle('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_1111') {
        item1.classList.toggle('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_2') {
        item2.classList.toggle('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_22') {
        item2.classList.toggle('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_222') {
        item2.classList.toggle('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_2222') {
        item2.classList.toggle('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_3') {
        item3.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_33') {
        item3.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_333') {
        item3.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_3333') {
        item3.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_4') {
        item4.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_44') {
        item4.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_444') {
        item4.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else if (clickedElement.id === 'hover_4444') {
        item4.classList.toggle('d-none')
        item2.classList.add('d-none')
        item1.classList.add('d-none')
        item3.classList.add('d-none')
        carous.classList.add('carousel-inner-zin')
    }
    else
    {
        ws.classList.add('d-none')
        item1.classList.add('d-none')
        item2.classList.add('d-none')
        item3.classList.add('d-none')
        item4.classList.add('d-none')
        carous.classList.remove('carousel-inner-zin')
    }
  });

  function show_hamb()
  {
    hamb.classList.toggle('side-off')
  }
  function close_menu()
  {
    hamb.classList.toggle('side-off')
  }

  let swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });