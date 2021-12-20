const warriorsGames = [{
        awayTeam: {
            team: "Golden State",
            points: 119,
            isWinner: true,
        },
        homeTeam: {
            team: "Houston",
            points: 106,
            isWinner: false,
        },
    },
    {
        awayTeam: {
            team: "Golden State",
            points: 105,
            isWinner: false,
        },
        homeTeam: {
            team: "Houston",
            points: 127,
            isWinner: true,
        },
    },
    {
        homeTeam: {
            team: "Golden State",
            points: 126,
            isWinner: true,
        },
        awayTeam: {
            team: "Houston",
            points: 85,
            isWinner: false,
        },
    },
    {
        homeTeam: {
            team: "Golden State",
            points: 92,
            isWinner: false,
        },
        awayTeam: {
            team: "Houston",
            points: 95,
            isWinner: true,
        },
    },
    {
        awayTeam: {
            team: "Golden State",
            points: 94,
            isWinner: false,
        },
        homeTeam: {
            team: "Houston",
            points: 98,
            isWinner: true,
        },
    },
    {
        homeTeam: {
            team: "Golden State",
            points: 115,
            isWinner: true,
        },
        awayTeam: {
            team: "Houston",
            points: 86,
            isWinner: false,
        },
    },
    {
        awayTeam: {
            team: "Golden State",
            points: 101,
            isWinner: true,
        },
        homeTeam: {
            team: "Houston",
            points: 92,
            isWinner: false,
        },
    },
];

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement("ul");

    for (let game of games) {
        // const { homeTeam, awayTeam } = game; // const homeTeam = game.homeTeam;  // destructuring the homeTeam & awayteam
        // const { team : team2, points, isWinner } = homeTeam; // make an alias for team that named team2 and we can now access pointer & iswinner
        // console.log(game);
        const gameLi = document.createElement("li");
        //console.log(awayTeam.team, homeTeam.team);
        gameLi.innerHTML = getScoreLine(game);
        const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
        gameLi.classList.add(isWinner(game, targetTeam) ? "win" : "loss");
        ulParent.appendChild(gameLi);
    }

    return ulParent;
};

const isWinner = ({ game, awayTeam }, targetTeam) => {
    const target = homeTeam.team === "Golden State" ? homeTeam : awayTeam;
    return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
    gameLi.innerHTML = getScoreLine(game);
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam} `;
    // for shoing this we haveto append it
    let scoreLine;
    // console.log(scoreLine);
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b> -${hPoints}`; // we have scope problem here
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    return `${teamNames} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames, "Golden State");
// const chart2 = makeChart(warriorsGames, "Houston");

document.body.prepend(chart1);

// **************************************************
// STEP 1 - UGLY, UN-REFACTORED CODE! (but it works!)
// **************************************************
/*
const ulParent = document.createElement("ul");
for (let game of warriorsGames) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreLine;
    if (aPoints > hPoints) {
        scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    } else {
        scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }
    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? "win" : "loss");

    gameLi.innerHTML = `${teamNames} ${scoreLine}`;
    console.log(scoreLine);
    ulParent.appendChild(gameLi);
}

document.body.prepend(ulParent);
*/