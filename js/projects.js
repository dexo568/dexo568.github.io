var projects = {
	'marriott': {
		title: 'The Art of Innovation',
		icon: 'marriottv2.png',
		facts: ['Client: Marriott', 'Countries: 3', 'Interactions: 2000+', 'Breakers Tripped: 2'],
		summary: `Marriott's experimental "Live Beta" hotel in Charlotte, North Carolina wanted a
		piece of art for its relaunch that would highlight what the company sees as the four phases of
		travel: Relaxation, Inspiration, Change, and Accomplishment. To that end, we created a large, freestanding 
		wall consisting of four interactive experiences, one for each of those phases of travel.<br><br>
		The 'Relaxation' piece is an RGB-light illuminated enclave with an embedded heart rate reader. The color
		of the RGBs matches your heart rate. 'Inspiration' is a giant, interactive, simulated kaleidoscope. 
		Two angled screens show a kaleidoscopic view of an imaginary Marriott Hotel skyline, and interacting causes the kaleidoscope to change.
		'Change' consists of two TVs running a fluid simulation, connected to a LeapMotion hand tracker. 
		The user can swish around by moving their hands in front of the TVs.
		The most technically complex panel, 'Accomplishment', is a geodesic sheet of molded plastic 
		that two projectors map onto from behind. Infrared lights and sensors behind the wall detect when users
		run their hands over the geodesic surface, and light up the edges on the surface in rainbow colors and play musical notes. `,
		images: ['marriott1.jpg', 'marriott2.jpg', 'marriott3.jpg', 'marriott4.jpg', 'marriott5.jpg']
	},
	'malibu': {
		title: 'Malibu Selfie Tree',
		icon: 'malibu.png',
		facts: ['Client: Pernod Ricard', 'Festivals: 8', 'Height in Feet: 20', 'Replacement Cameras: 5'],
		summary: `Pernod Ricard wanted to increase its music festival presence, and created a mobile beach house to 
		allow concertgoers to engage with the Malibu Rum brand. To create a take-home of the experience, we created 
		a 20-foot fake palm tree that housed a camera on a belt track. The camera went up the beltway, stopping at 5 preset 
		positions to snap pictures of consumers below. The images were then stitched together into a GIF showing first the user 
		close-up and then pulling back to show the festival around them. This GIF was then emailed or texted to the user. We 
		pulled this all of using a Surface 3 as a control tablet, a Raspberry Pi as the camera control, and two Arduinos as 
		belt controllers.`,
		images: ['malibu1.jpg', 'malibu4.jpg', 'malibu5.jpg', 'malibu2.jpg', 'malibu3.jpg']
	},
	'tmobile': {
		title: 'T-Mobile MVP',
		icon: 'tmobile.png',
		facts: ['Client: T-Mobile', 'Competition: Overwatch World Cup', 'Votes: 69030', 'Winner: xQc'],
		summary: `T-Mobile partnered with Blizzard to sponsor the Overwatch World Cup, the Blizzcon culmination 
		of 8 months of competitive Overwatch play. T-Mobile wanted to find out who the fans were cheering for, so 
		I was tasked with creating an MVP voting system that would allow users to vote on Twitch and Twitter using the 
		TMobileMVP command/hashtag. Running results were displayed on stream and in the chat. At the end of the weekend, 
		the winner was crowned live onstream and presented with the MVP trophy.`,
		images: ['tmobile1.jpg', 'tmobile2.jpg', 'tmobile3.jpg']
	},
	'frontier': {
		title: 'FrontRunner',
		icon: 'frontier.png',
		facts: ['Client: Frontier Communication', 'Stops on Tour: 121', 'Plays: 4637', 'High Score: 3300'],
		summary: `Frontier Communications needed a fun way to draw consumers into their tour footprint 
		outside college basketball games. To that end, I created an infinite runner game where the user 
		plays as a data packet running through a wire, picking up Frontier services and avoiding blockades. 
		The game was made using Unity and runs on a Surface Pro 3.`,
		images: ['frontrunner1.jpg', 'frontrunner2.jpg', 'frontrunner5.jpg', 'frontrunner3.jpg', 'frontrunner4.jpg']
	},
	'osu': {
		title: 'OSU Memory Match',
		icon: 'osu.png',
		facts: ['Client: Ohio State University', 'Games Attended: 13', 'Plays: 560', 'Tiles: 12'],
		summary: `Ohio State University wanted to engage fans with its sponsor in a fun way, so I created a 
		variety of quick games for fans to play on tablets. OSU Memory Match is an implementation of 
		the classic tile matching game where players have to recall the positions of face-down images and find their 
		pairs as quickly as possible.`,
		images: ['osu1.jpg', 'osu2.jpg', 'osu3.jpg', 'osu4.jpg', 'osu5.jpg']
	},
	'coachella': {
		title: 'Marriott Dream Destination',
		icon: 'marriottcoachella.png',
		facts: ['Client: Marriott', 'Potential Destinations: 32', 'Interactions: 1821', 'Swipes Required: 16'],
		summary: `How do you excite people who are already at Coachella? By giving away trips to even better 
		locations. I created an app that tried to determine your ideal match by running you through a series of 
		travel images and asked you to swipe left or right on them. It aggregated these preferences and tried to 
		find the best overall match on a variety of metrics (like urban v. rural, hot v. cold, and so on). Their ideal destination was then marked with a pin 
		on a huge LED-display map, and if they were lucky, they actually won a trip!`,
		images: ['coachella1.jpg', 'coachella2.jpg', 'coachella3.jpg', 'coachella4.jpg', 'coachella5.jpg']
	},
	'tailgateclub': {
		title: 'Tailgate Club',
		icon: 'tgclub.png',
		facts: ['Client: IMG Live', 'Schools: 4', 'Years Running: 2', 'Releases to Date: 153'],
		summary: `Tailgate Club is an attempt by IMG Live to enter the premium tailgating space, and 
		tailgateclub.com is the reservation engine that customers use to customize and purchase 
		tailgate packages. It dynamically changes its offerings based on prior decisions in the 
		purchasing process and supports multiple schools with templating. It also offers a wealth of 
		ancilliary information about the Tailgate Club experience, including an FAQ, driving directions, 
		and more.`,
		images: ['tgclub1.jpg', 'tgclub2.jpg', 'tgclub3.jpg']
	},
	'sprint': {
		title: 'Sprint AR Poster',
		icon: 'sprint.jpg',
		facts: ['Client: Sprint', 'Posters: 2000', 'AR SDKs Tested: 8', 'Video Revisions: 6'],
		summary: `To promote the relaunch of its internal incenitves program, Sprint wanted a fun way to remind
		employees of the program's existence. I took a poster for the program slated to be distributed to breakrooms
		nationwide and turned it into an AR trackable using the Zappar platform. Employees who were curious enough found that
		the poster played an embedded promotional video.`,
		images: ['sprint4.jpg', 'sprint5.jpg', 'sprint3.jpg']
	},
	'michelob': {
		title: 'Michelob LiveULTRA',
		icon: 'michelob.png',
		facts: ['Client: Anheuser-Busch', 'Marathons: 12', 'Entrants: 3281', 'Influencers: 13'],
		summary: `Michelob wanted to advance its position among health-conscious consumers, so it sponsored a series 
		of marathons and assembled a running team of influencers and Michelob drinkers. To find those consumers, I put 
		together a website to enter for a chance to join the team. It also included an event-by-event breakdown of the 
		marathons, updated with photos and videos as soon as each event was over.`,
		images: ['liveultra1.jpg', 'liveultra2.jpg', 'liveultra3.jpg']
	},
	'dogenald': {
		title: '@dogenald Twitter Bot',
		icon: 'dogenald.jpg',
		facts: ['Tweets: 175', 'Followers: 12', 'Words In Lexicon: 76647', 'Phrases: 13'],
		summary: `Dogenald Trump is a twitter account that uses lexical analysis to convert tweets from @realDonaldTrump
		into 'shibe' meme versions of those tweets, and then tweets those versions. It does this by classifying every word
		in the tweet into a part of speech, then randomly picking from a bank of phrases (like 'such [verb]'), and inserting words 
		from the tweet into the corresponding parts of speech. The results are frequently hilarious.`,
		images: ['dogenald1.jpg', 'dogenald2.jpg', 'dogenald3.jpg']
	},	
	'gfycat': {
		title: 'gfycat-style-urls NPM Package',
		icon: 'gfycat.jpg',
		facts: ['Github Forks: 2', 'Github Stars: 8', 'Weekly Downloads: 80'],
		summary: `A simple NPM module that tries to emulate the gfycat ID string system. It takes in a number of animals and 
		a delimiter, and randomly generates a string to that specification. Useful for vanity IDs that will be visible to the consumer.`,
		images: ['gfycat1.jpg']
	},
	'perspectivus': {
		title: 'Perspectivus',
		icon: 'perspectivus.jpg',
		facts: ['Levels: 40', 'Months of Development: 4', 'Forced Perspective Jumps: 840'],
		summary: `Perspectivus is an isometric puzzle game about changing your perspective. 
		By rotating each diorama-like level between four angles, new paths appear to form --
		and if two platforms look connected, then you can interact with them as if they are connected.
		Perspectivus sprawls across 4 unique worlds, each with their own puzzle mechanics.
		This was my first large-scale game, with a run time of several hours. Created using Unity.`,
		images: ['perspectivus1.jpg','perspectivus2.jpg', 'perspectivus3.jpg']
	},
	'lightflight': {
		title: 'LightFlight',
		icon: 'lightflight.jpg',
		facts: ['Tracks: 3', 'Laps: 3', 'Months of Development: 4'],
		summary: `It's a 3D racing flight sim with a twist: As you fly, your plane leaves behind a Tron-esque trail of light.
		This adds a tactical layer to racing, as players can never take the same racing line twice, or they'll crash into their own trails.
		Multiple ships, modes, levels, and split-screen and online play. Created using Unity.`,
		images: ['lightflight1.jpg','lightflight2.jpg', 'lightflight3.jpg']
	},
	'deaddrop': {
		title: 'Dead Drop',
		icon: 'deaddrop.jpg',
		facts: ['Cards: 20', 'Tokens: 400', 'Players: 4'],
		summary: `Dead Drop is a traditional-media card game set in the Old West.
		Players have to particpate in repeated Prisoner's Dilemma scenarios with their opponents, betting resources and choosing whether
		to ally with or betray their partners. Each round also adds new and varied rules to the game, leading to an unpredictable game
		that never plays out the same way twice. Expect lots of double-crossing.`,
		images: ['deaddrop3.jpg','deaddrop1.jpg', 'deaddrop4.jpg', 'deaddrop2.jpg', 'deaddrop5.jpg']
	},
	'fae': {
		title: 'Fae',
		icon: 'fae.jpg',
		facts: ['Levels: 2', 'Dev Hours: 36', 'Players: 2'],
		summary: `Fae is an online 2D cooperative puzzle-platformer.
		One player has control of Laura, the human character, with the arrow keys, who has all the faculties of a normal 2D, side-scrolling hero -- moving, jumping, and so on.
		The other player has mouse-control of a fairy with the power to manipulate the elements -- redirecting water and fire, in the two-level demo.
		Created for the Global Game Jam in less than 48 hours using Phaser.`,
		images: ['fae1.jpg', 'fae2.jpg']
	},
	//other ideas:
	//Cabo Wabo Legends
}

function showDetails(project){
	document.getElementById('project-details-wrapper').style.height = "100%";
	document.getElementById('project-name').innerHTML = projects[project].title + '<a href=""><img src="./images/x.png" style="float: right; height: 36px;padding-right: 16px;"></a>';
	document.getElementById('project-icon').style.backgroundImage = 'url(images/' + projects[project].icon + ')';
	var facts = projects[project].facts;
	var factHTML = "";
	for(var fact of facts){
		factHTML += "<div class='project-highlight'>" + fact + "</div>";
	}
	document.getElementById('project-highlights').innerHTML = factHTML;
	document.getElementById('project-summary').innerHTML = projects[project].summary;
	var images = projects[project].images;
	var imageHTML = "";
	for(var image of images){
		imageHTML += "<img src='images/" + image + "' style='width: " + 100/images.length + "%'>";
	}
	document.getElementById('project-row-2').innerHTML = imageHTML;
	document.getElementsByClassName('grid-parent')[0].style.display = 'none';
}

function showGrid(){
	
		document.getElementById('project-name').innerHTML = "";
		document.getElementById('project-highlights').innerHTML = "";
		document.getElementById('project-row-2').innerHTML = "";
		document.getElementById('project-details-wrapper').style.height = "0px";
		document.getElementsByClassName('grid-parent')[0].style.display = 'grid';
}

window.addEventListener("hashchange", function(e) {
	if(/#.+/.test(window.location.href)){

	} else {
		showGrid();
	}
})