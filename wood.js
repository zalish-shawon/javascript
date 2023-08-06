function woodCalculation(chair, table, bed) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = perChairWood * chair;
    const tableTotalWood = perTableWood * table;
    const bedTotalWood = perBedWood * bed;

    const totalWoodQuantity = chairTotalWood + tableTotalWood + bedTotalWood;

    return totalWoodQuantity;

}

const total = woodCalculation(2, 5, 3);
console.log(total);
