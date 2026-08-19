# brainpop-playwright

Playwright test suite for https://www.brainpop.com, with the Playwright MCP server
wired up for interactive browser exploration from Claude Code.

## Setup

```
npm install
npx playwright install chromium
```

## Run tests

```
npm test              # headless run
npm run test:headed   # watch it run in a real browser window
npm run test:ui       # Playwright's interactive UI mode
npm run report        # open the HTML report from the last run
```

## MCP server

`.mcp.json` registers the official Playwright MCP server (`@playwright/mcp`), so Claude
Code can drive a live browser session directly — useful for exploring brainpop.com's
DOM/selectors before writing a test.
