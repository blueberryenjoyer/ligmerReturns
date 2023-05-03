function titleRanking(rating) {
    if (rating < 1201) {
        return "Beginner"
    }
    else if (rating < 1801) {
        return "Intermediate"
    }
    else if (rating < 2201) {
        return "Advanced"
    }
    else if (rating === 2852) {
        return "Magnus F*cking Carlsen"
    }
    else {
        return "Master"
    }
}

console.log(titleRanking(3000))