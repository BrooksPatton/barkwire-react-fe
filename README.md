# barkwire-react-fe
This is for the Denver, CO Node.js meetup group

## Welcome

Welcome to the React part of the showdown. Here we are going to create a very basic React application for the following stories

`As a lonely dog, I want to see a list of all of the dogs that are available so that I can see my dating options.`

`As a lonely dog, I want to be able to link to a specific dog so that I can share my favorite dogs with my friends.`

## How to follow along with this tutorial

I will be writing this code in branches, you can begin with the `start` branch. With each new branch a description of what code was added, and why will be added to this README, with the master branch being empty (it is for the night of the meetup).

# The tutorial

## Step one, the beginning

To begin we are going to set up our environment and run the create react app command line tool.

First of all, I am running Node.js version `v8.2.1` with npm version `5.3.0`.

I'll install the `create-react-app` command line tool with the command `npm i -g create-react-app`

Then its time to set up the barebones react app with the command `create-react-app .` This will give us a fully working React application to play with. We can start it up with the command npm start and see the basic react app created for us.

## Step two, setting up the css files

First things first, we aren't going to be using the provided css files but rather ones that have been built by Kyle Koberly. One nice thing about the create-react-app cli is that it sets up scss automatically so we can just drop it in.

As such I removed the existing css files and replaced them with a scss file and a reset.css file. Then I modified the App.js and Index.js files to reference the appropriate files.

## Step three, Setting up the Router and navigation

We will be paying more attention to the App.js file as we create a basic router, and add in a nav link.

This also means that we have to install the react-router-dom npm module.

## Step four, A component and the route for it

Time to create a DogList component and setting up the route to display it.

## Step five, setting up a redux store

I'm using redux here even though the app is really small as many people are using redux and I wanted to show how simple it can be to set up redux. This pattern of redux has been taken from Brian Holt at Netflix.

In this case I will be setting up a couple of methods for modifying the redux store, resetting all of the dogs, and adding a single dog.

This does mean that we need to install a couple more npm modules though `redux` and `react-redux`.

## Step six, fetching all the dogs and adding them to the store

Now we can turn back to the DogList component, when it is about to mount we can use ajax to fetch the full list of dogs and reset the full list of dogs in the redux store.

## Step seven, showing all of the dogs on the landing page

Now its time to create the Dog component, and use it to display all of the dogs on the landing page
