# projectB

_This project poster is following the template at https://www.atlassian.com/team-playbook/plays/project-poster_

### How does this project fit with the strategy?

projectB is the 2nd one of 26 projects from A to Z that I intend to develop on the way to become a full-stack developer.

After the projectA, I realize that even learning by practicing, it still takes much time to master a knowledge domain. Thus, instead of learning knowledge about server, client and DevOps at the same time, I will focus on back-end and come back later for other parts.

projectB will last in two months from Oct 12 to Dec 6. I will focus on database (the 1st month) and security configuration (the 2nd month).

Team project owner |
------------------ |
@iamacoderguy      |

Team members  | Project status: Active / Inactive / Shipped
------------- | -------------------------------------------
@iamacoderguy | Active


## Problem space 
### Why are we doing this?
PROBLEM STATEMENT: Need for one who is looking for a sample system that requires database and basic knowledge about security to build.

IMPACT OF THIS PROBLEM: Database and security are important knowledge on the way to become a master of back-end. After this project, I hope that I won't worry anymore when talking about DB or Security, and figure out where I should go to discover the knowledge domains further.

### How do we judge success?
The project will be finished if:
- [ ] We finish developing a server (back-end) that can work with Postman
- [ ] The system can run, do one or more useful tasks
- [ ] The system will run on-cloud with database
- [ ] The system should survive one or more security attacks.

### Possible solutions
__My movies service__

So I'm implementing a system that can help me to store and share lists of movies I've watched or 'd like to watch. For more information, please refer to [What are we doing?](#wawd)

## Validation
### What we already know?
I will reuse the framework from projectA which can help us create an API system. <br/>
I will deploy the server to heroku. <br/>
I will use mongoose and MongoDB for database. <br/>
I take ownership of defining of done. <br/>

### What do we need to answer?
- [ ] What security configurations will I apply on the system?
- [ ] Detailed requirements
- [ ] List of APIs
- [ ] Database design

## Ready to make it

### <a name="wawd"></a>What are we doing?
1. [Learn about node.js security](https://github.com/iamacoderguy/projectB/issues/1) :heavy_check_mark:
1. [Learn about non-relational DB](https://github.com/iamacoderguy/projectB/issues/2) :heavy_check_mark:
1. [Define detailed requirements](https://github.com/iamacoderguy/projectB/issues/4) :heavy_check_mark:
1. Develop the system

I will define the requirements and APIs so that they will match to the DB knowledge I'd like to learn. <br/>
Then I will develop the system, and try to attack it with the security knowledge. <br/>
Sharing the security knowledge after fixing the threats and vulnerability would be the final step for this project.

### Why will a customer want this?
It can help me to learn about basics of database and security.

### Visualize the solution
TBD

### Scale and scope
For the 1st month, Oct 12 to Nov 8: I will focus on developing the back-end server integrating to MongoDB and providing the movies service.

For the 2nd month, Nov 9 to Dec 6: I will focus on attacking and defending my server
