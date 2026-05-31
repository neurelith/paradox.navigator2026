// Spatio-temporal event registry
// Spatio-temporal event registry
const PARADOX_FALLBACK_STORE = {"venues":{"OAT":{"name":"Open Air Theatre","x":620,"y":480,"description":"Central cultural open arena"},"DoMS_Plaza":{"name":"Department of Management Studies","x":410,"y":390,"description":"Management and humanities wing"},"Biotech_Hall":{"name":"Department of Biotechnology","x":480,"y":290,"description":"Medical & Life Sciences wing"},"Ramanujan_Auditorium":{"name":"IC&SR Complex","x":530,"y":420,"description":"Main academic seminar center"},"SAC_Grounds":{"name":"Student Activity Center","x":710,"y":550,"description":"Sports and larger community spaces"},"Wadhwani_School":{"name":"School of Data Science & AI","x":450,"y":440,"description":"Core AI computing labs"},"Campus_Intelligence_Hub":{"name":"Campus Intelligence Hub","x":500,"y":580,"description":"Digital hunt and information desk central"},"Entire_Campus_Complex":{"name":"Entire Campus Complex","x":500,"y":500,"description":"Multiple locations across the IITM campus"},"Online_Portal":{"name":"Remote Interface","x":150,"y":150,"description":"Pre-Paradox digital portal modules"}},"events":[{"id":1,"title":"The Hoop Hustle 2.0 - Selection Round","time":"04:00 PM – 06:00 PM","day":"Jun 09","track":"sports","venue":"Basketball Court (Gymkhana)","desc":"The ultimate basketball knockout challenge. Shoot, score, dominate. ","conflictGroup":"jun09-slot-400pm","urgent":false},{"id":2,"title":"VolleyVibes - Trials","time":"04:30 PM – 06:30 PM","day":"Jun 09","track":"sports","venue":"Volleyball Court (Gymkhana) / Court Near Hostel Zone","desc":"Spike it like a pro. The ultimate volleyball trials and final rounds. ","conflictGroup":"jun09-slot-430pm","urgent":false},{"id":3,"title":"Instructors vs Organizers (Cricket)","time":"06:30 PM – 07:30 PM","day":"Jun 09","track":"sports","venue":"Sangam Ground","desc":"Paradox 2026 sports session at the Sangam Ground.","conflictGroup":"jun09-slot-630pm","urgent":false},{"id":4,"title":"Under the Stars","time":"07:00 PM – 08:00 PM","day":"Jun 09","track":"social","venue":"Himalaya Lawn","desc":"Paradox 2026 social session at the Himalaya Lawn.","conflictGroup":"jun09-slot-700pm","urgent":false},{"id":5,"title":"Paradox Champions League - Trials","time":"06:00 AM – 08:00 AM","day":"Jun 10","track":"sports","venue":"Football Ground (Gymkhana)","desc":"Collegiate football championship. The ultimate battle on the green turf. ","conflictGroup":"jun10-slot-600am","urgent":false},{"id":6,"title":"Paradox Premier League 3.0 - Trials","time":"06:00 AM – 08:00 AM","day":"Jun 10","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun10-slot-600am","urgent":false},{"id":7,"title":"Sprintsaga - 100m, 400m","time":"06:00 AM – 07:00 AM","day":"Jun 10","track":"sports","venue":"Manohar C Watsa Stadium","desc":"Track and field athletics. Test your speed in 100m, 400m, and relays. ","conflictGroup":"jun10-slot-600am","urgent":false},{"id":8,"title":"Opening Ceremony","time":"09:30 AM – 10:30 AM","day":"Jun 10","track":"social","venue":"SAC","desc":"Paradox 2026 social session at the SAC.","conflictGroup":"jun10-slot-930am","urgent":false},{"id":9,"title":"CrashLab: Collegiate Air Crash Investigation Challenge - Round 1","time":"12:30 PM – 02:30 PM","day":"Jun 10","track":"competition","venue":"RJN102","desc":"Collegiate Air Crash Investigation Challenge. The Devil is in the DATA. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":10,"title":"Probably Paradoxical - Round 1 - Problem Statement Release","time":"12:30 PM – 02:30 PM","day":"Jun 10","track":"competition","venue":"RJN101","desc":"Probability and statistics problem-solving challenge. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":11,"title":"Python Coding Challenge 5.0 - Round 1","time":"12:30 PM – 02:30 PM","day":"Jun 10","track":"competition","venue":"RJN201","desc":"Python programming contest. The ultimate code quest. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":12,"title":"RoboSoccer 5.0 - Initial Rounds","time":"12:30 PM – 02:30 PM","day":"Jun 10","track":"competition","venue":"ICSR Hall 4 (Exhibition Hall)","desc":"Autonomous soccer bots clash. Kick off the AI soccer challenge. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":13,"title":"Samvaad 2.0 - Interaction Session","time":"12:30 PM – 01:30 PM","day":"Jun 10","track":"workshop","venue":"ICSR Hall 3","desc":"Interactive student dialogue and panels on key student issues. ","conflictGroup":"jun10-slot-1230pm","urgent":false,"speaker":"Prof. IIT Madras"},{"id":14,"title":"We Found You Online - Day 1 - Guest Session","time":"12:30 PM – 01:30 PM","day":"Jun 10","track":"osint","venue":"RJN202","desc":"OSINT challenge. You thought no one noticed! Find the hidden flags. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":15,"title":"Chronos Crossfire - Round Robin Part 1","time":"12:30 PM – 02:30 PM","day":"Jun 10","track":"competition","venue":"Quark","desc":"Round-robin sports simulation. Experience the thrill of fast-paced sports. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":16,"title":"IPL Auction Showdown 4.0 - Day 1","time":"12:30 PM – 01:30 PM","day":"Jun 10","track":"competition","venue":"RMN202","desc":"Bid smart, build a winning squad, and dominate the auction floor. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":17,"title":"Capitol Conclave - Debate Rounds","time":"12:30 PM – 03:30 PM","day":"Jun 10","track":"competition","venue":"RMN101","desc":"The ultimate parliamentary debate challenge. Speak. Argue. Conquer. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":18,"title":"Youth Parliament","time":"12:30 PM – 01:30 PM","day":"Jun 10","track":"social","venue":"DOMS101 (Tentative)","desc":"A mock simulation of India's parliamentary debates and policy framing. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":19,"title":"Rants and Riffs (All Rounds)","time":"12:30 PM – 03:30 PM","day":"Jun 10","track":"social","venue":"RMN102","desc":"Let your voice, emotions, and music blend. Express yourself. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":20,"title":"Unwind - Instrumental","time":"12:30 PM – 01:30 PM","day":"Jun 10","track":"social","venue":"Music Room","desc":"A musical evening of soothing instrumental and vocal acoustic tracks. ","conflictGroup":"jun10-slot-1230pm","urgent":false},{"id":21,"title":"Manch of Traders - Sponsor BootCamp","time":"02:00 PM – 03:00 PM","day":"Jun 10","track":"workshop","venue":"TTJ","desc":"Where Strategy Meets the Market. The ultimate trading simulation. ","conflictGroup":"jun10-slot-200pm","urgent":false,"speaker":"Prof. IIT Madras"},{"id":22,"title":"Ranneeti 5.0 BGMI - Finals 1","time":"02:00 PM – 04:00 PM","day":"Jun 10","track":"competition","venue":"RMN201","desc":"Ranneeti 5.0 Battlegrounds Mobile India. Drop, loot, survive. ","conflictGroup":"jun10-slot-200pm","urgent":false},{"id":23,"title":"Paradox Badminton League - Trials","time":"03:00 PM – 05:00 PM","day":"Jun 10","track":"sports","venue":"Sitara Indoor Sports Complex (Gymkhana)","desc":"Smash your way to glory. The ultimate inter-hostel badminton league. ","conflictGroup":"jun10-slot-300pm","urgent":false},{"id":24,"title":"Last1Standing - Task Rush","time":"03:30 PM – 04:30 PM","day":"Jun 10","track":"competition","venue":"KV Ground","desc":"Test your resilience. Only the last one standing wins the points championship. ","conflictGroup":"jun10-slot-330pm","urgent":false},{"id":25,"title":"Anime Jeopardy Initial Rounds (2-3)","time":"04:00 PM – 06:00 PM","day":"Jun 10","track":"competition","venue":"RMN101","desc":"You're not an otaku until you survive Anime Jeopardy! Winning is everything. ","conflictGroup":"jun10-slot-400pm","urgent":false},{"id":26,"title":"Anubhuti Semi Final","time":"04:00 PM – 05:00 PM","day":"Jun 10","track":"competition","venue":"RMN102","desc":"Semi-classical vocal solo competition. Feel the depth of Sur, Taal, and Bhava. ","conflictGroup":"jun10-slot-400pm","urgent":false},{"id":27,"title":"D2D - Workshop","time":"04:00 PM – 05:00 PM","day":"Jun 10","track":"workshop","venue":"UTIL","desc":"The ultimate Dance Showdown. Feel the rhythm, own the stage. ","conflictGroup":"jun10-slot-400pm","urgent":false,"speaker":"Prof. IIT Madras"},{"id":28,"title":"The Hoop Hustle 2.0 - Knockout Round","time":"04:00 PM – 06:00 PM","day":"Jun 10","track":"sports","venue":"Basketball Court (Gymkhana)","desc":"The ultimate basketball knockout challenge. Shoot, score, dominate. ","conflictGroup":"jun10-slot-400pm","urgent":false},{"id":29,"title":"VolleyVibes - Group Stage","time":"04:30 PM – 05:30 PM","day":"Jun 10","track":"sports","venue":"Volleyball Court (Gymkhana) / Court Near Hostel Zone","desc":"Spike it like a pro. The ultimate volleyball trials and final rounds. ","conflictGroup":"jun10-slot-430pm","urgent":false},{"id":30,"title":"Paradox Premier League 3.0 - Trials","time":"04:30 PM – 06:30 PM","day":"Jun 10","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun10-slot-430pm","urgent":false},{"id":31,"title":"Sufi Night","time":"07:30 PM – 09:30 PM","day":"Jun 10","track":"social","venue":"SAC","desc":"Paradox 2026 social session at the SAC.","conflictGroup":"jun10-slot-730pm","urgent":false},{"id":32,"title":"The Burn Club - Zumba Workshop","time":"05:00 AM – 06:00 AM","day":"Jun 11","track":"sports","venue":"OAT","desc":"Zumba fitness session. Burn those calories and feel the groove. ","conflictGroup":"jun11-slot-500am","urgent":false},{"id":33,"title":"Kampus Run","time":"05:00 AM – 06:00 AM","day":"Jun 11","track":"sports","venue":"Campus","desc":"The annual marathon run. Test your stamina across the green campus roads. ","conflictGroup":"jun11-slot-500am","urgent":false},{"id":34,"title":"Paradox Premier League 3.0 - Knockouts","time":"06:00 AM – 07:00 AM","day":"Jun 11","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun11-slot-600am","urgent":false},{"id":35,"title":"RoboSoccer 5.0 - Semi-finals and Final Rounds","time":"09:00 AM – 11:00 AM","day":"Jun 11","track":"competition","venue":"ICSR Hall 4 (Exhibition Hall)","desc":"Autonomous soccer bots clash. Kick off the AI soccer challenge. ","conflictGroup":"jun11-slot-900am","urgent":false},{"id":36,"title":"Squid Games - Morning Half","time":"09:00 AM – 12:00 PM","day":"Jun 11","track":"sports","venue":"KV Ground","desc":"Survive the thrilling childhood games with a competitive twist. ","conflictGroup":"jun11-slot-900am","urgent":false},{"id":37,"title":"Quotopia - Prelims","time":"10:00 AM – 11:00 AM","day":"Jun 11","track":"competition","venue":"CLT","desc":"The ultimate quiz showdown for trivia masterminds. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":38,"title":"Circuit Design Competition 2.0 - First Round (Simulation)","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"RJN101","desc":"Think it. Simulate it. Build it. The ultimate circuit design challenge. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":39,"title":"CrashLab: Collegiate Air Crash Investigation Challenge - Final Round","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"ICSR Hall 2","desc":"Collegiate Air Crash Investigation Challenge. The Devil is in the DATA. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":40,"title":"DSA Triathlon 3.0 - Initial Round","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"RJM302","desc":"Data Structures & Algorithms challenge. Code. Optimize. Triumph. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":41,"title":"Manch of Traders - Finals","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"ICSR Hall 3","desc":"Where Strategy Meets the Market. The ultimate trading simulation. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":42,"title":"Probably Paradoxical - Round 1 Invigilation","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"RJN102","desc":"Probability and statistics problem-solving challenge. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":43,"title":"Python Coding Challenge 5.0 - Round 2 & Final Round","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"RJN201","desc":"Python programming contest. The ultimate code quest. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":44,"title":"Research: To Infinity & Beyond - Competition","time":"10:00 AM – 11:00 AM","day":"Jun 11","track":"research","venue":"RJN202","desc":"Research: To Infinity & Beyond. Paper presentations and academic showcase. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":45,"title":"We Found You Online - Round Progression","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"osint","venue":"RJN301","desc":"OSINT challenge. You thought no one noticed! Find the hidden flags. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":46,"title":"Chronos Crossfire - Round Robin Part 2","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"Quark","desc":"Round-robin sports simulation. Experience the thrill of fast-paced sports. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":47,"title":"Ranneeti 5.0 BGMI - Finals 2","time":"10:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"MSB 208 / Chem Dept 204, 205 / DOMS 101","desc":"Ranneeti 5.0 Battlegrounds Mobile India. Drop, loot, survive. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":48,"title":"Paradox Badminton League - Group Stage","time":"10:00 AM – 11:00 AM","day":"Jun 11","track":"sports","venue":"Sitara Indoor Sports Complex (Gymkhana)","desc":"Smash your way to glory. The ultimate inter-hostel badminton league. ","conflictGroup":"jun11-slot-1000am","urgent":false},{"id":49,"title":"Escape Room - Semi Finals","time":"10:30 AM – 12:30 PM","day":"Jun 11","track":"competition","venue":"RMN302","desc":"Solve mind-bending puzzles and escape the room before time runs out. ","conflictGroup":"jun11-slot-1030am","urgent":false},{"id":50,"title":"IPL Auction Showdown 4.0 - Day 2 (Final)","time":"11:00 AM – 12:00 PM","day":"Jun 11","track":"competition","venue":"RMN301 / 202","desc":"Bid smart, build a winning squad, and dominate the auction floor. ","conflictGroup":"jun11-slot-1100am","urgent":false},{"id":51,"title":"Unwind - Vocal","time":"11:30 AM – 12:30 PM","day":"Jun 11","track":"social","venue":"RMN101","desc":"A musical evening of soothing instrumental and vocal acoustic tracks. ","conflictGroup":"jun11-slot-1130am","urgent":false},{"id":52,"title":"Ranneeti 5.0 Pocket Arcade - Stage 1","time":"12:00 PM – 01:00 PM","day":"Jun 11","track":"competition","venue":"RMN201 & 202","desc":"Retro gaming and arcade tournament. Quick games, high scores. ","conflictGroup":"jun11-slot-1200pm","urgent":false},{"id":53,"title":"Pictionary Art Relay","time":"12:00 PM – 01:00 PM","day":"Jun 11","track":"competition","venue":"RMN102 (Biggest classroom)","desc":"Draw fast, guess faster! The ultimate team art relay. ","conflictGroup":"jun11-slot-1200pm","urgent":false},{"id":54,"title":"Ranneeti 5.0 Valorant - Quarter-Finals","time":"02:00 PM – 04:00 PM","day":"Jun 11","track":"competition","venue":"MSB 208 / Chem Dept 204, 205 / DOMS 101","desc":"Ranneeti Valorant 5v5 tactical shooter showdown. ","conflictGroup":"jun11-slot-200pm","urgent":false},{"id":55,"title":"Stand Up Comedy Showdown","time":"02:00 PM – 03:00 PM","day":"Jun 11","track":"social","venue":"CLT","desc":"Get ready to laugh your heart out in the ultimate standup comedy showdown. ","conflictGroup":"jun11-slot-200pm","urgent":false},{"id":56,"title":"Anime Jeopardy Final Rounds (4-5)","time":"02:30 PM – 04:30 PM","day":"Jun 11","track":"competition","venue":"RMN (Least priority)","desc":"You're not an otaku until you survive Anime Jeopardy! Winning is everything. ","conflictGroup":"jun11-slot-230pm","urgent":false},{"id":57,"title":"Sprintsaga - Shot Put, Discus Throw","time":"03:00 PM – 04:00 PM","day":"Jun 11","track":"sports","venue":"KV Ground","desc":"Track and field athletics. Test your speed in 100m, 400m, and relays. ","conflictGroup":"jun11-slot-300pm","urgent":false},{"id":58,"title":"Squid Games - Evening Half","time":"03:00 PM – 06:00 PM","day":"Jun 11","track":"sports","venue":"KV Ground","desc":"Survive the thrilling childhood games with a competitive twist. ","conflictGroup":"jun11-slot-300pm","urgent":false},{"id":59,"title":"Paradox Premier League 3.0 - Knockouts","time":"03:30 PM – 04:30 PM","day":"Jun 11","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun11-slot-330pm","urgent":false},{"id":60,"title":"The Hoop Hustle 2.0 - Men's Quarter & Semi Final, Women's Finals","time":"03:30 PM – 05:30 PM","day":"Jun 11","track":"sports","venue":"Basketball Court (Gymkhana)","desc":"The ultimate basketball knockout challenge. Shoot, score, dominate. ","conflictGroup":"jun11-slot-330pm","urgent":false},{"id":61,"title":"Paradox Champions League - Group Stage","time":"03:30 PM – 04:30 PM","day":"Jun 11","track":"sports","venue":"Football Ground (Gymkhana)","desc":"Collegiate football championship. The ultimate battle on the green turf. ","conflictGroup":"jun11-slot-330pm","urgent":false},{"id":62,"title":"VolleyVibes - Semi-Finals","time":"04:00 PM – 06:00 PM","day":"Jun 11","track":"sports","venue":"Volleyball Court (Gymkhana) / Court Near Hostel Zone","desc":"Spike it like a pro. The ultimate volleyball trials and final rounds. ","conflictGroup":"jun11-slot-400pm","urgent":false},{"id":63,"title":"Sach, Scroll aur Shuturmurg Street Play","time":"05:00 PM – 06:00 PM","day":"Jun 11","track":"social","venue":"Outside SAC","desc":"Paradox 2026 social session at the Outside SAC.","conflictGroup":"jun11-slot-500pm","urgent":false},{"id":64,"title":"DJ Night","time":"07:00 PM – 09:00 PM","day":"Jun 11","track":"social","venue":"OAT","desc":"Paradox 2026 social session at the OAT.","conflictGroup":"jun11-slot-700pm","urgent":false},{"id":65,"title":"Sprintsaga - Relays","time":"06:00 AM – 07:00 AM","day":"Jun 12","track":"sports","venue":"Manohar C Watsa Stadium","desc":"Track and field athletics. Test your speed in 100m, 400m, and relays. ","conflictGroup":"jun12-slot-600am","urgent":false},{"id":66,"title":"Paradox Premier League 3.0 - Super Knockouts","time":"06:30 AM – 07:30 AM","day":"Jun 12","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun12-slot-630am","urgent":false},{"id":67,"title":"Paradox Champions League - Semi-Finals","time":"07:00 AM – 09:00 AM","day":"Jun 12","track":"sports","venue":"Football Ground (Gymkhana)","desc":"Collegiate football championship. The ultimate battle on the green turf. ","conflictGroup":"jun12-slot-700am","urgent":false},{"id":68,"title":"Last1Standing - Dual Challenge","time":"08:00 AM – 09:00 AM","day":"Jun 12","track":"competition","venue":"KV Ground","desc":"Test your resilience. Only the last one standing wins the points championship. ","conflictGroup":"jun12-slot-800am","urgent":false},{"id":69,"title":"RoboSoccer 5.0 - Final Round (ext) + Free Play","time":"09:00 AM – 11:00 AM","day":"Jun 12","track":"competition","venue":"ICSR Hall 4 (Exhibition Hall)","desc":"Autonomous soccer bots clash. Kick off the AI soccer challenge. ","conflictGroup":"jun12-slot-900am","urgent":false},{"id":70,"title":"Chronos Crossfire - Finals","time":"10:00 AM – 12:00 PM","day":"Jun 12","track":"competition","venue":"Quark","desc":"Round-robin sports simulation. Experience the thrill of fast-paced sports. ","conflictGroup":"jun12-slot-1000am","urgent":false},{"id":71,"title":"Paradox Badminton League - Semi-Finals","time":"10:00 AM – 12:00 PM","day":"Jun 12","track":"sports","venue":"Sitara Indoor Sports Complex (Gymkhana)","desc":"Smash your way to glory. The ultimate inter-hostel badminton league. ","conflictGroup":"jun12-slot-1000am","urgent":false},{"id":72,"title":"Interaction Session with Professors","time":"10:00 AM – 11:00 AM","day":"Jun 12","track":"workshop","venue":"CLT","desc":"Paradox 2026 workshop session at the CLT.","conflictGroup":"jun12-slot-1000am","urgent":false,"speaker":"Prof. IIT Madras"},{"id":73,"title":"Escape Room - Finals","time":"10:30 AM – 12:30 PM","day":"Jun 12","track":"competition","venue":"UTIL","desc":"Solve mind-bending puzzles and escape the room before time runs out. ","conflictGroup":"jun12-slot-1030am","urgent":false},{"id":74,"title":"Last1Standing - Steal or No Steal","time":"11:00 AM – 12:00 PM","day":"Jun 12","track":"competition","venue":"RMN102","desc":"Test your resilience. Only the last one standing wins the points championship. ","conflictGroup":"jun12-slot-1100am","urgent":false},{"id":75,"title":"Circuit Design Competition 2.0 - Final Round (Hardware Demo)","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"Old IE or New IE","desc":"Think it. Simulate it. Build it. The ultimate circuit design challenge. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":76,"title":"DSA Triathlon 3.0 - Final Round","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"ICSR Hall 2","desc":"Data Structures & Algorithms challenge. Code. Optimize. Triumph. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":77,"title":"Echo//Prometheus - Investigation Rounds","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"Campus","desc":"Twelve sleuths. Four destinations. One answer. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":78,"title":"Probably Paradoxical - Final Round","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"RJN102","desc":"Probability and statistics problem-solving challenge. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":79,"title":"We Found You Online - Round Progression","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"osint","venue":"RJN101","desc":"OSINT challenge. You thought no one noticed! Find the hidden flags. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":80,"title":"Final Lap: Formula Racing - Round Progression","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"Not Specified","desc":"Formula racing coding challenge. Accelerate your logic. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":81,"title":"GadgetXpo 2.0 - Finals","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"RJN201","desc":"Showcase of innovative gadgets, tech systems, and hardware hacks. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":82,"title":"RopeWalker - Round Progression","time":"12:30 PM – 02:30 PM","day":"Jun 12","track":"competition","venue":"Not Specified","desc":"Robot balancing challenge. Navigate the rope without falling. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":83,"title":"Capitol Conclave - Finale","time":"12:30 PM – 03:30 PM","day":"Jun 12","track":"competition","venue":"RMN201","desc":"The ultimate parliamentary debate challenge. Speak. Argue. Conquer. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":84,"title":"Youth Parliament - Finale","time":"12:30 PM – 01:30 PM","day":"Jun 12","track":"social","venue":"DOMS101 (Tentative)","desc":"A mock simulation of India's parliamentary debates and policy framing. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":85,"title":"Anubhuti - Finale","time":"12:30 PM – 01:30 PM","day":"Jun 12","track":"competition","venue":"RMN202","desc":"Semi-classical vocal solo competition. Feel the depth of Sur, Taal, and Bhava. ","conflictGroup":"jun12-slot-1230pm","urgent":false},{"id":86,"title":"Ranneeti 5.0 Pocket Arcade - Stage 2","time":"01:00 PM – 02:00 PM","day":"Jun 12","track":"competition","venue":"RMN102","desc":"Retro gaming and arcade tournament. Quick games, high scores. ","conflictGroup":"jun12-slot-100pm","urgent":false},{"id":87,"title":"Research: To Infinity & Beyond - Guest Session","time":"02:00 PM – 03:00 PM","day":"Jun 12","track":"research","venue":"ICSR Hall 3","desc":"Research: To Infinity & Beyond. Paper presentations and academic showcase. ","conflictGroup":"jun12-slot-200pm","urgent":false},{"id":88,"title":"GoBoxd","time":"02:00 PM – 03:00 PM","day":"Jun 12","track":"competition","venue":"RJN201","desc":"Compassion-a-thon: Build tech MVPs for real-world social impact. ","conflictGroup":"jun12-slot-200pm","urgent":false},{"id":89,"title":"Quotopia - Finale","time":"02:30 PM – 03:30 PM","day":"Jun 12","track":"competition","venue":"RMN201","desc":"The ultimate quiz showdown for trivia masterminds. ","conflictGroup":"jun12-slot-230pm","urgent":false},{"id":90,"title":"Sach, Scroll aur Shuturmurg Street Play","time":"03:00 PM – 04:00 PM","day":"Jun 12","track":"social","venue":"SAC","desc":"Paradox 2026 social session at the SAC.","conflictGroup":"jun12-slot-300pm","urgent":false},{"id":91,"title":"Ranneeti 5.0 Valorant - Semi-Finals","time":"04:00 PM – 06:00 PM","day":"Jun 12","track":"competition","venue":"RMN101","desc":"Ranneeti Valorant 5v5 tactical shooter showdown. ","conflictGroup":"jun12-slot-400pm","urgent":false},{"id":92,"title":"D2D SDB + Flash Mob","time":"05:00 PM – 06:00 PM","day":"Jun 12","track":"social","venue":"Himalaya Lawn","desc":"The ultimate Dance Showdown. Feel the rhythm, own the stage. ","conflictGroup":"jun12-slot-500pm","urgent":false},{"id":93,"title":"The Hoop Hustle 2.0 - Men's Finals","time":"05:00 PM – 07:00 PM","day":"Jun 12","track":"sports","venue":"Basketball Court (Gymkhana)","desc":"The ultimate basketball knockout challenge. Shoot, score, dominate. ","conflictGroup":"jun12-slot-500pm","urgent":false},{"id":94,"title":"Paradox Premier League 3.0 - Eliminators","time":"05:00 PM – 06:00 PM","day":"Jun 12","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun12-slot-500pm","urgent":false},{"id":95,"title":"VolleyVibes - Finals","time":"05:00 PM – 07:00 PM","day":"Jun 12","track":"sports","venue":"Volleyball Court (Gymkhana) / Court Near Hostel Zone","desc":"Spike it like a pro. The ultimate volleyball trials and final rounds. ","conflictGroup":"jun12-slot-500pm","urgent":false},{"id":96,"title":"Unwind - Finale","time":"07:00 PM – 08:00 PM","day":"Jun 12","track":"social","venue":"OAT","desc":"A musical evening of soothing instrumental and vocal acoustic tracks. ","conflictGroup":"jun12-slot-700pm","urgent":false},{"id":97,"title":"Paradox Premier League 3.0 - PPL CricQueens","time":"07:00 AM – 08:00 AM","day":"Jun 13","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun13-slot-700am","urgent":false},{"id":98,"title":"Paradox Champions League - Finals","time":"07:00 AM – 09:00 AM","day":"Jun 13","track":"sports","venue":"Football Ground (Gymkhana)","desc":"Collegiate football championship. The ultimate battle on the green turf. ","conflictGroup":"jun13-slot-700am","urgent":false},{"id":99,"title":"Echo//Prometheus - Finals","time":"10:00 AM – 12:00 PM","day":"Jun 13","track":"competition","venue":"Campus","desc":"Twelve sleuths. Four destinations. One answer. ","conflictGroup":"jun13-slot-1000am","urgent":false},{"id":100,"title":"We Found You Online - Finals","time":"10:00 AM – 12:00 PM","day":"Jun 13","track":"osint","venue":"RJM101","desc":"OSINT challenge. You thought no one noticed! Find the hidden flags. ","conflictGroup":"jun13-slot-1000am","urgent":false},{"id":101,"title":"Last1Standing - Points Championship","time":"10:00 AM – 11:00 AM","day":"Jun 13","track":"sports","venue":"RMN201","desc":"Test your resilience. Only the last one standing wins the points championship. ","conflictGroup":"jun13-slot-1000am","urgent":false},{"id":102,"title":"Paradox Badminton League - Finals","time":"10:00 AM – 12:00 PM","day":"Jun 13","track":"sports","venue":"Sitara Indoor Sports Complex (Gymkhana)","desc":"Smash your way to glory. The ultimate inter-hostel badminton league. ","conflictGroup":"jun13-slot-1000am","urgent":false},{"id":103,"title":"Paradox Got Talent - Finale","time":"11:00 AM – 12:00 PM","day":"Jun 13","track":"social","venue":"CLT","desc":"Unleash your passion. Showcase your unique talent to the world. ","conflictGroup":"jun13-slot-1100am","urgent":false},{"id":104,"title":"Shutter Safari","time":"11:30 AM – 12:30 PM","day":"Jun 13","track":"competition","venue":"RMN102","desc":"The photography expedition. Capture the raw beauty of campus life. ","conflictGroup":"jun13-slot-1130am","urgent":false},{"id":105,"title":"Ranneeti 5.0 Pocket Arcade - Stage 3 (Final)","time":"01:00 PM – 02:00 PM","day":"Jun 13","track":"competition","venue":"RMN101","desc":"Retro gaming and arcade tournament. Quick games, high scores. ","conflictGroup":"jun13-slot-100pm","urgent":false},{"id":106,"title":"D2D","time":"02:00 PM – 03:00 PM","day":"Jun 13","track":"workshop","venue":"SAC","desc":"The ultimate Dance Showdown. Feel the rhythm, own the stage. ","conflictGroup":"jun13-slot-200pm","urgent":false,"speaker":"Prof. IIT Madras"},{"id":107,"title":"Escape Room - Pitching Round","time":"02:30 PM – 04:30 PM","day":"Jun 13","track":"competition","venue":"ICSR Hall 3","desc":"Solve mind-bending puzzles and escape the room before time runs out. ","conflictGroup":"jun13-slot-230pm","urgent":false},{"id":108,"title":"Ranneeti 5.0 Valorant - Finals","time":"03:00 PM – 05:00 PM","day":"Jun 13","track":"competition","venue":"RMN201","desc":"Ranneeti Valorant 5v5 tactical shooter showdown. ","conflictGroup":"jun13-slot-300pm","urgent":false},{"id":109,"title":"Paradox Premier League 3.0 - Finals","time":"05:00 PM – 07:00 PM","day":"Jun 13","track":"sports","venue":"Sangam Ground","desc":"The ultimate cricket tournament. Pitch battles and clean hits. ","conflictGroup":"jun13-slot-500pm","urgent":false},{"id":110,"title":"Mr & Mrs Paradox","time":"05:00 PM – 06:00 PM","day":"Jun 13","track":"social","venue":"SAC","desc":"Style, grace, and intelligence. The ultimate pageant of IIT Madras. ","conflictGroup":"jun13-slot-500pm","urgent":false},{"id":111,"title":"Rapadox","time":"07:00 PM – 08:00 PM","day":"Jun 13","track":"social","venue":"Himalaya Lawn","desc":"The ultimate rap battle. Spit bars and claim the crown. ","conflictGroup":"jun13-slot-700pm","urgent":false},{"id":112,"title":"Closing Ceremony","time":"02:00 PM – 03:00 PM","day":"Jun 14","track":"social","venue":"SAC","desc":"Paradox 2026 social session at the SAC.","conflictGroup":"jun14-slot-200pm","urgent":false},{"id":113,"title":"Chromatix - Showcase","time":"02:00 PM – 03:00 PM","day":"Jun 14","track":"social","venue":"SAC","desc":"A colorful showcase of digital art and creative coding. ","conflictGroup":"jun14-slot-200pm","urgent":false},{"id":114,"title":"Representation Learning in Biology: Biomolecular Embeddings","time":"02:00 PM – 04:00 PM","day":"Jun 10","track":"workshop","venue":"Wadhwani School of AI","desc":"Explores transforming biological entities (DNA, proteins, disease states) into numerical vector representations (embeddings) using state-of-the-art models like ESM and DNABERT for tasks like protein function prediction. A laptop is required for the practical coding component.","conflictGroup":"jun10-slot-200pm","urgent":false,"speaker":"Prof. Manikandan Narayanan (IIT Madras), Saish Jaiswal (PHD Researcher IITM)"},{"id":115,"title":"From Syntax to Sentience: Classical NLP to LLMs","time":"02:00 PM – 04:00 PM","day":"Jun 10","track":"workshop","venue":"IC&SR Complex","desc":"An intensive workshop tracing the evolution of Natural Language Processing (NLP), starting from text processing and linguistic foundations, moving through the \"Attention\" mechanism, and concluding with the architecture and fine-tuning of state-of-the-art LLMs.","conflictGroup":"jun10-slot-200pm","urgent":false,"speaker":"Manojkumar Khara (Course Instructor IITM BS)"},{"id":116,"title":"Optimisation in Machine Learning","time":"02:00 PM – 04:00 PM","day":"Jun 11","track":"workshop","venue":"Wadhwani School of AI","desc":"Covers optimisation over high-dimensional continuous variables, exploring constrained/unconstrained problems and zeroth/first/second order methods. Focuses on novel algorithms like gradient descent with momentum, adaptive gradient descent, and MuON.","conflictGroup":"jun11-slot-200pm","urgent":false,"speaker":"Harish Guruprasad Ramaswamy (Assistant professor DSAI, IIT Madras)"},{"id":117,"title":"From Chatbots to Autonomous Agents","time":"02:00 PM – 04:00 PM","day":"Jun 11","track":"workshop","venue":"Department of Management Studies","desc":"Provides a glimpse into the evolution from prompt-based AI to autonomous systems that possess the ability to reason, plan, execute, and collaborate, defining the next operating system of work.","conflictGroup":"jun11-slot-200pm","urgent":false,"speaker":"Shabareesh Raj (Co-Founder & Chief AI Officer, sash.ai)"},{"id":118,"title":"AI-Powered Precision Health at Scale","time":"10:00 AM – 12:00 PM","day":"Jun 12","track":"workshop","venue":"Department of Biotechnology","desc":"Discusses building a unified AI-first framework that integrates multimodal sensing, advanced analytics, digital twins, and scalable computational platforms to enable precision health at a population scale, with examples from precision oncology.","conflictGroup":"jun12-slot-1000am","urgent":false,"speaker":"Dr. Naveen Sivadasan (Principal Scientist TCS Research)"},{"id":119,"title":"Context is the New Compute: Engineering Retrieval Systems","time":"10:00 AM – 12:00 PM","day":"Jun 12","track":"workshop","venue":"IC&SR Complex","desc":"Moves beyond basic Retrieval-Augmented Generation (RAG) to discuss designing production-ready context layers that combine vector search, knowledge graphs, and structured retrieval, and how to rigorously evaluate retrieval quality.","conflictGroup":"jun12-slot-1000am","urgent":false,"speaker":"Balasubramanian Chandran (Product & Engineering Leader, Prodapt)"},{"id":120,"title":"Playing with AI - Autonomous Agentic Systems 101","time":"02:00 PM – 04:00 PM","day":"Jun 12","track":"workshop","venue":"Wadhwani School of AI","desc":"Covers the basics of building clean, reliable systems that leverage both AI and traditional code to (almost) fully autonomously perform tasks and build production-grade code, focusing on reducing AI unpredictability.","conflictGroup":"jun12-slot-200pm","urgent":false,"speaker":"Rishav Thakker (software architect and developer)"},{"id":121,"title":"Sports Analytics & AI Workshop","time":"02:00 PM – 04:00 PM","day":"Jun 12","track":"workshop","venue":"Student Activity Center","desc":"An interactive session on the rapidly growing intersection of sports, AI, and data science. It showcases how technologies like Computer Vision, Machine Learning, and IoT sensors are transforming athletic performance analysis and strategy optimization.","conflictGroup":"jun12-slot-200pm","urgent":false,"speaker":"Babji Srinivasan (Professor, IIT Madras)"},{"id":122,"title":"Beyond Next-Token Prediction in Multimodal AI Models","time":"10:00 AM – 12:00 PM","day":"Jun 13","track":"workshop","venue":"Wadhwani School of AI","desc":"Discusses the limits of multimodal LLMs in abstraction and reliable reasoning. Motivates moving AI beyond opaque prediction toward concepts, structure, logic, and compositional reasoning to build reliable and trustworthy models.","conflictGroup":"jun13-slot-1000am","urgent":false,"speaker":"Vineeth N Balasubramanian (Microsoft Research India and IIT-Hyderabad)"},{"id":123,"title":"Five Mistakes Data Scientists Make & How Economics Fixes Them","time":"10:00 AM – 12:00 PM","day":"Jun 13","track":"workshop","venue":"Department of Management Studies","desc":"Examines five common mistakes data scientists make (e.g., mistaking correlation for causation, ignoring incentives). Shows how core economic ideas help turn predictive models into better, strategy-aware decisions in business and public policy.","conflictGroup":"jun13-slot-1000am","urgent":false,"speaker":"Prof. Vimal Kumar (Professor, IIT Kanpur)"},{"id":124,"title":"Data Science with Coding Agents: Masterclass on SLMs","time":"02:00 PM – 04:00 PM","day":"Jun 13","track":"workshop","venue":"Wadhwani School of AI","desc":"A masterclass tailored for the IIT Madras Online BSc community on architecting, training, and optimizing Small Language Models (SLMs). Focuses on building high-performance, cost-effective models designed for local/on-device deployment.","conflictGroup":"jun13-slot-200pm","urgent":false,"speaker":"Ashish Tendulkar (AI Practice Manager, Google)"},{"id":125,"title":"Why Most AI Systems Fail and How to Build Ones That Don't","time":"02:00 PM – 04:00 PM","day":"Jun 13","track":"workshop","venue":"IC&SR Complex","desc":"A deep dive into why many AI systems fail in real-world scenarios. The session introduces a systems-first perspective on designing reliable AI that moves beyond simple retrieval to true understanding, often using hybrid architectures.","conflictGroup":"jun13-slot-200pm","urgent":false,"speaker":"Sheri Chander (AI Engineering Head, Newgen Software)"}]};
let EVENTS = [];
let TRANSIT_LOG = [];

async function loadEventsData() {
  try {
    const response = await fetch('src/data/paradoxStore.json');
    if (!response.ok) {
      throw new Error("HTTP status " + response.status);
    }
    const data = await response.json();
    EVENTS = data.events || [];
  } catch (error) {
    console.warn("Failed to load events database from network, using embedded fallback:", error);
    EVENTS = PARADOX_FALLBACK_STORE.events || [];
  }
}

// Event Cover Photo mapping — maps normalized event name keywords to optimized WebP paths
const EVENT_COVERS = {
  // Culturals
  "anime jeopardy": "img/events/culturals/anime-jeopardy.webp",
  "anubhuti": "img/events/culturals/anubhuti.webp",
  "capitol conclave": "img/events/culturals/capitol-conclave.webp",
  "d2d": "img/events/culturals/dream2dance.webp",
  "dream2dance": "img/events/culturals/dream2dance.webp",
  "mr & mrs paradox": "img/events/culturals/mr-and-ms-paradox.webp",
  "mr and ms paradox": "img/events/culturals/mr-and-ms-paradox.webp",
  "paradox got talent": "img/events/culturals/paradox-got-talent.webp",
  "unwind": "img/events/culturals/paradox-unwind.webp",
  "pictionary art relay": "img/events/culturals/pictionary-art-relay.webp",
  "quotopia": "img/events/culturals/qutopia.webp",
  "rants and riffs": "img/events/culturals/rants-and-riffs.webp",
  "rapadox": "img/events/culturals/rapadox.webp",
  "samvaad": "img/events/culturals/samvaad-2.0.webp",
  "shutter safari": "img/events/culturals/shutter-safari.webp",
  "standup comedy": "img/events/culturals/standup-comedy.webp",
  "stand up comedy": "img/events/culturals/standup-comedy.webp",
  "youth parliament": "img/events/culturals/youth-parliament.webp",
  // Sports
  "burn club": "img/events/sports/burn-club.webp",
  "zumba": "img/events/sports/burn-club.webp",
  "chronos crossfire": "img/events/sports/chronos-crossfire.webp",
  "escape room": "img/events/sports/escape-room.webp",
  "hoop hustle": "img/events/sports/hoop-hustle.webp",
  "ipl auction": "img/events/sports/ipl-auction.webp",
  "kampus run": "img/events/sports/kampus-run.webp",
  "last1standing": "img/events/sports/last1standing.webp",
  "badminton league": "img/events/sports/paradox-badminton-league.webp",
  "paradox badminton": "img/events/sports/paradox-badminton-league.webp",
  "champions league": "img/events/sports/paradox-champion-leauge.webp",
  "paradox champions": "img/events/sports/paradox-champion-leauge.webp",
  "pocket arcade": "img/events/sports/pocket-arcade.webp",
  "premier league": "img/events/sports/ppl.webp",
  "ppl": "img/events/sports/ppl.webp",
  "ranneeti 5.0 bgmi": "img/events/sports/ranneeti-5.0-bgmi.webp",
  "bgmi": "img/events/sports/ranneeti-5.0-bgmi.webp",
  "ranneeti valorant": "img/events/sports/ranneeti-valorant.webp",
  "valorant": "img/events/sports/ranneeti-valorant.webp",
  "sprintsaga": "img/events/sports/sprint-saga.webp",
  "sprint saga": "img/events/sports/sprint-saga.webp",
  "squid games": "img/events/sports/squid-games.webp",
  "squid": "img/events/sports/squid-games.webp",
  "volleyvibes": "img/events/sports/volley-vibes.webp",
  "volley vibes": "img/events/sports/volley-vibes.webp",
  "yoga": "img/events/sports/yoga-2.webp",
  // Technical
  "circuit design": "img/events/technical/cdc.webp",
  "chromatix": "img/events/technical/chromatix_final.webp",
  "compassion": "img/events/technical/compassion-a-thon-2.webp",
  "goboxd": "img/events/technical/compassion-a-thon-2.webp",
  "crashlab": "img/events/technical/crashlab.webp",
  "dsa triathlon": "img/events/technical/dsa-trialthon__poster.webp",
  "dsa trialthon": "img/events/technical/dsa-trialthon__poster.webp",
  "echo prometheus": "img/events/technical/echo-prometheus_poster-3.webp",
  "echo//prometheus": "img/events/technical/echo-prometheus_poster-3.webp",
  "final lap": "img/events/technical/final_lap_formula_racing.webp",
  "formula racing": "img/events/technical/final_lap_formula_racing.webp",
  "gadgetxpo": "img/events/technical/gadgetxpo.webp",
  "logi": "img/events/technical/logi.webp",
  "logistically": "img/events/technical/logi.webp",
  "manch of traders": "img/events/technical/manch_of_traders.webp",
  "python coding": "img/events/technical/pcc.webp",
  "probably paradoxical": "img/events/technical/pp.webp",
  "research": "img/events/technical/research.webp",
  "robosoccer": "img/events/technical/robosoccer.webp",
  "ropewalker": "img/events/technical/ropewalker.webp",
  "syngenta": "img/events/technical/syngenta.webp",
  "we found you online": "img/events/technical/wefoundyouonline.webp"
};

// Fuzzy match event title to cover image path
function getEventCover(title) {
  if (!title) return null;
  const normalized = title.toLowerCase();
  // Try exact key match first
  for (const [key, path] of Object.entries(EVENT_COVERS)) {
    if (normalized.includes(key)) return path;
  }
  return null;
}

// Track-based gradient fallbacks for events without cover photos
const TRACK_GRADIENTS = {
  "sports": "linear-gradient(135deg, #14532D 0%, #166534 50%, #22c55e 100%)",
  "competition": "linear-gradient(135deg, #14532D 0%, #166534 50%, #22c55e 100%)",
  "culturals": "linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #F97316 100%)",
  "social": "linear-gradient(135deg, #7C2D12 0%, #C2410C 50%, #F97316 100%)",
  "workshop": "linear-gradient(135deg, #92400E 0%, #D97706 50%, #FBBF24 100%)",
  "research": "linear-gradient(135deg, #581c87 0%, #7e22ce 50%, #a855f7 100%)",
  "osint": "linear-gradient(135deg, #92400E 0%, #D97706 50%, #FBBF24 100%)"
};

const VENUES_DB = {
  "Entire_Campus": { name: "Gajendra Circle Center", x: 500, y: 500, q: "Gajendra Circle IIT Madras" },
  "OAT": { name: "Open Air Theatre", x: 620, y: 480, q: "Open Air Theatre IIT Madras" },
  "DoMS": { name: "Department of Management Studies", x: 410, y: 390, q: "Department of Management Studies IIT Madras" },
  "Biotech": { name: "Department of Biotechnology", x: 480, y: 290, q: "Department of Biotechnology IIT Madras" },
  "IC_SR": { name: "IC&SR Complex", x: 530, y: 420, q: "IC and SR Complex IIT Madras" },
  "SAC": { name: "Student Activity Center", x: 710, y: 550, q: "Student Activity Centre IIT Madras" },
  "Wadhwani": { name: "Wadhwani School of AI", x: 450, y: 440, q: "School of Data Science and AI IIT Madras" },
  "NAC2": { name: "NAC2 Block", x: 490, y: 360, q: "NAC2 Block IIT Madras" },
  "Campus_Hub": { name: "Campus Intelligence Hub", x: 500, y: 580, q: "Gajendra Circle IIT Madras" },
  "Himalaya": { name: "Himalaya Lawn", x: 680, y: 380, q: "Himalaya Lawn IIT Madras" },
  "Sports_Zone": { name: "Gymkhana Sports Zone", x: 720, y: 620, q: "Gymkhana IIT Madras" },
  "CLT": { name: "Central Lecture Theatre", x: 520, y: 460, q: "Central Lecture Theatre IIT Madras" },
  "MSB": { name: "Mechanical Sciences Block", x: 380, y: 450, q: "Mechanical Sciences Block IIT Madras" },
  "Quark": { name: "Quark Lab Block", x: 440, y: 320, q: "Department of Physics IIT Madras" },
  "UTIL": { name: "Utility Block", x: 460, y: 350, q: "Utility Block IIT Madras" },
  "Remote": { name: "Remote Portal", x: 0, y: 0, q: "" }
};

const VENUE_DOTS = {
  "Remote": "remote", "OAT": "olt", "DoMS": "olt", "Biotech": "olt",
  "IC_SR": "ic-sr", "SAC": "ic-sr", "Wadhwani": "wadhwani", "NAC2": "nac", 
  "Campus_Hub": "nac", "Himalaya": "remote", "Sports_Zone": "wadhwani",
  "CLT": "nac", "MSB": "olt", "Quark": "ic-sr", "UTIL": "nac"
};

// Dynamic Normalization of Venue names
function getVenueKey(venueName) {
  if (!venueName) return "Entire_Campus";
  const clean = venueName.toUpperCase();
  if (clean.includes("OAT") || clean.includes("THEATRE")) return "OAT";
  if (clean.includes("DOMS") || clean.includes("MANAGEMENT")) return "DoMS";
  if (clean.includes("BIOTECH") || clean.includes("BIOTECHNOLOGY") || clean.includes("RJN")) return "Biotech";
  if (clean.includes("ICSR") || clean.includes("IC&SR") || clean.includes("RMN") || clean.includes("RAMANUJAN")) return "IC_SR";
  if (clean.includes("SAC") || clean.includes("STUDENT ACTIVITY")) return "SAC";
  if (clean.includes("WADHWANI") || clean.includes("DATA SCIENCE") || clean.includes("AI")) return "Wadhwani";
  if (clean.includes("NAC")) return "NAC2";
  if (clean.includes("HIMALAYA")) return "Himalaya";
  if (clean.includes("GYMKHANA") || clean.includes("COURT") || clean.includes("STADIUM") || clean.includes("GROUND") || clean.includes("SITARA") || clean.includes("KV") || clean.includes("SANGAM") || clean.includes("RUN")) return "Sports_Zone";
  if (clean.includes("CLT") || clean.includes("LECTURE")) return "CLT";
  if (clean.includes("MSB") || clean.includes("CHEM")) return "MSB";
  if (clean.includes("QUARK")) return "Quark";
  if (clean.includes("UTIL") || clean.includes("UTILITY")) return "UTIL";
  if (clean.includes("REMOTE") || clean.includes("ONLINE") || clean.includes("PORTAL")) return "Remote";
  return "Entire_Campus";
}

const TRACK_BADGES = {
  "competition": "badge-competition", "research": "badge-research",
  "osint": "badge-osint", "workshop": "badge-workshop", "social": "badge-social"
};

const TRACK_LABELS = {
  "competition": "Competition", "research": "Research Phase",
  "osint": "OSINT", "workshop": "Workshop", "social": "Social & cultural"
};

// Client state model
const nowReal = new Date();
const isRealEventRange = (nowReal.getFullYear() === 2026 && nowReal.getMonth() === 5 && nowReal.getDate() >= 9 && nowReal.getDate() <= 14);

let state = {
  booked: [],
  watching: [],
  customEvents: [],
  activeDay: 0,
  activeView: "discover",
  conflicts: [],
  searchQuery: "",
  activeTrack: "all",
  simulators: {
    quizCompleted: false,
    paperSubmitted: false
  },
  settings: {
    theme: "light", // Default to light warm cream
    walkSpeed: 80,
    mapZoom: 15,
    viewMode: "detail",
    simulateTime: !isRealEventRange, // Default to true if outside event dates, false if in-range
    mapMode: "offline",
    notificationsEnabled: false
  },
  hiddenEvents: [],
  notes: {},
  dismissedNotifications: [],
  profile: {
    name: "Alex Mercer",
    role: "Senior Data Architect",
    isPro: true,
    isSpeaker: true
  }
};

// Load state from local storage cache
try {
  const saved = JSON.parse(localStorage.getItem("paradox_mobile_settings") || "{}");
  if (saved) {
    if (saved.booked) state.booked = saved.booked;
    if (saved.watching) state.watching = saved.watching;
    if (saved.customEvents) state.customEvents = saved.customEvents;
    if (saved.simulators) state.simulators = saved.simulators;
    if (saved.settings) state.settings = { ...state.settings, ...saved.settings };
    if (saved.hiddenEvents) state.hiddenEvents = saved.hiddenEvents;
    if (saved.notes) state.notes = saved.notes;
    if (saved.dismissedNotifications) state.dismissedNotifications = saved.dismissedNotifications;
    if (saved.profile) state.profile = { ...state.profile, ...saved.profile };
  }
} catch(e) {
  console.warn("Storage restore error:", e);
}

function saveState() {
  try {
    localStorage.setItem("paradox_mobile_settings", JSON.stringify({
      booked: state.booked,
      watching: state.watching,
      customEvents: state.customEvents,
      simulators: state.simulators,
      settings: state.settings,
      hiddenEvents: state.hiddenEvents,
      notes: state.notes,
      dismissedNotifications: state.dismissedNotifications,
      profile: state.profile
    }));
  } catch(e) {
    console.warn("Storage save error:", e);
  }
}

function getEventsRegistry() {
  return [...EVENTS, ...state.customEvents];
}

// Stable Y scroll coordinate resolver
function getAbsoluteOffsetTop(element) {
  let top = 0;
  while (element) {
    top += element.offsetTop;
    element = element.offsetParent;
  }
  return top;
}

// Time calculations helper: parse AM/PM string into absolute minutes of day
function timeStringToMinutes(timeStr) {
  if (!timeStr) return 0;
  const clean = timeStr.trim().toUpperCase();
  const match = clean.match(/(\d+):(\d+)\s*(AM|PM)/);
  if (!match) return 0;
  let hours = parseInt(match[1]);
  const minutes = parseInt(match[2]);
  const ampm = match[3];
  if (ampm === "PM" && hours < 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  return hours * 60 + minutes;
}

function getEventTimeRange(ev) {
  if (!ev || !ev.time) return { start: 0, end: 1440 };
  const matches = ev.time.match(/(\d+):(\d+)\s*(AM|PM)/gi);
  if (!matches || matches.length === 0) {
    return { start: 0, end: 1440 };
  }
  const start = timeStringToMinutes(matches[0]);
  let end = start + 60; // Default duration: 60 minutes
  if (matches.length >= 2) {
    end = timeStringToMinutes(matches[1]);
  }
  return { start, end };
}

// Evaluate time overlaps for booked items
function evaluateConflicts() {
  const allEvents = getEventsRegistry();
  state.conflicts = [];
  const bookedEvs = allEvents.filter(e => state.booked.includes(e.id));
  
  for (let i = 0; i < bookedEvs.length; i++) {
    for (let j = i + 1; j < bookedEvs.length; j++) {
      const evA = bookedEvs[i];
      const evB = bookedEvs[j];
      
      if (evA.day === evB.day) {
        const rangeA = getEventTimeRange(evA);
        const rangeB = getEventTimeRange(evB);
        
        // Overlap check: startA < endB && startB < endA
        if (rangeA.start < rangeB.end && rangeB.start < rangeA.end) {
          state.conflicts.push({
            events: [evA, evB],
            msg: `"${evA.title.substring(0, 24)}..." and "${evB.title.substring(0, 24)}..." overlap on ${evA.day} (${evA.time} vs ${evB.time}).`
          });
        }
      }
    }
  }
}

// Calculate Euclidean distance walk travel times and warnings
function evaluateTransitWarnings() {
  const allEvents = getEventsRegistry();
  // Only check physical booked events
  const bookedEvs = allEvents.filter(e => state.booked.includes(e.id) && e.venue !== "Remote");
  const walkSpeed = state.settings.walkSpeed || 80;
  
  bookedEvs.sort((a, b) => {
    const dayOrder = { "Jun 09": 1, "Jun 10": 2, "Jun 11": 3, "Jun 12": 4, "Jun 13": 5, "Jun 14": 6 };
    if (dayOrder[a.day] !== dayOrder[b.day]) return dayOrder[a.day] - dayOrder[b.day];
    const rA = getEventTimeRange(a);
    const rB = getEventTimeRange(b);
    return rA.start - rB.start;
  });

  const warningEl = document.getElementById("transit-warning");
  const svgTransitLine = document.getElementById("svg-transit-line");
  let foundConflict = false;

  for (let i = 0; i < bookedEvs.length - 1; i++) {
    const evA = bookedEvs[i];
    const evB = bookedEvs[i + 1];

    if (evA.day === evB.day && evA.venue !== evB.venue) {
      const rangeA = getEventTimeRange(evA);
      const rangeB = getEventTimeRange(evB);
      
      const timeGap = rangeB.start - rangeA.end;
      // Trigger transit warning if back-to-back within 30 minutes
      if (timeGap >= 0 && timeGap <= 30) {
        const posA = VENUES_DB[getVenueKey(evA.venue)];
        const posB = VENUES_DB[getVenueKey(evB.venue)];
        
        if (posA && posB) {
          const dx = posB.x - posA.x;
          const dy = posB.y - posA.y;
          const distPixel = Math.sqrt(dx*dx + dy*dy);
          const distMeters = Math.round(distPixel * 2); // 1px = ~2 meters
          const walkTime = Math.round(distMeters / walkSpeed);
          
          if (distPixel > 100) { // significant walk
            foundConflict = true;
            const isOvertime = walkTime > timeGap;
            const gmapsDirectionUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(posA.q)}&destination=${encodeURIComponent(posB.q)}&travelmode=walking`;
            
            if (isOvertime) {
              warningEl.classList.add("critical");
              warningEl.querySelector("#transit-text-content").innerHTML = `
                <strong>CRITICAL WALKING ALERT:</strong> Ineligible transit path from <strong>${evA.venue}</strong> to <strong>${evB.venue}</strong>.<br/>
                Walk time (~${walkTime} mins / ${distMeters}m) exceeds break window (${timeGap} mins).<br/>
                <a class="maps-link" href="${gmapsDirectionUrl}" target="_blank" style="color:var(--red); font-weight:700">Calculate GPS Walk Path ↗</a>
              `;
            } else {
              warningEl.classList.remove("critical");
              warningEl.querySelector("#transit-text-content").innerHTML = `
                <strong>Transit Notice:</strong> Back-to-back classes at different buildings (${evA.venue} ➔ ${evB.venue}).<br/>
                Walking distance is ~${distMeters}m taking ~${walkTime} mins. Time gap is ${timeGap} mins.<br/>
                <a class="maps-link" href="${gmapsDirectionUrl}" target="_blank" style="font-weight:700">Calculate GPS Walk Path ↗</a>
              `;
            }
            
            // Draw walk path on SVG offline map
            if (svgTransitLine) {
              const midX = (posA.x + posB.x) / 2;
              const midY = (posA.y + posB.y) / 2 - 35; // arc curve control offset
              svgTransitLine.setAttribute("d", `M ${posA.x} ${posA.y} Q ${midX} ${midY} ${posB.x} ${posB.y}`);
              svgTransitLine.style.display = "block";
            }
            break; // Render the first back-to-back warning
          }
        }
      }
    }
  }

  if (!foundConflict) {
    warningEl.style.display = "none";
    if (svgTransitLine) {
      svgTransitLine.style.display = "none";
    }
  } else {
    warningEl.style.display = "flex";
  }
}

// Google Maps & SVG Offline Map switches
let lastLoadedMapSrc = "";
let mapScale = 1.0;
let mapPanX = 0;
let mapPanY = 0;

function focusMapVenue(venueKey, forceLiveUpdate = false) {
  const select = document.getElementById("map-focus-select");
  if (select) select.value = venueKey;

  const venue = VENUES_DB[venueKey];
  if (!venue) return;

  if (state.settings.mapMode === "live") {
    const gmapsIframe = document.getElementById("gmaps-viewport-iframe");
    const label = document.getElementById("gmaps-selected-label");
    const navLink = document.getElementById("gmaps-external-nav");
    const loader = document.getElementById("map-loader");
    const zoom = state.settings.mapZoom || 15;
    let newSrc = "";

    if (venueKey === "Entire_Campus" || !venue.q) {
      newSrc = `https://maps.google.com/maps?q=Indian%20Institute%20of%20Technology%20Madras&t=&z=${zoom - 1}&ie=UTF8&iwloc=&output=embed`;
      label.textContent = "Selected: IITM Campus";
      navLink.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=IIT+Madras");
    } else {
      newSrc = `https://maps.google.com/maps?q=${encodeURIComponent(venue.q)}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
      label.textContent = `Selected: ${venue.name}`;
      navLink.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.q)}`);
    }

    if (lastLoadedMapSrc !== newSrc || forceLiveUpdate) {
      if (loader) loader.style.display = "flex";
      gmapsIframe.src = newSrc;
      lastLoadedMapSrc = newSrc;
      gmapsIframe.onload = () => {
        if (loader) loader.style.display = "none";
      };
    }
  } else {
    // Focus SVG map
    focusSVGMapVenue(venueKey);
  }
}

// Center/focus SVG on coordinate
function focusSVGMapVenue(venueKey) {
  document.querySelectorAll(".map-pin").forEach(p => p.classList.remove("selected"));

  const venue = VENUES_DB[venueKey];
  if (!venue) return;

  const pin = document.getElementById("svg-pin-" + venueKey);
  if (pin) pin.classList.add("selected");

  const label = document.getElementById("gmaps-selected-label");
  if (label) {
    label.textContent = venueKey === "Entire_Campus" ? "Selected: IITM Campus" : `Selected: ${venue.name}`;
  }

  const navLink = document.getElementById("gmaps-external-nav");
  if (navLink) {
    if (venueKey === "Entire_Campus" || !venue.q) {
      navLink.setAttribute("href", "https://www.google.com/maps/search/?api=1&query=IIT+Madras");
    } else {
      navLink.setAttribute("href", `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.q)}`);
    }
  }

  const mapWrapper = document.getElementById("svg-map-wrapper");
  if (!mapWrapper) return;

  const rect = mapWrapper.getBoundingClientRect();
  const W = rect.width || 388;
  const H = rect.height || 380;

  if (venueKey === "Entire_Campus") {
    mapScale = 1.0;
    mapPanX = 0;
    mapPanY = 0;
  } else {
    mapScale = 2.2;
    const ratio = W / 1000;
    mapPanX = (W / 2) - (venue.x * ratio * mapScale);
    mapPanY = (H / 2) - (venue.y * ratio * mapScale);
  }

  updateSVGTransform();
}

function updateSVGTransform() {
  const svgEl = document.getElementById("svg-campus-map");
  if (svgEl) {
    svgEl.style.transform = `translate(${mapPanX}px, ${mapPanY}px) scale(${mapScale})`;
  }
}

// Map pin click handler
function onMapPinClick(venueKey) {
  const select = document.getElementById("map-focus-select");
  if (select) {
    select.value = venueKey;
    focusMapVenue(venueKey);
  }
}

// Amenities toggle logic
function toggleMapAmenity(type, chipEl) {
  if (type === 'restrooms') {
    window.open("https://www.google.com/maps/search/?api=1&query=12.989233,80.233099", "_blank");
  } else if (type === 'food') {
    window.open("https://www.google.com/maps/search/?api=1&query=12.993700,80.231300", "_blank");
  }

  const pins = document.querySelectorAll(`.amenity-pin.${type}`);
  if (pins.length === 0) return;
  const isShowing = pins[0].style.display !== "none";
  
  pins.forEach(pin => {
    pin.style.display = isShowing ? "none" : "block";
  });
  
  if (chipEl) {
    chipEl.classList.toggle("active", !isShowing);
  }
  
  triggerToast(isShowing ? `Hiding ${type} pins` : `Showing ${type} nearby 📍`);
}


// Zoom / Center floating buttons
function zoomMapBtn(factor) {
  const mapWrapper = document.getElementById("svg-map-wrapper");
  if (!mapWrapper) return;
  const rect = mapWrapper.getBoundingClientRect();
  const midX = rect.width / 2;
  const midY = rect.height / 2;
  zoomToPoint(midX, midY, factor);
}

function zoomToPoint(x, y, factor) {
  const oldScale = mapScale;
  mapScale = Math.max(0.8, Math.min(5, mapScale * factor));
  mapPanX = x - (x - mapPanX) * (mapScale / oldScale);
  mapPanY = y - (y - mapPanY) * (mapScale / oldScale);
  updateSVGTransform();
}

function resetMapTransform() {
  mapScale = 1.0;
  mapPanX = 0;
  mapPanY = 0;
  updateSVGTransform();
  
  const select = document.getElementById("map-focus-select");
  if (select) select.value = "Entire_Campus";
  
  document.querySelectorAll(".map-pin").forEach(p => p.classList.remove("selected"));
  
  const label = document.getElementById("gmaps-selected-label");
  if (label) label.textContent = "Selected: IITM Campus";
}

// Dual map mode toggle
function toggleMapMode() {
  if (state.settings.mapMode === "live") {
    state.settings.mapMode = "offline";
  } else {
    state.settings.mapMode = "live";
  }
  saveState();
  updateMapModeUI();
}

function updateMapModeUI() {
  const toggleBtn = document.getElementById("map-mode-toggle");
  const svgMapWrap = document.getElementById("svg-map-wrapper");
  const gmapsContainer = document.getElementById("google-map-iframe-container");
  const select = document.getElementById("map-focus-select");
  const selectedVenue = select ? select.value : "Entire_Campus";

  if (state.settings.mapMode === "live") {
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="ti ti-map-2" aria-hidden="true"></i> <span>Switch to Offline Map</span>`;
    }
    if (svgMapWrap) svgMapWrap.style.display = "none";
    if (gmapsContainer) gmapsContainer.style.display = "block";
    focusMapVenue(selectedVenue, true);
  } else {
    if (toggleBtn) {
      toggleBtn.innerHTML = `<i class="ti ti-world" aria-hidden="true"></i> <span>Switch to Google Maps</span>`;
    }
    if (svgMapWrap) svgMapWrap.style.display = "block";
    if (gmapsContainer) gmapsContainer.style.display = "none";
    
    // Clear live iframe to save bandwidth
    const gmapsIframe = document.getElementById("gmaps-viewport-iframe");
    if (gmapsIframe) {
      gmapsIframe.removeAttribute("src");
      lastLoadedMapSrc = "";
    }
    
    focusMapVenue(selectedVenue);
  }
}

// Update SVG pin status colors dynamically
function updateSVGMapPinsState() {
  const allEvents = getEventsRegistry();
  const days = window.DAYS_NAMES || ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const day = days[state.activeDay];

  let activeDayEvents = allEvents;
  if (state.activeDay !== 0) {
    activeDayEvents = allEvents.filter(e => e.day === day);
  }

  for (const [key, venue] of Object.entries(VENUES_DB)) {
    const pin = document.getElementById("svg-pin-" + key);
    if (!pin) continue;

    pin.classList.remove("has-active-event", "has-watched-event");

    if (key === "Entire_Campus") continue;

    const venueEvents = activeDayEvents.filter(e => getVenueKey(e.venue) === key);
    const hasBooked = venueEvents.some(e => state.booked.includes(e.id));
    const hasWatched = venueEvents.some(e => state.watching.includes(e.id));

    if (hasBooked) {
      pin.classList.add("has-active-event");
    } else if (hasWatched) {
      pin.classList.add("has-watched-event");
    }
  }
}

// Card expand control with spring transition
function toggleCardExpand(cardEl, evId, e) {
  if (e && (e.target.closest('.event-actions') || e.target.closest('.maps-link') || e.target.closest('.action-pill') || e.target.closest('.venue-name-span'))) {
    return;
  }
  showEventDetails(evId);
}

function showEventDetails(evId) {
  const castId = isNaN(evId) ? evId : parseInt(evId);
  const allEvents = getEventsRegistry();
  const ev = allEvents.find(x => x.id === castId);
  if (!ev) return;
  
  state.selectedEventId = castId; // track current selected event for sharing/booking
  
  const container = document.getElementById("details-content-body");
  if (!container) return;
  
  const isBooked = state.booked.includes(ev.id);
  const isWatching = state.watching.includes(ev.id);
  const trackText = (ev.track || "competition").toLowerCase();
  const badge = TRACK_BADGES[trackText] || "badge-competition";
  const blabel = TRACK_LABELS[trackText] || trackText;
  const coverPath = getEventCover(ev.title);
  const descText = ev.desc || "No description available.";
  const venueText = ev.venue || "Venue TBA";
  const timeText = ev.time || "Time TBA";
  
  // Date string fix: the date line in mockup is e.g. "Jun 12, 2026 • 10:00 AM – 12:00 PM"
  const dateLine = `${ev.day || "Jun 10"}, 2026 • ${timeText}`;
  
  // Render Speaker card only if track is workshop
  let speakerHTML = "";
  if (trackText === "workshop" && ev.speaker) {
    const speakerName = ev.speaker;
    const speakerRole = ev.speakerRole || "Guest Speaker";
    const speakerAvatar = ev.speakerAvatar || "img/events/culturals/mr-and-ms-paradox.webp";
    speakerHTML = `
      <div class="details-section-card glass-card">
        <div class="details-section-title">SPEAKER</div>
        <div class="speaker-row">
          <div class="speaker-avatar">
            <img src="${speakerAvatar}" alt="${speakerName}" style="width:100%; height:100%; border-radius:50%" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2244%22 height=%2244%22><circle cx=%2222%22 cy=%2222%22 r=%2222%22 fill=%22%23e8dfc8%22/><text x=%2222%22 y=%2227%22 font-family=%22sans-serif%22 font-size=%2214%22 text-anchor=%22middle%22 fill=%22%234a3f28%22>${speakerName.substring(0,2).toUpperCase()}</text></svg>';">
          </div>
          <div class="speaker-info">
            <div class="speaker-name">${speakerName}</div>
            <div class="speaker-role">${speakerRole}</div>
          </div>
          <a class="speaker-link" href="https://github.com" target="_blank" rel="noopener noreferrer">
            <i class="ti ti-external-link"></i>
          </a>
        </div>
      </div>
    `;
  }
  
  container.innerHTML = `
    <div class="details-badge-wrap">
      <span class="event-badge ${badge}">${blabel}</span>
    </div>
    <div class="details-title">${ev.title || "Untitled Event"}</div>
    <div class="details-date-line">${dateLine}</div>
    
    <div class="details-actions-row">
      <button class="add-to-calendar-btn" onclick="toggleBooking('${ev.id}', event); setTimeout(() => showEventDetails('${ev.id}'), 100);">
        <i class="ti ti-calendar-plus" style="font-size:18px"></i>
        <span>${isBooked ? "Cancel Participation" : "Participate"}</span>
      </button>
      <button class="add-to-watchlist-btn ${isWatching ? 'watched' : ''}" onclick="toggleWatchlist('${ev.id}', event); setTimeout(() => showEventDetails('${ev.id}'), 100);" aria-label="Toggle Watchlist">
        <i class="ti ${isWatching ? 'ti-bookmark-off' : 'ti-bookmark'}" style="font-size:22px"></i>
      </button>
    </div>
    
    <div class="details-section-card glass-card">
      <div class="details-section-title">ABOUT THIS SESSION</div>
      ${coverPath ? `
      <div class="details-cover-container" onclick="openCoverLightbox('${coverPath}', '${(ev.title || '').replace(/'/g, "\\'")}')">
        <img class="details-cover-img" src="${coverPath}" alt="${ev.title || 'Cover'}">
      </div>` : ''}
      <div class="details-section-text">${descText}</div>
    </div>
    
    ${speakerHTML}
  `;
  
  switchView('details');
}

// Fullscreen lightbox for cover photos
function openCoverLightbox(imgSrc, title) {
  const overlay = document.createElement('div');
  overlay.className = 'cover-lightbox';
  overlay.innerHTML = `
    <div class="cover-lightbox-inner">
      <button class="cover-lightbox-close" onclick="this.parentElement.parentElement.remove()"><i class="ti ti-x"></i></button>
      <img src="${imgSrc}" alt="${title || 'Event Cover'}">
      ${title ? `<div class="cover-lightbox-title">${title}</div>` : ''}
    </div>`;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  document.body.appendChild(overlay);
}

// Save per-event notes
function saveNote(evId, text) {
  if (text && text.trim()) {
    state.notes[evId] = text;
  } else {
    delete state.notes[evId];
  }
  saveState();
}

// Centering Map directly from card button
function focusMapFromCard(venue, e) {
  if (e) e.stopPropagation();
  const key = getVenueKey(venue);
  switchView('map');
  focusMapVenue(key);
  triggerToast(`Map focused on ${VENUES_DB[key]?.name || venue}`);
}

// UI RENDERERS
function createEventCardElement(ev, index) {
  const isBooked = state.booked.includes(ev.id);
  const isWatching = state.watching.includes(ev.id);
  const hasConflict = state.conflicts.some(c => c.events.some(e => e.id === ev.id));

  const timeText = ev.time || "Time TBA";
  const venueText = ev.venue || "Venue TBA";
  const descText = ev.desc || "No description available.";
  const trackText = (ev.track || "competition").toLowerCase();

  const cardClass = `event-card card-${trackText}${isBooked ? " booked" : isWatching ? " watching" : ""}${hasConflict && isBooked ? " conflict-marker" : ""}`;
  const vkey = getVenueKey(venueText);
  const vdot = VENUE_DOTS[vkey] || "";
  const badge = TRACK_BADGES[trackText] || "badge-competition";
  const blabel = TRACK_LABELS[trackText] || trackText;
  const isCustom = ev.id.toString().startsWith("custom-event-") || ev.id > 1000;
  const coverPath = getEventCover(ev.title);
  
  const card = document.createElement("div");
  card.className = cardClass;
  card.dataset.id = ev.id;
  card.setAttribute("onclick", `toggleCardExpand(this, '${ev.id}', event)`);
  card.setAttribute("onpointerdown", `cardPointerDown(event, this, '${ev.id}', \`${(ev.title || "Untitled").replace(/'/g, "\\'")}\`, \`${timeText}\`, \`${venueText.replace(/'/g, "\\'")}\`)`);
  
  card.style.animationDelay = `${index * 40}ms`;

  // Stamp cover URL for compact background-wash and expanded atmospheric blur
  if (coverPath) {
    card.dataset.cover = '1';
    card.style.setProperty('--card-cover-url', `url('${coverPath}')`);
  }

  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueText + ", IIT Madras, Chennai")}`;

  card.innerHTML = `
    <div class="swipe-overlay swipe-added">Participating ✓</div>

    <div class="event-card-header">
      <span class="event-time"><i class="ti ti-clock" style="font-size:10px;vertical-align:-1px;margin-right:2px"></i>${ev.day || "Day TBA"} · ${timeText}</span>
      <span class="event-badge ${badge}">${blabel}</span>
      <span class="category-dot dot-${trackText}" title="${blabel}"></span>
    </div>
    <div class="event-title">${ev.title || "Untitled Event"}</div>
    
    <div class="venue-tag" style="margin-top: 4px;" onclick="focusMapFromCard('${venueText.replace(/'/g, "\\'")}', event)">
      <span class="venue-dot ${vdot}"></span>
      <span class="venue-name-span" style="text-decoration: underline; cursor: pointer;">${venueText}</span>
    </div>
    
    <div class="event-card-details">
      <div class="event-card-details-inner">
        ${coverPath ? `
        <div class="event-cover-wrap" onclick="event.stopPropagation(); openCoverLightbox('${coverPath}', '${(ev.title || '').replace(/'/g, "\\'")}')"> 
          <img class="event-cover-img" data-src="${coverPath}" alt="${ev.title || 'Event Cover'}" loading="lazy">
          <div class="event-cover-fallback" style="background:${TRACK_GRADIENTS[trackText] || TRACK_GRADIENTS['competition']}"></div>
        </div>` : `
        <div class="event-cover-wrap event-cover-mini">
          <div class="event-cover-fallback active" style="background:${TRACK_GRADIENTS[trackText] || TRACK_GRADIENTS['competition']}">
            <i class="ti ti-calendar-event" style="font-size:28px;color:rgba(255,255,255,0.4)"></i>
          </div>
        </div>`}
        <div class="event-desc">${descText}</div>
        <div class="event-notes-section" onclick="event.stopPropagation()">
          <label class="form-label" style="margin-bottom:4px"><i class="ti ti-notebook" style="font-size:11px;margin-right:3px"></i>MY NOTES</label>
          <textarea class="event-notes-input" placeholder="Jot something down…" oninput="saveNote('${ev.id}', this.value)">${state.notes[ev.id] || ''}</textarea>
        </div>
        <div class="event-footer" onclick="event.stopPropagation()">
          <div style="display:flex; flex-direction:column; gap:4px">
            ${venueText !== "Remote" ? `<a class="maps-link" href="${mapsHref}" target="_blank" rel="noopener noreferrer"><i class="ti ti-map-pin" style="font-size:11px" aria-hidden="true"></i>Navigate ↗</a>` : ""}
          </div>
          <div class="event-actions">
            ${isCustom ? `<button class="action-pill" onclick="deleteCustomEvent('${ev.id}', event)" style="color:var(--red); border-color:var(--red); padding:6px 10px;"><i class="ti ti-trash" style="font-size:11px" aria-hidden="true"></i></button>` : ""}
            ${venueText !== "Remote" ? `<button class="action-pill" style="border-color:var(--primary); color:var(--primary);" onclick="focusMapFromCard('${venueText.replace(/'/g, "\\'")}', event)"><i class="ti ti-map-2" style="font-size:11px;margin-right:2px" aria-hidden="true"></i>Map</button>` : ""}
            <button class="action-pill ${isWatching ? "watched" : "watch"}" onclick="toggleWatchlist('${ev.id}', event)">${isWatching ? "Watchlist" : "Interested"}</button>
            <button class="action-pill ${isBooked ? "booked" : "book"}" onclick="toggleBooking('${ev.id}', event)">${isBooked ? "Participating" : "Participate"}</button>
          </div>
        </div>
      </div>
    </div>`;
  return card;
}

function renderUI() {
  const allEvents = getEventsRegistry();
  const days = window.DAYS_NAMES || ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const day = days[state.activeDay];
  
  // 1. Calculate alerts and counters (always needed for dashboard/navigation badges)
  let outstanding = 0;
  if (!state.simulators.quizCompleted) outstanding++;
  if (!state.simulators.paperSubmitted) outstanding++;
  
  const urgentBanner = document.getElementById("urgent-banner");
  const notifDot = document.getElementById("notif-dot");
  const alertBadgeCount = document.getElementById("urgent-count-text");

  const transitWarningEl = document.getElementById("transit-warning");
  const hasTransitWarning = transitWarningEl && transitWarningEl.style.display === "flex";
  const activeNotices = typeof getNotificationsList === "function" ? getNotificationsList() : [];
  const hasUndismissedNotices = activeNotices.length > 0;

  const alertsSignature = `${outstanding}-${hasTransitWarning ? 'Y' : 'N'}-${state.conflicts.length}-${activeNotices.map(n => n.id).join(",")}`;
  if (state.lastAlertsSignature !== alertsSignature) {
    state.notifBadgeCleared = false;
    state.lastAlertsSignature = alertsSignature;
  }

  if (hasUndismissedNotices && !state.notifBadgeCleared) {
    if (notifDot) notifDot.style.display = "block";
  } else {
    if (notifDot) notifDot.style.display = "none";
  }

  if (outstanding > 0) {
    if (urgentBanner) urgentBanner.style.display = "flex";
    if (alertBadgeCount) alertBadgeCount.textContent = outstanding;
  } else {
    if (urgentBanner) urgentBanner.style.display = "none";
  }

  // Update counters in Dashboard
  const statBookedEl = document.getElementById("stat-booked");
  const statWatchingEl = document.getElementById("stat-watching");
  const statConflictsEl = document.getElementById("stat-conflicts");
  
  if (statBookedEl) statBookedEl.textContent = state.booked.length;
  if (statWatchingEl) statWatchingEl.textContent = state.watching.length;
  if (statConflictsEl) statConflictsEl.textContent = state.conflicts.length;
  
  // Update saved events & total hours dashboard metrics directly if no animation ticker is active
  if (typeof updateProfileMetricsDirectly === "function") {
    updateProfileMetricsDirectly();
  }
  
  // Update nav conflicts dot
  const navConflictDot = document.getElementById("nav-conflict-dot");
  if (navConflictDot) {
    navConflictDot.style.display = state.conflicts.length > 0 ? "block" : "none";
  }
  
  const navConflict = document.getElementById("nav-conflicts");
  if (navConflict) {
    if (state.conflicts.length > 0) {
      navConflict.style.color = "var(--red)";
    } else {
      navConflict.style.color = state.activeView === "conflicts" ? "var(--primary)" : "var(--muted)";
    }
  }

  // Now/Next Refresh
  renderNowNextPanel();

  // 2. View-Targeted Rendering: only touch DOM elements for the active tab view
  if (state.activeView === "schedule") {
    renderScheduleView(allEvents, days, day);
  } else if (state.activeView === "profile") {
    renderProfileView(allEvents);
  } else if (state.activeView === "discover") {
    renderDiscoverView(allEvents);
  } else if (state.activeView === "conflicts") {
    renderConflictsView();
  }
  
  // Update SVG Map Pins State
  updateSVGMapPinsState();
}

function renderScheduleView(allEvents, days, day) {
  const listContainer = document.getElementById("events-list");
  if (!listContainer) return;
  listContainer.innerHTML = "";

  // 1. Filtering by Day, Track, Search Query, and Hidden (Swipe Left)
  let filtered = allEvents;
  if (state.activeDay !== 0) {
    filtered = filtered.filter(e => e.day === day);
  }
  if (state.activeTrack !== "all") {
    filtered = filtered.filter(e => e.track === state.activeTrack);
  }
  if (state.hiddenEvents && state.hiddenEvents.length > 0) {
    filtered = filtered.filter(e => !state.hiddenEvents.includes(e.id));
  }
  
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(e => {
      const titleMatches = (e.title || "").toLowerCase().includes(q);
      const rawVenueMatches = (e.venue || "").toLowerCase().includes(q);
      const trackMatches = (e.track || "").toLowerCase().includes(q);
      const descMatches = (e.desc || "").toLowerCase().includes(q);
      
      // Resolve venue details for matching abbreviations
      const vKey = getVenueKey(e.venue);
      const resolvedVenue = VENUES_DB[vKey];
      const resolvedVenueName = resolvedVenue ? (resolvedVenue.name || "").toLowerCase() : "";
      const resolvedVenueQ = resolvedVenue ? (resolvedVenue.q || "").toLowerCase() : "";
      
      const venueResolvedMatches = resolvedVenueName.includes(q) || resolvedVenueQ.includes(q);
      
      return titleMatches || rawVenueMatches || venueResolvedMatches || trackMatches || descMatches;
    });
  }
  
  // 2. Sorting Chronologically
  filtered.sort((a, b) => {
    const timeA = getEventTimeRange(a).start;
    const timeB = getEventTimeRange(b).start;
    return timeA - timeB;
  });

  const listLabel = document.getElementById("list-label");
  if (listLabel) {
    let activeTrackLabel = state.activeTrack === "all" ? "All Tracks" : state.activeTrack.toUpperCase();
    listLabel.textContent = state.activeDay === 0 
      ? `Filtered: ${filtered.length} Events (${activeTrackLabel})` 
      : `${day} · ${filtered.length} Events (${activeTrackLabel})`;
  }
  
  // 3. Render Timeline Jump Bar pills
  renderTimelineJumpBar(filtered, day);

  if (filtered.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-state">
        <i class="ti ti-calendar-off" aria-hidden="true"></i>
        <p>No events match — try clearing a filter</p>
      </div>`;
    return;
  }

  // Grouping events by starting time blocks for visual slot headers
  let lastTimeBlock = "";
  let currentGroupEl = null;
  let currentGroupContentEl = null;
  
  // Find default active slot to expand (closest to simulated/current minutes)
  const now = getNow();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const currentDayName = days[now.getMonth() === 5 && now.getDate() >= 9 && now.getDate() <= 14 ? now.getDate() - 8 : 2]; // default Jun 10

  let closestSlotId = "";
  if (day === currentDayName && filtered.length > 0) {
    let minDiff = Infinity;
    const uniqueTimes = [...new Set(filtered.map(ev => {
      const t = ev.time || "";
      return t.split(/[–-]/)[0].trim();
    }))];
    uniqueTimes.forEach(tStr => {
      const slotMins = timeStringToMinutes(tStr);
      const diff = Math.abs(slotMins - currentMinutes);
      if (diff < minDiff) {
        minDiff = diff;
        closestSlotId = `${day.replace(' ', '')}-${tStr.replace(':', '').replace(' ', '')}`;
      }
    });
  }
  if (!closestSlotId && filtered.length > 0) {
    const t = filtered[0].time || "";
    const firstTStr = t.split(/[–-]/)[0].trim();
    closestSlotId = `${day.replace(' ', '')}-${firstTStr.replace(':', '').replace(' ', '')}`;
  }

  const fragment = document.createDocumentFragment();

  filtered.forEach((ev, idx) => {
    const t = ev.time || "";
    const startStr = t.split(/[–-]/)[0].trim();
    const slotId = `${ev.day.replace(' ', '')}-${startStr.replace(':', '').replace(' ', '')}`;
    
    if (startStr !== lastTimeBlock) {
      lastTimeBlock = startStr;
      
      // Count cards in this slot
      const slotCount = filtered.filter(e => e.day === ev.day && (e.time || "").split(/[–-]/)[0].trim() === startStr).length;
      
      // Create time slot group wrapper
      currentGroupEl = document.createElement("div");
      currentGroupEl.className = "time-slot-group";
      currentGroupEl.id = `group-${slotId}`;
      currentGroupEl.dataset.slot = slotId;
      
      // Read collapse state from sessionStorage
      let isCollapsed = false;
      try {
        const storedVal = sessionStorage.getItem(`paradox_collapsed_${slotId}`);
        if (storedVal !== null) {
          isCollapsed = (storedVal === "true");
        } else {
          isCollapsed = (slotId !== closestSlotId);
        }
      } catch (err) {
        isCollapsed = (slotId !== closestSlotId);
      }
      
      if (isCollapsed) {
        currentGroupEl.classList.add("collapsed");
      }
      
      // Create Header
      const header = document.createElement("div");
      header.className = "time-slot-header";
      header.id = `header-${slotId}`;
      header.setAttribute("onclick", `toggleTimeSlot('${slotId}', event)`);
      header.innerHTML = `
        <div class="time-slot-header-left">
          <i class="ti ti-clock-play" aria-hidden="true"></i>
          <span class="time-slot-time">${startStr}</span>
          <span class="time-slot-label-slots"> Slots</span>
          <span class="time-slot-badge-count"> · ${slotCount} events</span>
        </div>
        <i class="time-slot-chevron ti ti-chevron-down" aria-hidden="true"></i>
      `;
      
      // Create Content Area
      currentGroupContentEl = document.createElement("div");
      currentGroupContentEl.className = "time-slot-content";
      
      currentGroupEl.appendChild(header);
      currentGroupEl.appendChild(currentGroupContentEl);
      fragment.appendChild(currentGroupEl);
    }
    
    const card = createEventCardElement(ev, idx);
    if (currentGroupContentEl) {
      currentGroupContentEl.appendChild(card);
    }
  });
  
  listContainer.appendChild(fragment);
  
  // Initialize IntersectionObserver for scroll pills
  setTimeout(initSlotObserver, 150);
}

function renderProfileView(allEvents) {
  const displayName = document.getElementById("profile-display-name");
  const displayRole = document.getElementById("profile-display-role");
  const displayBadgePro = document.getElementById("profile-display-badge-pro");
  const displayBadgeSpeaker = document.getElementById("profile-display-badge-speaker");

  if (displayName) displayName.textContent = state.profile.name;
  if (displayRole) displayRole.textContent = state.profile.role;
  if (displayBadgePro) displayBadgePro.style.display = state.profile.isPro ? "inline-block" : "none";
  if (displayBadgeSpeaker) displayBadgeSpeaker.style.display = state.profile.isSpeaker ? "inline-block" : "none";

  // Clash warnings render
  const clashWarnings = document.getElementById("profile-clash-warnings");
  if (clashWarnings) {
    if (state.conflicts && state.conflicts.length > 0) {
      clashWarnings.style.display = "block";
      clashWarnings.innerHTML = `
        <div class="urgent-banner critical" style="background: #fcebeb; border: 1.5px solid #f09595; color: #791f1f; margin-bottom: 12px; padding: 12px; border-radius: 12px; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-weight: 800; display: flex; align-items: center; gap: 6px; font-size: 14px;">
            <i class="ti ti-alert-triangle" style="font-size: 18px; color: #c0392b;"></i>
            <span>Schedule Clash Detected!</span>
          </div>
          <div style="font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
            ${state.conflicts.map(c => `
              <div style="border-left: 2px solid #c0392b; padding-left: 8px; margin-left: 4px;">
                ${c.msg}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else {
      clashWarnings.style.display = "none";
      clashWarnings.innerHTML = "";
    }
  }

  const bookedList = document.getElementById("profile-booked-list");
  if (bookedList) {
    bookedList.innerHTML = "";
    const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
    if (bookedEvents.length === 0) {
      bookedList.innerHTML = `
        <div class="empty-state" style="padding: 20px 10px;">
          <i class="ti ti-bookmark" aria-hidden="true"></i>
          <p>Your participating schedule is empty. Tap "Participate" or swipe right on any event.</p>
        </div>`;
    } else {
      const bookedFragment = document.createDocumentFragment();
      bookedEvents.forEach((ev, idx) => {
        const card = createEventCardElement(ev, idx);
        bookedFragment.appendChild(card);
      });
      bookedList.appendChild(bookedFragment);
    }
  }
  
  const watchList = document.getElementById("profile-watch-list");
  if (watchList) {
    watchList.innerHTML = "";
    const watchEvents = allEvents.filter(e => state.watching.includes(e.id) && !state.hiddenEvents?.includes(e.id));
    if (watchEvents.length === 0) {
      watchList.innerHTML = `
        <div class="empty-state" style="padding: 20px 10px;">
          <i class="ti ti-eye" aria-hidden="true"></i>
          <p>Your watchlist (interested events) is empty.</p>
        </div>`;
    } else {
      const watchFragment = document.createDocumentFragment();
      watchEvents.forEach((ev, idx) => {
        const card = createEventCardElement(ev, idx);
        watchFragment.appendChild(card);
      });
      watchList.appendChild(watchFragment);
    }
  }
}

function renderDiscoverView(allEvents) {
  const tickerContainer = document.getElementById("ticker-content-list");
  const nowTitle = document.getElementById("now-playing-title");
  const nowTime = document.getElementById("now-playing-time");
  const upNextContainer = document.getElementById("up-next-list");
  
  const now = getNow();
  const daysMap = ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const currentDayName = daysMap[now.getDate() - 8] || "Jun 10"; // Default to Jun 10
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const dayEvents = allEvents.filter(e => e.day === currentDayName && !state.hiddenEvents?.includes(e.id));
  
  let nowEvents = [];
  let nextEvents = [];
  
  dayEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    if (currentMinutes >= range.start && currentMinutes < range.end) {
      nowEvents.push(ev);
    } else if (range.start >= currentMinutes) {
      nextEvents.push(ev);
    }
  });
  
  nextEvents.sort((a, b) => getEventTimeRange(a).start - getEventTimeRange(b).start);
  
  // Toggle Visibility of Ticker Strip and Now Playing Card
  const tickerStrip = document.getElementById("ticker-strip");
  const nowPlayingCard = document.getElementById("now-playing-card");
  
  if (nowEvents.length > 0) {
    if (tickerStrip) tickerStrip.style.display = "flex";
    if (nowPlayingCard) nowPlayingCard.style.display = "block";
    if (nowTitle) nowTitle.textContent = nowEvents[0].title;
    if (nowTime) nowTime.textContent = `${nowEvents[0].time} @ ${nowEvents[0].venue}`;
  } else {
    if (tickerStrip) tickerStrip.style.display = "none";
    if (nowPlayingCard) nowPlayingCard.style.display = "none";
    if (nowTitle) nowTitle.textContent = "No events live right now";
    if (nowTime) nowTime.textContent = "-- : --";
  }
  
  if (tickerContainer && nowEvents.length > 0) {
    tickerContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const item = document.createElement("div");
    item.className = "now-next-item";
    item.innerHTML = `
      <span class="now-next-label now">NOW</span>
      <span class="now-next-title" onclick="showEventDetails('${nowEvents[0].id}')">${nowEvents[0].title}</span>
    `;
    fragment.appendChild(item);
    
    nextEvents.slice(0, 3).forEach(ev => {
      const item = document.createElement("div");
      item.className = "now-next-item";
      item.innerHTML = `
        <span class="now-next-label next">NEXT</span>
        <span class="now-next-title" onclick="showEventDetails('${ev.id}')">${ev.title}</span>
      `;
      fragment.appendChild(item);
    });
    tickerContainer.appendChild(fragment);
  }
  
  if (upNextContainer) {
    upNextContainer.innerHTML = "";
    const upcoming = nextEvents.slice(0, 2);
    if (upcoming.length === 0) {
      upNextContainer.innerHTML = `<div style="font-size:13px; color:var(--muted); padding: 4px 0;">No upcoming sessions today</div>`;
    } else {
      upcoming.forEach(ev => {
        const startStr = (ev.time || "").split(/[–-]/)[0].trim();
        const row = document.createElement("div");
        row.className = "up-next-item";
        row.style.cursor = "pointer";
        row.onclick = () => showEventDetails(ev.id);
        row.innerHTML = `
          <span class="next-time">${startStr}</span>
          <span style="width:1px;height:12px;background:#ddd5c0;margin:0 8px;flex-shrink:0"></span>
          <span class="next-event">${ev.title}</span>
        `;
        upNextContainer.appendChild(row);
      });
    }
  }
  
  // Discover Bento Grid horizontal sliding items
  const discoverList = document.getElementById("discover-events-list");
  if (discoverList) {
    discoverList.innerHTML = "";
    
    // Filter top 4-5 upcoming events overall
    let bentoEvents = [...nextEvents];
    if (bentoEvents.length < 5) {
      const daysOrder = ["Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
      const currentDayIdx = daysOrder.indexOf(currentDayName);
      
      let futureEvents = allEvents.filter(e => {
        const dayIdx = daysOrder.indexOf(e.day);
        return dayIdx > currentDayIdx && !state.hiddenEvents?.includes(e.id);
      });
      
      futureEvents.sort((a, b) => {
        const aDayIdx = daysOrder.indexOf(a.day);
        const bDayIdx = daysOrder.indexOf(b.day);
        if (aDayIdx !== bDayIdx) return aDayIdx - bDayIdx;
        return getEventTimeRange(a).start - getEventTimeRange(b).start;
      });
      
      bentoEvents = bentoEvents.concat(futureEvents);
    }
    
    bentoEvents = bentoEvents.slice(0, 5);
    if (bentoEvents.length === 0) {
      bentoEvents = allEvents.filter(e => !state.hiddenEvents?.includes(e.id)).slice(0, 5);
    }
    
    const fragment = document.createDocumentFragment();
    const sizes = ["wide", "tall", "regular", "wide", "tall"];
    bentoEvents.forEach((ev, idx) => {
      const bentoCard = createBentoCardElement(ev, sizes[idx % sizes.length], idx);
      fragment.appendChild(bentoCard);
    });
    
    // Append "View All" redirection card
    const viewAllCard = document.createElement("div");
    viewAllCard.className = "bento-card view-all-card";
    viewAllCard.style.animationDelay = `${bentoEvents.length * 60}ms`;
    viewAllCard.onclick = () => switchView('schedule');
    viewAllCard.innerHTML = `
      <div class="view-all-content">
        <div class="view-all-icon"><i class="ti ti-arrow-right"></i></div>
        <div class="view-all-text">View All Schedule</div>
      </div>
    `;
    fragment.appendChild(viewAllCard);
    
    discoverList.appendChild(fragment);
  }
  
  let selectedDayIndex = state.activeDay;
  if (selectedDayIndex === 0) {
    selectedDayIndex = daysMap.indexOf(currentDayName);
    if (selectedDayIndex === -1) selectedDayIndex = 2; // Default to Jun 10
  }
  
  const browseTabs = document.getElementById("discover-day-tabs");
  if (browseTabs) {
    browseTabs.innerHTML = "";
    const daysLabels = ["Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
    daysLabels.forEach((d, idx) => {
      const btn = document.createElement("button");
      btn.className = `day-tab${(selectedDayIndex === idx + 1) ? " active" : ""}`;
      btn.dataset.day = idx + 1;
      btn.textContent = d;
      btn.onclick = () => {
        state.activeDay = idx + 1;
        renderUI();
      };
      browseTabs.appendChild(btn);
    });
  }

  // Populate events for selected day on discover view
  const discoverDayEvents = document.getElementById("discover-day-events");
  if (discoverDayEvents) {
    discoverDayEvents.innerHTML = "";
    const targetDayName = daysMap[selectedDayIndex];
    const filteredEvents = allEvents.filter(e => e.day === targetDayName && !state.hiddenEvents?.includes(e.id));
    if (filteredEvents.length === 0) {
      discoverDayEvents.innerHTML = `
        <div class="empty-state" style="padding: 20px 10px;">
          <i class="ti ti-calendar-x"></i>
          <p>No events scheduled for ${targetDayName}</p>
        </div>`;
    } else {
      const fragment = document.createDocumentFragment();
      filteredEvents.forEach((ev, idx) => {
        const card = createEventCardElement(ev, idx);
        fragment.appendChild(card);
      });
      discoverDayEvents.appendChild(fragment);
    }
  }
}

function createBentoCardElement(ev, sizeClass, index) {
  const trackText = (ev.track || "competition").toLowerCase();
  const badge = TRACK_BADGES[trackText] || "badge-competition";
  const blabel = TRACK_LABELS[trackText] || trackText;
  const coverPath = getEventCover(ev.title);
  const timeText = ev.time || "Time TBA";
  const venueText = ev.venue || "Venue TBA";
  
  const card = document.createElement("div");
  card.className = `bento-card ${sizeClass}`;
  card.style.animationDelay = `${index * 60}ms`;
  card.onclick = () => showEventDetails(ev.id);
  
  if (coverPath) {
    card.style.backgroundImage = `url('${coverPath}')`;
    card.style.backgroundSize = 'cover';
    card.style.backgroundPosition = 'center';
  } else {
    card.style.background = TRACK_GRADIENTS[trackText] || TRACK_GRADIENTS['competition'];
  }
  
  card.innerHTML = `
    <div class="bento-card-overlay"></div>
    <div class="bento-card-header">
      <span class="discover-badge ${badge}">${blabel}</span>
    </div>
    <div class="bento-card-footer">
      <div class="bento-card-title">${ev.title || "Untitled Event"}</div>
      <div class="bento-card-meta">
        <span><i class="ti ti-clock"></i> ${ev.day || "Day"} · ${timeText.split(/[–-]/)[0]}</span>
        <span><i class="ti ti-map-pin"></i> ${venueText}</span>
      </div>
    </div>
  `;
  return card;
}

function onDiscoverSearchInput(val) {
  switchView('schedule');
  const schedSearch = document.getElementById("schedule-search");
  if (schedSearch) {
    schedSearch.value = val;
    schedSearch.focus();
    onSearchInput(val);
  }
  // Clear discover input so it's clean for the next return
  const discSearch = document.getElementById("discover-search");
  if (discSearch) discSearch.value = "";
}

function renderConflictsView() {
  const conflictsContainer = document.getElementById("conflicts-list");
  if (conflictsContainer) {
    conflictsContainer.innerHTML = "";
    if (state.conflicts.length === 0) {
      conflictsContainer.innerHTML = `
        <div class="empty-state">
          <i class="ti ti-circle-check" aria-hidden="true" style="color:var(--teal)"></i>
          <p>All clear! No schedule conflicts detected.</p>
        </div>`;
    } else {
      const conflictsFragment = document.createDocumentFragment();
      state.conflicts.forEach(c => {
        const card = document.createElement("div");
        card.className = "conflict-card";
        card.innerHTML = `
          <div class="conflict-title">
            <i class="ti ti-alert-triangle" aria-hidden="true" style="font-size:15px; color:var(--red)"></i>Schedule Clash Detected
          </div>
          <div class="conflict-meta">${c.msg}</div>
        `;
        conflictsFragment.appendChild(card);
      });
      conflictsContainer.appendChild(conflictsFragment);
    }
  }
}

function toggleBooking(id, e) {
  if (e) e.stopPropagation();
  const castId = isNaN(id) ? id : parseInt(id);

  // Remove from watchlist if booking
  state.watching = state.watching.filter(x => x !== castId);
  
  const allEvents = getEventsRegistry();
  const ev = allEvents.find(x => x.id === castId);
  const titleText = ev ? ev.title : "Event";
  
  if (state.booked.includes(castId)) {
    state.booked = state.booked.filter(x => x !== castId);
    triggerToast("Cancelled participation.");
    sendBrowserNotification("Participation Cancelled", `Cancelled participation for: ${titleText}`);
  } else {
    state.booked.push(castId);
    triggerToast("Participating in event!");
    sendBrowserNotification("Participating", `Successfully participating in: ${titleText}`);
  }
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
}

function toggleWatchlist(id, e) {
  if (e) e.stopPropagation();
  const castId = isNaN(id) ? id : parseInt(id);

  // Remove from bookings if adding to watchlist
  state.booked = state.booked.filter(x => x !== castId);
  
  const allEvents = getEventsRegistry();
  const ev = allEvents.find(x => x.id === castId);
  const titleText = ev ? ev.title : "Event";
  
  if (state.watching.includes(castId)) {
    state.watching = state.watching.filter(x => x !== castId);
    triggerToast("Removed from interested watchlist.");
    sendBrowserNotification("Watchlist Removed", `Removed from interested watchlist: ${titleText}`);
  } else {
    state.watching.push(castId);
    triggerToast("Added to interested watchlist.");
    sendBrowserNotification("Watchlist Added", `Added to interested watchlist: ${titleText}`);
  }
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
}

function deleteCustomEvent(id, e) {
  if (e) e.stopPropagation();
  if (confirm("Are you sure you want to delete this custom event?")) {
    state.customEvents = state.customEvents.filter(x => x.id.toString() !== id.toString());
    state.booked = state.booked.filter(x => x.toString() !== id.toString());
    state.watching = state.watching.filter(x => x.toString() !== id.toString());
    
    triggerToast("Custom event deleted.");
    evaluateConflicts();
    evaluateTransitWarnings();
    saveState();
    renderUI();
  }
}

// Ticker Animation and Profile Metrics Controllers
const activeTickers = new Map();

function animateSaaSTicker(elementId, targetValue, duration = 800, isFloat = false) {
  const el = document.getElementById(elementId);
  if (!el) return;

  // Cancel any ongoing ticker animation for this element to prevent overlap
  if (activeTickers.has(elementId)) {
    cancelAnimationFrame(activeTickers.get(elementId));
  }

  const startValue = 0;
  const startTime = performance.now();

  function updateTicker(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out quad function for smooth deceleration
    const easeProgress = progress * (2 - progress);
    const currentValue = startValue + (targetValue - startValue) * easeProgress;
    
    if (isFloat) {
      el.textContent = currentValue.toFixed(1);
    } else {
      el.textContent = Math.floor(currentValue);
    }

    if (progress < 1) {
      const handle = requestAnimationFrame(updateTicker);
      activeTickers.set(elementId, handle);
    } else {
      if (isFloat) {
        el.textContent = targetValue.toFixed(1);
      } else {
        el.textContent = Math.floor(targetValue);
      }
      activeTickers.delete(elementId);
    }
  }

  const handle = requestAnimationFrame(updateTicker);
  activeTickers.set(elementId, handle);
}

function triggerProfileTickers() {
  const allEvents = getEventsRegistry();
  const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
  const savedCount = bookedEvents.length;

  let totalHours = 0;
  bookedEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    let durationMinutes = range.end - range.start;
    if (durationMinutes < 0) durationMinutes += 1440;
    totalHours += durationMinutes / 60;
  });

  animateSaaSTicker("profile-events-count", savedCount, 800, false);
  animateSaaSTicker("profile-hours-count", totalHours, 800, true);
}

function updateProfileMetricsDirectly() {
  if (activeTickers.has("profile-events-count") || activeTickers.has("profile-hours-count")) {
    return;
  }
  const allEvents = getEventsRegistry();
  const bookedEvents = allEvents.filter(e => state.booked.includes(e.id) && !state.hiddenEvents?.includes(e.id));
  const savedCount = bookedEvents.length;

  let totalHours = 0;
  bookedEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    let durationMinutes = range.end - range.start;
    if (durationMinutes < 0) durationMinutes += 1440;
    totalHours += durationMinutes / 60;
  });

  const savedCountEl = document.getElementById("profile-events-count");
  const totalHoursEl = document.getElementById("profile-hours-count");
  if (savedCountEl) savedCountEl.textContent = savedCount;
  if (totalHoursEl) totalHoursEl.textContent = totalHours.toFixed(1);
}

let viewHistory = [];

function switchView(v, keepHistory = true) {
  const prevView = state.activeView;
  if (keepHistory && prevView !== v) {
    viewHistory.push(prevView);
  }
  state.activeView = v;

  const views = {
    discover: document.getElementById('view-discover'),
    schedule: document.getElementById('view-schedule'),
    map: document.getElementById('view-map'),
    profile: document.getElementById('view-profile'),
    details: document.getElementById('view-details'),
    conflicts: document.getElementById('view-conflicts')
  };

  // Toggle visible class on sections
  for (const [key, el] of Object.entries(views)) {
    if (el) {
      el.classList.toggle("visible", key === v);
    }
  }

  // Update active state on bottom nav items
  const navItems = {
    discover: document.getElementById('nav-discover'),
    schedule: document.getElementById('nav-schedule'),
    map: document.getElementById('nav-map'),
    profile: document.getElementById('nav-profile')
  };

  for (const [key, el] of Object.entries(navItems)) {
    if (el) {
      el.classList.toggle("active", key === v);
    }
  }

  if (v === 'map') {
    updateMapModeUI();
    setTimeout(() => {
      const select = document.getElementById("map-focus-select");
      if (select) {
        const selectVal = select.value;
        focusMapVenue(selectVal);
      }
      updateMapRoute();
    }, 100);
  }

  renderUI();

  if (v === 'profile' && prevView !== 'profile') {
    triggerProfileTickers();
  }
}

function goBack() {
  if (viewHistory.length > 0) {
    const prev = viewHistory.pop();
    switchView(prev, false);
  } else {
    switchView('discover', false);
  }
}

function scrollToAlerts() {
  const banner = document.getElementById("urgent-banner");
  if (banner && banner.style.display !== "none") {
    banner.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } else {
    triggerToast("No pending alerts outstanding.");
  }
}

// Modal drawer controllers
function openModal(modalId) {
  document.getElementById(modalId).classList.add("open");
  if (modalId === "event-creator-modal") {
    document.getElementById("ev-title").focus();
  }
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("open");
}

// Close drawers on clicking backdrop
document.querySelectorAll(".modal-overlay").forEach(overlay => {
  overlay.addEventListener("click", e => {
    if (e.target === overlay) {
      overlay.classList.remove("open");
    }
  });
});

// Custom Event Creator submission
function saveCustomEvent() {
  const title = document.getElementById("ev-title").value.trim();
  if (!title) {
    document.getElementById("ev-title").focus();
    triggerToast("Please enter an event title.");
    return;
  }
  
  const day = document.getElementById("ev-day").value;
  const startTime = document.getElementById("ev-time").value;
  const duration = parseInt(document.getElementById("ev-duration").value);
  const venue = document.getElementById("ev-venue").value;
  const track = document.getElementById("ev-track").value;
  const desc = document.getElementById("ev-desc").value.trim() || "Custom scheduled event";
  
  const formatTime = (timeStr) => {
    const [h, m] = timeStr.split(":");
    const hr = parseInt(h);
    const ampm = hr >= 12 ? "PM" : "AM";
    const displayHr = hr % 12 || 12;
    return `${displayHr}:${m} ${ampm}`;
  };

  const parseTimeToHoursMinutes = (timeStr) => {
    const [h, m] = timeStr.split(":");
    return { hours: parseInt(h), minutes: parseInt(m) };
  };

  const start = parseTimeToHoursMinutes(startTime);
  const startFmt = formatTime(startTime);
  
  // Calculate end time
  let endM = start.minutes + duration;
  let endH = start.hours + Math.floor(endM / 60);
  endM = endM % 60;
  endH = endH % 24;

  const endHStr = endH.toString().padStart(2, "0");
  const endMStr = endM.toString().padStart(2, "0");
  const endFmt = formatTime(`${endHStr}:${endMStr}`);
  
  const ev = {
    id: "custom-event-" + Date.now(),
    title,
    time: `${startFmt} – ${endFmt}`,
    day,
    track,
    venue,
    desc,
    conflictGroup: "",
    urgent: false
  };
  
  state.customEvents.push(ev);
  // Auto book the newly added custom event
  state.booked.push(ev.id);
  
  triggerToast(`Added & booked "${title}"`);
  
  evaluateConflicts();
  evaluateTransitWarnings();
  saveState();
  renderUI();
  closeModal("event-creator-modal");
  
  // Clean inputs
  document.getElementById("ev-title").value = "";
  document.getElementById("ev-desc").value = "";
}

// Theme, zoom and walking speed triggers
function updateAppTheme(theme) {
  state.settings.theme = theme;
  document.body.setAttribute("data-theme", theme);
  saveState();
  triggerToast(`Theme set to ${theme === 'dark' ? 'Warmsepia Charcoal' : 'IIT Madras Cream'}`);
}

function updateMapsZoom(zoom) {
  state.settings.mapZoom = parseInt(zoom);
  const label = document.getElementById("setting-zoom-val");
  if (label) label.textContent = zoom + "x";
  saveState();
  const select = document.getElementById("map-focus-select");
  if (select) focusMapVenue(select.value);
}

// Walking speed calibration
function updateWalkSpeed(speed) {
  state.settings.walkSpeed = parseInt(speed);
  const label = document.getElementById("setting-speed-val");
  if (label) label.textContent = speed + " m/m";
  saveState();
  evaluateTransitWarnings();
  updateMapRoute();
}

function clearAllData() {
  if (confirm("Are you sure you want to reset the application? This deletes all custom events, calendar bookings, and settings.")) {
    localStorage.removeItem("paradox_mobile_settings");
    state.booked = [];
    state.watching = [];
    state.customEvents = [];
    state.simulators = { quizCompleted: false, paperSubmitted: false };
    state.settings = { theme: "light", walkSpeed: 80, mapZoom: 15, viewMode: "detail", simulateTime: false };
    state.hiddenEvents = [];
    
    syncSettingsUI();
    evaluateConflicts();
    evaluateTransitWarnings();
    saveState();
    renderUI();
    closeModal("settings-modal");
    triggerToast("App settings reset successfully.");
  }
}

function syncSettingsUI() {
  const themeSetting = document.getElementById("setting-theme");
  if (themeSetting) themeSetting.value = state.settings.theme;
  document.body.setAttribute("data-theme", state.settings.theme);
  
  const zoomSlider = document.getElementById("setting-zoom-slider");
  if (zoomSlider) zoomSlider.value = state.settings.mapZoom;
  const zoomVal = document.getElementById("setting-zoom-val");
  if (zoomVal) zoomVal.textContent = state.settings.mapZoom + "x";
  
  const speedSlider = document.getElementById("setting-speed-slider");
  if (speedSlider) speedSlider.value = state.settings.walkSpeed;
  const speedVal = document.getElementById("setting-speed-val");
  if (speedVal) speedVal.textContent = state.settings.walkSpeed + " m/m";
  
  const simulateCheck = document.getElementById("setting-simulate-time");
  if (simulateCheck) simulateCheck.checked = !!state.settings.simulateTime;

  const notifCheck = document.getElementById("setting-browser-notifications");
  if (notifCheck) notifCheck.checked = !!state.settings.notificationsEnabled;
}

// Profile details editor controllers
function openProfileEditor() {
  const nameInput = document.getElementById("profile-input-name");
  const roleInput = document.getElementById("profile-input-role");
  const proCheck = document.getElementById("profile-input-pro");
  const speakerCheck = document.getElementById("profile-input-speaker");

  if (nameInput) nameInput.value = state.profile.name || "";
  if (roleInput) roleInput.value = state.profile.role || "";
  if (proCheck) proCheck.checked = !!state.profile.isPro;
  if (speakerCheck) speakerCheck.checked = !!state.profile.isSpeaker;

  openModal("profile-setup-modal");
}

function saveProfileDetails() {
  const nameInput = document.getElementById("profile-input-name");
  const roleInput = document.getElementById("profile-input-role");
  const proCheck = document.getElementById("profile-input-pro");
  const speakerCheck = document.getElementById("profile-input-speaker");

  if (nameInput && nameInput.value.trim() === "") {
    triggerToast("Please enter a name");
    nameInput.focus();
    return;
  }

  state.profile.name = nameInput ? nameInput.value.trim() : "Alex Mercer";
  state.profile.role = roleInput ? roleInput.value.trim() : "Senior Data Architect";
  state.profile.isPro = proCheck ? proCheck.checked : false;
  state.profile.isSpeaker = speakerCheck ? speakerCheck.checked : false;

  localStorage.setItem("paradox_profile_initialized", "true");
  
  saveState();
  closeModal("profile-setup-modal");
  renderUI();
  triggerToast("Profile updated successfully!");
}

// OSINT Quiz Simulator Code
const quizQuestions = [
  {
    question: "An image fragment shows the IIT Madras main gate with a route bus in the background. What is the route number?",
    options: ["Route 5C", "Route 21G", "Route 23C", "Route 568"],
    answer: 1 // 21G
  },
  {
    question: "A Git commit hash ending in 'ef56' leaked staging credentials. What was the environment variable name?",
    options: ["STAGING_SECRET", "FLAG_OSINT_1", "JWT_STAGING_KEY", "DB_PASSWORD"],
    answer: 1 // FLAG_OSINT_1
  },
  {
    question: "Which landmark lies exactly at coordinates '12.9915° N, 80.2336° E'?",
    options: ["Open Air Theatre (OAT)", "Gajendra Circle (GC)", "Wadhwani School of AI", "Student Activity Center (SAC)"],
    answer: 1 // GC
  }
];
let currentQuizIdx = 0;

function openUrgentSimulator() {
  if (!state.simulators.quizCompleted) {
    currentQuizIdx = 0;
    openModal("quiz-modal");
    renderQuizQuestion();
  } else if (!state.simulators.paperSubmitted) {
    openModal("paper-modal");
  }
}

function renderQuizQuestion() {
  const container = document.getElementById("quiz-inner-content");
  const bar = document.getElementById("quiz-progress-fill");
  
  const pct = (currentQuizIdx / quizQuestions.length) * 100;
  if (bar) bar.style.width = `${pct === 0 ? 10 : pct}%`;

  if (currentQuizIdx >= quizQuestions.length) {
    state.simulators.quizCompleted = true;
    
    // Auto book the quiz event once completed
    if (!state.booked.includes(1)) {
      state.booked.push(1);
    }

    saveState();
    evaluateConflicts();
    evaluateTransitWarnings();
    renderUI();
    
    if (container) {
      container.innerHTML = `
        <div style="text-align:center; padding:15px 0;">
          <i class="ti ti-trophy" style="font-size:42px; color:var(--primary); display:block; margin-bottom:12px; animation: fadeIn 0.4s ease"></i>
          <h4 style="font-family:var(--font-display); font-size:18px; font-weight:800; margin-bottom:6px;">OSINT QUALIFIER PASSED!</h4>
          <p style="font-size:13px; color:var(--muted); line-height:1.5;">
            Flags verified. Score: 3/3. The simulator has marked this puzzle complete on your schedule list.
          </p>
          <button class="btn-primary" style="margin-top:18px;" onclick="onQuizSuccessDone()">Done</button>
        </div>
      `;
    }
    return;
  }

  const q = quizQuestions[currentQuizIdx];
  if (container) {
    container.innerHTML = `
      <p style="font-size:13.5px; line-height:1.5; margin-bottom:16px; color:var(--text)">
        <strong>Question ${currentQuizIdx+1} of ${quizQuestions.length}:</strong><br/>
        ${q.question}
      </p>
      <div class="quiz-options-group">
        ${q.options.map((opt, idx) => `
          <button class="quiz-opt-btn" onclick="selectQuizOption(${idx})">${opt}</button>
        `).join('')}
      </div>
      <button class="btn-primary" id="quiz-submit-btn" disabled onclick="submitQuizAnswer()" style="opacity:0.6; cursor:not-allowed;">Submit Answer</button>
    `;
  }
}

let selectedQuizOptionIdx = null;
function selectQuizOption(idx) {
  selectedQuizOptionIdx = idx;
  document.querySelectorAll(".quiz-opt-btn").forEach((btn, bIdx) => {
    btn.classList.toggle("selected", bIdx === idx);
  });
  const submit = document.getElementById("quiz-submit-btn");
  if (submit) {
    submit.disabled = false;
    submit.style.opacity = "1";
    submit.style.cursor = "pointer";
  }
}

function submitQuizAnswer() {
  const q = quizQuestions[currentQuizIdx];
  if (selectedQuizOptionIdx === q.answer) {
    triggerToast("✅ Flag verified successfully!");
    currentQuizIdx++;
    selectedQuizOptionIdx = null;
    renderQuizQuestion();
  } else {
    triggerToast("❌ Incorrect flag. Check clues and try again.");
  }
}

function onQuizSuccessDone() {
  closeModal("quiz-modal");
  if (!state.simulators.paperSubmitted) {
    // Queue paper uploader automatically
    setTimeout(() => openModal("paper-modal"), 350);
  }
}

// PDF manuscript uploader simulator
function triggerSimulatedUpload() {
  const zone = document.getElementById("upload-initial-view");
  if (zone) zone.style.display = "none";
  const progressContainer = document.getElementById("upload-progress-view");
  if (progressContainer) progressContainer.style.display = "block";
  
  const fill = document.getElementById("upload-progress-fill");
  const label = document.getElementById("upload-stage-label");

  let progress = 0;
  const interval = setInterval(() => {
    progress += 4;
    if (fill) fill.style.width = progress + "%";
    
    if (label) {
      if (progress < 30) label.textContent = "Uploading PDF Manuscript (12.4 MB)...";
      else if (progress < 60) label.textContent = "Scanning syntax compliance and formatting...";
      else if (progress < 90) label.textContent = "Validating cross-ref citations and reviewer index...";
    }
    
    if (progress >= 100) {
      clearInterval(interval);
      state.simulators.paperSubmitted = true;
      
      // Auto book paper event once submitted
      if (!state.booked.includes(2)) {
        state.booked.push(2);
      }

      saveState();
      evaluateConflicts();
      evaluateTransitWarnings();
      renderUI();
      
      if (progressContainer) progressContainer.style.display = "none";
      const successView = document.getElementById("upload-success-view");
      if (successView) successView.style.display = "block";
      triggerToast("Research manuscript draft submitted.");
    }
  }, 65);
}

// Dynamic Toast notifications
function showSaaSToast(message, type = 'info') {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast-msg ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 15);
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function triggerToast(msg) {
  const lowerMsg = msg.toLowerCase();
  const isWarning = lowerMsg.includes("conflict") || 
                    lowerMsg.includes("clash") || 
                    lowerMsg.includes("alert") || 
                    lowerMsg.includes("warning") || 
                    lowerMsg.includes("failed") || 
                    lowerMsg.includes("error") || 
                    lowerMsg.includes("ineligible") || 
                    lowerMsg.includes("exceeds") || 
                    lowerMsg.includes("incorrect");
  
  showSaaSToast(msg, isWarning ? 'warning' : 'info');
}

// Custom simulated time provider
function getNow() {
  if (state.settings && state.settings.simulateTime) {
    return new Date("2026-06-10T16:30:00");
  }
  return new Date();
}

function updateSimulateTime(val) {
  if (!state.settings) state.settings = {};
  state.settings.simulateTime = val;
  saveState();
  evaluateConflicts();
  evaluateTransitWarnings();
  renderNowNextPanel();
  renderUI();
  triggerToast(`Simulated time ${val ? "Enabled (Jun 10, 4:30 PM)" : "Disabled (Real Time)"}`);
}

// View Mode compact/detail toggle (No-op after removing compact layout)
function toggleCardView() {
  state.settings.viewMode = "detail";
  saveState();
}

// Share Application handler
function shareAppLauncher() {
  if (navigator.share) {
    navigator.share({
      title: 'Paradox 2026 Mobile Navigator',
      text: 'Check out the Paradox 2026 Campus Navigator App!',
      url: window.location.href
    }).catch(console.error);
  } else {
    navigator.clipboard.writeText(window.location.href);
    triggerToast("Navigator web link copied to clipboard! 📋");
  }
}

// Interactive Map Route Calculator & Bezier Path drawer
function updateMapRoute() {
  const originSelect = document.getElementById("route-origin");
  const destSelect = document.getElementById("route-destination");
  if (!originSelect || !destSelect) return;
  
  const originVal = originSelect.value;
  const destVal = destSelect.value;
  
  const posA = VENUES_DB[originVal];
  const posB = VENUES_DB[destVal];
  
  if (!posA || !posB) return;
  
  const dx = posB.x - posA.x;
  const dy = posB.y - posA.y;
  const distPixel = Math.sqrt(dx*dx + dy*dy);
  const distMeters = Math.round(distPixel * 2); // 1px = ~2 meters
  
  const walkSpeed = state.settings.walkSpeed || 80; // meters per minute
  const walkTimeMinsTotal = distMeters / walkSpeed;
  const minutes = Math.floor(walkTimeMinsTotal);
  const seconds = Math.round((walkTimeMinsTotal - minutes) * 60);
  
  const logStr = `${distMeters}m / ${minutes}m ${seconds}s`;
  TRANSIT_LOG.push(logStr);
  if (TRANSIT_LOG.length > 10) {
    TRANSIT_LOG.shift();
  }

  const logText = document.getElementById("transit-log-text");
  if (logText) {
    logText.textContent = `TRANSIT_LOG: ${logStr}`;
  }
  
  const tightPill = document.getElementById("tight-connection-pill");
  if (tightPill) {
    // Show tight connection warning if walk time is 5 minutes or more
    const timelineThreshold = 5;
    tightPill.style.display = (walkTimeMinsTotal >= timelineThreshold) ? "inline-flex" : "none";
  }
  
  const svgTransitLine = document.getElementById("svg-transit-line");
  if (svgTransitLine) {
    if (originVal === destVal || originVal === "Remote" || destVal === "Remote") {
      svgTransitLine.style.display = "none";
    } else {
      const midX = (posA.x + posB.x) / 2;
      const midY = (posA.y + posB.y) / 2 - 35; // arc curve control offset
      svgTransitLine.setAttribute("d", `M ${posA.x} ${posA.y} Q ${midX} ${midY} ${posB.x} ${posB.y}`);
      svgTransitLine.style.display = "block";
    }
  }
  
  // Center and scale SVG map viewport to fit both selected points
  if (originVal !== destVal && originVal !== "Remote" && destVal !== "Remote" && state.settings.mapMode !== "live") {
    const mapWrapper = document.getElementById("svg-map-wrapper");
    if (mapWrapper) {
      const rect = mapWrapper.getBoundingClientRect();
      const W = rect.width || 388;
      const H = rect.height || 380;
      const ratio = W / 1000;
      
      const centerX = (posA.x + posB.x) / 2;
      const centerY = (posA.y + posB.y) / 2;
      
      let scale = 1.6;
      if (distPixel > 10) {
        scale = Math.min(2.5, Math.max(1.1, (W / (distPixel * 1.5))));
      }
      mapScale = scale;
      mapPanX = (W / 2) - (centerX * ratio * mapScale);
      mapPanY = (H / 2) - (centerY * ratio * mapScale);
      updateSVGTransform();
    }
  }
}

// Toggle Time Slot collapsing
function toggleTimeSlot(slotId, e) {
  if (e) e.stopPropagation();
  const group = document.getElementById(`group-${slotId}`);
  if (!group) return;
  
  const isCollapsed = group.classList.contains("collapsed");
  if (isCollapsed) {
    group.classList.remove("collapsed");
  } else {
    group.classList.add("collapsed");
  }
  
  if (navigator.vibrate) {
    navigator.vibrate(8);
  }
  
  try {
    sessionStorage.setItem(`paradox_collapsed_${slotId}`, isCollapsed ? "false" : "true");
  } catch (err) {
    console.warn("sessionStorage write failed:", err);
  }
  
  // Refresh timeline jump highlights after height transitions
  setTimeout(initSlotObserver, 250);
}

// Timeline Jump Bar render helper
function renderTimelineJumpBar(filtered, day) {
  const jumpBar = document.getElementById("jump-bar");
  if (!jumpBar) return;
  jumpBar.innerHTML = "";
  
  if (filtered.length === 0) {
    jumpBar.style.display = "none";
  } else {
    jumpBar.style.display = "flex";
    
    const uniqueSlots = [];
    filtered.forEach(ev => {
      const t = ev.time || "";
      const startStr = t.split(/[–-]/)[0].trim();
      const slotId = `${ev.day.replace(' ', '')}-${startStr.replace(':', '').replace(' ', '')}`;
      if (!uniqueSlots.some(s => s.slotId === slotId)) {
        let shortLabel = startStr.replace(/^0/, '').replace(' ', ''); // e.g. "06:00 AM" -> "6:00AM"
        uniqueSlots.push({ slotId, label: shortLabel });
      }
    });
    
    const fragment = document.createDocumentFragment();
    uniqueSlots.forEach(s => {
      const pill = document.createElement("button");
      pill.className = "jump-pill";
      pill.dataset.slot = s.slotId;
      pill.textContent = s.label;
      pill.onclick = () => scrollToTimeSlot(s.slotId);
      fragment.appendChild(pill);
    });
    jumpBar.appendChild(fragment);
  }
}

// Smooth scroll to time slot with offset
function scrollToTimeSlot(slotId) {
  const group = document.getElementById(`group-${slotId}`);
  if (!group) return;
  
  const isCollapsed = group.classList.contains("collapsed");
  if (isCollapsed) {
    group.classList.remove("collapsed");
    try {
      sessionStorage.setItem(`paradox_collapsed_${slotId}`, "false");
    } catch (err) {
      console.warn("sessionStorage write failed:", err);
    }
  }
  
  setTimeout(() => {
    const headerEl = document.getElementById(`group-${slotId}`);
    if (headerEl) {
      const topOffset = 180; // Offset height of headers + jump bar
      const offsetPosition = getAbsoluteOffsetTop(headerEl) - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      highlightJumpPill(slotId);
    }
  }, isCollapsed ? 150 : 0);
}

// IntersectionObserver scroll highlights tracker
let slotObserver;
function initSlotObserver() {
  if (slotObserver) slotObserver.disconnect();
  
  const options = {
    root: null,
    rootMargin: '-180px 0px -50% 0px', // check intersection under sticky offsets
    threshold: 0
  };
  
  slotObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const slotId = entry.target.dataset.slot;
        highlightJumpPill(slotId);
      }
    });
  }, options);
  
  document.querySelectorAll(".time-slot-group").forEach(el => {
    slotObserver.observe(el);
  });
}

function highlightJumpPill(slotId) {
  document.querySelectorAll(".jump-pill").forEach(pill => {
    const isActive = pill.dataset.slot === slotId;
    pill.classList.toggle("active", isActive);
    if (isActive) {
      // Center horizontal scroll position of active pill inside jump-bar
      pill.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  });
}

// Now/Next Panel renderer
function renderNowNextPanel() {
  const banner = document.getElementById("now-next-banner");
  const container = document.getElementById("now-next-content");
  const tickerStrip = document.getElementById("ticker-strip");
  if (!banner || !container) return;
  
  let isDismissed = false;
  try {
    isDismissed = sessionStorage.getItem("dismiss_now_next") === "true";
  } catch (err) {
    console.warn("sessionStorage read failed:", err);
  }
  if (isDismissed) {
    banner.style.display = "none";
    if (tickerStrip) tickerStrip.style.display = "none";
    return;
  }
  
  const now = getNow();
  const isEventRange = (now.getFullYear() === 2026 && now.getMonth() === 5 && now.getDate() >= 9 && now.getDate() <= 14);
  
  if (!isEventRange && !state.settings.simulateTime) {
    banner.style.display = "none";
    if (tickerStrip) tickerStrip.style.display = "none";
    return;
  }
  
  const daysMap = ["", "Jun 09", "Jun 10", "Jun 11", "Jun 12", "Jun 13", "Jun 14"];
  const currentDayName = daysMap[now.getDate() - 8] || "Jun 10"; // Default to Jun 10
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const allEvents = getEventsRegistry();
  const dayEvents = allEvents.filter(e => e.day === currentDayName && !state.hiddenEvents?.includes(e.id));
  
  let nowEvents = [];
  let nextEvents = [];
  
  dayEvents.forEach(ev => {
    const range = getEventTimeRange(ev);
    if (currentMinutes >= range.start && currentMinutes < range.end) {
      nowEvents.push(ev);
    } else if (range.start >= currentMinutes && range.start <= currentMinutes + 60) {
      nextEvents.push(ev);
    }
  });
  
  nextEvents.sort((a, b) => getEventTimeRange(a).start - getEventTimeRange(b).start);
  
  // If no live/next events, fallback to the next single upcoming event
  if (nowEvents.length === 0 && nextEvents.length === 0) {
    const upcoming = dayEvents.filter(e => getEventTimeRange(e).start > currentMinutes);
    if (upcoming.length > 0) {
      upcoming.sort((a, b) => getEventTimeRange(a).start - getEventTimeRange(b).start);
      nextEvents.push(upcoming[0]);
    }
  }
  
  if (nowEvents.length === 0 && nextEvents.length === 0) {
    banner.style.display = "none";
    return;
  }
  
  if (state.activeView === "discover") {
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
  }
  container.innerHTML = "";
  
  const createRow = (labelClass, labelText, ev) => {
    const dayIdx = daysMap.indexOf(ev.day);
    const row = document.createElement("div");
    row.className = "now-next-item";
    row.innerHTML = `
      <span class="now-next-label ${labelClass}">${labelText}</span>
      <span class="now-next-title" onclick="scrollToEvent(${dayIdx}, '${ev.id}')">${ev.title}</span>
    `;
    return row;
  };
  
  if (nowEvents.length > 0) {
    container.appendChild(createRow("now", "NOW", nowEvents[0]));
  }
  nextEvents.slice(0, 2).forEach(ev => {
    container.appendChild(createRow("next", "NEXT", ev));
  });
}

function dismissNowNext() {
  try {
    sessionStorage.setItem("dismiss_now_next", "true");
  } catch (err) {
    console.warn("sessionStorage write failed:", err);
  }
  const banner = document.getElementById("now-next-banner");
  if (banner) banner.style.display = "none";
  const tickerStrip = document.getElementById("ticker-strip");
  if (tickerStrip) tickerStrip.style.display = "none";
  triggerToast("Now & Next banner dismissed for this session.");
}

function scrollToEvent(dayIndex, eventId) {
  // 1. Switch to Schedule view
  switchView('schedule');
  
  // 2. Set day tab active
  document.querySelectorAll(".day-tab").forEach((x, idx) => {
    x.classList.toggle("active", idx === dayIndex);
    x.setAttribute("aria-selected", idx === dayIndex ? "true" : "false");
  });
  state.activeDay = dayIndex;
  
  renderUI();
  
  // 3. Scroll to element
  setTimeout(() => {
    const card = document.querySelector(`.event-card[data-id="${eventId}"]`);
    if (card) {
      const group = card.closest(".time-slot-group");
      if (group) {
        const slotId = group.dataset.slot;
        if (group.classList.contains("collapsed")) {
          group.classList.remove("collapsed");
          try {
            sessionStorage.setItem(`paradox_collapsed_${slotId}`, "false");
          } catch (err) {
            console.warn("sessionStorage write failed:", err);
          }
        }
      }
      
      setTimeout(() => {
        const topOffset = 180;
        const offsetPosition = getAbsoluteOffsetTop(card) - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        
        // Expand card
        if (!card.classList.contains("expanded")) {
          card.classList.add("expanded");
        }
      }, 100);
    }
  }, 200);
}

// --- swipe pointer gestures code ---
let swipeState = {
  pointerId: null,
  startX: 0,
  startY: 0,
  visualX: 0,
  isSwiping: false,
  isScrolling: false,
  cardEl: null,
  evId: null
};
let longPressTimeout = null;

function cardPointerDown(e, cardEl, evId, evTitle, evTime, evVenue) {
  cardSwipeDown(e, cardEl, evId);
  
  // Setup long-press share sheet trigger (500ms hold)
  clearTimeout(longPressTimeout);
  longPressTimeout = setTimeout(() => {
    if (navigator.share) {
      navigator.share({
        title: evTitle,
        text: `${evTitle} at ${evVenue} (${evTime})`,
        url: window.location.href
      }).catch(err => console.log("Share failed:", err));
    } else {
      triggerToast(`Share Event: ${evTitle} at ${evVenue}`);
    }
  }, 500);
}

function cardSwipeDown(e, cardEl, evId) {
  if (e.button !== 0 && e.pointerType === "mouse") return;
  if (e.target.closest('.event-actions') || e.target.closest('.maps-link') || e.target.closest('.action-pill') || e.target.closest('.venue-name-span')) {
    return;
  }

  swipeState.pointerId = e.pointerId;
  swipeState.startX = e.clientX;
  swipeState.startY = e.clientY;
  swipeState.isSwiping = false;
  swipeState.isScrolling = false;
  swipeState.cardEl = cardEl;
  swipeState.evId = isNaN(evId) ? evId : parseInt(evId);

  cardEl.setPointerCapture(e.pointerId);
  cardEl.style.transition = "none";
  
  cardEl.addEventListener("pointermove", cardSwipeMove);
  cardEl.addEventListener("pointerup", cardSwipeUp);
  cardEl.addEventListener("pointercancel", cardSwipeCancel);
}

function cardSwipeMove(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  const deltaX = e.clientX - swipeState.startX;
  const deltaY = e.clientY - swipeState.startY;

  if (!swipeState.isSwiping && !swipeState.isScrolling) {
    if (Math.abs(deltaY) > 8) {
      clearTimeout(longPressTimeout); // Cancel long-press on vertical scroll
      swipeState.isScrolling = true;
      detachSwipeListeners();
    } else if (Math.abs(deltaX) > 8) {
      clearTimeout(longPressTimeout); // Cancel long-press on drag start
      swipeState.isSwiping = true;
      swipeState.cardEl.dataset.swiped = "true";
    }
  }

  if (swipeState.isSwiping) {
    e.preventDefault();
    
    let visualX = 0;
    if (deltaX > 0) {
      visualX = deltaX / (1 + deltaX / 250);
    } else {
      visualX = deltaX / (1 - deltaX / 250);
    }
    swipeState.visualX = visualX;

    swipeState.cardEl.style.transform = `translateX(${visualX}px) rotate(${visualX * 0.015}deg)`;
    
    const overlay = swipeState.cardEl.querySelector('.swipe-added');
    if (overlay) {
      if (visualX > 15) {
        overlay.classList.add('active');
        overlay.style.opacity = Math.min(visualX / 60, 1.0);
      } else {
        overlay.classList.remove('active');
        overlay.style.opacity = 0;
      }
    }
    
    if (visualX < -15) {
      swipeState.cardEl.style.opacity = Math.max(1.0 + visualX / 100, 0.4);
    } else if (visualX >= 0) {
      swipeState.cardEl.style.opacity = 1.0;
    }
  }
}

function cardSwipeUp(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  clearTimeout(longPressTimeout); // Cancel long-press on release
  const card = swipeState.cardEl;
  const evId = swipeState.evId;
  const finalX = e.clientX - swipeState.startX;

  card.style.transition = "transform 0.25s cubic-bezier(0.2, 0, 0, 1.0), opacity 0.25s ease";

  if (swipeState.isSwiping) {
    if (finalX > 60) {
      card.style.transform = "translateX(100px)";
      const overlay = card.querySelector('.swipe-added');
      if (overlay) {
        overlay.classList.add('active');
        overlay.style.opacity = "1";
      }
      
      setTimeout(() => {
        card.style.transform = "translateX(0) rotate(0)";
        if (overlay) {
          overlay.classList.remove('active');
          overlay.style.opacity = "0";
        }
        toggleBooking(evId);
      }, 300);
    } else if (finalX < -60) {
      card.style.transform = "translateX(-120%)";
      card.style.opacity = "0";
      
      setTimeout(() => {
        card.style.height = "0";
        card.style.padding = "0";
        card.style.margin = "0";
        card.style.border = "none";
        
        setTimeout(() => {
          if (!state.hiddenEvents) state.hiddenEvents = [];
          state.hiddenEvents.push(evId);
          saveState();
          renderUI();
          showUndoSnackbar(evId);
        }, 200);
      }, 200);
    } else {
      card.style.transform = "translateX(0) rotate(0)";
      card.style.opacity = "1";
      const overlay = card.querySelector('.swipe-added');
      if (overlay) {
        overlay.classList.remove('active');
        overlay.style.opacity = "0";
      }
      setTimeout(() => { card.dataset.swiped = "false"; }, 10);
    }
  } else {
    card.dataset.swiped = "false";
  }

  detachSwipeListeners();
}

function cardSwipeCancel(e) {
  if (e.pointerId !== swipeState.pointerId) return;
  clearTimeout(longPressTimeout); // Cancel long-press on cancel
  const card = swipeState.cardEl;
  card.style.transition = "transform 0.25s cubic-bezier(0.2, 0, 0, 1.0), opacity 0.25s ease";
  card.style.transform = "translateX(0) rotate(0)";
  card.style.opacity = "1";
  const overlay = card.querySelector('.swipe-added');
  if (overlay) {
    overlay.classList.remove('active');
    overlay.style.opacity = "0";
  }
  setTimeout(() => { card.dataset.swiped = "false"; }, 10);
  detachSwipeListeners();
}

function detachSwipeListeners() {
  if (swipeState.cardEl) {
    swipeState.cardEl.removeEventListener("pointermove", cardSwipeMove);
    swipeState.cardEl.removeEventListener("pointerup", cardSwipeUp);
    swipeState.cardEl.removeEventListener("pointercancel", cardSwipeCancel);
  }
  swipeState.pointerId = null;
}

let undoTimeout;
let lastHiddenEvId = null;

function showUndoSnackbar(evId) {
  lastHiddenEvId = evId;
  const bar = document.getElementById("undo-snackbar");
  if (bar) bar.classList.add("show");
  
  if (undoTimeout) clearTimeout(undoTimeout);
  undoTimeout = setTimeout(() => {
    if (bar) bar.classList.remove("show");
  }, 4000);
}

function undoHideEvent() {
  if (lastHiddenEvId !== null) {
    state.hiddenEvents = state.hiddenEvents.filter(x => x !== lastHiddenEvId);
    lastHiddenEvId = null;
    saveState();
    renderUI();
    const bar = document.getElementById("undo-snackbar");
    if (bar) bar.classList.remove("show");
    triggerToast("Swipe undo: Event restored.");
  }
}

// Search handler with 150ms debounce
let searchDebounceTimeout;
function onSearchInput(val) {
  state.searchQuery = val.trim();
  const clearBtn = document.getElementById("search-clear-btn");
  if (state.searchQuery) {
    if (clearBtn) clearBtn.style.display = "block";
  } else {
    if (clearBtn) clearBtn.style.display = "none";
  }
  
  clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    renderUI();
  }, 150);
}

function clearSearch() {
  const input = document.getElementById("schedule-search");
  if (input) input.value = "";
  state.searchQuery = "";
  const clearBtn = document.getElementById("search-clear-btn");
  if (clearBtn) clearBtn.style.display = "none";
  renderUI();
}

// Track Filter selection listener
const trackTabs = document.getElementById("track-tabs");
if (trackTabs) {
  trackTabs.addEventListener("click", e => {
    const chip = e.target.closest(".track-tab");
    if (!chip) return;
    document.querySelectorAll(".track-tab").forEach(x => {
      x.classList.remove("active");
      x.setAttribute("aria-selected", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-selected", "true");
    state.activeTrack = chip.dataset.track;
    renderUI();
  });
}

// Notifications Builder
// Notifications Builder
function openNotifications() {
  renderNotifications();
  openModal("notifications-modal");
  state.notifBadgeCleared = true;
  const notifDot = document.getElementById("notif-dot");
  if (notifDot) notifDot.style.display = "none";
}

function getNotificationsList() {
  let notices = [];
  
  // 1. Simulator Warnings
  if (!state.simulators.quizCompleted) {
    notices.push({
      id: "quiz-pending",
      type: "alert",
      icon: "ti-alert-triangle",
      title: "Pre-Paradox Quiz Pending",
      body: 'Solve the Qualifier Quiz immediately to lock in your OSINT seat! <a href="#" onclick="closeModal(\'notifications-modal\'); setTimeout(openUrgentSimulator, 300); return false;">Take Quiz Now</a>'
    });
  }
  if (!state.simulators.paperSubmitted) {
    notices.push({
      id: "paper-pending",
      type: "alert",
      icon: "ti-file-upload",
      title: "Research Draft Due Soon",
      body: 'Anonymized paper draft submission closes June 1. <a href="#" onclick="closeModal(\'notifications-modal\'); setTimeout(openUrgentSimulator, 300); return false;">Upload Manuscript PDF</a>'
    });
  }
  
  // 2. Conflicts
  if (state.conflicts && state.conflicts.length > 0) {
    notices.push({
      id: "conflicts-alert",
      type: "alert",
      icon: "ti-calendar-event",
      title: `${state.conflicts.length} Overlapping Bookings`,
      body: 'Multiple events are booked at the same time. Check the <a href="#" onclick="closeModal(\'notifications-modal\'); switchView(\'conflicts\'); return false;">Conflict Log</a> to reschedule.'
    });
  }
  
  // 3. Transit Warnings
  const transitWarningEl = document.getElementById("transit-warning");
  if (transitWarningEl && transitWarningEl.style.display === "flex") {
    const isCritical = transitWarningEl.classList.contains("critical");
    const transitTextContentEl = transitWarningEl.querySelector("#transit-text-content");
    const bodyContent = transitTextContentEl ? transitTextContentEl.innerHTML : "";
    notices.push({
      id: "transit-alert",
      type: isCritical ? "alert" : "warning",
      icon: "ti-run",
      title: isCritical ? "Critical Travel Distance Warning" : "Campus Transit Notice",
      body: bodyContent
    });
  }
  
  // 4. Default Broadcast Announcements - Removed broadcast junk to keep the notification center clean
  
  // Filter out dismissed ones
  const dismissed = state.dismissedNotifications || [];
  return notices.filter(n => !dismissed.includes(n.id));
}

function renderNotifications() {
  const container = document.getElementById("notifications-inner-content");
  if (!container) return;
  container.innerHTML = "";
  
  const activeNotices = getNotificationsList();
  
  if (activeNotices.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 30px 10px; color: var(--muted);">
        <i class="ti ti-bell-off" style="font-size: 32px; display: block; margin-bottom: 8px; color: var(--dim);"></i>
        <p style="font-size: 13px;">No new notifications. You are all caught up!</p>
      </div>
    `;
    return;
  }
  
  const fragment = document.createDocumentFragment();
  activeNotices.forEach(n => {
    const item = document.createElement("div");
    item.className = `notification-item ${n.type}`;
    item.style.position = "relative";
    item.innerHTML = `
      <i class="ti ${n.icon} notification-icon" aria-hidden="true"></i>
      <div style="flex: 1; padding-right: 20px;">
        <div class="notification-title">${n.title}</div>
        <div class="notification-body">${n.body}</div>
      </div>
      <button class="dismiss-notif-btn" onclick="dismissNotification('${n.id}', event)" aria-label="Dismiss notification" style="position: absolute; top: 10px; right: 10px; background: transparent; border: none; color: var(--muted); cursor: pointer; display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; transition: color 0.2s;"><i class="ti ti-x" style="font-size: 14px;"></i></button>
    `;
    fragment.appendChild(item);
  });
  container.appendChild(fragment);
}

function dismissNotification(id, event) {
  if (event) event.stopPropagation();
  if (!state.dismissedNotifications) state.dismissedNotifications = [];
  if (!state.dismissedNotifications.includes(id)) {
    state.dismissedNotifications.push(id);
  }
  saveState();
  renderNotifications();
  updateNotifBadgeState();
}

function updateNotifBadgeState() {
  const notifDot = document.getElementById("notif-dot");
  if (!notifDot) return;
  const activeNotices = getNotificationsList();
  if (activeNotices.length > 0 && !state.notifBadgeCleared) {
    notifDot.style.display = "block";
  } else {
    notifDot.style.display = "none";
  }
}

// Browser Reminders & Notifications feature controllers
function toggleBrowserNotifications(enabled) {
  if (enabled) {
    if (!("Notification" in window)) {
      triggerToast("Browser notifications not supported on this device.");
      const cb = document.getElementById("setting-browser-notifications");
      if (cb) cb.checked = false;
      state.settings.notificationsEnabled = false;
      saveState();
      return;
    }
    
    if (Notification.permission === "granted") {
      state.settings.notificationsEnabled = true;
      saveState();
      triggerToast("Browser notifications enabled!");
      sendBrowserNotification("Paradox Navigator", "You will now receive notifications for your schedule.");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          state.settings.notificationsEnabled = true;
          saveState();
          triggerToast("Browser notifications enabled!");
          sendBrowserNotification("Paradox Navigator", "You will now receive notifications for your schedule.");
        } else {
          state.settings.notificationsEnabled = false;
          saveState();
          const cb = document.getElementById("setting-browser-notifications");
          if (cb) cb.checked = false;
          triggerToast("Notification permission denied.");
        }
      });
    } else {
      triggerToast("Notification permission blocked. Please enable it in browser settings.");
      const cb = document.getElementById("setting-browser-notifications");
      if (cb) cb.checked = false;
      state.settings.notificationsEnabled = false;
      saveState();
    }
  } else {
    state.settings.notificationsEnabled = false;
    saveState();
    triggerToast("Browser notifications disabled.");
  }
}

function sendBrowserNotification(title, body) {
  if (state.settings.notificationsEnabled && "Notification" in window && Notification.permission === "granted") {
    try {
      new Notification(title, {
        body: body,
        icon: "img/icon-192.png"
      });
    } catch (e) {
      console.warn("Failed to trigger native Notification:", e);
      if (navigator.serviceWorker && navigator.serviceWorker.ready) {
        navigator.serviceWorker.ready.then(reg => {
          reg.showNotification(title, {
            body: body,
            icon: "img/icon-192.png"
          });
        });
      }
    }
  }
}

// Scroll listener for Back to Top Button
window.addEventListener("scroll", () => {
  const btn = document.getElementById("back-to-top-btn");
  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }
});

function scrollToDayTabs() {
  const dayTabs = document.getElementById("day-tabs");
  if (dayTabs) {
    const topOffset = 180;
    const offsetPosition = getAbsoluteOffsetTop(dayTabs) - topOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Day tabs click triggers
const dayTabs = document.getElementById("day-tabs");
if (dayTabs) {
  dayTabs.addEventListener("click", e => {
    const tab = e.target.closest(".day-tab");
    if (!tab) return;
    document.querySelectorAll(".day-tab").forEach(x => {
      x.classList.remove("active");
      x.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    state.activeDay = parseInt(tab.dataset.day);
    
    // Reset scroll position on day transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderUI();
  });
}

// Initialize SVG Map Pointer and Zoom listeners
function initSVGMapInteractions() {
  const mapWrapper = document.getElementById("svg-map-wrapper");
  const svgEl = document.getElementById("svg-campus-map");
  if (!mapWrapper || !svgEl) return;

  const activePointers = {};
  let isPanning = false;
  let startX = 0;
  let startY = 0;
  let lastPinchDist = 0;

  mapWrapper.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    const ids = Object.keys(activePointers);

    if (ids.length === 1) {
      isPanning = true;
      startX = e.clientX;
      startY = e.clientY;
      mapWrapper.style.cursor = "grabbing";
      mapWrapper.setPointerCapture(e.pointerId);
    } else if (ids.length === 2) {
      isPanning = false;
      lastPinchDist = getPinchDist();
    }
  });

  mapWrapper.addEventListener("pointermove", (e) => {
    if (!activePointers[e.pointerId]) return;
    activePointers[e.pointerId] = { x: e.clientX, y: e.clientY };

    const ids = Object.keys(activePointers);

    if (ids.length === 1 && isPanning) {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      mapPanX += dx;
      mapPanY += dy;
      startX = e.clientX;
      startY = e.clientY;
      updateSVGTransform();
    } else if (ids.length === 2) {
      const dist = getPinchDist();
      if (lastPinchDist > 0) {
        const factor = dist / lastPinchDist;
        const mid = getPinchMid();
        const rect = mapWrapper.getBoundingClientRect();
        const midX = mid.x - rect.left;
        const midY = mid.y - rect.top;
        zoomToPoint(midX, midY, factor);
        lastPinchDist = dist;
      }
    }
  });

  const endPointer = (e) => {
    if (!activePointers[e.pointerId]) return;
    delete activePointers[e.pointerId];
    
    const ids = Object.keys(activePointers);
    if (ids.length < 2) {
      lastPinchDist = 0;
    }
    if (ids.length === 0) {
      isPanning = false;
      mapWrapper.style.cursor = "grab";
    }
  };

  mapWrapper.addEventListener("pointerup", endPointer);
  mapWrapper.addEventListener("pointercancel", endPointer);
  mapWrapper.addEventListener("pointerleave", endPointer);

  mapWrapper.addEventListener("wheel", (e) => {
    e.preventDefault();
    const rect = mapWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const factor = Math.exp(-e.deltaY * 0.003);
    zoomToPoint(x, y, factor);
  }, { passive: false });

  mapWrapper.addEventListener("dblclick", (e) => {
    e.preventDefault();
    const rect = mapWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    zoomToPoint(x, y, 1.5);
  });

  function getPinchDist() {
    const ids = Object.keys(activePointers);
    const p1 = activePointers[ids[0]];
    const p2 = activePointers[ids[1]];
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  function getPinchMid() {
    const ids = Object.keys(activePointers);
    const p1 = activePointers[ids[0]];
    const p2 = activePointers[ids[1]];
    return { x: (p1.x + p2.x)/2, y: (p1.y + p2.y)/2 };
  }
}

// Onboarding completion validation and state persistence
function completeOnboarding() {
  const nameInput = document.getElementById("onboard-name");
  const roleInput = document.getElementById("onboard-role");
  const proCheck = document.getElementById("onboard-input-pro");
  const speakerCheck = document.getElementById("onboard-input-speaker");

  if (!nameInput || nameInput.value.trim() === "") {
    triggerToast("Please enter your name to customize your experience!");
    if (nameInput) nameInput.focus();
    return;
  }

  // Update profile model state
  state.profile.name = nameInput.value.trim();
  state.profile.role = roleInput ? roleInput.value.trim() : "General Attendee";
  state.profile.isPro = proCheck ? proCheck.checked : false;
  state.profile.isSpeaker = speakerCheck ? speakerCheck.checked : false;

  // Set persistence flags
  localStorage.setItem("paradox_profile_initialized", "true");
  localStorage.setItem("paradox_onboarded", "true");

  saveState();

  // Animate and remove onboarding overlay PWA screen
  const onboardingEl = document.getElementById("onboarding-screen");
  if (onboardingEl) {
    onboardingEl.style.opacity = "0";
    onboardingEl.style.visibility = "hidden";
    setTimeout(() => {
      onboardingEl.remove();
    }, 450);
  }

  renderUI();
  triggerToast(`Welcome to Paradox 2026, ${state.profile.name}! 🎉`);
}

// Bootstrap app
window.addEventListener("DOMContentLoaded", async () => {
  await loadEventsData();
  syncSettingsUI();
  evaluateConflicts();
  evaluateTransitWarnings();
  
  // Set default view mode details layout
  state.settings.viewMode = "detail";
  document.body.classList.remove("compact-mode");
  
  // Initialize SVG Map Interactions & UI state
  updateMapModeUI();
  initSVGMapInteractions();
  
  renderUI();

  // First-run onboarding screen display logic
  const onboarded = localStorage.getItem("paradox_onboarded") === "true";
  const onboardingEl = document.getElementById("onboarding-screen");
  if (onboarded) {
    if (onboardingEl) onboardingEl.remove();
  } else {
    if (onboardingEl) {
      onboardingEl.style.display = "flex";
      setTimeout(() => {
        onboardingEl.style.opacity = "1";
        onboardingEl.style.visibility = "visible";
      }, 50);
    }
  }

  // Initialize map route panel calculations
  updateMapRoute();

  const originSelect = document.getElementById("route-origin");
  const destSelect = document.getElementById("route-destination");
  if (originSelect && destSelect) {
    originSelect.addEventListener("change", updateMapRoute);
    destSelect.addEventListener("change", updateMapRoute);
  }
});
