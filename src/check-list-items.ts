enum Preset {
  CAR_TRIP,
}

export type TCheckListItem = {
  id: string
  presets?: Array<Preset>
  selected?: boolean
}

export type TCategory = {
  name: string
  items: Array<TCheckListItem>
}

type Translations = {
  categories: Array<string>
  items: Array<string>
}

const data: Array<TCategory> = [
  {
    name: "theDayBefore",
    items: [
      { id: "checkTheWeather" },
      { id: "adjustTheWardrobe" },
      { id: "downloadOfflineMaps" },
      { id: "downloadNecessaryMobileApps" },
      { id: "printTheTickets" },
      { id: "buyAndPrintTheInsurance" },
      { id: "checkBankCardStuff" },
      { id: "withdrawSomeCash" },
      { id: "planTheRouteFromAirportToAppartments" },
      { id: "checkInonaflight" },
      { id: "buyGreenCard" },
      { id: "chargeDevices" },
      { id: "freePhonesMemory" },
      { id: "prepareBooksarticlesToRead" },
    ],
  },
  {
    name: "mustHave",
    items: [
      { id: "passport" },
      { id: "tickets" },
      { id: "booking" },
      { id: "insurance" },
      { id: "wallet" },
      { id: "smartphone" },
      { id: "drivingLicense" },
    ],
  },
  {
    name: "gadgets",
    items: [
      { id: "smartphoneCharger" },
      { id: "smartwatchCharger" },
      { id: "earphones" },
      { id: "powerbank" },
      { id: "memoryCard" },
      { id: "eBook" },
      { id: "socketAdapter" },
    ],
  },
  {
    name: "hygieneItems",
    items: [
      { id: "wetNapkins" },
      { id: "disposableHandkerchiefs" },
      { id: "eyeDrops" },
      { id: "handSanitizer" },
      { id: "lipsBalm" },
      { id: "hairbrush" },
      { id: "perfume" },
      { id: "hygieneProducts" },
      { id: "lenses" },
    ],
  },
  {
    name: "beautician",
    items: [
      { id: "handMirror" },
      { id: "moisturizingCream" },
      { id: "toothpasteAndBrush" },
      { id: "shampooConditioner" },
      { id: "shavingStuff" },
      { id: "cleanser" },
      { id: "faceTonic" },
      { id: "deodorant" },
      { id: "manicureSet" },
      { id: "tweezers" },
      { id: "cottonSwabsAndWheels" },
      { id: "hairTies" },
      { id: "hairdryer" },
    ],
  },
  {
    name: "justBeforeLeaving",
    items: [
      { id: "turnOffElectricDevicesAtHome" },
      { id: "checkWaterTapsAndShutOffWater" },
      { id: "emptyTheFridge" },
      { id: "waterFlowers" },
      { id: "checkTheAirportstationOfDeparture" },
      { id: "checkThePassportticketsAndMoney" },
      { id: "closeAllTheWindows" },
    ],
  },
  {
    name: "medicine",
    items: [
      { id: "headachePills" },
      { id: "painkillers" },
      { id: "antipyretic" },
      { id: "coldMedicine" },
      { id: "allergyMedicine" },
      { id: "antibiotic" },
      { id: "medicineForInjuries" },
      { id: "motionSicknessMedicine" },
      { id: "poisoningMedicine" },
      { id: "diarrheaPills" },
      { id: "adhesivePlaster" },
      { id: "chronicDiseaseMedicine" },
    ],
  },
  {
    name: "clothes",
    items: [
      { id: "sneakers" },
      { id: "socksAndPanties" },
      { id: "tShirts" },
      { id: "shirts" },
      { id: "jeanstrousers" },
      { id: "hoody" },
      { id: "sleepwear" },
      { id: "sportswear" },
      { id: "headdress" },
      { id: "secondPairOfShoes" },
      { id: "accessoires" },
      { id: "dresses" },
      { id: "skirts" },
    ],
  },
  {
    name: "warmClothing",
    items: [
      { id: "windbreaker" },
      { id: "turtleneck" },
      { id: "warmSocks" },
      { id: "veryWarmSweater" },
      { id: "hatAndGloves" },
      { id: "warmSweater" },
      { id: "thermalUnderwear" },
    ],
  },
  {
    name: "summerClothing",
    items: [
      { id: "sunglasses" },
      { id: "shorts" },
      { id: "swimsuit" },
      { id: "pareo" },
      { id: "flipFlops" },
    ],
  },
  {
    name: "miscellaneous",
    items: [
      { id: "swissArmyKnife" },
      { id: "shoeDryer" },
      { id: "fumigator" },
      { id: "corkscrew" },
      { id: "umbrella" },
      { id: "needleAndThreads" },
      { id: "notebookAndPen" },
      { id: "smallBoardGames" },
      { id: "candies" },
      { id: "foldableBag" },
      { id: "friendsAddressesForAPostalCards" },
      { id: "downloadTvSeries" },
      { id: "additionalSimCard" },
    ],
  },
  {
    name: "photoVideo",
    items: [
      { id: "photoCamera" },
      { id: "cameraCharger" },
      { id: "prepareSdCards" },
      { id: "actionCamera" },
      { id: "actionCameraCharger" },
    ],
  },
  {
    name: "drone",
    items: [
      { id: "quadrocopter" },
      { id: "chargerForQuadrocopter" },
      { id: "batteries" },
      { id: "formatSdCards" },
      { id: "remoteController" },
      { id: "chargerForRemoteController" },
      { id: "lensFilters" },
    ],
  },
]

function createTranslationStubs(): Translations {
  const categories: Array<string> = []
  const items: Array<string> = []

  data.forEach((category) => {
    categories.push(category.name)
    category.items.forEach((item) => {
      items.push(item.id)
    })
  })

  return { categories, items }
}

export { data as CheckListData, createTranslationStubs }
