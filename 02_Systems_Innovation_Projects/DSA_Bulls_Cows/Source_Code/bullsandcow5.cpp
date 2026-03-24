/*
    ******** TEAM No. 3 ********
     Quendangan, Jacob Conrad M.
        Roncesvalles, Ian C.
    ****************************
*/


#include <iostream>
#include <vector>
#include <ctime>
#include <cstdlib>
#include <algorithm>
#include <limits>
#include <fstream>
#include <string>

using namespace std;

// Function prototypes
vector<int> generateCode();
void display(const string &line);
void playerEnterCode(vector<int> &code);
void playerGuess(vector<int> &guess, const vector<vector<int>> &storedGuesses, vector<vector<int>> &fileGuesses, bool &useFile);
bool checkGuess(const string &input, vector<int> &guess, const vector<vector<int>> &storedGuesses);
bool playAgain();
bool takeTurn(vector<int> &codeToGuess, vector<vector<int>> &storedGuesses, int &attemptsLeft, bool isPlayerTurn, int difficultyChoice, vector<vector<int>> &fileGuesses, bool &useFile);
pair<int, int> countBullsAndCows(const vector<int> &code, const vector<int> &guess);
vector<int> computerEasy(const vector<vector<int>> &storedGuesses);
vector<int> computerMedium(const vector<vector<int>> &storedGuesses);
void readGuessesFromFile(vector<vector<int>> &fileGuesses);
bool uniqueNumber(const vector<int> &guess, const vector<vector<int>> &storedGuesses);
void saveGame(const vector<int> &playerCode, const vector<int> &computerCode, const vector<vector<int>> &playerGuesses, const vector<vector<int>> &computerGuesses, const string &result);


// Main function
int main()
{
    srand(time(0));

    // Variables declaration
    vector<int> playerCode, computerCode;
    vector<vector<int>> playerStoredGuesses, computerStoredGuesses, fileGuesses;
    int playerAttempts = 7, computerAttempts = 7;
    bool playerWon = false, computerWon = false;
    int difficultyChoice = 1;
    bool useFile = false;

    do
    {
        // Display message and instructions
        display("\n****************** FINAL OUTPUT *******************");
        display("\n*************** BULLS AND COWS GAME ***************");
        display("---------------------------------------------------");
        display("Welcome to Bulls and Cows game. You will take turns \nguessing each other's secret code.");
        display("You have 7 attempts each. Let's begin!");
        display("---------------------------------------------------");

        // Player selects difficulty level
        display("Select computer difficulty level:\n1. Easy\n2. Medium");
        while (true)
        {
            if (!(cin >> difficultyChoice) || (difficultyChoice != 1 && difficultyChoice != 2))
            {
                cout << "Invalid input. Please enter 1 or 2." << endl;
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            else
            {
                break;
            }
        }

        // Ask the player if they want to enter guesses manually or use a file
        display("Would you like to enter guesses manually or use a file?\n1. Manually\n2. Use a file with your guess");
        int inputChoice;
        while (true)
        {
            if (!(cin >> inputChoice) || (inputChoice != 1 && inputChoice != 2))
            {
                cout << "Invalid input. Please enter 1 or 2." << endl;
                cin.clear();
                cin.ignore(numeric_limits<streamsize>::max(), '\n');
            }
            else
            {
                useFile = (inputChoice == 2);
                if (useFile)
                {
                    readGuessesFromFile(fileGuesses);
                }
                break;
            }
        }

        // Player enters their secret code
        playerEnterCode(playerCode);
        // Generate computer's secret code
        computerCode = generateCode();

        // Reset attempts for starting a new game
        playerStoredGuesses.clear();
        computerStoredGuesses.clear();
        playerAttempts = 7;
        computerAttempts = 7;
        playerWon = false;
        computerWon = false;

        // Game loop
        while (playerAttempts > 0 && computerAttempts > 0 && !playerWon && !computerWon)
        {
            // Player turn
            playerWon = takeTurn(computerCode, playerStoredGuesses, playerAttempts, true, difficultyChoice, fileGuesses, useFile);

            // Computer turn
            if (!playerWon)
            {
                computerWon = takeTurn(playerCode, computerStoredGuesses, computerAttempts, false, difficultyChoice, fileGuesses, useFile);
            }
        }

        // Determine winner
        string result;
        if (playerWon)
        {
            result = "Player won!";
            display("Congratulations! You've guessed the computer's secret code!");
        }
        else if (computerWon)
        {
            result = "Computer won!";
            display("Computer guessed your secret code!");
        }
        else
        {
            result = "It's a draw!";
            display("It's a draw! Both sides couldn't guess each \nother's secret codes.");
        }

        // Display the computer's secret code
        display("Computer's secret code was: ");
        for (int digit : computerCode)
            cout << digit;
        cout << endl;

        // Prompt the user to save the game results
        char saveChoice;
        display("Do you want to save the game results to a file? (y/n): ");
        while (true)
        {
            cin >> saveChoice;
            if (saveChoice == 'y' || saveChoice == 'Y' || saveChoice == 'n' || saveChoice == 'N')
            {
                break;
            }
            else
            {
                cout << "Invalid input. Please enter 'y' or 'n': " << endl;
            }
        }
        if (saveChoice == 'y' || saveChoice == 'Y')
        {
            saveGame(playerCode, computerCode, playerStoredGuesses, computerStoredGuesses, result);
        }

    } while (playAgain());

    display("Thanks for playing Bulls and Cows!");
    display("***************************************************");
    return 0;
}



// Generates a random 4-digit secret code
vector<int> generateCode()
{
    vector<int> code;
    bool usedDigits[10] = {false};
    while (code.size() < 4)
    {
        int digit = rand() % 10;
        if (!usedDigits[digit])
        {
            code.push_back(digit);
            usedDigits[digit] = true;
        }
    }
    return code;
}

// Displays a message
void display(const string &line)
{
    cout << line << endl;
}

// Validates player's secret code input
void playerEnterCode(vector<int> &code)
{
    string input;
    do
    {
        display("Enter your secret code (4 unique digits): ");
        cin >> input;
    } while (!checkGuess(input, code, {}));
}

// Gets player's guess
void playerGuess(vector<int> &guess, const vector<vector<int>> &storedGuesses, vector<vector<int>> &fileGuesses, bool &useFile)
{
    string input;
    bool validGuess = false;

    while (!validGuess)
    {
        if (useFile && !fileGuesses.empty())
        {
            guess = fileGuesses.front();
            fileGuesses.erase(fileGuesses.begin());
            validGuess = uniqueNumber(guess, storedGuesses);
        }
        else
        {
            do
            {
                display("Enter your guess (4 unique digits): ");
                cin >> input;
            } while (!checkGuess(input, guess, storedGuesses));
            validGuess = true;
        }

        if (!validGuess)
        {
            display("Invalid input: Duplicate guess detected.");
            display("---------------------------------------------------");
        }
    }
}

// Validates player's guess
bool checkGuess(const string &input, vector<int> &guess, const vector<vector<int>> &storedGuesses)
{
    if (input.length() != 4)
    {
        display("Invalid input: Please enter exactly 4 unique digits.");
        display("---------------------------------------------------");
        return false;
    }

    vector<bool> usedDigits(10, false);
    guess.clear();

    for (char c : input)
    {
        if (!isdigit(c))
        {
            display("Invalid input: Non-digit character detected.");
            display("---------------------------------------------------");
            return false;
        }
        int digit = c - '0';
        if (usedDigits[digit])
        {
            display("Invalid input: Repeated digit detected.");
            display("---------------------------------------------------");
            return false;
        }
        usedDigits[digit] = true;
        guess.push_back(digit);
    }

    if (!uniqueNumber(guess, storedGuesses))
    {
        display("Invalid input: \nYou have already used this combination.");
        display("---------------------------------------------------");
        return false;
    }

    return true;
}

// Function to ask the player if they want to play again
bool playAgain()
{
    char choice;
    display("Do you want to play again? (y/n): ");
    while (true)
    {
        cin >> choice;
        if (choice == 'y' || choice == 'Y' || choice == 'n' || choice == 'N')
        {
            break;
        }
        else
        {
            cout << "Invalid input. Please enter 'y' or 'n': " << endl;
        }
    }
    return (choice == 'y' || choice == 'Y');
}

// Counts bulls and cows in the guess
pair<int, int> countBullsAndCows(const vector<int> &code, const vector<int> &guess)
{
    int bulls = 0, cows = 0;
    for (size_t i = 0; i < 4; ++i)
    {
        if (guess[i] == code[i])
        {
            ++bulls;
        }
        else if (find(code.begin(), code.end(), guess[i]) != code.end())
        {
            ++cows;
        }
    }
    return {bulls, cows};
}

// Generates a random guess (Easy level AI)
vector<int> computerEasy(const vector<vector<int>> &storedGuesses)
{
    vector<int> guess;
    bool usedDigits[10] = {false};
    while (guess.size() < 4)
    {
        int digit = rand() % 10;
        if (!usedDigits[digit])
        {
            guess.push_back(digit);
            usedDigits[digit] = true;
        }
    }
    return guess;
}

// Handles both player and computer turns
bool takeTurn(vector<int> &codeToGuess, vector<vector<int>> &storedGuesses, int &attemptsLeft, bool isPlayerTurn, int difficultyChoice, vector<vector<int>> &fileGuesses, bool &useFile)
{
    vector<int> inputGuess;
    if (isPlayerTurn)
        playerGuess(inputGuess, storedGuesses, fileGuesses, useFile);
    else
    {
        // Displaying computer's guess
        display("Computer is making a guess...");
        if (difficultyChoice == 2)
        {
            inputGuess = computerMedium(storedGuesses);
        }
        else
        {
            inputGuess = computerEasy(storedGuesses);
        }
    }

    pair<int, int> result = countBullsAndCows(codeToGuess, inputGuess);
    int bulls = result.first;
    int cows = result.second;

    if (isPlayerTurn)
    {
        display("---------------------------------------------------");
        display("Your guess: ");
        for (int digit : inputGuess)
            cout << digit;
        cout << endl;
    }

    display("Bulls: " + to_string(bulls) + ", Cows: " + to_string(cows));

    storedGuesses.push_back(inputGuess);
    --attemptsLeft;
    display((isPlayerTurn ? "Your attempts remaining: " : "Computer's attempts remaining: ") + to_string(attemptsLeft));
    display("---------------------------------------------------");

    return bulls == 4;
}

// Generates a random guess (Medium level AI)
vector<int> computerMedium(const vector<vector<int>> &storedGuesses)
{
    vector<int> guess;
    bool usedDigits[10] = {false};
    bool isNewGuess = false;

    while (!isNewGuess)
    {
        guess.clear();
        fill(begin(usedDigits), end(usedDigits), false);

        while (guess.size() < 4)
        {
            int digit = rand() % 10;
            if (!usedDigits[digit])
            {
                guess.push_back(digit);
                usedDigits[digit] = true;
            }
        }

        isNewGuess = true;
        for (const auto &prevGuess : storedGuesses)
        {
            if (prevGuess == guess)
            {
                isNewGuess = false;
                break;
            }
        }
    }

    return guess;
}

// Reads guesses from a file
void readGuessesFromFile(vector<vector<int>> &fileGuesses)
{
    string filename;
    ifstream inputFile;
    do
    {
        display("Enter the filename with you guess: ");
        cin >> filename;
        inputFile.open(filename);
        if (!inputFile.is_open())
        {
            display("Invalid filename. Please try again.");
        }
    } while (!inputFile.is_open());

    string line;
    while (getline(inputFile, line))
    {
        vector<int> guess;
        if (line.length() == 4)
        {
            bool isValid = true;
            vector<bool> usedDigits(10, false);
            for (char c : line)
            {
                if (isdigit(c))
                {
                    int digit = c - '0';
                    if (usedDigits[digit])
                    {
                        isValid = false;
                        break;
                    }
                    usedDigits[digit] = true;
                    guess.push_back(digit);
                }
                else
                {
                    isValid = false;
                    break;
                }
            }
            if (isValid)
            {
                fileGuesses.push_back(guess);
            }
        }
    }
    inputFile.close();
}

// Check unique number from file
bool uniqueNumber(const vector<int> &guess, const vector<vector<int>> &storedGuesses)
{
    for (const auto &prevGuess : storedGuesses)
    {
        if (prevGuess == guess)
        {
            return false;
        }
    }
    return true;
}

void saveGame(const vector<int> &playerCode, const vector<int> &computerCode, const vector<vector<int>> &playerGuesses, const vector<vector<int>> &computerGuesses, const string &result) {
    string filename;
    ofstream outFile;

    // Prompt the user for the filename
    cout << "Enter the filename to save the results: ";
    cin >> filename;

    outFile.open(filename);
    if (!outFile) {
        cerr << "Error opening file!" << endl;
        return;
    }

// Write player and computer codes
outFile << "Player's secret code: ";
for (int digit : playerCode) {
    outFile << digit;
}
outFile << endl;

outFile << "Computer's secret code: ";
for (int digit : computerCode) {
    outFile << digit;
}
outFile << endl;

// Write each guess and its result for both player and computer
outFile << "Player's guesses and results:" << endl;
for (size_t i = 0; i < playerGuesses.size(); ++i) {
    outFile << "Turn " << (i + 1) << ": ";
    for (int digit : playerGuesses[i]) {
        outFile << digit;
    }
    pair<int, int> result = countBullsAndCows(computerCode, playerGuesses[i]);
    outFile << " - Bulls: " << result.first << ", Cows: " << result.second << endl;
}

outFile << "Computer's guesses and results:" << endl;
for (size_t i = 0; i < computerGuesses.size(); ++i) {
    outFile << "Turn " << (i + 1) << ": ";
    for (int digit : computerGuesses[i]) {
        outFile << digit;
    }
    pair<int, int> result = countBullsAndCows(playerCode, computerGuesses[i]);
    outFile << " - Bulls: " << result.first << ", Cows: " << result.second << endl;
}

// Write the result of the game
outFile << "Result: " << result << endl;

outFile.close();
cout << "Results saved to " << filename << endl;
}