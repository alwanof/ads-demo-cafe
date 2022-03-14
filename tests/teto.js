const { fixture } = require("testcafe");
import {Selector} from "testcafe";

const bn = Math.floor(Math.random() * 1000);
fixture('First Fixture')
.page('https://ads-dev.admixplay.com/login')
   .before( async t => {
       console.log("Before");
            
    })
    .after( async t => {
        console.log("After");
    });

test('First Test', async t => {
    await t
    .typeText('#email', 'mohammed.murad@admixplay.com')
    .typeText('#password', 'Zoom+9321')
    .click("button[type='submit']")
    .expect(Selector("#Overview > h1").innerText).eql("Overview")
    .click("button[class='ant-btn ant-btn-lg new-btn']")
    .click("#root > div > section.content > div > div > div:nth-child(2) > div:nth-child(1)")
    .typeText('#name', `AUTO-${bn}`,{ replace: true })
    .typeText('#startDate', '13/12/2025 14:38',{ replace: true })
    .pressKey('enter')
    .typeText('#endDate', '13/11/2027 00:09',{ replace: true })
    .pressKey('enter')
    .typeText('#dailyBudget', '10')
    .typeText('#totalBudget', '100')
    .click("#root > div > section.content > div > div > section > main > form > div > div:nth-child(2) > button")
    .expect(Selector("#root > div > section.content > div > div > section > main > div:nth-child(2) > div > div > div > div.ant-collapse-header > div > h2").innerText).eql("Filter Apps");
    
     //var x=await Selector("h2.title").innerText;
     
     //console.log(x);
    
});

