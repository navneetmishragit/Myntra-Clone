let bagItems;
onLoad();

function onLoad(){
    let bagItemsStr=localStorage.getItem('bagItems');
    bagItems=bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnHomePage();
    displayBagIconCount();
}


function addToBag(itemID){
    bagItems.push(itemID);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIconCount();
}

function displayBagIconCount(){
    let bagIconCount=document.querySelector('.item-bag-count');
    if(bagItems.length>0){
        bagIconCount.style.visibility="visible";
        bagIconCount.innerText=bagItems.length;
    }else{
        bagIconCount.style.visibility="hidden";
    }
    
    
}

function displayItemsOnHomePage(){
    let itemsContainer = document.querySelector('.items-container');
    if(!itemsContainer){
        return;
    }
    let innerHTML='';
    items.forEach(item => {
        innerHTML+=`
        <div class="item-container">
            <img class="item-image" src="${item.image}">
            <div class="ratings">
                ${item.rating.stars}✮ | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
                <span class="currrnt-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag(${item.id});">Add to Bag</button>
        </div>`
    });
itemsContainer.innerHTML=innerHTML;
}
