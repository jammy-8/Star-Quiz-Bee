$(document).ready(function () {
  // 25 Questions
  const questions = [
    { q: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1 },
    { q: "Capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: 2 },
    { q: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 1 },
    { q: "HTML stands for?", options: ["Hyper Trainer Markup Language", "HyperText Markup Language", "HighText Machine Language", "None"], answer: 1 },
    { q: "CSS is used for?", options: ["Styling", "Programming", "Database", "OS"], answer: 0 },
    { q: "jQuery is a?", options: ["Library", "Language", "Database", "Framework"], answer: 0 },
    { q: "Which tag is used for JavaScript?", options: ["<js>", "<javascript>", "<script>", "<code>"], answer: 2 },
    { q: "5 * 6 = ?", options: ["11", "30", "25", "60"], answer: 1 },
    { q: "Who developed Python?", options: ["Guido van Rossum", "James Gosling", "Linus Torvalds", "Bill Gates"], answer: 0 },
    { q: "Which is not a programming language?", options: ["Java", "C++", "HTML", "Python"], answer: 2 },
    { q: "Which is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
    { q: "Fastest land animal?", options: ["Lion", "Tiger", "Cheetah", "Horse"], answer: 2 },
    { q: "What is H2O?", options: ["Oxygen", "Hydrogen", "Water", "Helium"], answer: 2 },
    { q: "Which gas do plants produce?", options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"], answer: 0 },
    { q: "Smallest prime number?", options: ["0", "1", "2", "3"], answer: 2 },
    { q: "Who painted Mona Lisa?", options: ["Van Gogh", "Leonardo da Vinci", "Picasso", "Michelangelo"], answer: 1 },
    { q: "What is the currency of Japan?", options: ["Dollar", "Yen", "Won", "Euro"], answer: 1 },
    { q: "Which organ pumps blood?", options: ["Liver", "Brain", "Heart", "Kidney"], answer: 2 },
    { q: "Who invented the light bulb?", options: ["Tesla", "Einstein", "Edison", "Newton"], answer: 2 },
    { q: "Which continent is Egypt in?", options: ["Asia", "Europe", "Africa", "Australia"], answer: 2 },
    { q: "What is 12 / 4?", options: ["2", "3", "4", "6"], answer: 1 },
    { q: "How many continents are there?", options: ["5", "6", "7", "8"], answer: 2 },
    { q: "Which language is used for Android apps?", options: ["Swift", "Java", "C#", "PHP"], answer: 1 },
    { q: "Which is the hottest planet?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: 1 },
    { q: "Which element's symbol is 'O'?", options: ["Oxygen", "Osmium", "Gold", "Oxide"], answer: 0 }
  ];

  let currentQuestion = 0;
  let score = 0;

  function loadQuestion() {
    $("#question").text(questions[currentQuestion].q);
    $("#options").empty();

    questions[currentQuestion].options.forEach((opt, i) => {
      $("#options").append(`<li data-index="${i}">${opt}</li>`);
    });
  }

  $(document).on("click", "#options li", function () {
    $("#options li").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#next-btn").click(function () {
    const selected = $("#options li.selected").data("index");
    if (selected === undefined) {
      alert("Please select an option!");
      return;
    }

    if (selected === questions[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      $("#quiz-box").addClass("hidden");
      $("#result-box").removeClass("hidden");
      $("#score").text(`${score} / ${questions.length}`);
    }
  });

 $("#restart-btn").click(function () {
    currentQuestion = 0;
    score = 0;
    $("#result-box").addClass("hidden");
    $("#quiz-box").removeClass("hidden");
    loadQuestion();
  });

  // Load first question
  loadQuestion();
});

