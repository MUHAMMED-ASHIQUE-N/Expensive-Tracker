const taskText = document.getElementById("input-reason");
const inputAmount = document.getElementById("input-amount");
const addBtn = document.getElementById("addBtn");

const balanceAmount = document.getElementById("balanceAmount");
const incomeAmount = document.getElementById("incomeAmount");
const expenseAmount = document.getElementById("expenseAmount");
const transactionList = document.getElementById("transactionList");
const tipBtn = document.getElementById("tip-btn");
const tipHead = document.getElementById("tip-head");
const tipText = document.getElementById("tip-text");
const startbtn = document.getElementById("start-btn");
const taskSection = document.getElementById("task-section");
const footer = document.getElementById("footer");
const btnBox = document.getElementById("btn-box");

const tips = [{ header: "Create a Budget", text: "Track your income and expenses to understand your spending and save effectively." },
{ header: "Build an Emergency Fund", text: "Save at least 3 to 6 months' worth of living expenses in case of unexpected events like job loss or medical emergencies." },
{ header: "Pay Yourself First", text: "Set aside a portion of your income for savings or investment before spending on non-essential items." },
{ header: "Minimize Debt", text: "Avoid high-interest debt like credit card balances. Pay off existing debts as quickly as possible to reduce interest costs." },
{ header: "Invest for the Future", text: "Start investing early, even with small amounts, to take advantage of compound interest. Consider long-term investments like retirement funds." },
{ header: "Diversify Your Investments", text: "Don't put all your money in one investment type. Spread your investments across stocks, bonds, real estate, and other assets to reduce risk." },
{ header: "Review Your Financial Goals Regularly", text: "Set specific, measurable goals for saving and investing. Review them periodically and adjust if needed to stay on track." },
{ header: "Live Below Your Means", text: "Avoid lifestyle inflation. Just because you earn more doesn't mean you should spend more. Save and invest the extra income instead." },
{ header: "Be Cautious of Impulse Purchases", text: "Think before you buy. Wait 24-48 hours before making non-essential purchases to avoid impulse buying." },
{ header: "Educate Yourself About Finances", text: "Think before you buyContinuously learn about personal finance, investing, taxes, and budgeting. Knowledge empowers you to make better financial decisions." }

]
 

let balance = 0;
let income = 0;
let expense = 0;
let count = 0;  

startbtn.addEventListener('click', ()=> {
         const isHidden = window.getComputedStyle(taskSection, footer).display === "none";
    if (isHidden) {
        taskSection.style.display = "block";
        footer.style.display = "block";
    taskSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        taskSection.style.display = "none";
        footer.style.display = "none";

    }


});

function tipsGenerator() {

    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];

    tipHead.textContent = randomTip.header;
    tipText.textContent = randomTip.text;

};


tipBtn.addEventListener('click', ()=> {
    count++;
    tipsGenerator();
    if (count === 1) {
        document.getElementById("tip-container").scrollIntoView({ behavior: 'smooth' });
    }
   
});













addBtn.addEventListener('click', () => {
    addTaskFromInput();
    document.getElementById("transactionsCard").scrollIntoView({behavior:'smooth'})
});



function addTaskFromInput() {
    const text = taskText.value.trim() || "Transation";
    const amount = parseFloat(inputAmount.value);

    if (isNaN(amount) || amount === 0) {


        return;
    }


    calculation(amount);
    creatingElements(text, amount);

    taskText.value = "";
    inputAmount.value = "";
}

function creatingElements(text, amount) {
    const li = document.createElement('li');
    li.className = "list";


    const transactionTitle = document.createElement("h3");
    transactionTitle.className = 'text';
    transactionTitle.textContent = text;

    const transactionAmount = document.createElement("p");
    transactionAmount.className = amount > 0 ? 'income' : 'expense';
    transactionAmount.textContent = amount > 0 ? "$" + amount : "-$" + Math.abs(amount);


    li.appendChild(transactionTitle);
    li.appendChild(transactionAmount);
    transactionList.appendChild(li);



}




function calculation(amount, balance) {

    if (amount > 0) {
        income += amount;
    } else {
        expense += Math.abs(amount);
    }
    balance = income - expense;

    balanceAmount.textContent = balance > 0 ? "$" + balance : "-$" + Math.abs(balance);
    incomeAmount.textContent = "$" + income;
    expenseAmount.textContent = "$" + expense;

}


