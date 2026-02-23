# Cricket Admin Panel - User Guide

## Overview
The Cricket Admin Panel allows sports administrators to manage matches, update live scores, maintain leaderboards, and manage the tournament points table.

## Access
**URL**: `gcoec-classroom/admin_cricket.html`

## Features

### 1. Manage Matches Tab

#### Create New Match
Create upcoming, live, or completed matches with the following details:
- **Match ID**: Unique identifier (e.g., GPL_2026_001)
- **League Name**: Tournament name (default: GCOEC Premier League)
- **Team A & Team B**: Select from dropdown
  - Civil Engineering 🏗️
  - Computer Science 💻
  - Electrical Engineering ⚡
  - Mechanical Engineering ⚙️
  - Electronics Engineering 🔌
- **Match Date**: Date of the match
- **Match Time**: Start time
- **Venue**: Location (default: GCOEC Sports Ground)
- **Match Status**: Upcoming, Live, or Completed

#### View All Matches
- See list of all created matches
- View current scores and status
- Set any match as "Current" (displays on live scores page)
- Delete matches

### 2. Update Scores Tab

#### Update Match Score
1. Select match from dropdown
2. Enter Team A score (runs/wickets) and overs
3. Enter Team B score (runs/wickets) and overs
4. Add match result text (e.g., "Team A won by 14 runs")

#### Add Live Commentary
- **Over**: Ball number (e.g., 18.2)
- **Commentary Text**: Description of the ball
- **Type**: Normal, Four, Six, or Wicket
- Commentary appears color-coded on live page

#### Add Batting Statistics
For each batsman:
- Player Name
- Runs scored
- Balls faced
- Fours hit
- Sixes hit
- Strike rate (auto-calculated)

#### Add Bowling Statistics
For each bowler:
- Player Name
- Overs bowled
- Runs conceded
- Wickets taken
- Economy rate

### 3. Leaderboard Tab

#### Top Run Scorer
- Player Name
- Department
- Total Runs
- Matches Played

#### Top Wicket Taker
- Player Name
- Department
- Total Wickets
- Matches Played

#### Most Valuable Player (MVP)
- Player Name
- Department
- MVP Points
- Matches Played

### 4. Points Table Tab

#### Update Team Standings
- Select Team
- Matches Played
- Matches Won
- Matches Lost
- Net Run Rate (NRR)
- Points (auto-calculated: Won × 2)

#### View Current Table
- See all teams ranked by points
- Delete teams from table

## Data Storage

All data is stored in browser's localStorage:
- `cricket_matches`: All matches
- `cricket_current_match`: Currently displayed match
- `cricket_leaderboard`: Top performers
- `cricket_points_table`: Team standings

## Workflow

### Creating and Managing a Live Match

1. **Create Match** (Manage Matches tab)
   - Fill in match details
   - Set status to "Live"
   - Click "Create Match"

2. **Set as Current**
   - Click "Set as Current" on the match
   - This displays it on the live scores page

3. **Update Scores** (Update Scores tab)
   - Select the match
   - Enter current scores for both teams
   - Add batting and bowling statistics
   - Add live commentary as match progresses
   - Click "Update Score"

4. **Complete Match**
   - Update final scores
   - Add match result
   - Go back to Manage Matches
   - Edit match status to "Completed"

### Maintaining Tournament Data

1. **Update Leaderboard** (Leaderboard tab)
   - After each match, update top performers
   - Enter latest statistics
   - Click respective update buttons

2. **Update Points Table** (Points Table tab)
   - After each match, update team standings
   - Enter wins/losses
   - Update NRR
   - Points auto-calculate

## Live Updates

The student-facing cricket page (`sports_cricket_simple.html`) automatically refreshes data from localStorage every 5 seconds, so updates appear in real-time.

## Tips

1. **Match IDs**: Use consistent format (GPL_2026_001, GPL_2026_002, etc.)
2. **Commentary**: Add commentary frequently during live matches for better engagement
3. **Statistics**: Update batting/bowling stats after each innings
4. **Backup**: Data is stored locally - consider exporting important data
5. **Testing**: Create test matches to familiarize yourself with the interface

## Troubleshooting

### Match not appearing on live page
- Ensure you clicked "Set as Current"
- Check that match status is "Live"
- Refresh the live scores page

### Data not updating
- Check browser console for errors
- Ensure localStorage is enabled
- Try clearing cache and re-entering data

### Lost data
- Data is stored in browser localStorage
- Clearing browser data will delete all matches
- Consider implementing backend storage for production

## Future Enhancements

Consider adding:
1. Export/Import functionality
2. Backend database integration
3. Image uploads for teams
4. Match scheduling automation
5. Email notifications
6. Mobile app integration
7. Statistics analytics
8. Player profiles

## Support

For issues or questions:
- Check browser console for errors
- Verify all required fields are filled
- Ensure valid data formats
- Contact GCOEC IT Cell

---

**Version**: 1.0
**Last Updated**: February 23, 2026
**Maintained by**: GCOEC Sports Department
