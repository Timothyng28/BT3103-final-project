<template>
  <div class="matches-section">
    <div tabindex="0" class="collapse collapse-arrow border-base-300 bg-base-100 border border-base-300">
      
      <div class="collapse-title font-semibold">Live Matches</div>

      <div class="collapse-content">
        <div v-if="liveMatches.length > 0">
          <div v-for="match in liveMatches" :key="match.id" class="match-card live">
            <div class="match-info">
              <div class="match-date-time">
                <div>{{ match.date }}</div>
                <div class="time">{{ match.time }}</div>
              </div>
              <img :src="getTeamLogo(match.team1Logo)" class="team-logo" alt="Team 1 Logo" />

              <div :class="getScoreClass(match, 'team1')" class="score">{{ match.team1Score }}</div>

              <div class="match-details">
                <div class="sport">{{ match.sport }}</div>
                <div class="stage">{{ match.stage }}</div>
              </div>

              <div :class="getScoreClass(match, 'team2')" class="score">{{ match.team2Score }}</div>

              <img :src="getTeamLogo(match.team2Logo)" class="team-logo" alt="Team 2 Logo" />
            </div>
          </div>
        </div>
        <div v-else class="no-matches">No live matches currently.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OngoingMatches",
  data() {
    return {
      residences: [  
        { title: "Eusoff", img: "https://nus.edu.sg/osa/images/default-source/eusoff-hall/about-eusoff/eusoff-logo.png" },
        { title: "Temasek", img: "https://nus.edu.sg/osa/images/default-source/temasek-hall/about-us/crest-(500px).png" },
        { title: "Kent Ridge", img: "http://nus.edu.sg/osa/images/default-source/kent-ridge-hall/about-kr/crest.png" },
        { title: "KEVII", img: "https://nus.edu.sg/osa/images/default-source/kevii-hall/about-kevii/logo.png" },
        { title: "Sheares", img: "https://nus.edu.sg/osa/images/librariesprovider7/default-album/sh-logo.png" },
        { title: "Raffles", img: "https://nus.edu.sg/osa/images/librariesprovider6/default-album/rh-logo.png" }
      ],
      liveMatches: [
        {
          id: 1,
          date: "24 Feb",
          time: "15:30",
          team1Logo: "Eusoff",
          team1Score: 25,
          sport: "Basketball (M)",
          stage: "Group Stage",
          team2Score: 24,
          team2Logo: "Raffles",
        },
        {
          id: 2,
          date: "24 Feb",
          time: "16:00",
          team1Logo: "KEVII",
          team1Score: 1,
          sport: "Football (M)",
          stage: "Semi-Finals",
          team2Score: 0,
          team2Logo: "Raffles",
        }
      ]
    };
  },
  methods: {
    //Higher score is red
    getScoreClass(match, team) {
      if (match.team1Score > match.team2Score) {
        return team === "team1" ? "highlight-score" : "";
      } else if (match.team2Score > match.team1Score) {
        return team === "team2" ? "highlight-score" : "";
      }
      return ""; //
    },
    getTeamLogo(teamName) {
    const residences = this.residences.find(res => res.title === teamName);
    return residences ? residences.img : ""; 
    }
  }
};
</script>

<style scoped>
.matches-section {
  background: #1e1e1e;
  padding: 10px;
  border-radius: 10px;
}

.match-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #333;
  color: white;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}

.match-info {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;
}

.match-date-time {
  text-align: center;
  font-size: 14px;
}

.time {
  font-weight: bold;
}

.team-logo {
  height: 50px;
  width: 50px;
}

.score {
  font-size: 24px;
  font-weight: bold;
}

/* Highlight higher score in red */
.highlight-score {
  color: #fc105b;
}

.match-details {
  text-align: center;
}

.sport {
  font-size: 16px;
}

.stage {
  font-size: 12px;
  color: #aaa;
}

.no-matches {
  text-align: center;
  color: #ccc;
}

</style>
