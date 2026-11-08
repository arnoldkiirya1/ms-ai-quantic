const courses = {
    math : 85,
    science : 90,
    history : 78,
    english : 92,

    getAverage : function() {
        const total = this.math + this.science + this.history + this.english;
        return total / 4;
    }
};

console.log("Average score: " + courses.getAverage());


