# Active Window Listener Script

This script listens for changes in the active window and logs information about the application currently in the foreground. It uses the `active-window-listener` library to retrieve and monitor active windows on your system.

## Features

- Retrieves the list of all currently running windows.
- Monitors specific applications based on their process paths.
- Logs the active application's name, window title, and other details when the active window changes.

## Prerequisites

Before running the script, ensure you have Node.js installed. You will also need to install the `active-window-listener` package.

### Installation

1. Clone this repository or create a new project directory.
2. Run the following command to install the required package:

   ```bash
   npm install
   ```
3. Run the script

    ```bash
    node ./index.js
    ```
