function QuestionPageForm() {
    return (
        <div class="QuestionForm">
                <h1 className="FormTitle">Questionaire</h1>
            <div class="ContactDetails">
                <h2>First name:</h2>
                <input></input>
                <h2>Last name:</h2>
                <input></input>
                <h2>Email:</h2>
                <input></input>
                <h2>Street Address:</h2>
                <input></input>
                <h2>City:</h2>
                <input></input>
                <h2>Zip Code:</h2>
                <input></input>
            </div>
            <div class="WaterQuestions">
                <h2># of bathrooms in home:</h2>
                <input></input>
                <h2>Do you have city or well water?</h2>
                <input></input>
                <h2>Noticed problems:</h2>
                <input></input>
                <h2>Upload images of shut off valve:</h2>
                <input></input>
            </div>
                <button class="button" type="submit">Submit</button>
        </div>
    )
}

export default QuestionPageForm;