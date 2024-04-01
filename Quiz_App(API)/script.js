let currentQuestionIndex = 0;
let correctAnswers = 0;
let questions; 
let index = 0;

async function ApiCall() {
    try {
        const res = await fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple");
        if (!res.ok) {
            throw new Error('Failed to fetch questions');
        }
        const data = await res.json();
        questions = data.results; 
        // Show the first question
        showQuestion(questions[currentQuestionIndex]);
    } catch (error) {
        console.error(error);
        
    }
}

function showQuestion(question) {

    // Update question text in the HTML
    document.getElementById("qes").textContent = `Q.${index += 1} ${question.question}`;

    // Update option texts in the HTML
    const optsContainer = document.querySelector(".opts");
    const options = question.incorrect_answers.concat(question.correct_answer);
    const shuffledOptions = shuffleArray(options); // Shuffling options to randomize position
    const optionLetters = ['A', 'B', 'C', 'D'];

    // Clear previous options
    optsContainer.innerHTML = '';

    shuffledOptions.forEach((option, index) => {
        const optionElement = document.createElement("h3");
        optionElement.textContent = `${optionLetters[index]}. ${option}`;
        optionElement.addEventListener("click", () => handleAnswer(option, question.correct_answer, question));
        optsContainer.appendChild(optionElement);
    });
}

function handleAnswer(selectedAnswer, correctAnswer, question) {
    if (selectedAnswer === correctAnswer) {
        correctAnswers++;
        // Update score in HTML
        document.getElementById("score").textContent = `Score: ${correctAnswers}/10`;
    }
    currentQuestionIndex++;
    // Check if there are more questions
    if (currentQuestionIndex < 10) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Show final score
        document.getElementById("qes").textContent = "Quiz Completed!";
        document.querySelector(".opts").innerHTML = `Your score: ${correctAnswers}/10`;
    }
}

// Function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Call the ApiCall function when the page loads
ApiCall();
