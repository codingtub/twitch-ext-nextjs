# twitch-ext-nextjs

![](twitch-unreal-game.gif)

## Description

This repo contains a proof-of-concept implementation of a NextJs Twitch.tv custom extension. This extension captures the viewer's clicks on the video player and send those click events to a simple backend. Further, the extension also presents some cards to the user, however, there is no logic implemented in those cards.

### About the project

It was created as part of an in-game technologies course at my university with the vision to create a game that can be interactively played through a twitch live stream with the means of a custom extension to add further interface capabilities and the ability to directly interact with the game via clicking on the live stream ([the repo for the exension boilerplate](https://github.com/codingtub/twitch-ext-nextjs)). The clicks of the live stream are sent to a custom backend (this repo) and forwarded to the game (([this Unreal Engine 4 project](https://github.com/codingtub/twitch-ext-unreal))). This was done because Twitch extensions don't allow opening WebSckets in the extension directly, which makes a lot of sense regarding security. Those click events were then mapped from 2D Screen coordinates to 3D world space coordinates and used to simply move a player in a top-down setting to move across the screen, pretty great!

Feel free to use this concept for your own ideas and if you ever create an experience similiar to ours please [contact me](mailto:mr@codingtub.eu), I'd be happy to test it!

## Usage with the Developer Rig

Clone this repo and open a terminal :

```sh
npm i # or `yarn`
```

Using the Twitch Developer Rig, you can easily use this NextJS setup on your local machine. BConfigure your extension before using it in the Rig: go to your [Twitch developer console](https://dev.twitch.tv/console) and make sure that the "Testing Base URI" is set to http://localhost:3000 (the default for a NextJS project).

Once you have your project in your Rig, make sure you tells it the right command for Front End, i.e. `npm run dev` (or `yarn dev`).

You should be able to launch "views" inside the rig and play with your extension!

## Publish your extension

Run `yarn export`, zip the content of the `out` folder and upload it in your Extension Dashboard.

## Credits

Created by [@djiit](https://github.com/Djiit) and [@alacroix](https://github.com/alacroix) during the [Twitch Dev Jam 2019](https://twitchdevjam.devpost.com/).

