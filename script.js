function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
let historyData = [];
getElement("all-box").addEventListener("click", function (e) {
  if (e.target.className.includes("hart-btn")) {
    // const hartBtn = e.target;
    const quantity = getElement("btn-hart").innerText;
    const currentHartQuantity = Number(quantity) + 1;
    getElement("btn-hart").innerText = currentHartQuantity;
  }
  if (e.target.closest(".btn-copy")) {
    const copyBtn = e.target.closest(".btn-copy");
    const card = copyBtn.closest(".bg-base-100"); // The card container
    const textToCopy = card.querySelector(".text-to-copy").innerText;

   
  if (e.target.className.includes("call-btn")) {
    const btn = e.target;
    const cardName =
      btn.parentNode.parentNode.children[1].children[1].innerText;
    console.log(cardName);
    const cardNumber =
      btn.parentNode.parentNode.children[1].children[3].innerText;
    const coinIconAmount = getElement("coin-amount");
    const coinIcon = Number(coinIconAmount.innerText);
    const newCoinIcon = coinIcon - 20;
    if (coinIcon <= 0) {
      alert("You do not have enough coin,It costs 20 taka to call.");
      return;
    }
    getElement("coin-amount").innerText = newCoinIcon;
    alert(`📞 ${cardName} ${cardNumber}..`);
    const time = new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    historyData.push({ name: cardName, number: cardNumber, time: time });
    const historyContainer = getElement("history-container");
    historyContainer.innerHTML = "";
    for (const data of historyData) {
      const div = document.createElement("div");
      div.innerHTML = `
        <div class="flex justify-between bg-gray-200 mt-3 p-2">
              <div>
                <h1>${data.name}</h1>
                <h1>${data.number}</h1>
              </div>
                <p>${data.time}</p>
            </div>
        `;
      historyContainer.appendChild(div);
    }
  }
});

// clear card content
document.getElementById("btn-clear").addEventListener("click", function () {
  const cardContainer = getElement("history-container");
  cardContainer.innerHTML = "";
});
