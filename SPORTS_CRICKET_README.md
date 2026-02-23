# GCOEC Sports - Cricket Section

## Overview
Modern, production-ready Cricket Sports Section for the GCOEC Digital Campus Portal. Built with React, Tailwind CSS, and Framer Motion for a professional, clean UI experience.

## Features

### 1. Live Match Display
- Real-time score updates
- Animated LIVE badge with pulsing indicator
- Team logos and names
- Current score, overs, and match status
- Match result display

### 2. Interactive Tabs
- **Summary**: Run progress graph + College leaderboard
- **Scorecard**: Detailed batting and bowling statistics
- **Commentary**: Ball-by-ball commentary with color-coded events
- **Points Table**: Tournament standings

### 3. Data Visualization
- Line chart showing run progression over overs
- Responsive design with Recharts library
- Smooth animations on load

### 4. College Leaderboard
- Top Run Scorer card with gradient background
- Top Wicket Taker card
- Most Valuable Player (MVP) card
- All cards feature attractive gradient designs

### 5. Live Score Integration
- Auto-refresh every 10 seconds for live matches
- REST API integration
- Error handling and loading states

## Tech Stack

- **Frontend Framework**: React 18 (via CDN)
- **Build Tool**: Vite-compatible (standalone HTML)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide Icons
- **Typography**: Inter font family

## Files

### Frontend Files
1. `sports_cricket.html` - Standalone version with mock data
2. `sports_cricket_api.html` - API-integrated version (recommended)

### Backend Files
1. `backend/cricket_api.py` - Flask REST API endpoints
2. `backend/app.py` - Updated with cricket blueprint registration

## API Endpoints

### Base URL
- Local: `http://localhost:5000/api/cricket`
- Production: `/api/cricket`

### Endpoints

#### 1. Get Current Match
```
GET /api/cricket/match/current
```
Returns current/latest match data including scores, batting, bowling, and commentary.

#### 2. Get Leaderboard
```
GET /api/cricket/leaderboard
```
Returns tournament leaderboard with top scorer, wicket taker, and MVP.

#### 3. Get Points Table
```
GET /api/cricket/points-table
```
Returns tournament standings with team statistics.

#### 4. Get Match by ID
```
GET /api/cricket/match/<match_id>
```
Returns specific match data by match ID.

#### 5. Get Upcoming Matches
```
GET /api/cricket/matches/upcoming
```
Returns list of upcoming matches.

#### 6. Health Check
```
GET /api/cricket/health
```
API health check endpoint.

## Installation & Setup

### 1. Backend Setup
The cricket API is already integrated into the main Flask application.

```bash
# No additional installation needed
# The cricket_bp blueprint is registered in backend/app.py
```

### 2. Frontend Access
Simply open the HTML file in a browser or deploy to your web server:

```bash
# For standalone version (mock data)
open gcoec-classroom/sports_cricket.html

# For API-integrated version (recommended)
open gcoec-classroom/sports_cricket_api.html
```

### 3. Integration with Portal
Add a link to the sports section from the main portal:

```html
<a href="sports_cricket_api.html" class="nav-link">
    Cricket Sports
</a>
```

## Design Specifications

### Color Palette
- **Primary Navy**: #0B3D91
- **Background**: #f8fafc (light gray)
- **Accent Gold**: #f59e0b
- **Live Indicator**: Red with pulsing animation

### Typography
- **Font Family**: Inter
- **Hero Score**: 48px+ (5xl)
- **Section Headers**: 24px (2xl)
- **Body Text**: 14px (sm)

### Spacing
- **Grid System**: 24px base unit
- **Card Padding**: 24px (p-6)
- **Section Margins**: 24px (mb-6)

### Components
- **Border Radius**: rounded-xl (12px)
- **Shadows**: shadow-md for cards
- **Hover Effects**: translateY(-2px) with shadow increase

## Responsive Design

### Mobile (< 768px)
- Stacked layout
- Horizontal scrollable tables
- Centered hero section
- Full-width cards

### Tablet (768px - 1024px)
- 2-column grid for leaderboard
- Optimized table display

### Desktop (> 1024px)
- 3-column grid for leaderboard
- Full-width tables
- Side-by-side team display

## Data Structure

### Match Data
```javascript
{
  match_id: "GPL_2026_001",
  match_status: "live" | "completed",
  league: "GCOEC Premier League",
  teamA: { name, score, overs, logo },
  teamB: { name, score, overs, logo },
  result: "Match result text",
  batting: [{ player, r, b, fours, sixes, sr }],
  bowling: [{ player, o, r, w, econ }],
  runProgress: [{ over, runs }],
  commentary: [{ over, text, type }]
}
```

### Leaderboard Data
```javascript
{
  topScorer: { name, dept, runs, matches },
  topWicket: { name, dept, wickets, matches },
  mvp: { name, dept, points }
}
```

## Future Enhancements

1. **Real-time Updates**: WebSocket integration for instant updates
2. **Player Profiles**: Detailed player statistics and history
3. **Match History**: Archive of past matches
4. **Video Highlights**: Integration with video streaming
5. **Social Sharing**: Share match updates on social media
6. **Push Notifications**: Browser notifications for key events
7. **Fantasy League**: College fantasy cricket league
8. **Live Streaming**: Embed live match streaming

## Maintenance

### Updating Match Data
Edit the mock data in `backend/cricket_api.py`:
- Update `MATCHES_DB` for current match
- Update `LEADERBOARD_DB` for statistics
- Update `POINTS_TABLE_DB` for standings

### Adding New Matches
Create new match entries in the database with unique match IDs.

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance
- Initial load: < 2s
- Auto-refresh: Every 10s (live matches only)
- Lazy loading for images
- Optimized animations

## Credits
- Design: GCOEC Sports Department
- Development: GCOEC Digital Campus Team
- Icons: Lucide Icons
- Charts: Recharts Library

## License
© 2026 Government College of Engineering, Chandrapur
