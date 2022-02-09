function salary(input) {
  let index = 0;
  let openTabs = Number(input[index]);
  index++;
  let money = Number(input[index]);
  index++;
let moneyLoss = 0;
  for (var i = 0; i < openTabs; ++i) {
    let currentTab = input[index];
    index++;

    if (currentTab == "Facebook") {
      moneyLoss += 150;
    } else if (currentTab == "Instagram") {
      moneyLoss += 100;
    } else if (currentTab == "Reddit") {
      moneyLoss += 50;
    }
  }

  if(moneyLoss >= money){
      console.log("You have lost your salary.");
  }
  else{
      console.log(money - moneyLoss)
  }
}

salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
