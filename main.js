class LottoGenerator extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                :host {
                    display: block;
                    width: 100%;
                    max-width: 500px;
                    margin: 2rem;
                }
                .wrapper {
                    padding: 2rem;
                    border-radius: 1rem;
                    background-color: #fff;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 5px 10px rgba(0, 0, 0, 0.04);
                    text-align: center;
                }

                h1 {
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 1rem;
                }

                .numbers {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin: 2rem 0;
                }

                .number {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #fff;
                }

                button {
                    padding: 1rem 2rem;
                    border: none;
                    border-radius: 0.5rem;
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #fff;
                    background-color: #4A90E2;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(74, 144, 226, 0.4);
                }

                button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(74, 144, 226, 0.6);
                }

                h2 {
                    font-size: 1.5rem;
                    color: #333;
                    margin-top: 2rem;
                    border-bottom: 2px solid #eee;
                    padding-bottom: 0.5rem;
                }

                .history-list {
                    list-style: none;
                    padding: 0;
                    margin: 1rem 0 0;
                    text-align: left;
                }

                .history-item {
                    padding: 0.5rem;
                    border-bottom: 1px solid #eee;
                    font-size: 1.1rem;
                }

            </style>
            <div class="wrapper">
                <h1>Lotto Number Generator</h1>
                <div class="numbers"></div>
                <button>Generate Numbers</button>
                <h2>History</h2>
                <ul class="history-list"></ul>
            </div>
        `;

        shadow.appendChild(template.content.cloneNode(true));

        this.numbersContainer = shadow.querySelector('.numbers');
        this.generateButton = shadow.querySelector('button');
        this.historyList = shadow.querySelector('.history-list');

        this.history = [];

        this.generateButton.addEventListener('click', () => this.generateNumbers());
    }

    generateNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
        this.displayNumbers(sortedNumbers);
        this.updateHistory(sortedNumbers);
    }

    displayNumbers(numbers) {
        this.numbersContainer.innerHTML = '';
        for (const number of numbers) {
            const numberElement = document.createElement('div');
            numberElement.classList.add('number');
            numberElement.textContent = number;
            numberElement.style.backgroundColor = this.getNumberColor(number);
            this.numbersContainer.appendChild(numberElement);
        }
    }

    getNumberColor(number) {
        if (number <= 10) return '#f39c12';
        if (number <= 20) return '#2980b9';
        if (number <= 30) return '#27ae60';
        if (number <= 40) return '#c0392b';
        return '#8e44ad';
    }

    updateHistory(numbers) {
        this.history.unshift(numbers);
        if (this.history.length > 5) {
            this.history.pop();
        }

        this.historyList.innerHTML = '';
        for (const numberSet of this.history) {
            const listItem = document.createElement('li');
            listItem.classList.add('history-item');
            listItem.textContent = numberSet.join(', ');
            this.historyList.appendChild(listItem);
        }
    }
}

customElements.define('lotto-generator', LottoGenerator);
