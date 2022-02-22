const { Builder, By, Key } =  require("selenium-webdriver");
var assert = require('assert');
var today = new Date();
var yesterday = new Date(today)
var tomorrow = new Date(today)
var day_after_tomorrow = new Date(today)
var day_after_tomorrow_next = new Date(today)


yesterday.setDate(yesterday.getDate() - 1)
var dd = String(yesterday.getDate()).padStart(2, '0');
var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = yesterday.getFullYear();
yesterday = mm + '/' + dd + '/' + yyyy;

tomorrow.setDate(tomorrow.getDate() + 1)
var dd = String(tomorrow.getDate()).padStart(2, '0');
var mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = tomorrow.getFullYear();
tomorrow = mm + '/' + dd + '/' + yyyy;

day_after_tomorrow.setDate(day_after_tomorrow.getDate() + 2)
var dd = String(day_after_tomorrow.getDate()).padStart(2, '0');
var mm = String(day_after_tomorrow.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = day_after_tomorrow.getFullYear();
day_after_tomorrow = mm + '/' + dd + '/' + yyyy;


day_after_tomorrow_next.setDate(day_after_tomorrow_next.getDate() + 3)
var dd = String(day_after_tomorrow_next.getDate()).padStart(2, '0');
var mm = String(day_after_tomorrow_next.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = day_after_tomorrow_next.getFullYear();
day_after_tomorrow_next = mm + '/' + dd + '/' + yyyy;

var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;

let driver = new Builder().forBrowser("firefox").build();

describe('Test Kasa.com', function() {
  this.timeout(0);

  // Testing for Austin TX location.
    it('Searching for Kasas at Austin, TX', async function() {
      await 500000;

      await driver.get("https://www.kasa.com");
      await 500000;

      // Parsing Austin TX location to the location testbox.
      await driver
        .findElement(By.id("full-screen-hero-search-input"))
       .sendKeys("Austin, TX", Key.RETURN);
       await 500000;

      //Clicking on submit button.
      let search_button = await driver
        .findElement(By.xpath("//button[@type='submit']"))
        .click();

      await 500000;

      //Checking if the page returns location-list or no-result.
      let error="Failure";
      let text="Failure";
      try {
        await 500000;
        let result = await driver.findElement(By.className("location-list"));
        text="Success";
      }
      catch (error) {
        await 500000;
        let result = await driver.findElement(By.className("no-result"));
        text=error;
      }
      await 500000;

      assert.strictEqual(text,"Success");
      await 500000;
  });

  // Testing for San Francisco, CA location.
  it('Searching for Kasas at San Francisco, CA', async function() {
    await 500000;

    await driver.get("https://www.kasa.com");
    await 500000;

    // Parsing San Francisco, CA location to the location testbox.
    await driver
      .findElement(By.id("full-screen-hero-search-input"))
      .sendKeys("San Francisco, CA", Key.RETURN);
   await 500000;

   //Clicking on submit button.
     let search_button = await driver
      .findElement(By.xpath("//button[@type='submit']"))
      .click();

    await 500000;

    //Checking if the page returns location-list or no-result.
    let error="Failure";
    let text="Failure";
    try {
      await 500000;
      let result = await driver.findElement(By.className("location-list"));
      text="Success";
    }
    catch (error) {
      await 500000;
      let result = await driver.findElement(By.className("no-result"));
      text=error;
    }
    await 500000;

    assert.strictEqual(text,"Success");
    await 5000000;
});

// Testing for Chicago, IL location.
it('Searching for Kasas at Dallas, TX', async function() {
  await 5000000;

  await driver.get("https://www.kasa.com");
  await 5000000;

  // Parsing Dallas, TX location to the location testbox.
  await driver
    .findElement(By.id("full-screen-hero-search-input"))
    .sendKeys("Dallas, TX", Key.RETURN);
  await 5000000;

//Clicking on submit button.
  let search_button = await driver
    .findElement(By.xpath("//button[@type='submit']"))
    .click();

  await 5000000;

  //Checking if the page returns location-list or no-result.
  let error="Failure";
  let text="Failure";
  try {
    await 5000000;
    let result = await driver.findElement(By.className("location-list"));
    text="Success";
  }
  catch (error) {
    await 5000000;
    let result = await driver.findElement(By.className("no-result"));
    text=error;
  }

  await 5000000;
  assert.strictEqual(text,"Success");
  await 5000000;
});

// Testing that bookings can only be done for future dates. Providing Yesterday and today as input test case.
it('Testing Booking date in future', async function() {
  await 500000;

  await driver.get("https://www.kasa.com");
  await 500000;

  //Parsing yesterday to check-in input
  await driver
    .findElement(By.id("full-screen-hero-check-in-input"))
    .sendKeys(yesterday, Key.RETURN);
  await 500000;

  //Parsing today to check-out input
  await driver
    .findElement(By.id("full-screen-hero-check-out-input"))
    .sendKeys(today, Key.RETURN);

  await 500000;

  //Checking for invalid dates error prompt
  let error="Failure";
  let text="Failure";
  try {
    await 500000;
    let result = await driver.findElement(By.id("full-screen-hero-invalid-dates-error"));
    text="Success";
  }
  catch (error) {
    text=error;
  }
  await 500000;

  assert.strictEqual(text,"Success");
  await 500000;
});

// Testing that booking can obly be done for future test cases. Providing today and tomorrow as test cases.
it('Testing Booking date in future test 2', async function() {
  await 500000;

  await driver.get("https://www.kasa.com");
  await 5000;

  //Parsing today to check-in input
  await driver
    .findElement(By.id("full-screen-hero-check-in-input"))
    .sendKeys(today, Key.RETURN);
  await 5000;

  //Parsing tomorrow to check-out input
  await driver
    .findElement(By.id("full-screen-hero-check-out-input"))
    .sendKeys(tomorrow, Key.RETURN);

  await 5000;

  //Checking for invalid dates error prompt
  let error="Failure";
  let text="Failure";
  try {
    await 5000;
    let result = await driver.findElement(By.id("full-screen-hero-invalid-dates-error"));
    text="Success";
  }
  catch (error) {
    text=error;
  }
  await 5000;

  assert.strictEqual(text,"Success");
  await 5000;
});

//Testing for valid input dates. Providing the check-in date to be later than the check-out date.
it('Testing Booking date jumbled', async function() {
  await 5000;

  await driver.get("https://www.kasa.com");
  await 5000;

  //Parsing day after tomorrow to check-in input
  await driver
    .findElement(By.id("full-screen-hero-check-in-input"))
    .sendKeys(day_after_tomorrow, Key.RETURN);
  await 5000;

  //Parsing tomorrow to check-out input
  await driver
    .findElement(By.id("full-screen-hero-check-out-input"))
    .sendKeys(tomorrow, Key.RETURN);

  await 5000;

  //Checking for invalid dates error prompt
  let error="Failure";
  let text="Failure";
  try {
    await 5000;
    let result = await driver.findElement(By.id("full-screen-hero-invalid-dates-error"));
    text="Success";
  }
  catch (error) {
    text=error;
  }
  await 5000;

  assert.strictEqual(text,"Success");
  await 5000;
});


// Testing the correct scenario of booking. Providing the dates in the future as input.
it('Testing Booking date correct', async function() {
  await 5000;

  await driver.get("https://www.kasa.com");
  await 5000;

  //Parsing tomorrow to check-in input
  await driver
    .findElement(By.id("full-screen-hero-check-in-input"))
    .sendKeys(tomorrow, Key.RETURN);
  await 5000;

  //Parsing day after tomorrow to check-out input
  await driver
    .findElement(By.id("full-screen-hero-check-out-input"))
    .sendKeys(day_after_tomorrow, Key.RETURN);

  await 5000;

  //Checking for the valid page redirect.
  let error="Failure";
  let text="Failure";
  try {
    await 5000;
    let result = await driver.findElement(By.id("full-screen-hero-invalid-dates-error"));
    text="Failure";
  }
  catch (error) {
    text="Success";
  }
  await 5000;

  assert.strictEqual(text,"Success");
  await 5000;
});


// Testing if the selected Kasa has a Heating amenity.
it('Testing Heating Amenity', async function() {
  await 5000;

  await driver.get("https://kasa.com/properties/kasa-austin-downtown?adultGuestCount=1&childGuestCount=0&infantGuestCount=0&travelingForBusiness=false&roomTypeId=5eea028f1dd274227c36bf98&open=roomTypePopup");
  await 50000;

  //Finding the list of amenities
  let ul_li = driver.findElement(By.xpath("//*[@id='room-type-popup-card-5eea028f1dd274227c36bf98']/div[2]/div[1]/ul/li"));
  await 50000;
  let ul = driver.findElement(By.xpath("//*[@id='room-type-popup-card-5eea028f1dd274227c36bf98']/div[2]/div[1]/ul"));

  await 50000;


  //Looping through the list of amenities to search for Heating.
  let result="Failure";
  let amenity;
  let amenity_string;
  let li_string;
  let count = 0;
  for (number in ul_li) {
    await 50000;
    li_string = "li["+count+"]"
    amenity = ul.findElement(By.xpath(li_string)).getText().then(function (text) {
    });
    await 50000;
    count = count + 1;
    await 50000;
    amenity_string = amenity.toString()
    if (amenity_string.localeCompare('Heating')) {
      result = "Success";
    };
  };

  await 5000;

  assert.strictEqual(result,"Success");
  await 5000;
});


// Testing that selected Kasa doesn't allow single night stay.
it('Testing Minimum Stay: 2 nights minimum check', async function() {
  await 5000;

  await driver.get("https://kasa.com/properties/kasa-kasa-dallas-north?adultGuestCount=1&childGuestCount=0&infantGuestCount=0&travelingForBusiness=false&roomTypeId=5eecdee01dd274227caacd54&open=roomTypePopup#reviews");
  await 50000;
  await 50000;
  await 50000;
  let text="Failure";
  try {
    await 50000;
    await 50000;
    await 500000;

    // Parsing tomorrow aa check-in date.
    await driver.findElement(By.xpath("//*[@id='room-type-popup-check-in-input']"))
                .sendKeys(tomorrow, Key.RETURN);
    await 500000;

    // Parsing day after tomorrow as check-out date.
    await driver.findElement(By.xpath("//*[@id='room-type-popup-check-out-input']"))
                .sendKeys(day_after_tomorrow, Key.RETURN);
    await 5000000;

    // Clicking the submit button
    await driver.findElement(By.className("button is-primary is-medium"))
                .click();
    await 500000;

    // Check if the button to reset dates pop-up.
    await driver.findElement(By.className("link link-reset button-reset is-button"));

              text="Success";
  }
  catch (error) {
    await 5000;
    text=error;
  }

  await 5000;
  assert.strictEqual(text,"Success");
  await 50000;
  await driver.quit();

});

});
