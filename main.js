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
                    position: relative;
                    padding: 2rem;
                    border-radius: 1rem;
                    background-color: var(--card-bg-color);
                    box-shadow: 0 10px 25px var(--shadow-color), 0 5px 10px var(--shadow-color);
                    text-align: center;
                    transition: background-color 0.3s ease, color 0.3s ease;
                }

                h1 {
                    font-size: 2.5rem;
                    color: var(--text-color);
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
                    color: var(--button-text-color);
                    background-color: var(--button-bg-color);
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
                }

                button:hover {
                    transform: translateY(-2px);
                    background-color: var(--button-hover-bg-color);
                    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
                }

                h2 {
                    font-size: 1.5rem;
                    color: var(--text-color);
                    margin-top: 2rem;
                    border-bottom: 2px solid var(--lotto-ball-bg-color);
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
                    border-bottom: 1px solid var(--lotto-ball-bg-color);
                    font-size: 1.1rem;
                    color: var(--text-color);
                }

                .theme-switch-wrapper {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                }

                .theme-switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
                }

                .theme-switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 34px;
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 50%;
                }

                input:checked + .slider {
                    background-color: var(--button-bg-color);
                }

                input:checked + .slider:before {
                    -webkit-transform: translateX(26px);
                    -ms-transform: translateX(26px);
                    transform: translateX(26px);
                }

            </style>
            <div class="wrapper">
                <div class="theme-switch-wrapper">
                    <label class="theme-switch">
                        <input type="checkbox" id="theme-toggle">
                        <span class="slider round"></span>
                    </label>
                </div>
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
        this.themeToggle = shadow.querySelector('#theme-toggle');

        this.history = [];

        this.generateButton.addEventListener('click', () => this.generateNumbers());
        this.themeToggle.addEventListener('change', () => this.toggleTheme());
        
        this.loadTheme();
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

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.body.setAttribute('data-theme', savedTheme);
        this.themeToggle.checked = savedTheme === 'dark';
    }

    toggleTheme() {
        const newTheme = this.themeToggle.checked ? 'dark' : 'light';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
}

customElements.define('lotto-generator', LottoGenerator);
