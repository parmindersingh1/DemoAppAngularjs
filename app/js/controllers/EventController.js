'use strict';

eventsApp.controller('EventController',
	function EventController ($scope) {
		// body...
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '17/02/2016',
			time: '10:30 AM',
			location: {
				address: 'Hogwards School',
				city: 'Hogwards',
				province: 'IN'
			},
			imgUrl: '/img/angularjs-logo.png',
			sessions: [
				{
					name: 'Harry Potter',
					creatorName: 'Lord Voldemort',
					duration: '1 hr',
					level: 'Advanced',
					abstract: 'kkkkkkkkkkkkkkkkk',
					upVoteCount: 0		
				},
				{
					name: 'Hermione Granger',
					creatorName: 'Draco Malfoy',
					duration: '2 hr',
					level: 'Intermediate',
					abstract: 'hhhhhhhhhhhhhhhhhhhh',
					upVoteCount: 0				
				},
				{
					name: 'Ron Weasley',
					creatorName: 'Professor Severus Snape',
					duration: '3 hr',
					level: 'Beginner',
					abstract: 'vvvvvvvvvvvvvvvvvvvvvvvvvvv',
					upVoteCount: 0				
				}
			]
		},

		$scope.upVoteSession =function(session){
			session.upVoteCount++;
		},

		$scope.downVoteSession =function(session){
			session.upVoteCount--;
		}

	});