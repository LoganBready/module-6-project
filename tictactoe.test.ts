import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

describe('All of the tests for fun', () => {
    test('I can start a game', async () => {
    
        let button = await (await driver).findElement(By.id('start-game'));
        await button.click();  
    })
    test('clicking the bottom right box should generate an X', async () => {
    
        let testOne = await driver.findElement(By.id('cell-8'))
        await testOne.click()
        expect (await testOne.getText()).toEqual('X');
    })
    test('clicking middle table should generate an X', async () => {
        let testTwo = await driver.findElement(By.id('cell-4'))
        await testTwo.click()
        expect(await testTwo.getText()).toEqual('X');
    })
    test('clicking the top left should generate an X', async () => {
        let testThree = await driver.findElement(By.id('cell-0'))
        await testThree.click()
        expect(await testThree.getText()).toEqual('X');
    })

})

// test('attempt at harder question', async () => {
//     let partOne = await driver.findElement(By.id('cell-0'))
//     let partTwo = await driver.findElement(By.name('O'))
//     await partOne.click()
//     await partTwo
// })

// test('I can start a game', async () => {
    
//     let button = await (await driver).findElement(By.id('start-game'));
//     await button.click();
    
// });

// test('clicking the bottom right box should generate an X', async () => {
    
//     let testOne = await driver.findElement(By.id('cell-8'))
//     await testOne.click()
// })

// test('clicking middle table should generate an X', async () => {
//     let testTwo = await driver.findElement(By.id('cell-4'))
//     await testTwo.click()
// })

// test('clicking the top left should generate an X', async () => {
//     let testThree = await driver.findElement(By.id('cell-0'))
//     await testThree.click()
// })




// afterAll(async () => {
//     await driver.quit()
// })