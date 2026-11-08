const courses = function(math, science, history, english) {
    this.math = math;
    this.science = science;
    this.history = history;
    this.english = english;

    this.getAverage = function() {
        const total = this.math + this.science + this.history + this.english;
        return total / 4;
    };
}

const end_of_term = new courses(85, 90, 78, 92);

console.log("End of Term Average score: " + end_of_term.getAverage());