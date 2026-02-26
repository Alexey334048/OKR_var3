//Вариант 3
//Задание 1
//B) filter()

//Задание 2 

function Squar() {
    for (let i = 1; i <= 15; i++) {
        if (i % 2 !== 0) { 
            console.log(`Квадрат числа ${i} = ${i * i}`);
        }
    }
}
Squar();



// Задание 3 
function MaxScorer(participants) {
    if (!participants || participants.length === 0) {
        console.log('Массив пуст');
        return null;
    }
    
    const topScorer = participants.reduce((max, current) => {
        return current.score > max.score ? current : max;
    });
    
    console.log(`Челик с Max score: ${topScorer.name} (${topScorer.score})`);
    return topScorer.name;
}

const participants = [
    { name: 'Алексей', score: 85 },
    { name: 'Артем', score: 92 },
    { name: 'Леха', score: 78 },
    { name: 'Саня', score: 92 },
    { name: 'Веоника', score: 88 }
];

MaxScorer(participants);



//Задание 4 

function groupByRemainder(numbers) {
    const result = {};
    
    numbers.forEach(num => {
        const remainder = num % 3;
        if (!result[remainder]) {
            result[remainder] = [];
        }
        result[remainder].push(num);
    });
        console.log(result);
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
groupByRemainder(numbers);
