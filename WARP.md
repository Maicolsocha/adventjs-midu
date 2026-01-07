# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview
This repository contains solutions for AdventJS challenges - daily JavaScript/TypeScript coding challenges that run from December 1st to December 25th. AdventJS is created by midudev and provides algorithmic programming problems with Christmas themes.

## File Structure and Naming
- Challenge solutions are named using the pattern `reto-X.js` where X is the challenge number
- Each file typically contains:
  - Test data/examples at the top
  - One or more solution attempts (often with commented-out versions showing iteration process)
  - A main function that solves the specific challenge
  - Console.log statements to test the solution

## Development Workflow

### Running Solutions
Use Node.js to execute individual challenge files:
```bash
node reto-1.js
node reto-X.js
```

### Testing Solutions
Each challenge file contains its own test cases. Run the file to see output:
```bash
node reto-1.js
```

### Challenge Approach
- Solutions should focus on algorithmic efficiency and readability
- AdventJS challenges are scored based on cognitive complexity and execution speed
- Multiple solution attempts are common - keep commented versions to show problem-solving evolution
- Avoid hardcoded solutions that merely pass tests without solving the actual problem

## Code Style
- Use modern JavaScript ES6+ features (const/let, arrow functions, array methods)
- Prefer functional programming approaches (filter, map, reduce) over imperative loops when appropriate
- Keep solutions concise but readable
- Include meaningful variable names that reflect the problem domain

## Challenge Context
- Problems are Christmas-themed algorithmic challenges
- Difficulty increases gradually throughout December
- Each challenge has hidden test cases to prevent brittle solutions
- Solutions can be submitted in JavaScript, TypeScript, or Python (this repo focuses on JavaScript)